<?php

namespace App\Http\Controllers;

use App\Models\MbkmActivity;
use App\Models\MbkmLogbook;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MbkmController extends Controller
{
    public function index()
    {
        $activities = MbkmActivity::where('user_id', auth()->id())
            ->withCount('logbooks')
            ->get();

        return Inertia::render('MBKM/Index', [
            'activities' => $activities
        ]);
    }

    public function showLogbook(MbkmActivity $activity)
    {
        // Authorize
        if ($activity->user_id !== auth()->id()) {
            abort(403);
        }

        $logbooks = $activity->logbooks()->orderBy('date', 'desc')->get();

        return Inertia::render('MBKM/Logbook', [
            'activity' => $activity,
            'logbooks' => $logbooks
        ]);
    }

    public function storeActivity(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|in:internship,research,student_exchange,entrepreneurship,village_project,teaching_assistance',
            'title' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'mentor_name' => 'nullable|string|max:255',
            'mentor_email' => 'nullable|email|max:255',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
        ]);

        $validated['user_id'] = auth()->id();
        MbkmActivity::create($validated);

        return redirect()->route('mbkm.index')->with('message', 'MBKM Activity registered successfully.');
    }

    public function storeLogbook(Request $request, MbkmActivity $activity)
    {
        if ($activity->user_id !== auth()->id()) {
            abort(403);
        }

        $validated = $request->validate([
            'date' => 'required|date',
            'activity_details' => 'required|string',
            'hours_spent' => 'required|integer|min:1|max:24',
            'attachment' => 'nullable|file|mimes:pdf,jpg,jpeg,png|max:2048', // Max 2MB
        ]);

        $logbookData = [
            'date' => $validated['date'],
            'activity_details' => $validated['activity_details'],
            'hours_spent' => $validated['hours_spent'],
        ];

        if ($request->hasFile('attachment')) {
            $path = $request->file('attachment')->store('mbkm/evidence', 'public');
            $logbookData['attachment_path'] = $path;
        }

        $activity->logbooks()->create($logbookData);

        return redirect()->route('mbkm.logbook', $activity->id)->with('message', 'Logbook entry added successfully.');
    }
}
