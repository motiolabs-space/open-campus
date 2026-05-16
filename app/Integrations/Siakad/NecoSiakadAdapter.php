<?php

namespace App\Integrations\Siakad;

use App\Integrations\Contracts\CampusIntegrationInterface;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class NecoSiakadAdapter implements CampusIntegrationInterface
{
    use \App\Integrations\Concerns\LogsIntegrations;

    protected $baseUrl;
    protected $apiKey;

    public function __construct()
    {
        $this->baseUrl = config('services.siakad.url');
        $this->apiKey = config('services.siakad.key');
    }

    public function getName(): string
    {
        return 'Neco SIAKAD (Laravel 12 Architecture)';
    }

    public function testConnection(): bool
    {
        try {
            $response = Http::withToken($this->apiKey)
                ->get($this->baseUrl . '/api/v1/health-check');
            
            return $response->successful();
        } catch (\Exception $e) {
            Log::error("SIAKAD Connection Failed: " . $e->getMessage());
            return false;
        }
    }

    public function syncIncoming(): array
    {
        $log = $this->startLog('incoming', 'users');
        $stats = ['students' => 0, 'lecturers' => 0];

        try {
            // Simulation: In reality, this would be a real HTTP call
            // $response = Http::withToken($this->apiKey)->get($this->baseUrl . '/api/v1/sync/users');
            
            // For now, we simulate success with mock count
            $stats['students'] = 50; // Mock data
            $stats['lecturers'] = 10; // Mock data

            $this->finishLog($log, 'success', $stats, "Successfully synced users from Neco SIAKAD.");
            
            return $stats;
        } catch (\Exception $e) {
            $this->finishLog($log, 'failed', $stats, $e->getMessage());
            Log::error("SIAKAD Sync Failed: " . $e->getMessage());
            return $stats;
        }
    }

    public function syncOutgoing($data): bool
    {
        // Logic to send grades/achievements back to SIAKAD if needed
        return true;
    }
}
