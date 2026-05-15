<?php

namespace App\Filament\Resources\BkdActivityResource\Pages;

use App\Filament\Resources\BkdActivityResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageBkdActivities extends ManageRecords
{
    protected static string $resource = BkdActivityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
