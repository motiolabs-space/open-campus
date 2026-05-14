<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TalentController extends Controller
{
    public function index()
    {
        $talents = User::role('student')
            ->with('academicProfile')
            ->orderByDesc('impact_score')
            ->paginate(12);

        return Inertia::render('Talent/Index', [
            'talents' => $talents
        ]);
    }

    public function show(User $user)
    {
        $user->load(['academicProfile', 'ikuEvidences' => function($query) {
            $query->where('status', 'verified');
        }]);

        return Inertia::render('Talent/Show', [
            'talent' => $user
        ]);
    }
}
