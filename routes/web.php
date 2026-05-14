<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return redirect()->route('network.index');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/network', [\App\Http\Controllers\NetworkController::class, 'index'])->name('network.index');
    Route::post('/network', [\App\Http\Controllers\NetworkController::class, 'store'])->name('network.store');
    Route::post('/network/{post}/comment', [\App\Http\Controllers\NetworkController::class, 'comment'])->name('network.comment');
    
    Route::get('/my-profile', function () {
        return Inertia::render('Profile/Show');
    })->name('profile.show');
    
    Route::get('/lecturer-profile', function () {
        return Inertia::render('Profile/Lecturer');
    })->name('profile.lecturer');
    Route::get('/campus', function () {
        return Inertia::render('Campus/Show');
    })->name('campus.show');
    Route::get('/project', function () {
        return Inertia::render('Project/Show');
    })->name('project.show');
    Route::get('/discover', function () {
        return Inertia::render('Project/Index');
    })->name('project.index');
    Route::get('/jobs', function () {
        return Inertia::render('Job/Index');
    })->name('job.index');
    Route::get('/industry', function () {
        return Inertia::render('Industry/Show');
    })->name('industry.show');
    Route::get('/missions', function () {
        return Inertia::render('Mission/Index');
    })->name('mission.index');
    Route::get('/badges', function () {
        return Inertia::render('Badge/Index');
    })->name('badge.index');
    Route::get('/challenges', function () {
        return Inertia::render('Challenge/Index');
    })->name('challenge.index');
    Route::get('/impact', function () {
        return Inertia::render('Impact/Index');
    })->name('impact.index');
    Route::get('/admin/evidence', function () {
        return Inertia::render('Admin/EvidenceReview');
    })->name('admin.evidence');
    Route::get('/messages', function () {
        return Inertia::render('Message/Index');
    })->name('messages.index');
    Route::get('/notifications', function () {
        return Inertia::render('Notification/Index');
    })->name('notifications.index');
    Route::get('/search', function () {
        return Inertia::render('Search/Index');
    })->name('search.index');
    Route::get('/learning', function () {
        return Inertia::render('Learning/Index');
    })->name('learning.index');
    Route::get('/learning/show', function () {
        return Inertia::render('Learning/Show');
    })->name('learning.show');
    Route::get('/job/logbook', function () {
        return Inertia::render('Job/Logbook');
    })->name('job.logbook');
    Route::get('/community', function () {
        return Inertia::render('Community/Show');
    })->name('community.show');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // AI IKU Engine Prototype Route
    Route::post('/ai/analyze-evidence', [\App\Http\Controllers\AIEngineController::class, 'analyzeEvidence'])->name('ai.analyze');
});

require __DIR__.'/auth.php';
