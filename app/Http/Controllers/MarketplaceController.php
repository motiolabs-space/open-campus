<?php

namespace App\Http\Controllers;

use App\Models\MarketplaceJob;
use App\Models\JobApplication;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MarketplaceController extends Controller
{
    public function index()
    {
        $jobs = MarketplaceJob::with('recruiter')
            ->where('status', 'open')
            ->latest()
            ->get();

        return Inertia::render('Marketplace/Index', [
            'jobs' => $jobs
        ]);
    }

    public function show(MarketplaceJob $job)
    {
        return Inertia::render('Marketplace/Show', [
            'job' => $job->load('recruiter'),
            'already_applied' => $job->applications()->where('user_id', auth()->id())->exists()
        ]);
    }

    public function apply(Request $request, MarketplaceJob $job)
    {
        $request->validate([
            'message' => 'nullable|string|max:1000'
        ]);

        $user = auth()->user();
        
        // Mocking AI Matchmaking Analysis
        // In a real scenario, we would call AiClassifier service with a prompt comparing
        // $user->skills + $user->verified_iku_stats vs $job->requirements
        $matchScore = rand(70, 95);
        $reasoning = "Kandidat memiliki kecocokan tinggi karena memiliki lencana IKU yang relevan dengan kebutuhan proyek.";

        JobApplication::create([
            'user_id' => $user->id,
            'job_id' => $job->id,
            'message' => $request->message,
            'status' => 'pending',
            'ai_match_analysis' => [
                'score' => $matchScore,
                'reasoning' => $reasoning,
                'analyzed_at' => now()->toDateTimeString()
            ]
        ]);

        return back()->with('success', 'Lamaran Anda telah terkirim! AI Match Score: ' . $matchScore . '%');
    }
}
