@filamentStyles
@filamentScripts

<div class="split-login-container">
    <!-- Left Column: Image -->
    <div class="login-visual">
        <img src="{{ asset('images/campus.png') }}" alt="Campus">
        <div class="visual-overlay"></div>
        <div class="visual-content">
            <h1>Open Source Campus Network</h1>
            <p>Membangun Ekosistem Akademik Digital yang Transparan dan Terintegrasi.</p>
        </div>
    </div>

    <!-- Right Column: Form -->
    <div class="login-form-side">
        <div class="form-wrapper">
            <div class="login-header">
                <div class="logo-container">
                    <img src="{{ asset('images/logo.png') }}" alt="Logo">
                </div>
                <h2>Selamat Datang</h2>
                <p>Silakan masukkan kredensial admin Anda</p>
            </div>

            <div class="filament-form-card">
                <form wire:submit.prevent="authenticate" class="space-y-8">
                    {{ $this->form }}

                    <button type="submit" class="login-submit-btn">
                        Sign In to Dashboard
                    </button>
                </form>
            </div>

            <footer class="login-footer">
                <p>Powered by <span>OSCN</span></p>
            </footer>
        </div>
    </div>
</div>

<style>
    :root {
        --primary-blue: #1e3a8a;
        --text-gray: #4b5563;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', system-ui, sans-serif;
        overflow: hidden;
    }

    .split-login-container {
        display: flex;
        min-height: 100vh;
        background-color: #f9fafb;
    }

    /* Visual Side */
    .login-visual {
        display: none;
        position: relative;
        width: 50%;
        background-color: var(--primary-blue);
        overflow: hidden;
    }

    @media (min-width: 1024px) {
        .login-visual {
            display: block;
        }
    }

    .login-visual img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }

    .visual-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(30, 58, 138, 0.9), transparent);
    }

    .visual-content {
        position: absolute;
        bottom: 80px;
        left: 60px;
        color: white;
        z-index: 10;
        max-width: 80%;
    }

    .visual-content h1 {
        font-size: 3rem;
        font-weight: 800;
        margin: 0;
        line-height: 1.1;
    }

    .visual-content p {
        font-size: 1.25rem;
        margin-top: 20px;
        opacity: 0.9;
        font-weight: 300;
    }

    /* Form Side */
    .login-form-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 40px 20px;
        background-color: white;
    }

    @media (min-width: 1024px) {
        .login-form-side {
            width: 50%;
            padding: 0 80px;
        }
    }

    .form-wrapper {
        width: 100%;
        max-width: 420px;
        margin: 0 auto;
    }

    .login-header {
        text-align: center;
        margin-bottom: 40px;
    }

    .logo-container {
        display: inline-block;
        padding: 12px;
        background: white;
        border-radius: 20px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        margin-bottom: 24px;
    }

    .logo-container img {
        height: 64px;
        width: auto;
    }

    .login-header h2 {
        font-size: 1.875rem;
        font-weight: 700;
        color: #111827;
        margin: 0;
    }

    .login-header p {
        color: var(--text-gray);
        margin-top: 8px;
        font-size: 0.875rem;
    }

    /* Card Styling */
    .filament-form-card {
        background: white;
        padding: 40px;
        border-radius: 24px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        border: 1px solid #f3f4f6;
    }

    .login-footer {
        margin-top: 40px;
        text-align: center;
    }

    .login-footer p {
        font-size: 0.875rem;
        color: #9ca3af;
    }

    .login-footer span {
        font-weight: 700;
        color: #2563eb;
        letter-spacing: 0.05em;
    }

    .login-submit-btn {
        width: 100%;
        padding: 12px 24px;
        background-color: var(--primary-blue);
        color: white;
        border: none;
        border-radius: 12px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s;
        margin-top: 24px;
        box-shadow: 0 4px 6px -1px rgba(30, 58, 138, 0.2);
    }

    .login-submit-btn:hover {
        background-color: #1e40af;
        transform: translateY(-1px);
        box-shadow: 0 10px 15px -3px rgba(30, 58, 138, 0.3);
    }

    .login-submit-btn:active {
        transform: translateY(0);
    }

    /* Dark Mode Overrides */
    @media (prefers-color-scheme: dark) {
        .login-form-side { background-color: #030712; }
        .login-header h2 { color: white; }
        .filament-form-card { 
            background: rgba(17, 24, 39, 0.5); 
            border-color: #1f2937;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
    }

    /* Hide Filament's own wrappers */
    .fi-layout, .fi-simple-page { display: contents !important; }
</style>


