<?php

namespace App\Integrations\Pddikti;

use App\Integrations\Contracts\CampusIntegrationInterface;
use App\Integrations\Concerns\LogsIntegrations;
use Illuminate\Support\Facades\Http;

class PublicApiAdapter implements CampusIntegrationInterface
{
    use LogsIntegrations;

    protected string $baseUrl = 'https://api-pddikti.rone.dev';

    /**
     * Discovery Sync: Pull real-time public data for verification.
     */
    public function syncIncoming(bool $dryRun = false): array
    {
        $stats = ['students_verified' => 0, 'research_discovered' => 0];
        
        if ($dryRun) return $stats;

        // Implementation would use ridwaanhall's endpoints
        // Example: $response = Http::get("{$this->baseUrl}/search/all/keywords");
        
        $this->logActivity(
            'pddikti_public',
            'incoming_discovery',
            'success',
            $stats
        );

        return $stats;
    }

    /**
     * This adapter is primarily for discovery, outgoing reports still use NeoFeeder.
     */
    public function syncOutgoing(bool $dryRun = false): array
    {
        return ['message' => 'Discovery API does not support reporting. Use NeoFeederAdapter.'];
    }

    /**
     * Search for a lecturer's research directly from national database.
     */
    public function discoverResearch(string $lecturerName): array
    {
        $response = Http::get("{$this->baseUrl}/search/dosen/" . urlencode($lecturerName));
        
        if ($response->failed()) return [];

        $dosenList = $response->json();
        if (empty($dosenList)) return [];

        // Get first lecturer ID
        $idDosen = $dosenList[0]['id'] ?? null;
        if (!$idDosen) return [];

        $researchResponse = Http::get("{$this->baseUrl}/dosen/penelitian/{$idDosen}");
        return $researchResponse->json() ?? [];
    }
}
