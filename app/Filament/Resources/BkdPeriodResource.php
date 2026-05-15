<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BkdPeriodResource\Pages\ManageBkdPeriods;
use App\Models\BkdPeriod;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BkdPeriodResource extends Resource
{
    protected static ?string $model = BkdPeriod::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-calendar';
    protected static string | \UnitEnum | null $navigationGroup = 'Sistem BKD';
    protected static ?string $pluralLabel = 'Periode BKD';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Section::make('Setting Periode Pelaporan')
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama Periode')
                            ->required()
                            ->placeholder('Contoh: 2024/2025 Ganjil'),
                        DatePicker::make('start_date')
                            ->label('Tanggal Mulai')
                            ->required()
                            ->native(false),
                        DatePicker::make('end_date')
                            ->label('Tanggal Berakhir')
                            ->required()
                            ->native(false),
                        Toggle::make('is_active')
                            ->label('Set sebagai Periode Aktif')
                            ->default(false),
                    ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Periode')
                    ->searchable(),
                TextColumn::make('start_date')
                    ->date()
                    ->sortable(),
                TextColumn::make('end_date')
                    ->date()
                    ->sortable(),
                IconColumn::make('is_active')
                    ->label('Aktif')
                    ->boolean(),
            ])
            ->filters([
                //
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageBkdPeriods::route('/'),
        ];
    }
}
