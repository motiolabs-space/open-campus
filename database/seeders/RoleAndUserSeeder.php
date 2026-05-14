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
        
        // Create Admin Kampus (LPPM / Penjamin Mutu)
        $adminKampus = \App\Models\User::firstOrCreate(
            ['email' => 'lppm@kampus.ac.id'],
            [
                'name' => 'Bagian Penjamin Mutu (LPPM)',
                'password' => bcrypt('password'),
                'role' => 'admin_kampus',
                'headline' => 'Lembaga Penelitian dan Pengabdian kepada Masyarakat',
                'bio' => 'Bertanggung jawab atas pengelolaan data IKU dan akreditasi kampus.',
            ]
        );
        $adminKampus->assignRole('admin_kampus');

        // Create Another Student (Active in MBKM)
        $mahasiswa2 = \App\Models\User::firstOrCreate(
            ['email' => 'ani.wijaya@kampus.ac.id'],
            [
                'name' => 'Ani Wijaya',
                'password' => bcrypt('password'),
                'role' => 'mahasiswa',
                'headline' => 'Mahasiswa Berprestasi | MBKM Awardee',
                'bio' => 'Aktif dalam kegiatan magang industri dan pengabdian masyarakat.',
                'impact_score' => 420,
            ]
        );
        $mahasiswa2->assignRole('mahasiswa');
        $mahasiswa2->academicProfile()->firstOrCreate([
            'nim_nidn' => '20261002',
            'faculty' => 'Fakultas Ekonomi',
            'department' => 'Manajemen',
            'batch_year' => '2022',
        ]);
        
        // Create Industry Partner (Recruiter)
        $industry = \App\Models\User::firstOrCreate(
            ['email' => 'recruitment@google.com'],
            [
                'name' => 'Google Indonesia Recruitment',
                'password' => bcrypt('password'),
                'role' => 'industri',
                'headline' => 'University Graduate Recruiter',
                'bio' => 'Mencari talenta terbaik dari universitas mitra untuk program magang dan full-time.',
            ]
        );
        $industry->assignRole('industri');
    }
}
