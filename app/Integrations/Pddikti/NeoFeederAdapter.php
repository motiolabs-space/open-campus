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

    protected function getToken()
    {
        if ($this->token) return $this->token;

        try {
            $response = Http::post($this->url, [
                'act' => 'GetToken',
                'username' => $this->username,
                'password' => $this->password
            ]);

            if ($response->successful()) {
                $this->token = $response->json('data.token');
                return $this->token;
            }
        } catch (\Exception $e) {
            Log::error("PDDIKTI Token Request Failed: " . $e->getMessage());
        }

        return null;
    }

    public function syncIncoming(bool $dryRun = true): array
    {
        // Pull reference data (Prodi, Mata Kuliah, etc.) from Neo Feeder
        return ['status' => 'connected', 'message' => 'Ready to pull reference data', 'dry_run' => $dryRun];
    }

    public function syncOutgoing($data): bool
    {
        // Logic to push MBKM / Achievement data to Neo Feeder
        // Ref: InsertMahasiswaKRS / InsertAktivitasMahasiswa
        $token = $this->getToken();
        if (!$token) return false;

        try {
            $response = Http::post($this->url, [
                'token' => $token,
                'act' => $data['act'], // e.g. InsertAktivitasMahasiswa
                'record' => $data['record']
            ]);

            return $response->successful();
        } catch (\Exception $e) {
            Log::error("PDDIKTI Sync Outgoing Failed: " . $e->getMessage());
            return false;
        }
    }
}
