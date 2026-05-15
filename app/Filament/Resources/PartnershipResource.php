<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PartnershipResource\Pages\ManagePartnerships;
use App\Models\Partnership;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PartnershipResource extends Resource
{
    protected static ?string $model = Partnership::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-hand-raised';
    protected static string | \UnitEnum | null $navigationGroup = 'Kerjasama & IKU';
    protected static ?string $pluralLabel = 'Kerjasama Institusi';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Section::make('Informasi Mitra')
                    ->schema([
                        TextInput::make('partner_name')
                            ->label('Nama Mitra')
                            ->required()
                            ->placeholder('Contoh: PT. Industri Maju atau Universitas Global'),
                        Select::make('partner_type')
                            ->label('Tipe Mitra')
                            ->options([
                                'industry' => 'Dunia Usaha / Industri',
                                'university' => 'Perguruan Tinggi',
                                'government' => 'Instansi Pemerintah',
                                'ngo' => 'LSM / NGO',
                            ])
                            ->required(),
                    ])->columns(2),

                \Filament\Forms\Components\Section::make('Detail Dokumen (MoU/MoA)')
                    ->schema([
                        TextInput::make('title')
                            ->label('Judul Kerjasama')
                            ->required()
                            ->columnSpanFull(),
                        TextInput::make('mou_number')
                            ->label('Nomor Dokumen')
                            ->required()
                            ->unique(ignoreRecord: true),
                        Select::make('iku_category')
                            ->label('Kategori IKU')
                            ->options([
                                'iku6' => 'IKU 6: Kerjasama Program Studi',
                                'iku12' => 'IKU 12: Kemandirian & Kerjasama Strategis',
                            ])
                            ->default('iku6'),
                        DatePicker::make('start_date')
                            ->label('Tanggal Mulai')
                            ->required()
                            ->native(false),
                        DatePicker::make('end_date')
                            ->label('Tanggal Berakhir')
                            ->native(false),
                        Textarea::make('scope_of_work')
                            ->label('Ruang Lingkup')
                            ->columnSpanFull(),
                        FileUpload::make('document_path')
                            ->label('Upload Scan Dokumen (PDF)')
                            ->directory('partnerships')
                            ->acceptedFileTypes(['application/pdf']),
                        Select::make('user_id')
                            ->label('PIC Internal (Dosen/Admin)')
                            ->relationship('user', 'name')
                            ->searchable()
                            ->preload()
                            ->required(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('partner_name')
                    ->label('Nama Mitra')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('mou_number')
                    ->label('No. Dokumen')
                    ->searchable(),
                TextColumn::make('start_date')
                    ->label('Mulai')
                    ->date()
                    ->sortable(),
                TextColumn::make('end_date')
                    ->label('Berakhir')
                    ->date()
                    ->color(fn ($state) => $state && $state < now() ? 'danger' : 'gray')
                    ->sortable(),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'active' => 'success',
                        'expired' => 'danger',
                        'pending' => 'warning',
                        default => 'gray',
                    }),
            ])
            ->filters([
                \Filament\Tables\Filters\SelectFilter::make('partner_type')
                    ->options([
                        'industry' => 'Industri',
                        'university' => 'Universitas',
                        'government' => 'Pemerintah',
                    ]),
            ])
            ->headerActions([
                \Filament\Tables\Actions\Action::make('sync_siperkerma')
                    ->label('Sync to SIPERKERMA')
                    ->icon('heroicon-o-arrow-path')
                    ->color('info')
                    ->requiresConfirmation()
                    ->action(function () {
                        \Filament\Notifications\Notification::make()
                            ->title('Sinkronisasi SIPERKERMA')
                            ->body('Menghubungkan ke sistem kementerian...')
                            ->success()
                            ->send();
                    })
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManagePartnerships::route('/'),
        ];
    }
}
