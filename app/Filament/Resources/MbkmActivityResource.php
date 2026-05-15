<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MbkmActivityResource\Pages\ManageMbkmActivities;
use App\Models\MbkmActivity;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class MbkmActivityResource extends Resource
{
    protected static ?string $model = MbkmActivity::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-academic-cap';
    protected static string | \UnitEnum | null $navigationGroup = 'Kemahasiswaan';
    protected static ?string $pluralLabel = 'Aktivitas MBKM';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Section::make('Detail Program MBKM')
                    ->schema([
                        Select::make('user_id')
                            ->label('Mahasiswa')
                            ->relationship('user', 'name', fn ($query) => $query->where('role', 'mahasiswa'))
                            ->searchable()
                            ->preload()
                            ->required(),
                        Select::make('type')
                            ->label('Jenis MBKM')
                            ->options([
                                'internship' => 'Magang Bersertifikat',
                                'research' => 'Riset / Penelitian',
                                'student_exchange' => 'Pertukaran Mahasiswa',
                                'entrepreneurship' => 'Wirausaha Mandiri',
                                'village_project' => 'Proyek di Desa',
                                'teaching_assistance' => 'Asistensi Mengajar',
                            ])
                            ->required(),
                        TextInput::make('credits')
                            ->label('Bobot SKS')
                            ->numeric()
                            ->default(20)
                            ->helperText('Minimal 20 SKS untuk dihitung sebagai capaian IKU 2')
                            ->required(),
                        TextInput::make('title')
                            ->label('Nama Program / Posisi')
                            ->required()
                            ->columnSpanFull(),
                    ])->columns(2),

                \Filament\Forms\Components\Section::make('Informasi Mitra & Pembimbing')
                    ->schema([
                        TextInput::make('company_name')
                            ->label('Nama Mitra / Instansi')
                            ->required(),
                        Select::make('mitra_category')
                            ->label('Kategori Mitra')
                            ->options([
                                'qs100' => 'Top 100 QS World / Global',
                                'industry' => 'Dunia Usaha & Industri (DUDI)',
                                'government' => 'Instansi Pemerintah',
                                'ngo' => 'NGO / Organisasi Non-Profit',
                            ]),
                        TextInput::make('mentor_name')
                            ->label('Nama Pembimbing Lapangan'),
                        TextInput::make('mentor_email')
                            ->label('Email Pembimbing')
                            ->email(),
                        DatePicker::make('start_date')
                            ->label('Tanggal Mulai')
                            ->required()
                            ->native(false),
                        DatePicker::make('end_date')
                            ->label('Tanggal Berakhir')
                            ->native(false),
                        \Filament\Forms\Components\Textarea::make('impact_statement')
                            ->label('Capaian & Dampak Nyata')
                            ->placeholder('Ceritakan hasil nyata yang Anda berikan selama kegiatan ini...')
                            ->helperText('Contoh: Menyelesaikan audit database perusahaan atau membangun sistem X di desa.')
                            ->columnSpanFull(),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                    ->label('Mahasiswa')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('type')
                    ->badge()
                    ->color('gray'),
                TextColumn::make('credits')
                    ->label('SKS')
                    ->badge()
                    ->color(fn (int $state) => $state >= 20 ? 'success' : 'warning'),
                TextColumn::make('company_name')
                    ->label('Mitra')
                    ->searchable(),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'ongoing' => 'warning',
                        'completed' => 'success',
                        'cancelled' => 'danger',
                        default => 'gray',
                    }),
                TextColumn::make('reporting_status')
                    ->label('PDDIKTI')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pending' => 'gray',
                        'success' => 'success',
                        'failed' => 'danger',
                        default => 'gray',
                    }),
            ])
            ->filters([
                \Filament\Tables\Filters\SelectFilter::make('type'),
                \Filament\Tables\Filters\SelectFilter::make('reporting_status')
                    ->label('Status Lapor'),
            ])
            ->headerActions([
                \Filament\Tables\Actions\Action::make('sync_pddikti')
                    ->label('Sync to Neo Feeder')
                    ->icon('heroicon-o-cloud-arrow-up')
                    ->color('info')
                    ->requiresConfirmation()
                    ->action(function () {
                        \Filament\Notifications\Notification::make()
                            ->title('Sinkronisasi Neo Feeder')
                            ->body('Data MBKM mahasiswa sedang dikirim ke PDDIKTI...')
                            ->success()
                            ->send();
                    })
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageMbkmActivities::route('/'),
        ];
    }
}
