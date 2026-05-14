<?php

namespace Database\Seeders;

use App\Models\MarketplaceJob;
use App\Models\User;
use Illuminate\Database\Seeder;

class MarketplaceSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::role('superadmin')->first();

        if (!$admin) return;

        MarketplaceJob::create([
            'title' => 'Software Engineer Internship',
            'company_name' => 'TechCorp Indonesia',
            'description' => 'Kami mencari mahasiswa tingkat akhir yang antusias dengan pengembangan web menggunakan Laravel dan React. Anda akan bekerja langsung pada proyek real kami.',
            'location' => 'Jakarta / Remote',
            'work_type' => 'internship',
            'salary_range' => 'Rp 3.000.000 - 5.000.000',
            'requirements' => ['Menguasai PHP & JavaScript', 'Memahami Git', 'Dapat bekerja 20 jam per minggu'],
            'status' => 'open',
            'posted_by' => $admin->id
        ]);

        MarketplaceJob::create([
            'title' => 'Asisten Peneliti: AI for Education',
            'company_name' => 'Lab Riset Informatika UB',
            'description' => 'Membantu pengumpulan data dan training model untuk penelitian pemetaan kompetensi mahasiswa berbasis AI.',
            'location' => 'Malang (On-site)',
            'work_type' => 'research',
            'salary_range' => 'Hibah Kompetitif',
            'requirements' => ['Lulus mata kuliah AI', 'Bisa Python', 'IPK minimal 3.5'],
            'status' => 'open',
            'posted_by' => $admin->id
        ]);

        MarketplaceJob::create([
            'title' => 'Fullstack Developer (Junior)',
            'company_name' => 'Motiolabs Space',
            'description' => 'Membangun ekosistem open source untuk kampus. Posisi ini terbuka untuk fresh graduate yang memiliki portofolio IKU yang kuat.',
            'location' => 'Remote',
            'work_type' => 'full-time',
            'salary_range' => 'Rp 8.000.000 - 12.000.000',
            'requirements' => ['Laravel Native expert', 'React/Next.js experience', 'Passion for open source'],
            'status' => 'open',
            'posted_by' => $admin->id
        ]);
    }
}
