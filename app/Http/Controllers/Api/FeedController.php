<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SocialPost;
use Illuminate\Http\Request;

class FeedController extends Controller
{
    public function index()
    {
        $posts = SocialPost::with(['user', 'comments.user'])
            ->latest()
            ->paginate(15);

        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string|max:1000',
        ]);

        $post = SocialPost::create([
            'user_id' => auth()->id(),
            'content' => $request->content,
            'type' => 'text'
        ]);

        return response()->json($post->load('user'), 201);
    }
}
