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
                                'reported' => 'Dilaporkan ke Pusat',
                                'verified' => 'Terverifikasi Pusat',
                                'rejected' => 'Ditolak Pusat',
                            ])
                            ->required(),
                    ])->columns(2),

                Section::make('Verifikasi Internal Kampus')
                    ->description('Lakukan koreksi dan tandai sebagai siap lapor.')
                    ->schema([
                        Forms\Components\Toggle::make('is_reviewed')
                            ->label('Sudah Dikoreksi & Disetujui Kampus')
                            ->helperText('Hanya data yang disetujui yang dapat dikirim massal ke kementerian.')
                            ->onIcon('heroicon-m-check-badge')
                            ->color('success'),
                        Forms\Components\Textarea::make('correction_notes')
                            ->label('Catatan Koreksi (Internal)')
                            ->placeholder('Contoh: Nominal diperbaiki dari Rp 5jt ke Rp 7jt sesuai invoice terbaru...')
                            ->columnSpanFull(),
                    ]),

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
                        'reported' => 'warning',
                        'verified' => 'success',
                        'rejected' => 'danger',
                    }),
                Tables\Columns\IconColumn::make('is_reviewed')
                    ->label('Review')
                    ->boolean()
                    ->trueIcon('heroicon-o-check-badge')
                    ->trueColor('success')
                    ->falseIcon('heroicon-o-x-circle')
                    ->falseColor('gray'),
                TextColumn::make('reported_at')
                    ->label('Tgl Lapor')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(),
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
                Tables\Filters\TernaryFilter::make('is_reviewed')
                    ->label('Status Review Kampus'),
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
                Tables\Actions\Action::make('verify_pddikti')
                    ->label('Verify National')
                    ->icon('heroicon-o-magnifying-glass-circle')
                    ->color('info')
                    ->hidden(fn ($record) => $record->status !== 'draft')
                    ->action(function ($record, \App\Services\PddiktiBridgeService $bridge) {
                        $result = $bridge->verifyAgainstPublicData($record);
                        
                        if ($result['status'] === 'verified') {
                            \Filament\Notifications\Notification::make()
                                ->title('Terverifikasi Nasional')
                                ->body('Data ditemukan di database publik PDDIKTI.')
                                ->success()
                                ->send();
                        } else {
                            \Filament\Notifications\Notification::make()
                                ->title('Belum Ditemukan')
                                ->body('Data tidak ditemukan di database publik. Silakan periksa kembali judul atau nama dosen.')
                                ->warning()
                                ->send();
                        }
                    }),
                Tables\Actions\Action::make('sync_now')
                    ->label('Push Single')
                    ->icon('heroicon-o-paper-airplane')
                    ->color('success')
                    ->hidden(fn ($record) => in_array($record->status, ['reported', 'verified']) || !$record->is_reviewed)
                    ->requiresConfirmation()
                    ->action(function ($record, \App\Services\PddiktiBridgeService $bridge) {
                        $success = $bridge->pushToNeoFeeder($record);
                        
                        if ($success) {
                            \Filament\Notifications\Notification::make()->title('Data Terkirim ke Neo Feeder')->success()->send();
                        } else {
                            \Filament\Notifications\Notification::make()->title('Gagal Sinkronisasi')->danger()->send();
                        }
                    }),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('bulk_push')
                        ->label('Push Massal (Hanya yang Disetujui)')
                        ->icon('heroicon-o-cloud-arrow-up')
                        ->color('success')
                        ->requiresConfirmation()
                        ->action(function ($records, \App\Services\PddiktiBridgeService $bridge) {
                            $count = 0;
                            foreach ($records as $record) {
                                if ($record->is_reviewed && !in_array($record->status, ['reported', 'verified'])) {
                                    if ($bridge->pushToNeoFeeder($record)) {
                                        $count++;
                                    }
                                }
                            }

                            if ($count > 0) {
                                \Filament\Notifications\Notification::make()
                                    ->title('Sinkronisasi Massal Berhasil')
                                    ->body($count . ' data berhasil dikirim ke Neo Feeder.')
                                    ->success()
                                    ->send();
                            } else {
                                \Filament\Notifications\Notification::make()
                                    ->title('Gagal Mengirim')
                                    ->body('Tidak ada data yang memenuhi syarat pengiriman (Harus Direview & Belum Dilaporkan).')
                                    ->danger()
                                    ->send();
                            }
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
