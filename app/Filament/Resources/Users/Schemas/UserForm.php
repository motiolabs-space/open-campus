<?php

namespace App\Filament\Resources\Users\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class UserForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                \Filament\Forms\Components\Tabs::make('User Details')
                    ->tabs([
                        \Filament\Forms\Components\Tabs\Tab::make('Account Information')
                            ->icon('heroicon-o-user')
                            ->schema([
                                TextInput::make('name')
                                    ->required()
                                    ->placeholder('Nama Lengkap sesuai Ijazah'),
                                TextInput::make('email')
                                    ->label('Email Address')
                                    ->email()
                                    ->required()
                                    ->unique(ignoreRecord: true),
                                TextInput::make('password')
                                    ->password()
                                    ->dehydrated(fn ($state) => filled($state))
                                    ->required(fn (string $context): bool => $context === 'create'),
                                \Filament\Forms\Components\Select::make('role')
                                    ->options([
                                        'admin' => 'Administrator',
                                        'dosen' => 'Dosen / Tenaga Pendidik',
                                        'mahasiswa' => 'Mahasiswa',
                                        'pegawai' => 'Staf / Pegawai',
                                    ])
                                    ->required()
                                    ->native(false),
                            ])->columns(2),

                        \Filament\Forms\Components\Tabs\Tab::make('Academic & PDDIKTI')
                            ->icon('heroicon-o-academic-cap')
                            ->schema([
                                \Filament\Forms\Components\Group::make()
                                    ->relationship('academicProfile')
                                    ->schema([
                                        TextInput::make('id_number')
                                            ->label('NIM / NIDN')
                                            ->required()
                                            ->placeholder('Nomor Induk Utama'),
                                        TextInput::make('nik')
                                            ->label('NIK (KTP)')
                                            ->length(16)
                                            ->numeric()
                                            ->placeholder('Wajib untuk pelaporan'),
                                        TextInput::make('mother_name')
                                            ->label('Nama Ibu Kandung')
                                            ->required()
                                            ->placeholder('Wajib PDDIKTI'),
                                        \Filament\Forms\Components\Grid::make(2)
                                            ->schema([
                                                TextInput::make('place_of_birth')
                                                    ->label('Tempat Lahir'),
                                                \Filament\Forms\Components\DatePicker::make('date_of_birth')
                                                    ->label('Tanggal Lahir')
                                                    ->native(false),
                                            ]),
                                        \Filament\Forms\Components\Select::make('gender')
                                            ->label('Jenis Kelamin')
                                            ->options([
                                                'L' => 'Laki-laki',
                                                'P' => 'Perempuan',
                                            ])->native(false),
                                        \Filament\Forms\Components\Select::make('faculty_id')
                                            ->label('Fakultas')
                                            ->relationship('faculty', 'name')
                                            ->searchable()
                                            ->preload(),
                                        \Filament\Forms\Components\Select::make('department_id')
                                            ->label('Jurusan / Prodi')
                                            ->relationship('department', 'name')
                                            ->searchable()
                                            ->preload(),
                                        TextInput::make('entry_period')
                                            ->label('Periode Masuk (Semester)')
                                            ->placeholder('Contoh: 20241'),
                                    ]),
                            ])->columns(2),

                        \Filament\Forms\Components\Tabs\Tab::make('Social & Impact')
                            ->icon('heroicon-o-presentation-chart-line')
                            ->schema([
                                TextInput::make('headline')
                                    ->placeholder('e.g. Dosen Senior Informatika'),
                                Textarea::make('bio')
                                    ->columnSpanFull(),
                                TextInput::make('skills')
                                    ->placeholder('e.g. PHP, Laravel, AI'),
                                TextInput::make('impact_score')
                                    ->numeric()
                                    ->default(0)
                                    ->disabled(),
                            ])->columns(2),
                            \Filament\Forms\Components\Tabs\Tab::make('Riset & IKU')
                            ->icon('heroicon-o-chart-bar')
                            ->schema([
                                \Filament\Forms\Components\Group::make()
                                    ->relationship('academicProfile')
                                    ->schema([
                                        TextInput::make('sinta_id')
                                            ->label('SINTA ID')
                                            ->placeholder('e.g. 6012345')
                                            ->helperText('ID resmi dari portal SINTA'),
                                        TextInput::make('scopus_id')
                                            ->label('Scopus ID')
                                            ->placeholder('e.g. 57210987600'),
                                        TextInput::make('googlescholar_id')
                                            ->label('Google Scholar ID')
                                            ->placeholder('e.g. ABCDE12345'),
                                        TextInput::make('h_index')
                                            ->label('H-Index')
                                            ->numeric()
                                            ->default(0),
                                        \Filament\Forms\Components\Select::make('iku_category')
                                            ->label('Kategori IKU')
                                            ->options([
                                                'iku1' => 'IKU 1: Lulusan Mendapat Pekerjaan Layak',
                                                'iku2' => 'IKU 2: Mahasiswa Mendapat Pengalaman di Luar Kampus',
                                                'iku3' => 'IKU 3: Dosen Berkegiatan di Luar Kampus',
                                                'iku4' => 'IKU 4: Praktisi Mengajar di Dalam Kampus',
                                                'iku5' => 'IKU 5: Hasil Kerja Dosen Digunakan oleh Masyarakat',
                                                'iku6' => 'IKU 6: Program Studi Bekerjasama dengan Mitra Kelas Dunia',
                                                'iku7' => 'IKU 7: Kelas yang Kolaboratif dan Partisipatif',
                                                'iku8' => 'IKU 8: Program Studi Berstandar Internasional',
                                                'iku9' => 'IKU 9: Efisiensi Tata Kelola & SDM',
                                                'iku10' => 'IKU 10: Inovasi Pembelajaran Digital',
                                                'iku11' => 'IKU 11: Dampak Sosial & Lingkungan',
                                                'iku12' => 'IKU 12: Kemandirian Finansial & Kerja Sama',
                                            ])
                                            ->searchable()
                                            ->columnSpanFull()
                                            ->native(false),
                                    ])->columns(2),
                            ]),
                    ])->columnSpanFull(),
            ]);
    }
}
