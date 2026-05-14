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
        Schema::create('research_projects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Lead Researcher
            $table->string('title');
            $table->text('description');
            $table->string('category')->default('applied'); // applied, basic, innovation
            $table->string('status')->default('open'); // open, in_progress, completed, commercialized
            $table->integer('sdg_target')->nullable();
            $table->string('funding_source')->nullable(); // internal, industrial, government
            $table->bigInteger('budget')->default(0);
            $table->string('industry_partner_name')->nullable();
            $table->boolean('is_collaborative')->default(true);
            $table->json('required_expertise')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('research_projects');
    }
};
