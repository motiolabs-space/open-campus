<?php

namespace App\Filament\Widgets;

use App\Models\Research;
use App\Models\Partnership;
use App\Models\MbkmActivity;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ImpactStatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Community Outreach', Research::where('scheme', 'pengabdian')->count())
                ->description('Total community service projects')
                ->descriptionIcon('heroicon-m-heart')
                ->color('danger'),
            Stat::make('Industry Synergy', Partnership::count())
                ->description('Active industrial partnerships')
                ->descriptionIcon('heroicon-m-building-office')
                ->color('primary'),
            Stat::make('Student Impact', MbkmActivity::where('status', 'completed')->count())
                ->description('Students completed impact programs')
                ->descriptionIcon('heroicon-m-academic-cap')
                ->color('success'),
        ];
    }
}
