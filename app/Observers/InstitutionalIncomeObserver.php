<?php

namespace App\Observers;

use App\Models\InstitutionalIncome;
use App\Models\IkuReport;

class InstitutionalIncomeObserver
{
    public function created(InstitutionalIncome $income): void
    {
        $income->ikuReports()->create([
            'iku_number' => 'IKU 9',
            'status' => 'draft',
        ]);
    }
}
