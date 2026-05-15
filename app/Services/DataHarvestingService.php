<?php

namespace App\Services;

use App\Models\SocialPost;
use App\Models\StudentAchievement;
use App\Models\Research;
use App\Models\MbkmActivity;
use Illuminate\Support\Str;

class DataHarvestingService
{
    public function harvest(SocialPost $post)
    {
        $content = $post->content;
        $harvested = [];

        // 1. Harvest Achievement (#prestasi)
        if (Str::contains(Str::lower($content), '#prestasi')) {
            $this->createAchievementDraft($post);
            $harvested[] = 'Achievement Draft Created';
        }

        // 2. Harvest Research (#riset)
        if (Str::contains(Str::lower($content), '#riset')) {
            $this->createResearchDraft($post);
            $harvested[] = 'Research Draft Created';
        }

        // 3. Harvest MBKM (#magang / #mbkm)
        if (Str::contains(Str::lower($content), ['#magang', '#mbkm'])) {
            $this->createMbkmDraft($post);
            $harvested[] = 'MBKM Activity Draft Created';
        }

        // Store impact in post metadata for social feed display
        $impact = $this->extractImpact($content);
        if ($impact) {
            $metadata = $post->metadata ?? [];
            $metadata['impact'] = $impact;
            $post->update(['metadata' => $metadata]);
        }

        return $harvested;
    }

    private function extractImpact($content)
    {
        $impactKeywords = [
            'membantu', 'meningkatkan', 'mengurangi', 'menghasilkan', 
            'menyelesaikan', 'membangun', 'kontribusi', 'impact', 
            'hasilnya', 'dampaknya', 'bermanfaat', 'solusi'
        ];

        $sentences = explode('.', $content);
        foreach ($sentences as $sentence) {
            foreach ($impactKeywords as $keyword) {
                if (stripos($sentence, $keyword) !== false) {
                    return trim($sentence);
                }
            }
        }

        return null;
    }

    protected function createAchievementDraft(SocialPost $post)
    {
        StudentAchievement::create([
            'user_id' => $post->user_id,
            'title' => Str::limit($post->content, 100),
            'level' => 'national',
            'rank' => 'participant',
            'organizer' => 'Detected from Social Post',
            'year' => now()->year,
            'reporting_status' => 'pending',
            'impact_statement' => $this->extractImpact($post->content)
        ]);
    }

    protected function createResearchDraft(SocialPost $post)
    {
        Research::create([
            'leader_id' => $post->user_id,
            'title' => Str::limit($post->content, 150),
            'scheme' => 'mandiri',
            'academic_year' => now()->year,
            'status' => 'ongoing',
            'reporting_status' => 'pending',
            'impact_statement' => $this->extractImpact($post->content)
        ]);
    }

    protected function createMbkmDraft(SocialPost $post)
    {
        MbkmActivity::create([
            'user_id' => $post->user_id,
            'type' => 'internship',
            'title' => Str::limit($post->content, 100),
            'company_name' => 'Detected from Social Post',
            'start_date' => now(),
            'status' => 'ongoing',
            'reporting_status' => 'pending',
            'impact_statement' => $this->extractImpact($post->content)
        ]);
    }
}
