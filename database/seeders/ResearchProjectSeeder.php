<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ResearchProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\ResearchProject::create([
            'user_id' => 1,
            'title' => 'Pengembangan Smart Grid untuk Kampus Hijau',
            'description' => 'Proyek kolaboratif untuk mengoptimalkan penggunaan energi terbarukan di lingkungan kampus menggunakan AI dan IoT. Membutuhkan partner dari Teknik Elektro dan Industri Energi.',
            'category' => 'innovation',
            'status' => 'open',
            'sdg_target' => 7,
            'funding_source' => 'industrial',
            'budget' => 500000000,
            'industry_partner_name' => 'PT PLN Persero',
            'is_collaborative' => true,
            'required_expertise' => json_encode(['AI', 'IoT', 'Power Systems']),
        ]);

        \App\Models\ResearchProject::create([
            'user_id' => 1,
            'title' => 'Analisis Dampak Sosial MBKM Terhadap Desa Binaan',
            'description' => 'Penelitian multidisiplin untuk mengukur efektivitas program mahasiswa membangun desa terhadap peningkatan ekonomi lokal.',
            'category' => 'applied',
            'status' => 'in_progress',
            'sdg_target' => 1,
            'funding_source' => 'internal',
            'budget' => 75000000,
            'is_collaborative' => true,
            'required_expertise' => json_encode(['Sosiologi', 'Ekonomi', 'Data Analysis']),
        ]);

        \App\Models\ResearchProject::create([
            'user_id' => 1,
            'title' => 'Purwarupa Drone Pemetaan Pertanian Presisi',
            'description' => 'Inovasi drone otomatis untuk pemetaan kesehatan tanaman padi secara real-time. Siap untuk tahap industrialisasi.',
            'category' => 'innovation',
            'status' => 'open',
            'sdg_target' => 2,
            'funding_source' => 'government',
            'budget' => 1200000000,
            'is_collaborative' => true,
            'required_expertise' => json_encode(['Robotics', 'Agronomy', 'Computer Vision']),
        ]);
    }
}
