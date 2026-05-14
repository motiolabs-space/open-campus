<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EvidenceController;
use App\Http\Controllers\MarketplaceController;
use App\Http\Controllers\TalentController;
use App\Http\Controllers\NetworkController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\PddiktiController;
use App\Http\Controllers\TracerStudyController;
use App\Http\Controllers\MbkmController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

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
    Route::get('/marketplace', [MarketplaceController::class, 'index'])->name('marketplace.index');
    Route::get('/marketplace/job/{job}', [MarketplaceController::class, 'show'])->name('marketplace.show');
    Route::post('/marketplace/job/{job}/apply', [MarketplaceController::class, 'apply'])->name('marketplace.apply');
    
    Route::get('/talents', [TalentController::class, 'index'])->name('talents.index');
    Route::get('/talents/{user}', [TalentController::class, 'show'])->name('talents.show');
    Route::get('/talents/{user}/qr', function (App\Models\User $user, App\Services\QRService $qr) {
        return response($qr->generateStudentQR($user->id))->header('Content-Type', 'image/png');
    })->name('talents.qr');
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
    Route::middleware(['role:admin_kampus|superadmin|dosen'])->group(function () {
        Route::get('/admin/dashboard', [AnalyticsController::class, 'adminDashboard'])->name('admin.dashboard');
        Route::get('/admin/report/export', [AnalyticsController::class, 'exportReport'])->name('admin.report.export');
        Route::get('/admin/evidence', [EvidenceController::class, 'adminIndex'])->name('admin.evidence');
        Route::post('/admin/evidence/{evidence}/verify', [EvidenceController::class, 'verify'])->name('admin.evidence.verify');
        
        // PDDIKTI Sync
        Route::post('/admin/pddikti/sync/{evidence}', [PddiktiController::class, 'syncEvidence'])->name('admin.pddikti.sync');
        Route::post('/admin/pddikti/bulk-sync', [PddiktiController::class, 'bulkSync'])->name('admin.pddikti.bulk-sync');
    });
    
    Route::get('/evidence', [EvidenceController::class, 'index'])->name('evidence.index');
    Route::get('/evidence/create', [EvidenceController::class, 'create'])->name('evidence.create');
    Route::post('/evidence', [EvidenceController::class, 'store'])->name('evidence.store');
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

    Route::get('/tracer-study', [TracerStudyController::class, 'index'])->name('tracer.index');
    Route::post('/tracer-study', [TracerStudyController::class, 'store'])->name('tracer.store');

    Route::get('/mbkm', [MbkmController::class, 'index'])->name('mbkm.index');
    Route::post('/mbkm/activity', [MbkmController::class, 'storeActivity'])->name('mbkm.activity.store');
    Route::get('/mbkm/activity/{activity}/logbook', [MbkmController::class, 'showLogbook'])->name('mbkm.logbook');
    Route::post('/mbkm/activity/{activity}/logbook', [MbkmController::class, 'storeLogbook'])->name('mbkm.logbook.store');

    Route::get('/job/logbook', function () {
        return redirect()->route('mbkm.index');
    })->name('job.logbook');
    Route::get('/community', function () {
        return Inertia::render('Community/Show');
    })->name('community.show');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // AI IKU Engine Prototype Route
    Route::post('/ai/analyze-evidence', [\App\Http\Controllers\AIEngineController::class, 'analyzeEvidence'])->name('ai.analyze');

    // IKU Analytics Dashboard
    Route::get('/iku/analytics', [\App\Http\Controllers\IkuAnalyticsController::class, 'index'])->name('iku.analytics');

    // AI IKU Evaluator
    Route::post('/ai/evaluate-logbook/{logbook}', [\App\Http\Controllers\AIEngineController::class, 'evaluateLogbook'])->name('ai.logbook.evaluate');
});

require __DIR__.'/auth.php';
