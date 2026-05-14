<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResearchProject extends Model
{
    protected $fillable = [
        'user_id', 'title', 'description', 'category', 'status', 
        'sdg_target', 'funding_source', 'budget', 
        'industry_partner_name', 'is_collaborative', 'required_expertise'
    ];

    protected $casts = [
        'required_expertise' => 'array',
        'is_collaborative' => 'boolean',
        'budget' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
