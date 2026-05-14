<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MbkmActivity extends Model
{
    protected $fillable = [
        'user_id',
        'type',
        'title',
        'company_name',
        'mentor_name',
        'mentor_email',
        'start_date',
        'end_date',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function logbooks()
    {
        return $this->hasMany(MbkmLogbook::class);
    }}
