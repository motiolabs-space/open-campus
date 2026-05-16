<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IntegrationLog extends Model
{
    protected $fillable = [
        'driver',
        'direction',
        'type',
        'stats',
        'status',
        'message',
        'started_at',
        'finished_at',
    ];

    protected $casts = [
        'stats' => 'array',
        'started_at' => 'datetime',
        'finished_at' => 'datetime',
    ];
}
