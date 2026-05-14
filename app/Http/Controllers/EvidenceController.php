<?php

namespace App\Http\Controllers;

use App\Models\IkuEvidence;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;
use App\Services\AiClassifier;

class EvidenceController extends Controller
{
    protected $ai;

    public function __construct(AiClassifier $ai)
    {
        $this->ai = $ai;
    }
    public function index()
    {
        $evidences = IkuEvidence::where('user_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Evidence/Index', [
            'evidences' => $evidences
        ]);
    }

    public function create()
    {
        return Inertia::render('Evidence/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'description' => 'required|string|min:20',
            'file' => 'required|file|mimes:pdf,jpg,png,jpeg|max:5120', // 5MB Max
        ]);

        $path = $request->file('file')->store('evidence', 'public');

        $evidence = IkuEvidence::create([
            'user_id' => auth()->id(),
            'file_path' => $path,
            'original_filename' => $request->file('file')->getClientOriginalName(),
            'mime_type' => $request->file('file')->getClientMimeType(),
            'description' => $request->description,
            'status' => 'analyzing',
        ]);

        // Trigger AI Analysis (Mocking for now, will implement actual logic next)
        $this->analyzeWithAi($evidence);

        return redirect()->route('evidence.index')->with('success', 'Bukti berhasil diunggah dan sedang dianalisis oleh AI.');
    }

    public function adminIndex()
    {
        $evidences = IkuEvidence::with('user')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Admin/EvidenceReview', [
            'evidences' => $evidences
        ]);
    }

    public function verify(Request $request, IkuEvidence $evidence)
    {
        $request->validate([
            'status' => 'required|in:verified,rejected',
            'iku_category' => 'required|integer|min:1|max:12',
        ]);

        $evidence->update([
            'status' => $request->status,
            'iku_category' => $request->iku_category,
        ]);

        if ($request->status === 'verified') {
            $user = $evidence->user;
            $stats = $user->verified_iku_stats ?? [];
            $key = 'iku_' . $request->iku_category;
            $stats[$key] = ($stats[$key] ?? 0) + 1;
            
            $user->update([
                'verified_iku_stats' => $stats,
                'impact_score' => $user->impact_score + 50
            ]);
        }

        return redirect()->back()->with('success', 'Status verifikasi berhasil diperbarui.');
    }

    protected function analyzeWithAi(IkuEvidence $evidence)
    {
        $analysis = $this->ai->classify($evidence);

        $evidence->update([
            'iku_category' => $analysis['iku_category'],
            'status' => 'ai_categorized',
            'ai_analysis' => [
                'reasoning' => $analysis['reasoning'],
                'confidence' => $analysis['confidence'],
                'suggested_at' => now()->toDateTimeString(),
            ]
        ]);
    }
}
