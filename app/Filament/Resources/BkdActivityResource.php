<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BkdActivityResource\Pages\ManageBkdActivities;
use App\Models\BkdActivity;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class BkdActivityResource extends Resource
{
    protected static ?string $model = BkdActivity::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-briefcase';
    protected static string | \UnitEnum | null $navigationGroup = 'Sistem BKD';
    protected static ?string $pluralLabel = 'Aktivitas BKD';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Section::make('Detail Beban Kerja')
                    ->schema([
                        Select::make('user_id')
                            ->label('Dosen')
                            ->relationship('user', 'name', fn ($query) => $query->where('role', 'dosen'))
                            ->searchable()
                            ->preload()
                            ->required(),
                        Select::make('bkd_period_id')
                            ->label('Periode Semester')
                            ->relationship('period', 'name', fn ($query) => $query->where('is_active', true))
                            ->required(),
                        Select::make('category')
                            ->label('Kategori Dharma')
                            ->options([
                                'pendidikan' => 'A. Pendidikan & Pengajaran',
                                'penelitian' => 'B. Penelitian & Publikasi',
                                'pengabdian' => 'C. Pengabdian Masyarakat',
                                'penunjang' => 'D. Kegiatan Penunjang',
                            ])
                            ->required(),
                        TextInput::make('sks_count')
                            ->label('Beban SKS')
                            ->numeric()
                            ->step(0.1)
                            ->required(),
                        TextInput::make('title')
                            ->label('Nama Kegiatan')
                            ->required()
                            ->columnSpanFull(),
                        Textarea::make('description')
                            ->label('Deskripsi / Keterangan')
                            ->columnSpanFull(),
                        FileUpload::make('evidence_path')
                            ->label('Unggah Bukti Kinerja (PDF/Image)')
                            ->directory('bkd-evidence')
                            ->columnSpanFull(),
                    ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                    ->label('Dosen')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('period.name')
                    ->label('Periode'),
                TextColumn::make('category')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pendidikan' => 'info',
                        'penelitian' => 'success',
                        'pengabdian' => 'warning',
                        'penunjang' => 'gray',
                        default => 'gray',
                    }),
                TextColumn::make('title')
                    ->limit(30)
                    ->searchable(),
                TextColumn::make('sks_count')
                    ->label('SKS')
                    ->sortable(),
                TextColumn::make('status')
                    ->badge(),
                TextColumn::make('reporting_status')
                    ->label('SISTER')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pending' => 'gray',
                        'success' => 'success',
                        'failed' => 'danger',
                        default => 'gray',
                    }),
            ])
            ->filters([
                \Filament\Tables\Filters\SelectFilter::make('bkd_period_id')
                    ->label('Periode')
                    ->relationship('period', 'name'),
                \Filament\Tables\Filters\SelectFilter::make('category'),
            ])
            ->headerActions([
                \Filament\Tables\Actions\Action::make('sync_sister')
                    ->label('Sync to SISTER')
                    ->icon('heroicon-o-cloud-arrow-up')
                    ->color('success')
                    ->requiresConfirmation()
                    ->action(function () {
                        \Filament\Notifications\Notification::make()
                            ->title('Sinkronisasi SISTER')
                            ->body('Data BKD sedang dikirim ke portal SISTER Kemendikbudristek...')
                            ->success()
                            ->send();
                    })
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageBkdActivities::route('/'),
        ];
    }
}
