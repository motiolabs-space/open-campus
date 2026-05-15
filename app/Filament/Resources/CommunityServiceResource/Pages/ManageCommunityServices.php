<?php

namespace App\Filament\Resources\CommunityServiceResource\Pages;

use App\Filament\Resources\CommunityServiceResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageCommunityServices extends ManageRecords
{
    protected static string $resource = CommunityServiceResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
