<?php

namespace App\Filament\Resources\IkuReports\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class IkuReportsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('iku_number')
                    ->searchable(),
                TextColumn::make('reportable_type')
                    ->searchable(),
                TextColumn::make('reportable_id')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('status')
                    ->badge(),
                TextColumn::make('evidence_path')
                    ->searchable(),
                TextColumn::make('reported_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('verified_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
