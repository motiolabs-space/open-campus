<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class IkuReport extends Model
{
    protected $fillable = [
        'iku_number',
        'reportable_id',
        'reportable_type',
        'status',
        'correction_notes',
        'is_reviewed',
        'api_response',
        'evidence_path',
        'reported_at',
        'verified_at',
    ];

    protected $casts = [
        'api_response' => 'array',
        'is_reviewed' => 'boolean',
        'reported_at' => 'datetime',
        'verified_at' => 'datetime',
    ];

    public function reportable(): MorphTo
    {
        return $this->morphTo();
    }
}
