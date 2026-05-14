<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partnership extends Model
{
    protected $fillable = [
        'partner_name', 'partner_type', 'mou_number', 'title', 
        'scope_of_work', 'start_date', 'end_date', 'status', 
        'document_path', 'iku_category', 'impact_metrics', 'user_id'
    ];

    protected $casts = [
        'impact_metrics' => 'array',
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
