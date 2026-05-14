<?php

namespace App\Http\Controllers;

use App\Models\ResearchProject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResearchHubController extends Controller
{
    public function index()
    {
        $projects = ResearchProject::with('user')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('ResearchHub/Index', [
            'projects' => $projects
        ]);
    }

    public function show(ResearchProject $project)
    {
        $project->load('user');
        
        return Inertia::render('ResearchHub/Show', [
            'project' => $project
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string',
            'sdg_target' => 'nullable|integer',
            'budget' => 'required|numeric',
            'required_expertise' => 'nullable|array',
        ]);

        $project = ResearchProject::create([
            ...$validated,
            'user_id' => auth()->id(),
            'status' => 'open',
            'is_collaborative' => true
        ]);

        return redirect()->route('research-hub.index')
            ->with('message', 'Proyek riset berhasil dipublikasikan!');
    }
}
