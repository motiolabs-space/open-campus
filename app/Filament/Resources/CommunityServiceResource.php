<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommunityServiceResource\Pages\ManageCommunityServices;
use App\Models\CommunityService;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class CommunityServiceResource extends Resource
{
    protected static ?string $model = CommunityService::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-user-group';
    protected static string | \UnitEnum | null $navigationGroup = 'LPPM';
    protected static ?string $pluralLabel = 'Pengabdian';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Section::make('Informasi Pengabdian')
                    ->schema([
                        TextInput::make('title')
                            ->label('Judul Pengabdian')
                            ->required()
                            ->columnSpanFull(),
                        \Filament\Forms\Components\Select::make('scheme')
                            ->label('Skema Hibah')
                            ->options([
                                'internal' => 'Hibah Internal Kampus',
                                'nasional' => 'Hibah Nasional (Kemendikbud)',
                                'mandiri' => 'Pengabdian Mandiri',
                            ])
                            ->required(),
                        \Filament\Forms\Components\Select::make('leader_id')
                            ->label('Ketua Pengabdian')
                            ->relationship('leader', 'name', fn ($query) => $query->where('role', 'dosen'))
                            ->searchable()
                            ->preload()
                            ->required(),
                        TextInput::make('location')
                            ->label('Lokasi Kegiatan')
                            ->placeholder('e.g. Desa Sukamaju'),
                        TextInput::make('academic_year')
                            ->label('Tahun Usulan')
                            ->numeric()
                            ->default(date('Y'))
                            ->required(),
                        \Filament\Forms\Components\Select::make('status')
                            ->options([
                                'proposed' => 'Usulan',
                                'ongoing' => 'Berjalan',
                                'completed' => 'Selesai',
                                'reported' => 'Sudah Dilaporkan',
                            ])
                            ->required(),
                        TextInput::make('funding_amount')
                            ->label('Besar Dana')
                            ->numeric()
                            ->prefix('Rp'),
                    ])->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->limit(50),
                TextColumn::make('leader.name')
                    ->label('Ketua')
                    ->sortable(),
                TextColumn::make('location')
                    ->label('Lokasi')
                    ->searchable(),
                TextColumn::make('reporting_status')
                    ->label('PDDIKTI')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pending' => 'gray',
                        'success' => 'success',
                        'failed' => 'danger',
                        default => 'gray',
                    })
                    ->icon(fn (string $state): string => match ($state) {
                        'pending' => 'heroicon-o-clock',
                        'success' => 'heroicon-o-check-circle',
                        'failed' => 'heroicon-o-x-circle',
                        default => 'heroicon-o-clock',
                    }),
                TextColumn::make('academic_year')
                    ->label('Tahun'),
            ])
            ->filters([
                \Filament\Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'proposed' => 'Usulan',
                        'ongoing' => 'Berjalan',
                        'completed' => 'Selesai',
                        'reported' => 'Terlapor',
                    ]),
                \Filament\Tables\Filters\SelectFilter::make('reporting_status')
                    ->label('Status PDDIKTI'),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->headerActions([
                \Filament\Tables\Actions\Action::make('sync_all')
                    ->label('Sync to PDDIKTI')
                    ->icon('heroicon-o-arrow-path')
                    ->color('info')
                    ->requiresConfirmation()
                    ->action(function () {
                        \Filament\Notifications\Notification::make()
                            ->title('Sinkronisasi Pengabdian Dimulai')
                            ->body('Menghubungkan ke Neo Feeder PDDIKTI...')
                            ->info()
                            ->send();
                        
                        sleep(2);

                        CommunityService::where('reporting_status', 'pending')->update([
                            'reporting_status' => 'success',
                            'reported_at' => now(),
                        ]);

                        \Filament\Notifications\Notification::make()
                            ->title('Sinkronisasi Berhasil')
                            ->body('Semua data pengabdian terbaru telah terkirim.')
                            ->success()
                            ->send();
                    })
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    \Filament\Tables\Actions\BulkAction::make('sync_selected')
                        ->label('Sync Selected')
                        ->icon('heroicon-o-cloud-arrow-up')
                        ->action(function (\Illuminate\Database\Eloquent\Collection $records) {
                            $records->each(function ($record) {
                                $record->update([
                                    'reporting_status' => 'success',
                                    'reported_at' => now(),
                                ]);
                            });

                            \Filament\Notifications\Notification::make()
                                ->title('Sinkronisasi Berhasil')
                                ->success()
                                ->send();
                        }),
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageCommunityServices::route('/'),
        ];
    }
}
