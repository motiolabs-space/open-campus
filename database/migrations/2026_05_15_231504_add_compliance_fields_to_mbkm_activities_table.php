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
        Schema::table('mbkm_activities', function (Blueprint $table) {
            $table->integer('credits')->default(20)->after('type');
            $table->string('mitra_category')->nullable()->after('company_name')->comment('Industri, QS100, Global, Nasional');
            $table->string('iku_category')->default('iku2')->after('status');
            $table->string('reporting_status')->default('pending')->after('iku_category');
            $table->timestamp('reported_at')->nullable()->after('reporting_status');
        });
    }

    public function down(): void
    {
        Schema::table('mbkm_activities', function (Blueprint $table) {
            $table->dropColumn(['credits', 'mitra_category', 'iku_category', 'reporting_status', 'reported_at']);
        });
    }
};
