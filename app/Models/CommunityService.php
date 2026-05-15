<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['title', 'scheme', 'leader_id', 'location', 'funding_amount', 'academic_year', 'status', 'reporting_status', 'reported_at'])]
class CommunityService extends Model
{
    public function leader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'leader_id');
    }
}
