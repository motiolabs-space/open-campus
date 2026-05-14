<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class IkuEvidence extends Model
{
    use HasFactory;

    protected $table = 'iku_evidence';

    protected $fillable = [
        'user_id',
        'campus_id',
        'file_path',
        'original_filename',
        'mime_type',
        'iku_category',
        'ai_ocr_text',
        'ai_analysis',
        'status',
        'description', // I will add this to the table later or just use it in fillable if I update migration
    ];

    protected $casts = [
        'ai_analysis' => 'array',
        'iku_category' => 'integer',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
