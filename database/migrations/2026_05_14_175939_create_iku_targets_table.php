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
        Schema::create('iku_targets', function (Blueprint $table) {
            $table->id();
            $table->string('iku_id'); // 1, 2, 3...
            $table->integer('year');
            $table->integer('target_value');
            $table->string('unit'); // percentage, count, etc.
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('iku_targets');
    }
};
