<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MarketplaceJob extends Model
{
    protected $fillable = [
        'title',
        'company_name',
        'company_logo',
        'description',
        'location',
        'work_type',
        'salary_range',
        'requirements',
        'status',
        'posted_by'
    ];

    protected $casts = [
        'requirements' => 'array',
    ];

    public function recruiter(): BelongsTo
    {
        return $this->belongsTo(User::class, 'posted_by');
    }

    public function applications(): HasMany
    {
        return $this->hasMany(JobApplication::class, 'job_id');
    }
}
