<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Faculty extends Model
{
    protected $fillable = ['campus_id', 'name', 'code'];

    public function campus(): BelongsTo
    {
        return $this->belongsTo(Campus::class);
    }

    public function departments(): HasMany
    {
        return $this->hasMany(Department::class);
    }

    public function academicProfiles(): HasMany
    {
        return $this->hasMany(AcademicProfile::class);
    }
}
