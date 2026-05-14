<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MbkmLogbook extends Model
{
    protected $fillable = [
        'mbkm_activity_id',
        'date',
        'activity_details',
        'hours_spent',
        'attachment_path',
        'is_verified_by_mentor',
    ];

    public function activity()
    {
        return $this->belongsTo(MbkmActivity::class, 'mbkm_activity_id');
    }}
