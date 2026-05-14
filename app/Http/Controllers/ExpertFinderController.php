<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpertFinderController extends Controller
{
    public function index(Request $request)
    {
        $query = User::role('dosen');

        if ($request->search) {
            $query->where(function($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                  ->orWhere('headline', 'like', "%{$request->search}%")
                  ->orWhere('skills', 'like', "%{$request->search}%");
            });
        }

        $experts = $query->orderBy('impact_score', 'desc')->get();

        return Inertia::render('Experts/Index', [
            'experts' => $experts,
            'filters' => $request->only(['search'])
        ]);
    }

    public function show(User $user)
    {
        if (!$user->hasRole('dosen')) {
            abort(404);
        }

        return Inertia::render('Experts/Show', [
            'expert' => $user
        ]);
    }
}
