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
        // IKU 2: Tracer Study Stats
        $tracerStats = TracerStudy::select('status', DB::raw('count(*) as count'))
            ->groupBy('status')
            ->get();

        // IKU 3: MBKM Stats
        $mbkmStats = MbkmActivity::select('type', DB::raw('count(*) as count'))
            ->groupBy('type')
            ->get();

        // IKU 7: SDG Stats (Impact)
        $sdgStats = SocialPost::whereNotNull('sdg_tag')
            ->select('sdg_tag', DB::raw('count(*) as count'))
            ->groupBy('sdg_tag')
            ->orderBy('sdg_tag')
            ->get();

        // General Stats
        $totalGraduates = TracerStudy::count();
        $totalMbkmParticipants = MbkmActivity::distinct('user_id')->count();

        return Inertia::render('Analytics/IkuDashboard', [
            'tracerStats' => $tracerStats,
            'mbkmStats' => $mbkmStats,
            'sdgStats' => $sdgStats,
            'totals' => [
                'graduates' => $totalGraduates,
                'mbkm' => $totalMbkmParticipants,
                'impact_posts' => SocialPost::whereNotNull('sdg_tag')->count(),
            ]
        ]);
    }
}
