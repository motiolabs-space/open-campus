<?php

namespace App\Http\Controllers;

use App\Models\Partnership;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartnershipController extends Controller
{
    public function index()
    {
        $partnerships = Partnership::with('user')
            ->orderBy('end_date', 'asc')
            ->get();

        return Inertia::render('Partnerships/Index', [
            'partnerships' => $partnerships
        ]);
    }

    public function show(Partnership $partnership)
    {
        $partnership->load('user');
        
        return Inertia::render('Partnerships/Show', [
            'partnership' => $partnership
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'partner_name' => 'required|string',
            'partner_type' => 'required|string',
            'mou_number' => 'required|string|unique:partnerships',
            'title' => 'required|string',
            'scope_of_work' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'iku_category' => 'nullable|string',
        ]);

        $partnership = Partnership::create([
            ...$validated,
            'user_id' => auth()->id(),
            'status' => 'active'
        ]);

        return redirect()->route('partnerships.index')
            ->with('message', 'MoU berhasil didaftarkan ke sistem!');
    }
}
