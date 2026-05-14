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
        Schema::create('partnerships', function (Blueprint $table) {
            $table->id();
            $table->string('partner_name');
            $table->string('partner_type'); // Industry, University, Government, NGO
            $table->string('mou_number')->unique();
            $table->string('title');
            $table->text('scope_of_work');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('status')->default('active'); // active, expired, pending, terminating
            $table->string('document_path')->nullable();
            $table->string('iku_category')->nullable(); // IKU 6, IKU 10, etc.
            $table->json('impact_metrics')->nullable();
            $table->foreignId('user_id')->constrained(); // Person in charge (Dosen/Admin)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partnerships');
    }
};
