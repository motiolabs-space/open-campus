<?php

namespace App\Providers\Filament;

use App\Filament\Pages\Auth\Login;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\PreventRequestForgery;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Filament\View\PanelsRenderHook;
use Illuminate\Support\Facades\Blade;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login(Login::class)
            ->darkMode(false)
            ->favicon(asset('images/logo.png'))
            ->colors([
                'primary' => Color::Sky,
                'gray' => Color::Slate,
            ])
            ->renderHook(
                PanelsRenderHook::HEAD_START,
                fn (): string => Blade::render('
                    <meta name="title" content="{{ env(\'SEO_TITLE\') }}">
                    <meta name="description" content="{{ env(\'SEO_DESCRIPTION\') }}">
                    <meta name="keywords" content="{{ env(\'SEO_KEYWORDS\') }}">
                    <meta name="author" content="{{ env(\'SEO_AUTHOR\') }}">
                    <meta property="og:type" content="website">
                    <meta property="og:url" content="{{ url()->current() }}">
                    <meta property="og:title" content="{{ env(\'SEO_TITLE\') }}">
                    <meta property="og:description" content="{{ env(\'SEO_DESCRIPTION\') }}">
                    <meta property="og:image" content="{{ env(\'SEO_OG_IMAGE\') }}">
                    <meta property="twitter:card" content="summary_large_image">
                    <meta property="twitter:url" content="{{ url()->current() }}">
                    <meta property="twitter:title" content="{{ env(\'SEO_TITLE\') }}">
                    <meta property="twitter:description" content="{{ env(\'SEO_DESCRIPTION\') }}">
                    <meta property="twitter:image" content="{{ env(\'SEO_OG_IMAGE\') }}">
                '),
            )
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([
                AccountWidget::class,
                FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                PreventRequestForgery::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
