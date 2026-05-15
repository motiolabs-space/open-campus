<?php

namespace App\Filament\Resources\Users\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class UsersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('academicProfile.id_number')
                    ->label('NIM / NIDN')
                    ->searchable()
                    ->sortable()
                    ->fontFamily('mono')
                    ->copyable(),
                TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('email')
                    ->label('Email')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('role')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'admin' => 'danger',
                        'dosen' => 'info',
                        'mahasiswa' => 'success',
                        'pegawai' => 'warning',
                        default => 'gray',
                    })
                    ->searchable(),
                TextColumn::make('academicProfile.department.name')
                    ->label('Jurusan')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('impact_score')
                    ->label('Score')
                    ->numeric()
                    ->sortable()
                    ->alignCenter(),
            ])
            ->filters([
                \Filament\Tables\Filters\SelectFilter::make('role')
                    ->options([
                        'admin' => 'Admin',
                        'dosen' => 'Dosen',
                        'mahasiswa' => 'Mahasiswa',
                        'pegawai' => 'Pegawai',
                    ]),
                \Filament\Tables\Filters\SelectFilter::make('department')
                    ->relationship('academicProfile.department', 'name'),
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
