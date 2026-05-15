<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[Fillable([
    'user_id', 
    'type', 
    'id_number', 
    'nik', 
    'place_of_birth', 
    'date_of_birth', 
    'gender', 
    'mother_name', 
    'nidn', 
    'nisn', 
    'faculty_id', 
    'department_id', 
    'entry_period', 
    'pddikti_id',
    'sinta_id',
    'scopus_id',
    'googlescholar_id',
    'h_index',
    'iku_category'
])]
class AcademicProfile extends Model
{
    /** @use HasFactory<\Database\Factories\AcademicProfileFactory> */
    use HasFactory;

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function faculty(): BelongsTo
    {
        return $this->belongsTo(Faculty::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }
}
