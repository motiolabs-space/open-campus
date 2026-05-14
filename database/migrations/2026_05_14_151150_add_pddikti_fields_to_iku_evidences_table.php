<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('iku_evidence', function (Blueprint $table) {
            $table->boolean('is_pddikti_synced')->default(false)->after('ai_analysis');
            $table->string('pddikti_sync_ref')->nullable()->after('is_pddikti_synced');
        });
    }

    public function down(): void
    {
        Schema::table('iku_evidence', function (Blueprint $table) {
            $table->dropColumn(['is_pddikti_synced', 'pddikti_sync_ref']);
        });
    }
};
