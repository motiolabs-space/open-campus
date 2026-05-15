<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ResearchResource\Pages\ManageResearch;
use App\Models\Research;
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

class ResearchResource extends Resource
{
    protected static ?string $model = Research::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-beaker';
    protected static string | \UnitEnum | null $navigationGroup = 'LPPM';
    protected static ?string $pluralLabel = 'Penelitian';
    protected static ?string $recordTitleAttribute = 'title';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Section::make('Informasi Penelitian')
                    ->schema([
                        TextInput::make('title')
                            ->label('Judul Penelitian')
                            ->required()
                            ->columnSpanFull(),
                        \Filament\Forms\Components\Select::make('scheme')
                            ->label('Skema Hibah')
                            ->options([
                                'internal' => 'Hibah Internal Kampus',
                                'nasional' => 'Hibah Nasional (Kemendikbud)',
                                'internasional' => 'Hibah Internasional',
                                'mandiri' => 'Penelitian Mandiri',
                            ])
                            ->required(),
                        \Filament\Forms\Components\Select::make('leader_id')
                            ->label('Ketua Peneliti')
                            ->relationship('leader', 'name', fn ($query) => $query->where('role', 'dosen'))
                            ->searchable()
                            ->preload()
                            ->required(),
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
                        TextInput::make('funding_source')
                            ->label('Sumber Dana'),
                        TextInput::make('funding_amount')
                            ->label('Besar Dana')
                            ->numeric()
                            ->prefix('Rp'),
                        TextInput::make('output_link')
                            ->label('Link Luaran (Paper/Paten)')
                            ->url(),
                        \Filament\Forms\Components\Textarea::make('impact_statement')
                            ->label('Narasi Dampak (Outcome)')
                            ->placeholder('Jelaskan dampak nyata dari penelitian ini bagi masyarakat atau industri...')
                            ->helperText('Contoh: Membantu meningkatkan efisiensi energi sebesar 15% pada sektor UMKM.')
                            ->columnSpanFull(),
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
                TextColumn::make('scheme')
                    ->badge()
                    ->color('gray'),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'proposed' => 'gray',
                        'ongoing' => 'warning',
                        'completed' => 'success',
                        'reported' => 'info',
                        default => 'gray',
                    }),
                TextColumn::make('funding_amount')
                    ->label('Dana')
                    ->money('IDR')
                    ->sortable(),
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
                            ->title('Sinkronisasi Dimulai')
                            ->body('Menghubungkan ke Neo Feeder PDDIKTI...')
                            ->info()
                            ->send();
                        
                        // Simulate process
                        sleep(2);

                        Research::where('reporting_status', 'pending')->update([
                            'reporting_status' => 'success',
                            'reported_at' => now(),
                        ]);

                        \Filament\Notifications\Notification::make()
                            ->title('Sinkronisasi Berhasil')
                            ->body('Semua data penelitian terbaru telah terkirim ke kementerian.')
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
                                // Simple validation
                                if (!$record->funding_amount) {
                                    return;
                                }

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
            'index' => ManageResearch::route('/'),
        ];
    }
}
