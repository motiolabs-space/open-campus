<?php

namespace App\Filament\Resources\OrganizationalUnits\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class OrganizationalUnitForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                Select::make('type')
                    ->options([
                        'university' => 'University / College',
                        'faculty' => 'Faculty / School',
                        'department' => 'Department / Major',
                        'study_program' => 'Study Program',
                        'division' => 'Administrative Division',
                        'laboratory' => 'Laboratory / Research Center',
                    ])
                    ->required()
                    ->default('department'),
                TextInput::make('code')
                    ->placeholder('e.g. FT-INF')
                    ->maxLength(50),
                Select::make('parent_id')
                    ->label('Parent Unit (Atasan)')
                    ->relationship('parent', 'name')
                    ->searchable()
                    ->placeholder('None (Top Level)'),
                Select::make('head_user_id')
                    ->label('Head of Unit (Pimpinan)')
                    ->relationship('headUser', 'name')
                    ->searchable()
                    ->preload(),
                \Filament\Forms\Components\Textarea::make('description')
                    ->columnSpanFull(),
            ]);
    }
}
