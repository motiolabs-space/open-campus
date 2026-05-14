<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleAndUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Define roles
        $roles = ['superadmin', 'admin_kampus', 'dosen', 'mahasiswa', 'industri'];
        
        foreach ($roles as $role) {
            \Spatie\Permission\Models\Role::firstOrCreate(['name' => $role]);
        }

        // Create Super Admin
        $superAdmin = \App\Models\User::firstOrCreate(
            ['email' => 'admin@oscn.id'],
            [
                'name' => 'Super Administrator',
                'password' => bcrypt('password'),
                'role' => 'superadmin',
                'headline' => 'System Administrator at OSCN',
            ]
        );
        $superAdmin->assignRole('superadmin');

        // Create Mahasiswa Dummy
        $mahasiswa = \App\Models\User::firstOrCreate(
            ['email' => 'mahasiswa@kampus.ac.id'],
            [
                'name' => 'Budi Santoso',
                'password' => bcrypt('password'),
                'role' => 'mahasiswa',
                'headline' => 'Computer Science Student',
                'bio' => 'Interested in AI and Web Development.',
                'impact_score' => 150,
            ]
        );
        $mahasiswa->assignRole('mahasiswa');
        $mahasiswa->academicProfile()->firstOrCreate([
            'nim_nidn' => '20261001',
            'faculty' => 'Fakultas Ilmu Komputer',
            'department' => 'Teknik Informatika',
            'batch_year' => '2023',
        ]);

        // Create Dosen Dummy
        $dosen = \App\Models\User::firstOrCreate(
            ['email' => 'dosen@kampus.ac.id'],
            [
                'name' => 'Dr. Sarah Jenkins',
                'password' => bcrypt('password'),
                'role' => 'dosen',
                'headline' => 'Associate Professor in AI',
                'bio' => 'Focusing on Deep Learning and Natural Language Processing.',
                'impact_score' => 850,
            ]
        );
        $dosen->assignRole('dosen');
        $dosen->academicProfile()->firstOrCreate([
            'nim_nidn' => '0011223344',
            'faculty' => 'Fakultas Ilmu Komputer',
            'department' => 'Sistem Informasi',
        ]);
        
        // Create Industry Dummy
        $industry = \App\Models\User::firstOrCreate(
            ['email' => 'hr@techcorp.com'],
            [
                'name' => 'TechCorp HR',
                'password' => bcrypt('password'),
                'role' => 'industri',
                'headline' => 'Talent Acquisition at TechCorp',
            ]
        );
        $industry->assignRole('industri');
    }
}
