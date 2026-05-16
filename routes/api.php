<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\FeedController;
use App\Http\Controllers\Api\TalentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public Auth Routes (Throttled)
Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:5,1'); // 5 attempts per minute

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Social Feed
    Route::get('/feed', [FeedController::class, 'index']);
    Route::post('/feed', [FeedController::class, 'store']);

    // Talent Pool
    Route::get('/talents', [TalentController::class, 'index']);
    Route::get('/talents/{user}', [TalentController::class, 'show']);
});
