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
        Schema::table('iku_reports', function (Blueprint $table) {
            $table->text('correction_notes')->nullable()->after('status');
            $table->boolean('is_reviewed')->default(false)->after('correction_notes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('iku_reports', function (Blueprint $table) {
            $table->dropColumn(['correction_notes', 'is_reviewed']);
        });
    }
};
