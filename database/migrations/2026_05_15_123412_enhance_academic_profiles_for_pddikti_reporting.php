<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('academic_profiles', function (Blueprint $table) {
            // Profiling
            $table->string('type')->default('mahasiswa')->after('user_id'); // mahasiswa, dosen, pegawai
            $table->string('id_number')->nullable()->after('type'); // Replacement for nim_nidn
            
            // Identitas Kependudukan
            $table->string('nik', 16)->nullable()->after('id_number');
            $table->string('place_of_birth')->nullable()->after('nik');
            $table->date('date_of_birth')->nullable()->after('place_of_birth');
            $table->enum('gender', ['L', 'P'])->nullable()->after('date_of_birth');
            
            // Data Ibu Kandung (Wajib PDDIKTI)
            $table->string('mother_name')->nullable()->after('gender');
            
            // Identitas Akademik
            $table->string('nidn', 20)->nullable()->after('id_number'); // Untuk Dosen
            $table->string('nisn', 20)->nullable()->after('nidn');      // Untuk Mahasiswa
            
            // Status & Periode
            $table->string('entry_period', 5)->nullable()->after('nisn'); // Contoh: 20241
            $table->string('pddikti_id')->nullable()->after('entry_period'); // Untuk menyimpan UUID dari Neo Feeder
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('academic_profiles', function (Blueprint $table) {
            //
        });
    }
};
