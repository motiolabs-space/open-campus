<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\HasMany;

class Campus extends Model
{
    protected $fillable = ['name', 'domain', 'slug', 'description', 'logo_path'];

    public function faculties(): HasMany
    {
        return $this->hasMany(Faculty::class);
    }
}
