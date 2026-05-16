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
        Schema::create('institutional_incomes', function (Blueprint $table) {
            $table->id();
            $table->string('source_name'); // e.g., "Kontrak Hilirisasi PT X"
            $table->decimal('amount', 15, 2);
            $table->string('category'); // research_contract, royalty, unit_usaha, other
            $table->year('academic_year');
            $table->string('evidence_link')->nullable(); // Link to contract/receipt
            $table->text('description')->nullable();
            $table->enum('status', ['draft', 'verified', 'reported'])->default('draft');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institutional_incomes');
    }
};
