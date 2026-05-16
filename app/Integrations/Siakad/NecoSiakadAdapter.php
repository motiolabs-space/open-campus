<?php

namespace App\Integrations\Siakad;

use App\Integrations\Contracts\CampusIntegrationInterface;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class NecoSiakadAdapter implements CampusIntegrationInterface
{
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
        // Logic to pull students/lecturers from Neco Siakad
        // This is a simulation of the data mapping process
        $stats = ['students' => 0, 'lecturers' => 0];

        try {
            $response = Http::withToken($this->apiKey)
                ->get($this->baseUrl . '/api/v1/sync/users');

            if ($response->successful()) {
                $users = $response->json('data');
                foreach ($users as $userData) {
                    // Map Neco Siakad data to OSCN User Model
                    // Example: User::updateOrCreate(['email' => $userData['email']], [...])
                    $stats['students']++;
                }
            }
        } catch (\Exception $e) {
            Log::error("SIAKAD Sync Failed: " . $e->getMessage());
        }

        return $stats;
    }

    public function syncOutgoing($data): bool
    {
        // Logic to send grades/achievements back to SIAKAD if needed
        return true;
    }
}
