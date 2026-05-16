<div class="premium-login-root">
    <div class="animated-bg">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
    </div>

    <div class="login-card-container">
        <div class="glass-card">
            <div class="login-header">
                <div class="logo-wrapper">
                    <img src="{{ asset('images/logo.png') }}" alt="Logo" class="main-logo">
                </div>
                <h1>Selamat Datang</h1>
                <p>Dashboard Kampus Terintegrasi • Bridge 2.0</p>

                @if ($errors->any())
                    <div class="login-alert-error">
                        @foreach ($errors->all() as $error)
                            <p>{{ $error }}</p>
                        @endforeach
                    </div>
                @elseif (session()->has('error'))
                    <div class="login-alert-error">
                        {{ session('error') }}
                    </div>
                @endif
            </div>

            <div class="login-body">
                <form wire:submit.prevent="authenticate" class="premium-form">
                    @csrf
                    {{ $this->form }}

                    <button type="submit" class="premium-submit-btn" wire:loading.attr="disabled">
                        <span wire:loading.remove>Sign In to Dashboard</span>
                        <span wire:loading>Authenticating...</span>
                        <svg wire:loading.remove xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="btn-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </form>

                <p class="login-hint">Gunakan kredensial institusi untuk akses dashboard.</p>
            </div>

            <div class="login-footer">
                <p>Powered by <a href="https://github.com/motiolabs-space/open-campus/" target="_blank"><span>OSCN</span></a></p>
            </div>
        </div>
    </div>
</div>

<style>
    :root {
        --primary: #0ea5e9;
        --primary-dark: #0284c7;
        --glass-bg: rgba(255, 255, 255, 0.7);
        --glass-border: rgba(255, 255, 255, 0.3);
    }

    /* Target the root of the base layout to make it full screen */
    .fi-layout {
        display: none !important;
    }

    .premium-login-root {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle at top left, #e0f2fe 0%, #f0f9ff 100%);
        font-family: 'Outfit', sans-serif;
    }

    .animated-bg {
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
    }

    .circle {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.4;
        animation: float 20s infinite alternate;
    }

    .circle-1 { width: 500px; height: 500px; background: #bae6fd; top: -100px; left: -100px; }
    .circle-2 { width: 400px; height: 400px; background: #7dd3fc; bottom: -50px; right: -50px; animation-delay: -5s; }
    .circle-3 { width: 300px; height: 300px; background: #38bdf8; top: 40%; right: 20%; animation-delay: -10s; }

    @keyframes float {
        0% { transform: translate(0, 0) scale(1); }
        100% { transform: translate(100px, 50px) scale(1.1); }
    }

    .login-card-container {
        position: relative;
        z-index: 10;
        width: 100%;
        max-width: 450px;
        padding: 20px;
    }

    .glass-card {
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-radius: 32px;
        padding: 48px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
        animation: fadeInScale 0.6s ease-out;
    }

    @keyframes fadeInScale {
        from { opacity: 0; transform: scale(0.95) translateY(10px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
    }

    .login-header { text-align: center; margin-bottom: 32px; }

    .logo-wrapper {
        width: 80px;
        height: 80px;
        background: white;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 20px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    }

    .main-logo { height: 48px; width: auto; }

    .login-header h1 {
        font-size: 1.75rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0;
        letter-spacing: -0.025em;
    }

    .login-header p { font-size: 0.875rem; color: #64748b; margin-top: 4px; }

    .premium-form { display: flex; flex-direction: column; gap: 20px; }

    .premium-submit-btn {
        width: 100%;
        background: var(--primary);
        color: white;
        border: none;
        padding: 14px;
        border-radius: 16px;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.3);
        margin-top: 10px;
    }

    .premium-submit-btn:hover:not(:disabled) {
        background: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 20px 25px -5px rgba(14, 165, 233, 0.4);
    }

    .premium-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

    .btn-icon { width: 20px; height: 20px; transition: transform 0.3s; }
    .premium-submit-btn:hover .btn-icon { transform: translateX(4px); }

    .login-alert-error {
        color: #ef4444;
        font-size: 0.875rem;
        margin-top: 16px;
        text-align: center;
        font-weight: 600;
        animation: shake 0.5s both;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    .login-footer { margin-top: 32px; text-align: center; }
    .login-footer p { font-size: 0.75rem; color: #94a3b8; }
    .login-hint { text-align: center; font-size: 0.8rem; color: #cbd5e1; margin-top: 16px; }
    .login-footer a { text-decoration: none; }
    .login-footer span { font-weight: 600; color: var(--primary); }

    /* Aggressive Overrides to combat Filament Dark Mode */
    .glass-card label, 
    .glass-card .fi-fo-field-wrp-label label,
    .glass-card .fi-checkbox-label,
    .glass-card span:not(.premium-submit-btn span) { 
        color: #1e293b !important; 
        font-weight: 600 !important;
        opacity: 1 !important;
        visibility: visible !important;
    }

    .fi-input-wrp { 
        border-radius: 14px !important; 
        border-color: #cbd5e1 !important; 
        background: white !important; 
        box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05) !important;
    }

    .fi-input-wrp input { 
        color: #0f172a !important; 
        background: transparent !important;
    }

    .fi-checkbox-input { 
        appearance: checkbox !important; 
        width: 1.25rem !important; 
        height: 1.25rem !important;
        border-color: #cbd5e1 !important;
    }

    /* Fix for Filament 3 Base Layout */
    .fi-simple-main { width: 100% !important; max-width: none !important; padding: 0 !important; }
    
    /* Ensure no background interference from base layout */
    .fi-layout-simple { background: transparent !important; }
</style>
