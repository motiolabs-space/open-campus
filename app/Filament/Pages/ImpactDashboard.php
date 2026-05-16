<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use App\Filament\Widgets\ImpactStatsOverview;
use App\Filament\Widgets\SdgDistributionChart;

class ImpactDashboard extends Page
{
    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-sparkles';
    protected static ?string $navigationLabel = 'Impact Analytics';
    protected static ?string $title = 'Impact Analytics Hub';
    protected static string | \UnitEnum | null $navigationGroup = 'Sistem IKU';

    protected string $view = 'filament.pages.impact-dashboard';

    protected function getHeaderWidgets(): array
    {
        return [
            ImpactStatsOverview::class,
            \App\Filament\Widgets\ImpactTrendChart::class,
            SdgDistributionChart::class,
            \App\Filament\Widgets\LatestImpactStories::class,
        ];
    }
}
