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

    public function syncIncoming(bool $dryRun = true): array
    {
        $log = $this->startLog('incoming', 'users');
        $stats = ['created' => 0, 'updated' => 0, 'failed' => 0];

        try {
            // Simulation of real data from SIAKAD
            $mockUsers = [
                ['name' => 'Budi Santoso', 'email' => 'budi@kampus.ac.id', 'campus_id' => 'MHS001', 'role' => 'student'],
                ['name' => 'Dr. Ani Wijaya', 'email' => 'ani@kampus.ac.id', 'campus_id' => 'DSN001', 'role' => 'lecturer'],
            ];

            foreach ($mockUsers as $userData) {
                if ($dryRun) {
                    $stats['updated']++;
                    continue;
                }

                try {
                    $user = \App\Models\User::updateOrCreate(
                        ['email' => $userData['email']],
                        [
                            'name' => $userData['name'],
                            'id_number' => $userData['campus_id'], // Map campus_id from source to id_number in OSCN
                            'role' => $userData['role'],
                            'password' => bcrypt('password-siakad-default'), // Placeholder
                        ]
                    );

                    $user->wasRecentlyCreated ? $stats['created']++ : $stats['updated']++;
                } catch (\Exception $e) {
                    $stats['failed']++;
                    Log::error("Failed to sync user {$userData['email']}: " . $e->getMessage());
                }
            }

            $status = $dryRun ? 'dry_run_success' : 'success';
            $this->finishLog($log, $status, $stats, "Sync completed. Dry Run: " . ($dryRun ? 'Yes' : 'No'));
            
            return $stats;
        } catch (\Exception $e) {
            $this->finishLog($log, 'failed', $stats, $e->getMessage());
            return $stats;
        }
    }

    public function syncOutgoing($data): bool
    {
        // Logic to send grades/achievements back to SIAKAD if needed
        return true;
    }
}
