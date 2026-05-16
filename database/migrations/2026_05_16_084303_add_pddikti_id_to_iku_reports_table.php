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
            $table->string('pddikti_id')->nullable()->after('reportable_id');
            $table->string('period')->nullable()->after('iku_number'); // e.g. 20241
            $table->enum('status', ['draft', 'synced', 'verified', 'reported', 'rejected'])->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('iku_reports', function (Blueprint $table) {
            $table->dropColumn(['pddikti_id', 'period']);
        });
    }
};
