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
        Schema::create('campus_settings', function (Blueprint $table) {
            $table->id();
            // Siakad
            $table->string('siakad_url')->nullable();
            $table->string('siakad_key')->nullable();
            
            // Pddikti Neo Feeder
            $table->string('pddikti_url')->nullable();
            $table->string('pddikti_username')->nullable();
            $table->string('pddikti_password')->nullable();
            
            // Pddikti Discovery
            $table->string('discovery_api_url')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campus_settings');
    }
};
