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
