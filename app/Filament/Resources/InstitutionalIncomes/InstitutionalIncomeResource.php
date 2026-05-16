<?php

namespace App\Filament\Resources\InstitutionalIncomes;

use App\Filament\Resources\InstitutionalIncomes\Pages;
use App\Models\InstitutionalIncome;
use Filament\Forms;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Section;

class InstitutionalIncomeResource extends Resource
{
    protected static ?string $model = InstitutionalIncome::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-banknotes';
    protected static ?string $navigationLabel = 'Pendapatan Non-UKT';
    protected static ?string $pluralLabel = 'Pendapatan Non-UKT';
    protected static string | \UnitEnum | null $navigationGroup = 'Kampus';
    protected static ?int $navigationSort = 5;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Informasi Pendapatan')
                    ->description('Catat sumber pendapatan institusi di luar biaya pendidikan (UKT).')
                    ->schema([
                        TextInput::make('source_name')
                            ->label('Sumber Pendapatan')
                            ->required()
                            ->placeholder('Contoh: Kontrak Kerjasama Riset Industri PT Maju Jaya'),
                        TextInput::make('amount')
                            ->label('Nominal (Rp)')
                            ->numeric()
                            ->prefix('Rp')
                            ->required(),
                        Select::make('category')
                            ->label('Kategori')
                            ->options([
                                'research_contract' => 'Kontrak Riset Industri',
                                'royalty' => 'Royalti Produk Inovasi',
                                'unit_usaha' => 'Unit Usaha Kampus',
                                'other' => 'Lain-lain',
                            ])
                            ->required(),
                        TextInput::make('academic_year')
                            ->label('Tahun Akademik')
                            ->numeric()
                            ->required(),
                    ])->columns(2),

                Section::make('Bukti & Verifikasi')
                    ->schema([
                        TextInput::make('evidence_link')
                            ->label('Link Bukti (MoU/Invoice/Laporan)')
                            ->url(),
                        Select::make('status')
                            ->options([
                                'draft' => 'Draft',
                                'verified' => 'Terverifikasi',
                                'reported' => 'Dilaporkan ke Diktisaintek',
                            ])
                            ->required(),
                        Textarea::make('description')
                            ->label('Keterangan Tambahan')
                            ->columnSpanFull(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('source_name')
                    ->label('Sumber')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('amount')
                    ->label('Nominal')
                    ->money('IDR')
                    ->sortable(),
                TextColumn::make('category')
                    ->label('Kategori')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'research_contract' => 'info',
                        'royalty' => 'success',
                        'unit_usaha' => 'warning',
                        default => 'gray',
                    }),
                TextColumn::make('academic_year')
                    ->label('Tahun')
                    ->sortable(),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'draft' => 'gray',
                        'verified' => 'success',
                        'reported' => 'info',
                    }),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->options([
                        'research_contract' => 'Kontrak Riset',
                        'royalty' => 'Royalti',
                        'unit_usaha' => 'Unit Usaha',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListInstitutionalIncomes::route('/'),
            'create' => Pages\CreateInstitutionalIncome::route('/create'),
            'edit' => Pages\EditInstitutionalIncome::route('/{record}/edit'),
        ];
    }
}
