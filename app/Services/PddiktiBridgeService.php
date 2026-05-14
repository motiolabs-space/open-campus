<?php

namespace App\Services;

use App\Models\IkuEvidence;
use Illuminate\Support\Facades\Http;

class PddiktiBridgeService
{
    /**
     * Maps verified evidence to PDDIKTI "Prestasi Mahasiswa" schema.
     */
    public function mapEvidenceToPddikti(IkuEvidence $evidence)
    {
        return [
            'id_mahasiswa' => $evidence->user->academicProfile->pddikti_id ?? 'TEMP-ID-' . $evidence->user_id,
            'jenis_prestasi' => $this->mapIkuToPrestasiType($evidence->iku_category),
            'tingkat_prestasi' => 'Nasional', // Defaulting for demo
            'nama_prestasi' => $evidence->description,
            'tahun_prestasi' => $evidence->created_at->format('Y'),
            'penyelenggara' => 'Internal/Eksternal via OSCN',
            'peringkat' => 1,
        ];
    }

    private function mapIkuToPrestasiType($ikuCategory)
    {
        // Simple mapping from IKU to PDDIKTI types
        $map = [
            2 => 'Lomba/Kompetisi',
            3 => 'Magang/Praktik Kerja',
            5 => 'Penelitian/Riset',
            6 => 'Proyek Kemanusiaan',
        ];

        return $map[$ikuCategory] ?? 'Lainnya';
    }

    /**
     * Simulates a sync to Neo Feeder API.
     */
    public function syncToNeoFeeder($payload)
    {
        // In a real scenario, we would use the PDDIKTI_URL and TOKEN from .env
        // return Http::withToken(config('services.pddikti.token'))
        //     ->post(config('services.pddikti.url') . '/insertPrestasi', $payload);

        // Simulation delay
        sleep(1);
        
        return [
            'status' => 'success',
            'pddikti_ref_id' => 'REF-' . uniqid(),
            'message' => 'Data successfully pushed to Neo Feeder.'
        ];
    }
}
