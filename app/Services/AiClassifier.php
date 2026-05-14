<?php

namespace App\Services;

use Laravel\Ai\Ai;
use App\Models\IkuEvidence;
use Illuminate\Support\Facades\Log;

class AiClassifier
{
    public function classify(IkuEvidence $evidence)
    {
        $description = $evidence->description;
        $provider = config('ai.default');
        $model = env('AI_MODEL_IKU', 'gemini-1.5-flash');

        $systemPrompt = "Anda adalah asisten reviewer Indikator Kinerja Utama (IKU) Perguruan Tinggi di Indonesia. 
        Tugas Anda adalah menganalisis deskripsi aktivitas mahasiswa dan menentukan kategori IKU yang paling relevan (1-12).
        
        Berikut daftar 12 IKU:
        IKU 1: Lulusan tepat waktu (AEE).
        IKU 2: Lulusan bekerja, studi lanjut, wirausaha.
        IKU 3: Mahasiswa berkegiatan di luar prodi (Magang, MBKM, Riset, Pertukaran).
        IKU 4: Rekognisi Internasional Dosen.
        IKU 5: Luaran kerja sama industri/startup.
        IKU 6: Publikasi Bereputasi Internasional (Scopus/WoS).
        IKU 7: Keterlibatan dalam SDGs.
        IKU 8: Keterlibatan dalam Penyusunan Kebijakan.
        IKU 9: Pendapatan Non-UKT.
        IKU 10: Usulan Zona Integritas.
        IKU 11: Tata Kelola & Integritas Akademik.
        IKU 12: Kesejahteraan Dosen.
        
        Berikan jawaban dalam format JSON:
        {
            \"iku_category\": integer (1-12),
            \"reasoning\": \"string penjelasan singkat\",
            \"confidence\": float (0-1)
        }";

        try {
            // Using the AI facade. Assuming it supports a direct prompt or similar.
            // If the SDK version requires a specific format, we'll adjust.
            // Many SDKs support AI::withSystemPrompt(...)->prompt(...)
            
            // For now, let's use the standard text generation if available.
            // Based on AiManager, we can get a text provider.
            
            $response = Ai::prompt($systemPrompt . "\n\nDeskripsi Aktivitas: " . $description);
            
            // Assuming $response has a 'text' or can be cast to string
            $content = (string) $response;
            
            // Clean JSON if AI adds markdown blocks
            $cleanJson = preg_replace('/```json|```/', '', $content);
            $data = json_decode($cleanJson, true);

            if ($data && isset($data['iku_category'])) {
                return $data;
            }
        } catch (\Exception $e) {
            Log::error("AI Classification Error: " . $e->getMessage());
        }

        // Fallback to basic keyword matching if AI fails or no API Key
        return $this->fallbackMatch($description);
    }

    protected function fallbackMatch($description)
    {
        $iku = 3;
        $reason = "Berdasarkan deskripsi, aktivitas ini menunjukkan pengalaman luar kampus yang relevan dengan IKU 3.";
        
        $lowDesc = strtolower($description);
        if (str_contains($lowDesc, 'riset') || str_contains($lowDesc, 'publikasi') || str_contains($lowDesc, 'jurnal')) {
            $iku = 6;
            $reason = "Aktivitas ini dikategorikan sebagai IKU 6 (Publikasi Bereputasi Internasional) berdasarkan analisis kata kunci.";
        } elseif (str_contains($lowDesc, 'desa') || str_contains($lowDesc, 'masyarakat') || str_contains($lowDesc, 'sdg')) {
            $iku = 7;
            $reason = "Aktivitas ini dikategorikan sebagai IKU 7 (Keterlibatan dalam SDGs) berdasarkan analisis kata kunci.";
        }

        return [
            'iku_category' => $iku,
            'reasoning' => $reason,
            'confidence' => 0.5
        ];
    }
}
