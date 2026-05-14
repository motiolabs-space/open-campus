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
        Schema::table('mbkm_logbooks', function (Blueprint $table) {
            $table->json('ai_validation_result')->nullable()->after('is_verified_by_mentor');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('mbkm_logbooks', function (Blueprint $table) {
            $table->dropColumn('ai_validation_result');
        });
    }
};
