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
        $tables = ['academic_profiles', 'researches', 'community_services'];

        foreach ($tables as $tableName) {
            Schema::table($tableName, function (Blueprint $table) {
                $table->enum('reporting_status', ['pending', 'success', 'failed'])->default('pending')->after('updated_at');
                $table->timestamp('reported_at')->nullable()->after('reporting_status');
            });
        }
    }

    public function down(): void
    {
        $tables = ['academic_profiles', 'researches', 'community_services'];

        foreach ($tables as $tableName) {
            Schema::table($tableName, function (Blueprint $table) {
                $table->dropColumn(['reporting_status', 'reported_at']);
            });
        }
    }
};
