<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IkuTargetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $targets = [
            ['iku_id' => '1', 'year' => 2026, 'target_value' => 80, 'unit' => 'percentage'],
            ['iku_id' => '2', 'year' => 2026, 'target_value' => 25, 'unit' => 'count'],
            ['iku_id' => '3', 'year' => 2026, 'target_value' => 30, 'unit' => 'count'],
            ['iku_id' => '4', 'year' => 2026, 'target_value' => 15, 'unit' => 'count'],
            ['iku_id' => '5', 'year' => 2026, 'target_value' => 50, 'unit' => 'count'],
            ['iku_id' => '6', 'year' => 2026, 'target_value' => 20, 'unit' => 'count'],
        ];

        foreach ($targets as $target) {
            \App\Models\IkuTarget::create($target);
        }
    }
}
