<?php

namespace App\Filament\Pages;

use App\Models\CampusSetting;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Actions\Action;

class IntegrationSettings extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';
    protected static ?string $navigationLabel = 'Integrasi Sistem';
    protected static ?string $title = 'Integrasi Sistem Kampus';
    protected static string | \UnitEnum | null $navigationGroup = 'Kampus';

    public ?array $data = [];

    public function mount(): void
    {
        $settings = CampusSetting::firstOrNew([]);
        $this->form->fill($settings->toArray());
    }

    public static function canAccess(): bool
    {
        return auth()->user()?->role === 'admin' || auth()->user()?->hasRole(['admin', 'super_admin']);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('SIAKAD Integration')
                    ->description('Konfigurasi koneksi ke Sistem Informasi Akademik Kampus.')
                    ->schema([
                        TextInput::make('siakad_url')
                            ->label('SIAKAD URL')
                            ->placeholder('https://siakad.univ.ac.id')
                            ->url(),
                        TextInput::make('siakad_key')
                            ->label('SIAKAD API Key')
                            ->password()
                            ->revealable(),
                    ])->columns(2),

                Section::make('PDDIKTI Neo Feeder (Official Reporting)')
                    ->description('Konfigurasi WebService Neo Feeder untuk pelaporan IKU resmi.')
                    ->schema([
                        TextInput::make('pddikti_url')
                            ->label('Neo Feeder URL')
                            ->placeholder('http://localhost:8082/ws'),
                        TextInput::make('pddikti_username')
                            ->label('Username WS'),
                        TextInput::make('pddikti_password')
                            ->label('Password WS')
                            ->password()
                            ->revealable(),
                    ])->columns(3),

                Section::make('PDDIKTI Discovery API (Real-time)')
                    ->description('API publik untuk pencarian instan profil & riset.')
                    ->schema([
                        TextInput::make('discovery_api_url')
                            ->label('Discovery API URL')
                            ->placeholder('https://api-pddikti.rone.dev')
                            ->url(),
                    ]),
            ])
            ->statePath('data');
    }

    protected function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label('Simpan Perubahan')
                ->submit('save'),
        ];
    }

    public function save(): void
    {
        $data = $this->form->getState();
        
        $settings = CampusSetting::firstOrNew([]);
        $settings->fill($data);
        $settings->save();

        Notification::make()
            ->title('Konfigurasi Berhasil Disimpan')
            ->success()
            ->send();
    }
}
