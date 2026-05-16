<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MbkmActivity extends Model
{
    protected $fillable = [
        'user_id',
        'type',
        'credits',
        'title',
        'company_name',
        'mitra_category',
        'mentor_name',
        'mentor_email',
        'start_date',
        'end_date',
        'status',
        'iku_category',
        'impact_statement',
        'reporting_status',
        'reported_at',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'reported_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function logbooks()
    {
        return $this->hasMany(MbkmLogbook::class);
    }}
