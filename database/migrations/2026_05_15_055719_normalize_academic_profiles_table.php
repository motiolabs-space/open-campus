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
            $table->foreignId('faculty_id')->after('nim_nidn')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('department_id')->after('faculty_id')->nullable()->constrained()->nullOnDelete();
            $table->dropColumn(['faculty', 'department']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('academic_profiles', function (Blueprint $table) {
            $table->string('faculty')->nullable();
            $table->string('department')->nullable();
            $table->dropForeign(['faculty_id']);
            $table->dropForeign(['department_id']);
            $table->dropColumn(['faculty_id', 'department_id']);
        });
    }
};
