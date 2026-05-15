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
        Schema::table('researches', function (Blueprint $table) {
            $table->text('impact_statement')->nullable()->after('title');
        });
        Schema::table('community_services', function (Blueprint $table) {
            $table->text('impact_statement')->nullable()->after('title');
        });
        Schema::table('student_achievements', function (Blueprint $table) {
            $table->text('impact_statement')->nullable()->after('rank');
        });
        Schema::table('mbkm_activities', function (Blueprint $table) {
            $table->text('impact_statement')->nullable()->after('company_name');
        });
        Schema::table('bkd_activities', function (Blueprint $table) {
            $table->text('impact_statement')->nullable()->after('description');
        });
    }

    public function down(): void
    {
        Schema::table('researches', function (Blueprint $table) {
            $table->dropColumn('impact_statement');
        });
        Schema::table('community_services', function (Blueprint $table) {
            $table->dropColumn('impact_statement');
        });
        Schema::table('student_achievements', function (Blueprint $table) {
            $table->dropColumn('impact_statement');
        });
        Schema::table('mbkm_activities', function (Blueprint $table) {
            $table->dropColumn('impact_statement');
        });
        Schema::table('bkd_activities', function (Blueprint $table) {
            $table->dropColumn('impact_statement');
        });
    }
};
