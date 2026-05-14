<?php

namespace App\Http\Controllers;

use App\Models\TracerStudy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TracerStudyController extends Controller
{
    public function index()
    {
        $tracer = TracerStudy::where('user_id', auth()->id())->first();
        
        return Inertia::render('TracerStudy/Form', [
            'existingTracer' => $tracer
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'status' => 'required|in:working,studying,entrepreneur,searching,other',
            'company_name' => 'nullable|string|max:255',
            'job_title' => 'nullable|string|max:255',
            'salary_range' => 'nullable|string',
            'business_name' => 'nullable|string|max:255',
            'business_sector' => 'nullable|string|max:255',
            'institution_name' => 'nullable|string|max:255',
            'study_program' => 'nullable|string|max:255',
            'graduation_date' => 'required|date',
            'start_date' => 'nullable|date',
            'notes' => 'nullable|string',
        ]);

        TracerStudy::updateOrCreate(
            ['user_id' => auth()->id()],
            $validated
        );

        return redirect()->route('tracer.index')->with('message', 'Tracer study data has been updated successfully.');
    }
}
