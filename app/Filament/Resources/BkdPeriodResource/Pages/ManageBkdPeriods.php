<?php

namespace App\Filament\Resources\BkdPeriodResource\Pages;

use App\Filament\Resources\BkdPeriodResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageBkdPeriods extends ManageRecords
{
    protected static string $resource = BkdPeriodResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
