<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BkdActivity extends Model
{
    protected $fillable = [
        'user_id', 'bkd_period_id', 'category', 'title', 'description', 
        'sks_count', 'evidence_path', 'status', 'reporting_status', 'reported_at'
    ];

    protected $casts = [
        'reported_at' => 'datetime',
        'sks_count' => 'decimal:2',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function period()
    {
        return $this->belongsTo(BkdPeriod::class, 'bkd_period_id');
    }}
