<?php

namespace App\Filament\Widgets;

use App\Models\Research;
use App\Models\Partnership;
use App\Models\MbkmActivity;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ImpactStatsOverview extends BaseWidget
{
    protected ?string $pollingInterval = '15s';

    protected function getStats(): array
    {
        return [
            Stat::make('Community Outreach', Research::where('scheme', 'pengabdian')->count())
                ->description('Social projects serving society')
                ->descriptionIcon('heroicon-m-heart')
                ->chart([7, 3, 4, 5, 6, 3, 5, 8]) // Sparkline simulation
                ->color('danger'),
                
            Stat::make('Industry Synergy', Partnership::count())
                ->description('High-value corporate partners')
                ->descriptionIcon('heroicon-m-briefcase')
                ->chart([1, 2, 4, 3, 5, 6, 8, 10]) // Sparkline simulation
                ->color('primary'),
                
            Stat::make('Innovation Score', Research::where('scheme', 'riset')->count() * 1.5)
                ->description('Research with impact outcome')
                ->descriptionIcon('heroicon-m-bolt')
                ->chart([10, 8, 12, 11, 14, 13, 15, 18]) // Sparkline simulation
                ->color('warning'),
        ];
    }
}
