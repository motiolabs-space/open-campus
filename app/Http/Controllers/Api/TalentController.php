<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class TalentController extends Controller
{
    public function index()
    {
        $talents = User::role('student')
            ->with('academicProfile')
            ->orderByDesc('impact_score')
            ->paginate(12);

        return response()->json($talents);
    }

    public function show(User $user)
    {
        $user->load(['academicProfile', 'ikuEvidences' => function($query) {
            $query->where('status', 'verified');
        }]);

        return response()->json($user);
    }
}
