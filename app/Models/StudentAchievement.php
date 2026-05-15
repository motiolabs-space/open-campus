<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentAchievement extends Model
{
    protected $fillable = [
        'user_id', 'title', 'level', 'rank', 'organizer', 'year', 
        'certificate_path', 'iku_category', 'reporting_status', 'reported_at'
    ];

    protected $casts = [
        'reported_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }}
