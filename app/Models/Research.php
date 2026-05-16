<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Attributes\Fillable;

use App\Traits\IkuReportable;

#[Fillable(['title', 'impact_statement', 'scheme', 'leader_id', 'funding_source', 'funding_amount', 'academic_year', 'status', 'output_link', 'reporting_status', 'reported_at', 'is_policy_relevant', 'policy_impact_description', 'is_reputable_publication'])]
class Research extends Model
{
    use IkuReportable;

    protected $table = 'researches';
    public function leader(): BelongsTo
    {
        return $this->belongsTo(User::class, 'leader_id');
    }
}
