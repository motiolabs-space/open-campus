<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        \App\Models\Research::observe(\App\Observers\ResearchObserver::class);
        \App\Models\InstitutionalIncome::observe(\App\Observers\InstitutionalIncomeObserver::class);
    }
}
