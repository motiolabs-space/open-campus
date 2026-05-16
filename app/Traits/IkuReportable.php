<?php

namespace App\Traits;

use App\Models\IkuReport;
use Illuminate\Database\Eloquent\Relations\MorphMany;

trait IkuReportable
{
    public function ikuReports(): MorphMany
    {
        return $this->morphMany(IkuReport::class, 'reportable');
    }

    public function latestIkuReport()
    {
        return $this->ikuReports()->latest()->first();
    }
}
