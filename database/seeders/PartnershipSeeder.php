<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PartnershipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Partnership::create([
            'partner_name' => 'Google Indonesia',
            'partner_type' => 'Industry',
            'mou_number' => 'MoU/2026/GOOG-001',
            'title' => 'Kerjasama Program Bangkit & MBKM Digital',
            'scope_of_work' => 'Pelaksanaan program magang bersertifikat dan studi independen bagi mahasiswa di bidang Cloud Computing dan Machine Learning.',
            'start_date' => '2026-01-01',
            'end_date' => '2026-12-31',
            'status' => 'active',
            'iku_category' => 'IKU 6',
            'user_id' => 1,
        ]);

        \App\Models\Partnership::create([
            'partner_name' => 'National University of Singapore (NUS)',
            'partner_type' => 'University',
            'mou_number' => 'MoU/2026/NUS-INT-04',
            'title' => 'Joint Research & Lecturer Exchange',
            'scope_of_work' => 'Kolaborasi riset di bidang Bio-Informatika dan pertukaran dosen tamu untuk peningkatan kualitas pembelajaran internasional.',
            'start_date' => '2025-06-01',
            'end_date' => '2026-05-30', // Soon to expire
            'status' => 'active',
            'iku_category' => 'IKU 6',
            'user_id' => 1,
        ]);

        \App\Models\Partnership::create([
            'partner_name' => 'Kementerian Sosial RI',
            'partner_type' => 'Government',
            'mou_number' => 'MoU/2024/KEMENSOS-092',
            'title' => 'Penguatan Ekonomi Desa via MBKM Membangun Desa',
            'scope_of_work' => 'Penerjunan mahasiswa ke 50 desa tertinggal untuk program pemberdayaan ekonomi masyarakat.',
            'start_date' => '2024-01-01',
            'end_date' => '2024-12-31',
            'status' => 'expired',
            'iku_category' => 'IKU 6',
            'user_id' => 1,
        ]);
    }
}
