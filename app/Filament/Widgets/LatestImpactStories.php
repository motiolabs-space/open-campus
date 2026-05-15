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
                Tables\Columns\TextColumn::make('leader.name')
                    ->label('Civitas')
                    ->description(fn ($record) => $record->scheme),
                Tables\Columns\TextColumn::make('title')
                    ->label('Kegiatan')
                    ->limit(50),
                Tables\Columns\TextColumn::make('impact_statement')
                    ->label('Dampak Nyata (Outcome)')
                    ->wrap()
                    ->color('success')
                    ->weight('bold')
                    ->extraAttributes(['class' => 'bg-emerald-50 p-2 rounded-lg']),
            ])
            ->paginated(false);
    }
}
