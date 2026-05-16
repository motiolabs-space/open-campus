<?php

namespace App\Filament\Widgets;

use App\Models\Research;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestImpactStories extends BaseWidget
{
    protected static ?string $heading = 'Kisah Dampak Terkini (Impact Stories)';
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Research::query()->whereNotNull('impact_statement')->latest()->limit(5)
            )
            ->columns([
                Tables\Columns\Layout\Stack::make([
                    Tables\Columns\Layout\Split::make([
                        Tables\Columns\TextColumn::make('leader.name')
                            ->weight('bold')
                            ->size('lg')
                            ->icon('heroicon-m-user-circle')
                            ->grow(false),
                        Tables\Columns\TextColumn::make('scheme')
                            ->badge()
                            ->color(fn (string $state): string => match ($state) {
                                'riset' => 'info',
                                'pengabdian' => 'success',
                                default => 'gray',
                            })
                            ->alignEnd(),
                    ]),
                    Tables\Columns\TextColumn::make('title')
                        ->size('md')
                        ->color('gray')
                        ->limit(100),
                    Tables\Columns\TextColumn::make('impact_statement')
                        ->icon('heroicon-m-check-badge')
                        ->color('success')
                        ->weight('medium')
                        ->extraAttributes([
                            'class' => 'bg-emerald-50/50 border-l-4 border-emerald-500 p-3 my-2 rounded-r-lg italic shadow-sm text-sm'
                        ]),
                ])
            ])
            ->contentGrid([
                'md' => 1,
                'xl' => 1,
            ])
            ->paginated(false);
    }
}
