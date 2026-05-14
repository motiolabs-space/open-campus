<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SocialPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = \App\Models\User::all();

        if ($users->count() === 0) {
            $this->command->info('No users found. Please seed users first.');
            return;
        }

        // For each user, create 1-3 random posts
        foreach ($users as $user) {
            \App\Models\SocialPost::factory(rand(1, 3))->create([
                'user_id' => $user->id,
            ]);
        }
        
        // Let's create some comments and likes
        $posts = \App\Models\SocialPost::all();
        foreach ($posts as $post) {
            // Random comments
            $numComments = rand(0, 3);
            for ($i = 0; $i < $numComments; $i++) {
                \App\Models\SocialComment::create([
                    'social_post_id' => $post->id,
                    'user_id' => $users->random()->id,
                    'content' => fake()->sentence(),
                ]);
            }
            
            // Random likes
            $numLikes = rand(0, 5);
            $likerUsers = $users->random(min($numLikes, $users->count()));
            foreach ($likerUsers as $liker) {
                \App\Models\SocialLike::firstOrCreate([
                    'user_id' => $liker->id,
                    'likeable_id' => $post->id,
                    'likeable_type' => \App\Models\SocialPost::class,
                ]);
            }
        }
    }
}
