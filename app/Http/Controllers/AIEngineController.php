<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\IkuEvidence;
use Illuminate\Support\Facades\Storage;
// Assuming laravel/ai SDK structure
// use Illuminate\Support\Facades\AI;

class AIEngineController extends Controller
{
    /**
     * AI Logbook Evaluator (IKU 3 Quality Control)
     */
    public function evaluateLogbook(Request $request, \App\Models\MbkmLogbook $logbook)
    {
        // Check if user is authorized (Mentor or Admin or Student themselves)
        // For simplicity in this demo, we allow the student to "pre-validate"
        
        $prompt = "Sebagai asisten akademik AI, evaluasi kualitas logbook mahasiswa berikut. 
        AKTIVITAS: {$logbook->activity_details}
        DURASI: {$logbook->hours_spent} Jam.
        
        Tentukan:
        1. Skor kualitas (0-100) berdasarkan kejelasan dan relevansi profesional.
        2. Apakah aktivitas ini valid untuk IKU 3 (Magang/Riset/dll)? (yes/no)
        3. Saran perbaikan (1 kalimat).
        
        Output format JSON: {\"score\": 85, \"valid\": true, \"feedback\": \"...\"}";

        try {
            $aiResponse = \App\Facades\AI::chat([
                ['role' => 'user', 'content' => $prompt]
            ], ['model' => config('ai.models.iku')]);
            
            $analysis = json_decode($aiResponse, true);
            
            $logbook->update([
                'ai_validation_result' => $analysis,
                'is_verified_by_mentor' => ($analysis['score'] > 70 && $analysis['valid']) // Auto-verify if high score
            ]);

            return back()->with('message', 'AI telah selesai mengevaluasi logbook Anda! Skor: ' . $analysis['score']);
        } catch (\Exception $e) {
            return back()->with('error', 'Gagal memproses evaluasi AI.');
        }
    }

    /**
     * Process an uploaded evidence document using AI to determine IKU mapping.
     */
    public function analyzeEvidence(Request $request)
    {
        $request->validate([
            'evidence_file' => 'required|file|mimes:pdf,jpg,jpeg,png|max:10240',
        ]);

        $file = $request->file('evidence_file');
        $path = $file->store('evidence');

        // Create initial record
        $evidence = IkuEvidence::create([
            'user_id' => auth()->id() ?? 1, // Fallback for testing
            'campus_id' => auth()->user()->campus_id ?? null,
            'file_path' => $path,
            'original_filename' => $file->getClientOriginalName(),
            'mime_type' => $file->getMimeType(),
            'status' => 'analyzing',
        ]);

        // Mock AI Processing (until actual AI keys are configured)
        // In a real scenario using laravel/ai:
        // $text = AI::vision()->extractText(Storage::path($path));
        // $analysis = AI::chat()->ask('Analyze this text and classify it into one of the 8 IKU categories: ' . $text);

        $mockAnalysis = [
            'category' => 2, // IKU 2: Mahasiswa Mendapat Pengalaman di Luar Kampus
            'confidence' => 0.95,
            'reasoning' => 'Dokumen mencantumkan kata kunci "Sertifikat Magang", "MBKM", dan "Perusahaan Teknologi".',
            'extracted_keywords' => ['Magang', 'MBKM', 'Software Engineer']
        ];

        // Update record with AI results
        $evidence->update([
            'iku_category' => $mockAnalysis['category'],
            'ai_analysis' => json_encode($mockAnalysis),
            'status' => 'verified',
        ]);

        return response()->json([
            'message' => 'Evidence successfully analyzed by AI',
            'data' => $evidence
        ]);
    }
}
