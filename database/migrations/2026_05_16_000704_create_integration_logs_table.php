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
        Schema::create('integration_logs', function (Blueprint $blueprint) {
            $blueprint->id();
            $blueprint->string('driver'); // siakad, pddikti
            $blueprint->string('direction'); // incoming, outgoing
            $blueprint->string('type'); // users, mbkm, research
            $blueprint->json('stats')->nullable();
            $blueprint->string('status'); // success, failed
            $blueprint->text('message')->nullable();
            $blueprint->timestamp('started_at')->nullable();
            $blueprint->timestamp('finished_at')->nullable();
            $blueprint->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('integration_logs');
    }
};
