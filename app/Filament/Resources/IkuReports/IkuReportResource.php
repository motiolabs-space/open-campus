<?php

namespace App\Filament\Resources\IkuReports;

use App\Filament\Resources\IkuReports\Pages;
use App\Models\IkuReport;
use Filament\Forms;
use Filament\Schemas\Schema;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;

class IkuReportResource extends Resource
{
    protected static ?string $model = IkuReport::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-shield-check';
    protected static ?string $navigationLabel = 'Audit IKU Dashboard';
    protected static ?string $pluralLabel = 'Monitoring IKU';
    protected static string | \UnitEnum | null $navigationGroup = 'Kampus';
    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Detail Pelaporan')
                    ->description('Informasi status sinkronisasi ke kementerian.')
                    ->schema([
                        Placeholder::make('reportable_type')
                            ->label('Jenis Data')
                            ->content(fn ($record) => class_basename($record?->reportable_type)),
                        Placeholder::make('reportable_id')
                            ->label('Item')
                            ->content(fn ($record) => $record?->reportable?->source_name ?? $record?->reportable?->title ?? 'N/A'),
                        TextInput::make('iku_number')
                            ->label('Indikator IKU')
                            ->disabled(),
                        Select::make('status')
                            ->options([
                                'draft' => 'Draft',
                                'synced' => 'Sudah Dikirim',
                                'verified' => 'Terverifikasi Pusat',
                                'rejected' => 'Ditolak Pusat',
                            ])
                            ->required(),
                    ])->columns(2),

                Section::make('Umpan Balik API (Technical)')
                    ->collapsed()
                    ->schema([
                        Forms\Components\KeyValue::make('api_response')
                            ->label('Respons Terakhir'),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('iku_number')
                    ->label('IKU')
                    ->badge()
                    ->color('info')
                    ->sortable(),
                TextColumn::make('reportable_type')
                    ->label('Modul')
                    ->formatStateUsing(fn (string $state): string => class_basename($state)),
                TextColumn::make('reportable.title')
                    ->label('Data / Aktivitas')
                    ->placeholder('N/A')
                    ->limit(50)
                    ->description(fn ($record) => $record->reportable?->source_name),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'draft' => 'gray',
                        'synced' => 'info',
                        'verified' => 'success',
                        'rejected' => 'danger',
                    }),
                TextColumn::make('reported_at')
                    ->label('Tgl Lapor')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('created_at')
                    ->label('Masuk Sistem')
                    ->dateTime('d M Y')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('iku_number')
                    ->options([
                        'IKU 1' => 'IKU 1 (AEE)',
                        'IKU 6' => 'IKU 6 (Publikasi)',
                        'IKU 8' => 'IKU 8 (Kebijakan)',
                        'IKU 9' => 'IKU 9 (Income)',
                    ]),
                Tables\Filters\SelectFilter::make('status'),
                Tables\Filters\Filter::make('created_at')
                    ->form([
                        Forms\Components\DatePicker::make('created_from')->label('Dari Tanggal'),
                        Forms\Components\DatePicker::make('created_until')->label('Sampai Tanggal'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query
                            ->when($data['created_from'], fn ($query, $date) => $query->whereDate('created_at', '>=', $date))
                            ->when($data['created_until'], fn ($query, $date) => $query->whereDate('created_at', '<=', $date));
                    })
            ])
            ->actions([
                Tables\Actions\Action::make('sync_now')
                    ->label('Push Single')
                    ->icon('heroicon-o-paper-airplane')
                    ->color('success')
                    ->hidden(fn ($record) => $record->status !== 'draft')
                    ->requiresConfirmation()
                    ->action(function ($record) {
                        $record->update([
                            'status' => 'synced',
                            'reported_at' => now(),
                        ]);
                        \Filament\Notifications\Notification::make()->title('Data Terkirim')->success()->send();
                    }),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('bulk_push')
                        ->label('Push Massal ke Kemendiktisaintek')
                        ->icon('heroicon-o-cloud-arrow-up')
                        ->color('success')
                        ->requiresConfirmation()
                        ->action(function ($records) {
                            $records->each(function ($record) {
                                if ($record->status === 'draft') {
                                    $record->update([
                                        'status' => 'synced',
                                        'reported_at' => now(),
                                    ]);
                                }
                            });

                            \Filament\Notifications\Notification::make()
                                ->title('Sinkronisasi Massal Berhasil')
                                ->body(count($records) . ' data telah diantrekan untuk pelaporan kementerian.')
                                ->success()
                                ->send();
                        }),
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListIkuReports::route('/'),
            'create' => Pages\CreateIkuReport::route('/create'),
            'edit' => Pages\EditIkuReport::route('/{record}/edit'),
        ];
    }
}
