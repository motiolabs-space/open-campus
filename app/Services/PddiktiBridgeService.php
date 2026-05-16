<?php

namespace App\Services;

use App\Integrations\Pddikti\PublicApiAdapter;
use App\Integrations\Pddikti\NeoFeederAdapter;
use App\Models\IkuReport;
use Illuminate\Support\Facades\Log;

class PddiktiBridgeService
{
    protected $publicApi;
    protected $neoFeeder;

    public function __construct(PublicApiAdapter $publicApi, NeoFeederAdapter $neoFeeder)
    {
        $this->publicApi = $publicApi;
        $this->neoFeeder = $neoFeeder;
    }

    /**
     * Verify a specific IKU report against National Public Data.
     */
    public function verifyAgainstPublicData(IkuReport $report): array
    {
        $target = $report->reportable;
        
        if (!$target) {
            return ['status' => 'error', 'message' => 'Reportable object not found.'];
        }

        // Logic varies by type
        $type = $report->iku_type;
        $result = ['status' => 'unverified', 'data' => null];

        switch ($type) {
            case '6': // Research/Publication
                $lecturerName = $target->user->name ?? '';
                if ($lecturerName) {
                    $discoveries = $this->publicApi->discoverResearch($lecturerName);
                    // Match by title or similarity
                    foreach ($discoveries as $discovery) {
                        if (str_contains(strtolower($discovery['judul'] ?? ''), strtolower($target->title))) {
                            $result = [
                                'status' => 'verified',
                                'source' => 'PDDIKTI Public API',
                                'external_id' => $discovery['id'] ?? null,
                                'data' => $discovery
                            ];
                            break;
                        }
                    }
                }
                break;

            case '2': // Tracer Study / Graduate Readiness
                // Implementation for student verification
                break;
        }

        if ($result['status'] === 'verified') {
            $report->update([
                'status' => 'verified',
                'pddikti_id' => $result['external_id'] ?? $report->pddikti_id
            ]);
        }

        return $result;
    }

    /**
     * Push a reviewed report to Neo Feeder.
     */
    public function pushToNeoFeeder(IkuReport $report): bool
    {
        if (!$report->is_reviewed) {
            Log::warning("Attempted to push unreviewed report ID: {$report->id}");
            return false;
        }

        $success = $this->neoFeeder->syncOutgoing([
            'type' => $this->mapIkuToType($report->iku_type),
            'record' => $this->prepareRecord($report)
        ]);

        if ($success) {
            $report->update([
                'status' => 'reported',
                'reported_at' => now()
            ]);
        }

        return $success;
    }

    protected function mapIkuToType(string $ikuType): string
    {
        return match ($ikuType) {
            '3' => 'mbkm',
            '6' => 'research',
            '2' => 'achievement',
            default => 'unknown',
        };
    }

    protected function prepareRecord(IkuReport $report): array
    {
        $target = $report->reportable;
        
        // Basic mapping for Neo Feeder
        return [
            'id_oscn' => $report->id,
            'judul' => $target->title ?? $target->name ?? 'Untitled',
            'semester' => $report->period,
            'sk_tugas' => $target->evidence_link ?? '',
        ];
    }
}
