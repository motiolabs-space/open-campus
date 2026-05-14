<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TracerStudy extends Model
{
    protected $fillable = [
        'user_id',
        'status',
        'company_name',
        'job_title',
        'salary_range',
        'business_name',
        'business_sector',
        'institution_name',
        'study_program',
        'graduation_date',
        'start_date',
        'notes',
        'is_verified',
        'verified_by',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function verifier()
    {
        return $this->belongsTo(User::class, 'verified_by');
    }}
