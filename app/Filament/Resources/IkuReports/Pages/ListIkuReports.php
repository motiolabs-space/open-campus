<?php

namespace App\Filament\Resources\IkuReports\Pages;

use App\Filament\Resources\IkuReports\IkuReportResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListIkuReports extends ListRecords
{
    protected static string $resource = IkuReportResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
