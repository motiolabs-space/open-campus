<?php

namespace App\Http\Controllers;

use App\Models\SocialPost;
use App\Models\SocialComment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NetworkController extends Controller
{
    public function index()
    {
        $posts = SocialPost::with(['user' => function($query) {
                $query->select('id', 'name', 'avatar', 'headline');
            }, 'comments.user' => function($query) {
                $query->select('id', 'name', 'avatar');
            }, 'likes'])
            ->orderBy('created_at', 'desc')
            ->paginate(15);

        return Inertia::render('Network/Index', [
            'posts' => $posts
        ]);
    }

    public function store(Request $request, \App\Services\DataHarvestingService $harvester)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:2000',
            'sdg_tag' => 'nullable|integer|min:1|max:17',
        ]);

        $post = SocialPost::create([
            'user_id' => $request->user()->id,
            'content' => $validated['content'],
            'sdg_tag' => $validated['sdg_tag'] ?? null,
            'type' => 'post',
        ]);

        // Automatically harvest data for compliance reporting
        $harvested = $harvester->harvest($post);

        return redirect()->back()->with([
            'message' => 'Post created successfully!',
            'harvested' => $harvested
        ]);
    }

    public function comment(Request $request, SocialPost $post)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        SocialComment::create([
            'social_post_id' => $post->id,
            'user_id' => $request->user()->id,
            'content' => $validated['content'],
        ]);

        return redirect()->back();
    }
}
