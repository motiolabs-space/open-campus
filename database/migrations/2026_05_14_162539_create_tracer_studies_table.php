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
        Schema::create('tracer_studies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->enum('status', ['working', 'studying', 'entrepreneur', 'searching', 'other']);
            
            // For 'working' status
            $table->string('company_name')->nullable();
            $table->string('job_title')->nullable();
            $table->string('salary_range')->nullable(); // e.g., < 1.2 UMP, 1.2-3 UMP, > 3 UMP
            
            // For 'entrepreneur' status
            $table->string('business_name')->nullable();
            $table->string('business_sector')->nullable();
            
            // For 'studying' status
            $table->string('institution_name')->nullable();
            $table->string('study_program')->nullable();
            
            $table->date('graduation_date');
            $table->date('start_date')->nullable(); // when they started the current status
            $table->text('notes')->nullable();
            
            $table->boolean('is_verified')->default(false);
            $table->foreignId('verified_by')->nullable()->constrained('users');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracer_studies');
    }
};
