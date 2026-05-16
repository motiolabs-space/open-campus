<?php

namespace App\Filament\Resources\IkuReports\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class IkuReportForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('iku_number')
                    ->required(),
                TextInput::make('reportable_type')
                    ->required(),
                TextInput::make('reportable_id')
                    ->required()
                    ->numeric(),
                Select::make('status')
                    ->options(['draft' => 'Draft', 'synced' => 'Synced', 'verified' => 'Verified', 'rejected' => 'Rejected'])
                    ->default('draft')
                    ->required(),
                TextInput::make('api_response'),
                TextInput::make('evidence_path'),
                DateTimePicker::make('reported_at'),
                DateTimePicker::make('verified_at'),
            ]);
    }
}
