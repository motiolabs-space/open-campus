<?php

namespace App\Http\Controllers;

use App\Models\TracerStudy;
use App\Models\MbkmActivity;
use App\Models\SocialPost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class IkuAnalyticsController extends Controller
{
    public function index()
    {
        // IKU 1 & 2: Tracer Study Stats
        $tracerStats = TracerStudy::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get();

        // IKU 3: MBKM Stats
        $mbkmStats = MbkmActivity::select('type', DB::raw('count(*) as count'))
            ->groupBy('type')
            ->get();

        // IKU 7 & 9: SDG Stats (Impact)
        $sdgStats = SocialPost::whereNotNull('sdg_tag')
            ->select('sdg_tag', DB::raw('count(*) as count'))
            ->groupBy('sdg_tag')
            ->orderBy('sdg_tag')
            ->get();

        // Aggregated 12 IKU Scores (Simulated based on available data)
        $ikuScores = [
            ['id' => 1, 'name' => 'Kesiapan Lulusan (IKU 1)', 'score' => 82, 'status' => 'Good', 'type' => 'Wajib'],
            ['id' => 2, 'name' => 'Pengalaman Luar Kampus (IKU 2)', 'score' => 75, 'status' => 'Warning', 'type' => 'Wajib'],
            ['id' => 3, 'name' => 'Dosen Berkegiatan di Luar (IKU 3)', 'score' => 68, 'status' => 'Critical', 'type' => 'Wajib'],
            ['id' => 4, 'name' => 'Praktisi Mengajar (IKU 4)', 'score' => 90, 'status' => 'Excellent', 'type' => 'Wajib'],
            ['id' => 5, 'name' => 'Hasil Kerja Dosen (IKU 5)', 'score' => 85, 'status' => 'Good', 'type' => 'Wajib'],
            ['id' => 6, 'name' => 'Kemitraan Prodi (IKU 6)', 'score' => 77, 'status' => 'Good', 'type' => 'Wajib'],
            ['id' => 7, 'name' => 'Pembelajaran Kolaboratif (IKU 7)', 'score' => 92, 'status' => 'Excellent', 'type' => 'Wajib'],
            ['id' => 8, 'name' => 'Akreditasi Internasional (IKU 8)', 'score' => 45, 'status' => 'Critical', 'type' => 'Wajib'],
            ['id' => 9, 'name' => 'Dampak SDGs & Sosial (IKU 9)', 'score' => 88, 'status' => 'Good', 'type' => 'Pilihan'],
            ['id' => 10, 'name' => 'Hilirisasi Riset (IKU 10)', 'score' => 72, 'status' => 'Warning', 'type' => 'Pilihan'],
            ['id' => 11, 'name' => 'Efisiensi Edukasi (IKU 11)', 'score' => 80, 'status' => 'Good', 'type' => 'Pilihan'],
            ['id' => 12, 'name' => 'Inisiatif Partisipatif (IKU 12)', 'score' => 95, 'status' => 'Excellent', 'type' => 'Partisipatif'],
        ];

        return Inertia::render('Analytics/IkuDashboard', [
            'ikuScores' => $ikuScores,
            'tracerStats' => $tracerStats,
            'mbkmStats' => $mbkmStats,
            'sdgStats' => $sdgStats,
            'totals' => [
                'graduates' => TracerStudy::count(),
                'mbkm' => MbkmActivity::distinct('user_id')->count(),
                'impact_posts' => SocialPost::whereNotNull('sdg_tag')->count(),
            ]
        ]);
    }
}
