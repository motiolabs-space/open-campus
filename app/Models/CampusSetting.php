<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CampusSetting extends Model
{
    protected $fillable = [
        'siakad_url',
        'siakad_key',
        'pddikti_url',
        'pddikti_username',
        'pddikti_password',
        'discovery_api_url',
    ];
}
