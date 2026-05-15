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
        Schema::create('bkd_periods', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('e.g., 2024/2025 Ganjil');
            $table->date('start_date');
            $table->date('end_date');
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });

        Schema::create('bkd_activities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('bkd_period_id')->constrained()->onDelete('cascade');
            $table->enum('category', ['pendidikan', 'penelitian', 'pengabdian', 'penunjang']);
            $table->string('title');
            $table->text('description')->nullable();
            $table->decimal('sks_count', 4, 2)->default(0);
            $table->string('evidence_path')->nullable();
            $table->enum('status', ['draft', 'submitted', 'approved', 'rejected'])->default('draft');
            $table->string('reporting_status')->default('pending'); // SISTER status
            $table->timestamp('reported_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bkd_activities');
        Schema::dropIfExists('bkd_periods');
    }
};
