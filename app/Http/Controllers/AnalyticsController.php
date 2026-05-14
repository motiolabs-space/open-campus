<?php

namespace App\Http\Controllers;

use App\Models\IkuEvidence;
use App\Models\JobApplication;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends Controller
{
    public function adminDashboard()
    {
        // Overall Stats
        $totalStudents = User::role('mahasiswa')->count();
        $verifiedEvidence = IkuEvidence::where('status', 'verified')->count();
        $jobApplications = JobApplication::count();
        $averageImpact = User::role('mahasiswa')->avg('impact_score') ?? 0;

        // IKU Performance (Categorized 1-12)
        $ikuDistribution = IkuEvidence::where('status', 'verified')
            ->select('iku_category', DB::raw('count(*) as total'))
            ->groupBy('iku_category')
            ->get()
            ->pluck('total', 'iku_category')
            ->toArray();

        // Ensure all 12 IKUs are represented
        $ikuChartData = [];
        for ($i = 1; $i <= 12; $i++) {
            $ikuChartData[] = [
                'subject' => 'IKU ' . $i,
                'A' => $ikuDistribution[$i] ?? 0,
                'fullMark' => 100, // Dummy target
            ];
        }

        // Recent Verifications
        $recentActivities = IkuEvidence::with('user')
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_students' => $totalStudents,
                'verified_evidence' => $verifiedEvidence,
                'job_applications' => $jobApplications,
                'average_impact' => round($averageImpact, 1),
            ],
            'iku_chart_data' => $ikuChartData,
            'recent_activities' => $recentActivities
        ]);
    }

    public function exportReport()
    {
        // Logic for exporting consolidated IKU report for Kemdikti
        // For now, return a JSON response that can be triggered as download
        $data = IkuEvidence::with('user')
            ->where('status', 'verified')
            ->get()
            ->map(function($ev) {
                return [
                    'Mahasiswa' => $ev->user->name,
                    'NIM' => $ev->user->academicProfile->nim_nidn ?? '-',
                    'Kategori IKU' => $ev->iku_category,
                    'Deskripsi' => $ev->description,
                    'Tanggal Verifikasi' => $ev->updated_at->format('Y-m-d'),
                ];
            });

        return response()->json($data);
    }
}
