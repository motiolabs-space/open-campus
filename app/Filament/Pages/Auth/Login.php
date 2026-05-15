<?php

namespace App\Filament\Pages\Auth;

use Filament\Auth\Pages\Login as BaseLogin;
use Illuminate\Contracts\View\View;

class Login extends BaseLogin
{
    public function render(): View
    {
        return view('filament.pages.auth.login')
            ->layout('filament-panels::components.layout.base');
    }
}
