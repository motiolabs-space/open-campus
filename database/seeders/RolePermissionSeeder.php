<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'lppm']);
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'dosen']);
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'mahasiswa']);

        $admin = \App\Models\User::first();
        if ($admin) {
            $admin->assignRole('lppm');
        }
    }
}
