<?php

namespace App\Filament\Resources\InstitutionalIncomes\Pages;

use App\Filament\Resources\InstitutionalIncomes\InstitutionalIncomeResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditInstitutionalIncome extends EditRecord
{
    protected static string $resource = InstitutionalIncomeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
