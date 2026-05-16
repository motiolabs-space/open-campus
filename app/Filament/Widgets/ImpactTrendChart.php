<?php

namespace App\Filament\Widgets;

use App\Models\Research;
use App\Models\MbkmActivity;
use App\Models\SocialPost;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class ImpactTrendChart extends ChartWidget
{
    protected static ?string $heading = 'Pertumbuhan Dampak (Impact Growth Trend)';
    protected static string $color = 'success';
    protected int | string | array $columnSpan = 'full';

    protected function getData(): array
    {
        // Simple mock trend data for now to avoid dependency issues if Trend package not installed
        // In real app, we use Trend::model(SocialPost::class)->...
        
        return [
            'datasets' => [
                [
                    'label' => 'Impact Activities',
                    'data' => [10, 15, 8, 25, 30, 45, 40, 60],
                    'fill' => 'start',
                    'tension' => 0.4,
                    'borderColor' => '#10b981',
                    'backgroundColor' => 'rgba(16, 185, 129, 0.1)',
                ],
            ],
            'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
