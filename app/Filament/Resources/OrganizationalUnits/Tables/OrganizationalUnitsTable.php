<?php

namespace App\Filament\Resources\OrganizationalUnits\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class OrganizationalUnitsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')
                    ->searchable()
                    ->sortable()
                    ->fontFamily('mono'),
                TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('type')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'university' => 'danger',
                        'faculty' => 'warning',
                        'department' => 'info',
                        'study_program' => 'success',
                        'division' => 'gray',
                        default => 'gray',
                    }),
                TextColumn::make('parent.name')
                    ->label('Parent Unit')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('headUser.name')
                    ->label('Head of Unit')
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
                \Filament\Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'university' => 'University',
                        'faculty' => 'Faculty',
                        'department' => 'Department',
                        'study_program' => 'Study Program',
                        'division' => 'Division',
                    ]),
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
