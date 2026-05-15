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
        Schema::create('researches', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('scheme'); // e.g., Hibah Internal, PKM, Penelitian Dasar
            $table->foreignId('leader_id')->constrained('users')->onDelete('cascade');
            $table->string('funding_source')->nullable();
            $table->decimal('funding_amount', 15, 2)->default(0);
            $table->year('academic_year');
            $table->enum('status', ['proposed', 'ongoing', 'completed', 'reported'])->default('proposed');
            $table->string('output_link')->nullable(); // Link to paper/patent
            $table->timestamps();
        });

        Schema::create('community_services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('scheme');
            $table->foreignId('leader_id')->constrained('users')->onDelete('cascade');
            $table->string('location')->nullable();
            $table->decimal('funding_amount', 15, 2)->default(0);
            $table->year('academic_year');
            $table->enum('status', ['proposed', 'ongoing', 'completed', 'reported'])->default('proposed');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('community_services');
        Schema::dropIfExists('researches');
    }
};
