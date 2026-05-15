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
            $table->string('sinta_id')->nullable()->after('pddikti_id');
            $table->string('scopus_id')->nullable()->after('sinta_id');
            $table->string('googlescholar_id')->nullable()->after('scopus_id');
            $table->integer('h_index')->default(0)->after('googlescholar_id');
            $table->string('iku_category')->nullable()->comment('Category for Indikator Kinerja Utama')->after('h_index');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('academic_profiles', function (Blueprint $table) {
            $table->dropColumn(['sinta_id', 'scopus_id', 'googlescholar_id', 'h_index', 'iku_category']);
        });
    }
};
