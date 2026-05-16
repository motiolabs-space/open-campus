<?php

namespace App\Filament\Resources\InstitutionalIncomes\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class InstitutionalIncomeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('source_name')
                    ->required(),
                TextInput::make('amount')
                    ->required()
                    ->numeric(),
                TextInput::make('category')
                    ->required(),
                TextInput::make('academic_year')
                    ->required(),
                TextInput::make('evidence_link'),
                Textarea::make('description')
                    ->columnSpanFull(),
                Select::make('status')
                    ->options(['draft' => 'Draft', 'verified' => 'Verified', 'reported' => 'Reported'])
                    ->default('draft')
                    ->required(),
            ]);
    }
}
