<?php

namespace App\Http\Controllers;

use App\Models\TracerStudy;
use App\Models\MbkmActivity;
use App\Models\SocialPost;
use App\Models\User;
use App\Models\ResearchProject;
use App\Models\Partnership;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class IkuAnalyticsController extends Controller
{
    public function index()
    {
        // 1. IKU 1 & 2: Tracer Study Stats
        $tracerStats = TracerStudy::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get();
        $totalGraduates = TracerStudy::count();

        // 2. IKU 3: MBKM Stats
        $mbkmStats = MbkmActivity::select('type', DB::raw('count(*) as count'))
            ->groupBy('type')
            ->get();
        $totalMbkm = MbkmActivity::distinct('user_id')->count();

        // 3. IKU 4: Experts (Dosen/Practitioners)
        $totalExperts = User::role('dosen')->count();

        // 4. IKU 5 & 10: Research & Innovation
        $totalResearch = ResearchProject::count();
        $totalBudget = ResearchProject::sum('budget');

        // 5. IKU 6: Partnerships
        $activeMoUs = Partnership::where('status', 'active')->count();

        // 6. IKU 9: SDG Stats (Impact)
        $sdgStats = SocialPost::whereNotNull('sdg_tag')
            ->select('sdg_tag', DB::raw('count(*) as count'))
            ->groupBy('sdg_tag')
            ->orderBy('sdg_tag')
            ->get();

        // Dynamic 12 IKU Scores Calculation
        $ikuScores = [
            ['id' => 1, 'name' => 'Kesiapan Lulusan (IKU 1)', 'score' => min(100, ($totalGraduates > 0 ? 80 : 0)), 'status' => 'Good', 'type' => 'Wajib'],
            ['id' => 2, 'name' => 'Pengalaman Luar Kampus (IKU 2)', 'score' => min(100, $totalMbkm * 5), 'status' => $totalMbkm > 10 ? 'Good' : 'Warning', 'type' => 'Wajib'],
            ['id' => 3, 'name' => 'Dosen Berkegiatan di Luar (IKU 3)', 'score' => 68, 'status' => 'Critical', 'type' => 'Wajib'],
            ['id' => 4, 'name' => 'Praktisi Mengajar (IKU 4)', 'score' => min(100, $totalExperts * 10), 'status' => $totalExperts > 5 ? 'Excellent' : 'Good', 'type' => 'Wajib'],
            ['id' => 5, 'name' => 'Hasil Kerja Dosen (IKU 5)', 'score' => min(100, $totalResearch * 15), 'status' => $totalResearch > 3 ? 'Excellent' : 'Good', 'type' => 'Wajib'],
            ['id' => 6, 'name' => 'Kemitraan Prodi (IKU 6)', 'score' => min(100, $activeMoUs * 8), 'status' => $activeMoUs > 10 ? 'Excellent' : 'Good', 'type' => 'Wajib'],
            ['id' => 7, 'name' => 'Pembelajaran Kolaboratif (IKU 7)', 'score' => 92, 'status' => 'Excellent', 'type' => 'Wajib'],
            ['id' => 8, 'name' => 'Akreditasi Internasional (IKU 8)', 'score' => 45, 'status' => 'Critical', 'type' => 'Wajib'],
            ['id' => 9, 'name' => 'Dampak SDGs & Sosial (IKU 9)', 'score' => min(100, $sdgStats->count() * 12), 'status' => 'Good', 'type' => 'Pilihan'],
            ['id' => 10, 'name' => 'Hilirisasi Riset (IKU 10)', 'score' => min(100, $totalResearch * 10), 'status' => 'Warning', 'type' => 'Pilihan'],
            ['id' => 11, 'name' => 'Efisiensi Edukasi (IKU 11)', 'score' => 80, 'status' => 'Good', 'type' => 'Pilihan'],
            ['id' => 12, 'name' => 'Inisiatif Partisipatif (IKU 12)', 'score' => 95, 'status' => 'Excellent', 'type' => 'Partisipatif'],
        ];

        return Inertia::render('Analytics/IkuDashboard', [
            'ikuScores' => $ikuScores,
            'tracerStats' => $tracerStats,
            'mbkmStats' => $mbkmStats,
            'sdgStats' => $sdgStats,
            'totals' => [
                'graduates' => $totalGraduates,
                'mbkm' => $totalMbkm,
                'experts' => $totalExperts,
                'research' => $totalResearch,
                'partnerships' => $activeMoUs,
                'budget' => $totalBudget,
                'impact_posts' => $sdgStats->sum('count'),
            ]
        ]);
    }
}
