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
        Schema::create('student_achievements', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->comment('Student');
            $table->string('title');
            $table->string('level')->comment('International, National, Provincial, Campus');
            $table->string('rank')->comment('1st, 2nd, 3rd, Finalist, Participant');
            $table->string('organizer');
            $table->year('year');
            $table->string('certificate_path')->nullable();
            $table->string('iku_category')->default('iku2');
            $table->string('reporting_status')->default('pending');
            $table->timestamp('reported_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_achievements');
    }
};
