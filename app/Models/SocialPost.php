<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class SocialPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'campus_id',
        'content',
        'type',
        'media',
        'metadata',
        'sdg_tag',
    ];

    protected $casts = [
        'media' => 'array',
        'metadata' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(SocialComment::class);
    }

    public function likes(): MorphMany
    {
        return $this->morphMany(SocialLike::class, 'likeable');
    }
}
