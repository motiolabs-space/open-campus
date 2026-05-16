<?php

namespace App\Filament\Resources\IkuReports\Pages;

use App\Filament\Resources\IkuReports\IkuReportResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditIkuReport extends EditRecord
{
    protected static string $resource = IkuReportResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
