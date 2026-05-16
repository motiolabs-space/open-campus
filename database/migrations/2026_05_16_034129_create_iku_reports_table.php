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
        Schema::create('iku_reports', function (Blueprint $table) {
            $table->id();
            $table->string('iku_number'); 
            $table->morphs('reportable'); 
            $table->enum('status', ['draft', 'synced', 'verified', 'rejected'])->default('draft');
            $table->json('api_response')->nullable();
            $table->string('evidence_path')->nullable();
            $table->timestamp('reported_at')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('iku_reports');
    }
};
