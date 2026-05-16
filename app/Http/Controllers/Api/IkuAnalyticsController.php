<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\IkuReport;
use Illuminate\Http\JsonResponse;

class IkuAnalyticsController extends Controller
{
    public function getReadinessScore(): JsonResponse
    {
        $stats = IkuReport::selectRaw('status, count(*) as count')
            ->groupBy('status')
            ->pluck('count', 'status')
            ->toArray();

        $total = array_sum($stats);
        $verified = $stats['verified'] ?? 0;
        $synced = $stats['synced'] ?? 0;

        $readinessScore = $total > 0 ? round(($verified / $total) * 100, 2) : 0;
        $syncProgress = $total > 0 ? round((($synced + $verified) / $total) * 100, 2) : 0;

        return response()->json([
            'success' => true,
            'data' => [
                'readiness_score' => $readinessScore,
                'sync_progress' => $syncProgress,
                'breakdown' => [
                    'total_reports' => $total,
                    'verified' => $verified,
                    'synced' => $synced,
                    'draft' => $stats['draft'] ?? 0,
                    'rejected' => $stats['rejected'] ?? 0,
                ],
                'iku_summary' => IkuReport::selectRaw('iku_number, count(*) as total')
                    ->groupBy('iku_number')
                    ->get()
            ]
        ]);
    }
}
