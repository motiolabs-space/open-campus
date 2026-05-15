<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CampusDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $campus = \App\Models\Campus::create([
            'name' => 'Universitas Indonesia',
            'slug' => 'ui',
            'domain' => 'ui.ac.id'
        ]);

        $faculty = $campus->faculties()->create([
            'name' => 'Fakultas Teknik',
            'code' => 'FT'
        ]);

        $faculty->departments()->createMany([
            ['name' => 'Teknik Informatika', 'code' => 'TI'],
            ['name' => 'Teknik Elektro', 'code' => 'TE'],
            ['name' => 'Teknik Sipil', 'code' => 'TS'],
        ]);

        \App\Models\OrganizationalUnit::create([
            'name' => 'Rektorat',
        ]);
    }
}
