<?php

namespace App\Filament\Widgets;

use App\Models\SocialPost;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class SdgDistributionChart extends ChartWidget
{
    protected ?string $heading = 'Distribusi Dampak (SDG Alignment)';

    protected function getData(): array
    {
        $data = SocialPost::select('sdg_tag', DB::raw('count(*) as total'))
            ->whereNotNull('sdg_tag')
            ->groupBy('sdg_tag')
            ->pluck('total', 'sdg_tag')
            ->toArray();

        $sdgLabels = [
            1 => 'No Poverty', 2 => 'Zero Hunger', 3 => 'Good Health', 4 => 'Quality Education',
            5 => 'Gender Equality', 6 => 'Clean Water', 7 => 'Clean Energy', 8 => 'Decent Work',
            9 => 'Industry & Innovation', 10 => 'Reduced Inequality', 11 => 'Sustainable Cities',
            12 => 'Responsible Consumption', 13 => 'Climate Action', 14 => 'Life Below Water',
            15 => 'Life on Land', 16 => 'Peace & Justice', 17 => 'Partnerships'
        ];

        $labels = [];
        $values = [];
        $colors = [
            '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', '#26BDE2', '#FCC30B', '#A21942',
            '#FD6925', '#DD1367', '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B', '#00689D', '#19486A'
        ];
        $activeColors = [];

        foreach ($data as $tag => $total) {
            $labels[] = "SDG $tag: " . ($sdgLabels[$tag] ?? 'Unknown');
            $values[] = $total;
            $activeColors[] = $colors[$tag - 1] ?? '#gray';
        }

        return [
            'datasets' => [
                [
                    'label' => 'Total Posts',
                    'data' => $values,
                    'backgroundColor' => $activeColors,
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
