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
        Schema::table('organizational_units', function (Blueprint $table) {
            $table->string('type')->default('department')->after('name'); // university, faculty, department, division, etc.
            $table->string('code')->nullable()->after('type');
            $table->text('description')->nullable()->after('code');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('organizational_units', function (Blueprint $table) {
            //
        });
    }
};
