import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import InputError from '@/Components/InputError';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { appName } = usePage().props as any;
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="bg-background font-body-md text-on-background min-h-screen flex items-center justify-center p-0 md:p-stack-lg">
            <Head title={`Log in | ${appName}`} />
            
            <main className="w-full max-w-[1440px] min-h-[921px] bg-white rounded-none md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* Left Side: Visual & Value Proposition */}
                <section className="relative w-full md:w-1/2 min-h-[400px] md:min-h-full flex items-center justify-center overflow-hidden bg-primary">
                    <div className="absolute inset-0 z-0">
                        <img 
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
                            alt="A bright, high-key photograph of diverse university students collaborating" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUn_KL7kD3l6CnZjldIGfhsP-Aiho6w9Fc_OA2sfzzEkbAHA0Po-m72yLBlgWIYMMpQ7zIbUwfOyKuNUzevuFlykLOz4giiEi8yXLq17q2KfiPkFPGfk95ab6aIky4ChHFTj3NqIDT5DIejzPR6K_O1mITYyYv22_7F4kuCRDTkOfbcYgtIWUSLvMoG-h8aBoN3IYEIu1rZWab0GrorgmweNkr5YFYFk1HtKI39L4vmHNczscKLPsqxbbGSRedRT7Ftie8tGGR4c4"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/40 to-transparent z-10"></div>
                    <div className="relative z-20 p-margin-desktop max-w-lg">
                        <div className="mb-stack-lg">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-stack-md">
                                <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                                <span className="text-white font-label-md text-label-md">Pusat Akademik Digital</span>
                            </div>
                            <h1 className="font-display-lg text-display-lg text-white mb-stack-md">
                                Hubungkan Riset, Karier, dan Dampak Kampus
                            </h1>
                            <p className="font-body-lg text-body-lg text-white/90 leading-relaxed">
                                Bergabunglah dengan ribuan mahasiswa, peneliti, dan profesional dalam ekosistem akademik modern untuk membangun masa depan bersama.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-stack-md">
                            <div className="bg-white/80 backdrop-blur-md p-stack-md rounded-xl border border-white/10">
                                <span className="material-symbols-outlined text-on-primary-container mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                                <div className="text-white font-headline-md text-sm font-bold">150+</div>
                                <div className="text-white/70 text-xs">Universitas Mitra</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-md p-stack-md rounded-xl border border-white/10">
                                <span className="material-symbols-outlined text-on-primary-container mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>article</span>
                                <div className="text-white font-headline-md text-sm font-bold">12K+</div>
                                <div className="text-white/70 text-xs">Publikasi Riset</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Side: Login Form */}
                <section className="w-full md:w-1/2 flex items-center justify-center p-margin-mobile md:p-margin-desktop bg-white">
                    <div className="w-full max-w-md">
                        {/* Brand Anchor */}
                        <div className="mb-stack-lg">
                            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Selamat Datang</h2>
                            <p className="font-body-md text-on-surface-variant">Silakan masuk untuk melanjutkan ke Campus Network</p>
                        </div>

                        {status && (
                            <div className="mb-4 font-label-md text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-100">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-stack-md">
                            {/* Campus SSO Login */}
                            <div className="mb-stack-lg">
                                <a href={route('login.sso')} className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white rounded-xl font-headline-md text-body-md shadow-lg shadow-primary/20 hover:bg-surface-tint active:scale-[0.98] transition-all">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
                                    <span>Masuk dengan SSO Kampus</span>
                                </a>
                                <p className="text-center text-xs text-on-surface-variant mt-3">Satu akun terpusat untuk semua portal akademik dan ekosistem MBKM.</p>
                            </div>
                            
                            <div className="relative flex py-2 items-center">
                                <div className="flex-grow border-t border-outline-variant"></div>
                                <span className="flex-shrink mx-4 text-outline font-label-sm text-xs uppercase tracking-widest">Akses Alternatif / Superadmin</span>
                                <div className="flex-grow border-t border-outline-variant"></div>
                            </div>
                            
                            {/* Input Fields */}
                            <div className="space-y-stack-sm">
                                <div>
                                    <label className="block font-label-md text-on-surface mb-1" htmlFor="email">Email</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                                        <input 
                                            className={`w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none ${errors.email ? 'ring-2 ring-error' : ''}`}
                                            id="email" 
                                            name="email"
                                            placeholder="nama@universitas.ac.id" 
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            autoComplete="username"
                                        />
                                    </div>
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <label className="block font-label-md text-on-surface mb-1" htmlFor="password">Kata Sandi</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                                        <input 
                                            className={`w-full pl-12 pr-12 py-3 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none ${errors.password ? 'ring-2 ring-error' : ''}`}
                                            id="password" 
                                            name="password"
                                            placeholder="••••••••" 
                                            type={showPassword ? "text" : "password"}
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                            autoComplete="current-password"
                                        />
                                        <button 
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary focus:outline-none" 
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                        </button>
                                    </div>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                            </div>

                            {/* Options */}
                            <div className="flex items-center justify-between py-1">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input 
                                        className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-low transition-all" 
                                        type="checkbox"
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <span className="font-label-md text-sm text-on-surface-variant group-hover:text-on-surface">Ingat saya</span>
                                </label>
                                {canResetPassword && (
                                    <Link className="font-label-md text-sm text-primary hover:underline" href={route('password.request')}>
                                        Lupa kata sandi?
                                    </Link>
                                )}
                            </div>

                            {/* CTA */}
                            <div className="pt-stack-md space-y-stack-md">
                                <button 
                                    className="w-full py-4 bg-primary text-white rounded-xl font-headline-md text-body-md shadow-lg shadow-primary/20 hover:bg-surface-tint active:scale-[0.98] transition-all disabled:opacity-75 disabled:cursor-wait" 
                                    type="submit"
                                    disabled={processing}
                                >
                                    {processing ? 'Memproses...' : 'Masuk ke Campus Network'}
                                </button>
                                <p className="text-center text-on-surface-variant text-sm">
                                    Belum punya akun?{' '}
                                    <Link className="text-primary font-bold hover:underline" href={route('register')}>
                                        Daftar sekarang
                                    </Link>
                                </p>
                            </div>
                        </form>

                        {/* Footer */}
                        <footer className="mt-stack-lg pt-stack-lg border-t border-outline-variant/30 flex justify-between items-center text-xs text-outline font-label-sm">
                            <p>© {new Date().getFullYear()} {appName}</p>
                            <div className="flex gap-4">
                                <a className="hover:text-primary" href="#">Privasi</a>
                                <a className="hover:text-primary" href="#">Ketentuan</a>
                            </div>
                        </footer>
                    </div>
                </section>
            </main>
        </div>
    );
}
