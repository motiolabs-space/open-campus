<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Attributes\Fillable;

#[Fillable(['source_name', 'amount', 'category', 'academic_year', 'evidence_link', 'description', 'status'])]
class InstitutionalIncome extends Model
{
    //
}
