<?php

namespace App\Observers;

use App\Models\Research;
use App\Models\IkuReport;

class ResearchObserver
{
    public function created(Research $research): void
    {
        // IKU 6: Publikasi
        if ($research->is_reputable_publication) {
            $research->ikuReports()->create([
                'iku_number' => 'IKU 6',
                'status' => 'draft',
            ]);
        }

        // IKU 8: Kebijakan
        if ($research->is_policy_relevant) {
            $research->ikuReports()->create([
                'iku_number' => 'IKU 8',
                'status' => 'draft',
            ]);
        }
    }

    public function updated(Research $research): void
    {
        // Handle updates to IKU flags
        if ($research->wasChanged('is_reputable_publication') && $research->is_reputable_publication) {
            $research->ikuReports()->firstOrCreate([
                'iku_number' => 'IKU 6',
            ], [
                'status' => 'draft',
            ]);
        }

        if ($research->wasChanged('is_policy_relevant') && $research->is_policy_relevant) {
            $research->ikuReports()->firstOrCreate([
                'iku_number' => 'IKU 8',
            ], [
                'status' => 'draft',
            ]);
        }
    }
}
