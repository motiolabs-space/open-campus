<?php

namespace App\Filament\Resources\MbkmActivityResource\Pages;

use App\Filament\Resources\MbkmActivityResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageMbkmActivities extends ManageRecords
{
    protected static string $resource = MbkmActivityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
