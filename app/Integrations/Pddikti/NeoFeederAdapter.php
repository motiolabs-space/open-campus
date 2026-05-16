<?php

namespace App\Integrations\Pddikti;

use App\Integrations\Contracts\CampusIntegrationInterface;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class NeoFeederAdapter implements CampusIntegrationInterface
{
    use \App\Integrations\Concerns\LogsIntegrations;

    protected $url;
    protected $username;
    protected $password;
    protected $token;

    public function __construct()
    {
        $this->url = config('services.pddikti.url');
        $this->username = config('services.pddikti.username');
        $this->password = config('services.pddikti.password');
    }

    public function getName(): string
    {
        return 'PDDIKTI Neo Feeder (WebService)';
    }

    public function testConnection(): bool
    {
        return $this->getToken() !== null;
    }

    protected function getToken(): ?string
    {
        if ($this->token) return $this->token;
        
        // Mock token for development
        $this->token = 'mock-pddikti-token-12345';
        return $this->token;
    }

    public function syncIncoming(bool $dryRun = true): array
    {
        // Pull reference data (Prodi, Mata Kuliah, etc.) from Neo Feeder
        return ['status' => 'connected', 'message' => 'Ready to pull reference data', 'dry_run' => $dryRun];
    }

    public function syncOutgoing($data): bool
    {
        $type = $data['type'] ?? 'unknown';
        $log = $this->startLog('outgoing', $type);
        
        $token = $this->getToken();
        if (!$token) {
            $this->finishLog($log, 'failed', [], 'Could not retrieve PDDIKTI token.');
            return false;
        }

        try {
            // Mapping OSCN models to Neo Feeder Act
            // e.g. for MBKM: act = 'InsertAktivitasMahasiswa'
            $act = $this->mapTypeToAct($type);
            
            // Simulation of PDDIKTI WS call
            // $response = Http::post($this->url, [
            //     'token' => $token,
            //     'act' => $act,
            //     'record' => $data['record']
            // ]);

            // Mock Success for now
            $this->finishLog($log, 'success', ['act' => $act], "Successfully reported {$type} to PDDIKTI.");
            
            return true;
        } catch (\Exception $e) {
            $this->finishLog($log, 'failed', [], $e->getMessage());
            Log::error("PDDIKTI Sync Outgoing Failed: " . $e->getMessage());
            return false;
        }
    }

    protected function mapTypeToAct($type)
    {
        return match ($type) {
            'mbkm' => 'InsertAktivitasMahasiswa',
            'research' => 'InsertPenelitianDosen',
            'achievement' => 'InsertPrestasiMahasiswa',
            default => 'GetDictionary',
        };
    }
}
