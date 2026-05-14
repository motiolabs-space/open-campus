import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useState, FormEventHandler } from 'react';
import InputError from '@/Components/InputError';

export default function Register() {
    const { appName } = usePage().props as any;
    
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '',
    });

    const handleRoleSelect = (role: string) => {
        setSelectedRole(role);
        setData('role', role);
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // Since the UI doesn't have a separate confirmation field in this step, 
        // we'll pass the same password for confirmation.
        setData('password_confirmation', data.password);
        
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col">
            <Head title={`Pendaftaran | ${appName}`} />

            {/* Top Navigation Bar */}
            <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-sm flex justify-between items-center px-6 h-16 w-full sticky top-0 z-50 font-manrope antialiased">
                <Link href={route('welcome')} className="text-xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
                    {appName}
                </Link>
                <div className="flex items-center gap-4">
                    <span className="font-label-md text-on-surface-variant hidden md:inline">Sudah punya akun?</span>
                    <Link href={route('login')} className="font-label-md text-primary hover:underline transition-colors">Masuk</Link>
                </div>
            </header>

            <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex-grow w-full flex flex-col items-center">
                {/* Registration Container */}
                <div className="w-full max-w-5xl">
                    
                    {/* Stepper Progress Indicator */}
                    <div className="mb-stack-lg w-full max-w-4xl mx-auto">
                        <div className="flex items-center justify-between relative px-2">
                            {/* Progress Line Background */}
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-high -translate-y-1/2 z-0"></div>
                            {/* Progress Line Active */}
                            <div 
                                className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 z-0 transition-all duration-500"
                                style={{ 
                                    width: step === 1 ? '0%' : step === 2 ? '50%' : '100%',
                                    background: 'linear-gradient(90deg, #004ac6 0%, #2563eb 100%)'
                                }}
                            ></div>
                            
                            {/* Step 1 */}
                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors ${step >= 1 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant border-2 border-surface-container-high'}`}>
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <span className={`font-label-sm ${step >= 1 ? 'text-primary' : 'text-on-surface-variant'}`}>Pilih Peran</span>
                            </div>
                            {/* Step 2 */}
                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors ${step >= 2 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant border-2 border-surface-container-high'}`}>
                                    <span className="material-symbols-outlined">badge</span>
                                </div>
                                <span className={`font-label-sm ${step >= 2 ? 'text-primary' : 'text-on-surface-variant'}`}>Detail Akun</span>
                            </div>
                            {/* Step 3 */}
                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${step >= 3 ? 'bg-primary text-on-primary shadow-md' : 'bg-surface-container-highest text-on-surface-variant border-2 border-surface-container-high'}`}>
                                    <span className="material-symbols-outlined">school</span>
                                </div>
                                <span className={`font-label-sm ${step >= 3 ? 'text-primary' : 'text-on-surface-variant'}`}>Informasi Akademik</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Canvas */}
                    <div className="bg-white rounded-[1.5rem] p-stack-lg shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] w-full">
                        
                        {step === 1 && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="text-center mb-stack-lg">
                                    <h1 className="font-headline-lg text-on-surface mb-2">Pilih Peran Anda</h1>
                                    <p className="font-body-md text-on-surface-variant mb-6">Pilih peran yang paling sesuai dengan aktivitas akademik Anda.</p>
                                    
                                    <div className="max-w-md mx-auto p-4 bg-surface-container-low border border-outline-variant rounded-2xl">
                                        <p className="text-sm text-on-surface-variant mb-3">Cara Tercepat & Teraman:</p>
                                        <a href={route('login.sso')} className="flex items-center justify-center gap-3 w-full py-3 bg-primary text-white rounded-xl font-headline-md text-body-md shadow-md hover:bg-surface-tint active:scale-[0.98] transition-all">
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>domain</span>
                                            <span>Daftar / Masuk dengan SSO Kampus</span>
                                        </a>
                                    </div>

                                    <div className="relative flex py-6 items-center max-w-lg mx-auto">
                                        <div className="flex-grow border-t border-outline-variant"></div>
                                        <span className="flex-shrink mx-4 text-outline font-label-sm text-xs uppercase tracking-widest">Atau Daftar Manual</span>
                                        <div className="flex-grow border-t border-outline-variant"></div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[
                                        { id: 'mahasiswa', icon: 'school', title: 'Mahasiswa', desc: 'S1, S2, atau Kandidat Doktor.', bg: 'bg-primary/10', text: 'text-primary' },
                                        { id: 'dosen', icon: 'magnification_small', title: 'Dosen', desc: 'Anggota fakultas dan peneliti aktif.', bg: 'bg-tertiary/10', text: 'text-tertiary' },
                                        { id: 'alumni', icon: 'workspace_premium', title: 'Alumni', desc: 'Tetap terhubung dengan almamater.', bg: 'bg-secondary/10', text: 'text-secondary' },
                                        { id: 'admin_kampus', icon: 'account_balance', title: 'Admin Kampus', desc: 'Pengelola program studi atau fakultas.', bg: 'bg-on-surface-variant/10', text: 'text-on-surface-variant' },
                                        { id: 'industri', icon: 'corporate_fare', title: 'Industri', desc: 'Perekrut atau kolaborator perusahaan.', bg: 'bg-primary-container/10', text: 'text-primary-container' },
                                        { id: 'practitioner', icon: 'engineering', title: 'Praktisi', desc: 'Profesional yang berkontribusi di akademi.', bg: 'bg-tertiary-container/10', text: 'text-tertiary-container' },
                                    ].map((role) => (
                                        <button 
                                            key={role.id}
                                            onClick={() => handleRoleSelect(role.id)}
                                            className={`group p-8 bg-surface-container-low rounded-[1.5rem] text-center transition-all hover:bg-white hover:shadow-xl hover:scale-[1.02] border-2 ${selectedRole === role.id ? 'border-primary' : 'border-transparent hover:border-primary-fixed'} flex flex-col items-center`}
                                        >
                                            <div className={`w-20 h-20 ${role.bg} ${role.text} rounded-full flex items-center justify-center mb-6 transition-colors ${selectedRole === role.id ? 'bg-primary text-white' : 'group-hover:bg-primary group-hover:text-white'}`}>
                                                <span className="material-symbols-outlined text-4xl">{role.icon}</span>
                                            </div>
                                            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{role.title}</h3>
                                            <p className="font-label-sm text-label-sm text-on-surface-variant">{role.desc}</p>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-end pt-4 border-t border-surface-container-high">
                                    <button 
                                        onClick={() => { if(selectedRole) setStep(2) }}
                                        disabled={!selectedRole}
                                        className={`px-8 py-3 rounded-full font-label-md shadow-lg transition-all flex items-center gap-2 ${selectedRole ? 'bg-primary text-on-primary hover:bg-primary-container active:scale-95' : 'bg-surface-dim text-on-surface-variant cursor-not-allowed'}`}
                                    >
                                        Lanjutkan ke Detail Akun
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <div className="text-center mb-stack-lg">
                                    <h1 className="font-headline-lg text-on-surface mb-2">Detail Akun</h1>
                                    <p className="font-body-md text-on-surface-variant">Lengkapi informasi dasar Anda untuk memulai perjalanan akademik.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                                    {/* Left Column: Illustration */}
                                    <div className="hidden md:block md:col-span-5">
                                        <div className="h-full min-h-[400px] rounded-[1.5rem] overflow-hidden relative group">
                                            <img 
                                                alt="Academic Collaboration" 
                                                className="w-full h-full object-cover" 
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvYR6Gdj4CTHJB0dPEeITGCbulfGmTvmJnw3PTuUBK_QPNSa_kDc04ZQXNy2HduiurBa8nZulhQWMr-zjbp7NLtBUdQuN3LouDGJFshWFIuKB770irSIjQpPoXS1vfTHXPceH4dwrgvXH0-l55Anq6UQI8hK1VE5_TF-V43_44uLvkTjFfe44zeB5ShSNBaZa-8sq_OlnoCPIAvkycA9XIp6CvyOfHmCa7gvgsrVxfUZ9ff2GxC1aL3Dfp7_0Vt4kfy9a2nLta7J8"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-6">
                                                <p className="text-white font-body-md font-medium italic">"Bergabunglah dengan ribuan peneliti dan mahasiswa di seluruh Indonesia."</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Form Fields */}
                                    <div className="md:col-span-7 flex flex-col justify-center max-w-md mx-auto w-full">
                                        <div className="mb-6 flex justify-end">
                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-bold text-xs uppercase tracking-wider">
                                                Peran: {selectedRole}
                                            </span>
                                        </div>
                                        
                                        <form onSubmit={submit} className="space-y-stack-md">
                                            {/* Name Field */}
                                            <div className="space-y-1">
                                                <label className="font-label-md text-on-surface-variant ml-1">Nama Lengkap</label>
                                                <div className="relative">
                                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">person</span>
                                                    <input 
                                                        className={`w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none ${errors.name ? 'border-error' : ''}`}
                                                        placeholder="Masukkan nama sesuai identitas" 
                                                        type="text"
                                                        value={data.name}
                                                        onChange={(e) => setData('name', e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <InputError message={errors.name} className="mt-1" />
                                            </div>
                                            
                                            {/* Email Field */}
                                            <div className="space-y-1">
                                                <label className="font-label-md text-on-surface-variant ml-1">Email</label>
                                                <div className="relative">
                                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                                                    <input 
                                                        className={`w-full pl-12 pr-4 py-3 bg-surface-container-low rounded-xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none ${errors.email ? 'border-error' : ''}`}
                                                        placeholder="nama@kampus.ac.id" 
                                                        type="email"
                                                        value={data.email}
                                                        onChange={(e) => setData('email', e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <InputError message={errors.email} className="mt-1" />
                                            </div>
                                            
                                            {/* Password Field */}
                                            <div className="space-y-1">
                                                <label className="font-label-md text-on-surface-variant ml-1">Kata Sandi</label>
                                                <div className="relative">
                                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                                                    <input 
                                                        className={`w-full pl-12 pr-12 py-3 bg-surface-container-low rounded-xl border-2 border-transparent focus:border-primary focus:bg-white transition-all outline-none ${errors.password ? 'border-error' : ''}`}
                                                        placeholder="Minimal 8 karakter" 
                                                        type={showPassword ? "text" : "password"}
                                                        value={data.password}
                                                        onChange={(e) => setData('password', e.target.value)}
                                                        required
                                                    />
                                                    <button 
                                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary" 
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    >
                                                        <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                                    </button>
                                                </div>
                                                <InputError message={errors.password} className="mt-1" />
                                            </div>

                                            <div className="pt-stack-md flex items-center justify-between gap-4">
                                                <button 
                                                    className="flex-1 px-6 py-3 font-label-md text-primary bg-surface-container-low hover:bg-surface-container-high rounded-full transition-all flex items-center justify-center gap-2" 
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                >
                                                    <span className="material-symbols-outlined">arrow_back</span>
                                                    Kembali
                                                </button>
                                                <button 
                                                    className="flex-[2] px-6 py-3 font-label-md text-on-primary bg-primary hover:bg-primary-container rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-75 disabled:cursor-wait" 
                                                    type="submit"
                                                    disabled={processing}
                                                >
                                                    {processing ? 'Memproses...' : 'Lanjutkan'}
                                                    <span className="material-symbols-outlined">arrow_forward</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contextual Helper: Research Interests Preview */}
                    <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-gutter">
                        <div className="bg-surface-container-low p-6 rounded-[1.5rem] flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined">verified_user</span>
                            </div>
                            <h3 className="font-label-md text-on-surface mb-1">Keamanan Data</h3>
                            <p className="font-label-sm text-on-surface-variant leading-relaxed">Enkripsi tingkat tinggi untuk seluruh data akademik Anda.</p>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[1.5rem] flex flex-col items-center text-center border-2 border-primary/10">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined">groups</span>
                            </div>
                            <h3 className="font-label-md text-on-surface mb-1">Jejaring Luas</h3>
                            <p className="font-label-sm text-on-surface-variant leading-relaxed">Terhubung dengan 500+ Institusi Pendidikan di Indonesia.</p>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-[1.5rem] flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined">auto_graph</span>
                            </div>
                            <h3 className="font-label-md text-on-surface mb-1">Dampak Nyata</h3>
                            <p className="font-label-sm text-on-surface-variant leading-relaxed">Pantau perkembangan sitasi dan dampak penelitian Anda.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer for Legal */}
            <footer className="mt-auto py-8 px-6 text-center border-t border-surface-container">
                <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <a className="font-label-sm text-on-surface-variant hover:text-primary" href="#">Kebijakan Privasi</a>
                    <a className="font-label-sm text-on-surface-variant hover:text-primary" href="#">Syarat & Ketentuan</a>
                    <a className="font-label-sm text-on-surface-variant hover:text-primary" href="#">Bantuan</a>
                </div>
                <p className="font-label-sm text-outline">© {new Date().getFullYear()} {appName}. Hak Cipta Dilindungi.</p>
            </footer>
        </div>
    );
}
