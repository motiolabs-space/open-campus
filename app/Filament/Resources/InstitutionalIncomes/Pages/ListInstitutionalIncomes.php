<?php

namespace App\Filament\Resources\InstitutionalIncomes\Pages;

use App\Filament\Resources\InstitutionalIncomes\InstitutionalIncomeResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListInstitutionalIncomes extends ListRecords
{
    protected static string $resource = InstitutionalIncomeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
