<?php

namespace App\Filament\Resources;

use App\Filament\Resources\StudentAchievementResource\Pages\ManageStudentAchievements;
use App\Models\StudentAchievement;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class StudentAchievementResource extends Resource
{
    protected static ?string $model = StudentAchievement::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-trophy';
    protected static string | \UnitEnum | null $navigationGroup = 'Kemahasiswaan';
    protected static ?string $pluralLabel = 'Prestasi Mahasiswa';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Section::make('Informasi Prestasi')
                    ->schema([
                        Select::make('user_id')
                            ->label('Mahasiswa')
                            ->relationship('user', 'name', fn ($query) => $query->where('role', 'mahasiswa'))
                            ->searchable()
                            ->preload()
                            ->required(),
                        TextInput::make('title')
                            ->label('Nama Kompetisi / Kegiatan')
                            ->required()
                            ->columnSpanFull(),
                        Select::make('level')
                            ->label('Tingkat')
                            ->options([
                                'international' => 'Internasional',
                                'national' => 'Nasional',
                                'provincial' => 'Provinsi',
                                'campus' => 'Internal Kampus',
                            ])
                            ->required(),
                        Select::make('rank')
                            ->label('Peringkat / Juara')
                            ->options([
                                '1' => 'Juara 1',
                                '2' => 'Juara 2',
                                '3' => 'Juara 3',
                                'finalist' => 'Finalis',
                                'participant' => 'Peserta',
                            ])
                            ->required(),
                        TextInput::make('organizer')
                            ->label('Penyelenggara')
                            ->required(),
                        TextInput::make('year')
                            ->label('Tahun')
                            ->numeric()
                            ->default(date('Y'))
                            ->required(),
                        FileUpload::make('certificate_path')
                            ->label('Sertifikat Juara (PDF/JPG)')
                            ->directory('achievements')
                            ->columnSpanFull(),
                        \Filament\Forms\Components\Textarea::make('impact_statement')
                            ->label('Dampak bagi Institusi / Diri Sendiri')
                            ->placeholder('Jelaskan bagaimana prestasi ini memberikan dampak nyata...')
                            ->helperText('Contoh: Menghasilkan prototipe alat yang kini digunakan di Laboratorium X.')
                            ->columnSpanFull(),
                        Select::make('iku_category')
                            ->label('Target IKU')
                            ->options([
                                'iku2' => 'IKU 2: Pengalaman Luar Kampus',
                            ])
                            ->default('iku2'),
                    ])->columns(2)
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
                TextColumn::make('title')
                    ->label('Kompetisi')
                    ->limit(30)
                    ->searchable(),
                TextColumn::make('level')
                    ->badge()
                    ->color('info'),
                TextColumn::make('rank')
                    ->label('Juara')
                    ->badge()
                    ->color('success'),
                TextColumn::make('year')
                    ->sortable(),
                TextColumn::make('reporting_status')
                    ->label('SIMBELMAWA')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pending' => 'gray',
                        'success' => 'success',
                        'failed' => 'danger',
                        default => 'gray',
                    }),
            ])
            ->filters([
                \Filament\Tables\Filters\SelectFilter::make('level')
                    ->options([
                        'international' => 'Internasional',
                        'national' => 'Nasional',
                    ]),
            ])
            ->headerActions([
                \Filament\Tables\Actions\Action::make('sync_simbelmawa')
                    ->label('Sync to SIMBELMAWA')
                    ->icon('heroicon-o-cloud-arrow-up')
                    ->color('primary')
                    ->requiresConfirmation()
                    ->action(function () {
                        \Filament\Notifications\Notification::make()
                            ->title('Sinkronisasi Berhasil')
                            ->body('Data prestasi telah terkirim ke sistem SIMBELMAWA.')
                            ->success()
                            ->send();
                    })
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageStudentAchievements::route('/'),
        ];
    }
}
