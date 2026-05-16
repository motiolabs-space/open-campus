@filamentStyles
@filamentScripts
<link rel="icon" href="data:;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAAAAB3u9SAAAAAnRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN793KAAAAFklEQVR4AWP4z/AfDBgYmBggDAf/f2CA8P8/A4TBAKkBCAEAIQADAIQA" />
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">

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
                <h1>OSCN Dashboard</h1>
                <p>Open Source Campus Network • Bridge 2.0</p>
            </div>

            <div class="login-body">
                @livewire('notifications')

                @if (session()->has('error') || $errors->any())
                    <div class="login-alert-error">
                        @if (session()->has('error'))
                            {{ session('error') }}
                        @else
                            Email atau password salah.
                        @endif
                    </div>
                @endif

                <form wire:submit.prevent="authenticate" class="premium-form">
                    {{ $this->form }}

                    <button type="submit" class="premium-submit-btn">
                        <span>Sign In to System</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="btn-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </form>
            </div>

            <div class="login-footer">
                <p>© 2026 Powered by <span>Advanced Campus Engine</span></p>
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

    body {
        margin: 0;
        font-family: 'Outfit', sans-serif;
        overflow: hidden;
        background-color: #f0f9ff;
    }

    .premium-login-root {
        position: relative;
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle at top left, #e0f2fe 0%, #f0f9ff 100%);
    }

    /* Animated Background */
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

    .circle-1 {
        width: 500px;
        height: 500px;
        background: #bae6fd;
        top: -100px;
        left: -100px;
    }

    .circle-2 {
        width: 400px;
        height: 400px;
        background: #7dd3fc;
        bottom: -50px;
        right: -50px;
        animation-delay: -5s;
    }

    .circle-3 {
        width: 300px;
        height: 300px;
        background: #38bdf8;
        top: 40%;
        right: 20%;
        animation-delay: -10s;
    }

    @keyframes float {
        0% { transform: translate(0, 0) scale(1); }
        100% { transform: translate(100px, 50px) scale(1.1); }
    }

    /* Card Container */
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

    .login-header {
        text-align: center;
        margin-bottom: 32px;
    }

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

    .main-logo {
        height: 48px;
        width: auto;
    }

    .login-header h1 {
        font-size: 1.75rem;
        font-weight: 800;
        color: #0f172a;
        margin: 0;
        letter-spacing: -0.025em;
    }

    .login-header p {
        font-size: 0.875rem;
        color: #64748b;
        margin-top: 4px;
    }

    /* Form Styling */
    .premium-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

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

    .premium-submit-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
        box-shadow: 0 20px 25px -5px rgba(14, 165, 233, 0.4);
    }

    .premium-submit-btn:active {
        transform: translateY(0);
    }

    .btn-icon {
        width: 20px;
        height: 20px;
        transition: transform 0.3s;
    }

    .premium-submit-btn:hover .btn-icon {
        transform: translateX(4px);
    }

    .login-alert-error {
        background-color: #fef2f2;
        border: 1px solid #fee2e2;
        color: #b91c1c;
        padding: 12px;
        border-radius: 14px;
        font-size: 0.875rem;
        margin-bottom: 24px;
        text-align: center;
        font-weight: 600;
        animation: shake 0.5s both;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    .login-footer {
        margin-top: 32px;
        text-align: center;
    }

    .login-footer p {
        font-size: 0.75rem;
        color: #94a3b8;
    }

    .login-footer span {
        font-weight: 600;
        color: var(--primary);
    }

    /* Override Filament Styles to match premium look */
    .fi-input-wrp {
        border-radius: 14px !important;
        border-color: #e2e8f0 !important;
        background: white !important;
    }

    .fi-input-wrp:focus-within {
        border-color: var(--primary) !important;
        box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1) !important;
    }

    /* Hide Filament's own wrappers */
    .fi-layout, .fi-simple-page { display: contents !important; }
</style>
