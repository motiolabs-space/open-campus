import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Campus Network | Bangun Jejaring Akademik & Karier" />
            
            <div className="bg-surface font-body-md text-on-surface min-h-screen">
                {/* TopNavBar */}
                <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm font-manrope antialiased">
                    <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 h-20">
                        <div className="text-2xl font-extrabold tracking-tight text-blue-600">Campus Network</div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-500 transition-all duration-200" href="#">Students</a>
                            <a className="text-gray-600 font-medium hover:text-blue-500 transition-all duration-200" href="#">Lecturers</a>
                            <a className="text-gray-600 font-medium hover:text-blue-500 transition-all duration-200" href="#">Campuses</a>
                            <a className="text-gray-600 font-medium hover:text-blue-500 transition-all duration-200" href="#">Industry</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-6 py-2 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 active:scale-[0.98] transition-all"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-4 py-2 text-blue-600 font-semibold hover:opacity-80 transition-all"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-6 py-2 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 active:scale-[0.98] transition-all"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="pt-32 pb-20 px-6">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-label-md">
                                <span className="material-symbols-outlined text-[18px]">verified</span>
                                <span>Empowering Academic Synergy</span>
                            </div>
                            <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
                                Bangun Jejaring Akademik, Karier, Riset, dan Dampak Kampus
                            </h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                                Platform terbuka untuk mahasiswa, dosen, alumni, kampus, dan industri berkolaborasi secara nyata dalam satu ekosistem yang terintegrasi.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                <button className="flex flex-col items-center justify-center p-4 bg-surface-container-low rounded-xl border border-transparent hover:border-primary transition-all group">
                                    <span className="material-symbols-outlined text-primary mb-2">school</span>
                                    <span className="font-label-sm text-center">Join as Student</span>
                                </button>
                                <button className="flex flex-col items-center justify-center p-4 bg-surface-container-low rounded-xl border border-transparent hover:border-primary transition-all group">
                                    <span className="material-symbols-outlined text-primary mb-2">workspace_premium</span>
                                    <span className="font-label-sm text-center">Join as Lecturer</span>
                                </button>
                                <button className="flex flex-col items-center justify-center p-4 bg-surface-container-low rounded-xl border border-transparent hover:border-primary transition-all group">
                                    <span className="material-symbols-outlined text-primary mb-2">domain</span>
                                    <span className="font-label-sm text-center">Join as Campus</span>
                                </button>
                                <button className="flex flex-col items-center justify-center p-4 bg-surface-container-low rounded-xl border border-transparent hover:border-primary transition-all group">
                                    <span className="material-symbols-outlined text-primary mb-2">business_center</span>
                                    <span className="font-label-sm text-center">Join as Industry Partner</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <img alt="Academic Collaboration" className="w-full h-[500px] object-cover rounded-[2rem] shadow-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgubqci3FbFZVZzVWpogrlhidFGcLEv0RYdNrlFIrpmqysmL46VxH_4fGAnk0gE11SifplAxPYpke65FKx4YPEDJRAthoc5X3DX13MyTq9y0k3Jo4zsfKLmCYeIdy-JOfiMLJX6WsDYS332Yq-mjcq0me609q7kEgbOvQFbupNuEi8e_VKW9lLa7LY00OnLQSF2Q32-puA6-aoBfabj1rbbmrHFN_R9COUCcd9xyiSek2FCqTX2vMw7V-hzs5-JEi-1bZCjvfvRwQ"/>
                            <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-2xl flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    <img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQExeBhZ7Bn2hDUbZWSHlBmmsbAjl6zJmL0b0WVQJVy1TX7EUUYt8lhkVEKcNgXIrOTjLhKsXn-_xHOG0eQl5Qrj__14iwPuse7Bn9IFQlrbS_WZGiwtXb2QzQbPyrEviDuHYXIEbE8c7j6nmRqDxL8LV_vtM8uhhBblx6QCuJFHmhsfyfNK6bayiB81wycSYzct-F5L_xgRuAp-1s6EL-fCmcxGCmEfRcvjOQt3EORLYLD5nD1vu4jOrdhLO1Y1_nPp3J3_CRYME"/>
                                    <img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeLDyeW7aEabqNmHUbtwL5xhetfQgosBCrwSj9ek2Jp1OsKx6C9vgCRUWhDm-9I9uG9CgOHL6vL5UqwU6wVgX0h8KBsSURWsccrOG3cKzDWxZs2z-qindIp64RQ1jz_wMuztN-t6c5mkV5wWKKl960rSGltQgdeHrYYeMexyJl21AREyGOLdrGRYgHlXR85fHysNLzNqIfJyF5R-SUVl6u767SOHhfzKwE8aUBkXnQOGI_p6kHPHxApfKd_LBqQZFphpu6F3ZsG7c"/>
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-[12px] font-bold">+2k</div>
                                </div>
                                <div>
                                    <div className="font-label-md text-primary">Active Collaboration</div>
                                    <div className="font-label-sm text-on-surface-variant">45 New Projects Today</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* For Students Section */}
                <section className="py-20 bg-surface-bright">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="flex items-end justify-between mb-12">
                            <div className="max-w-xl">
                                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Elevate Your Student Journey</h2>
                                <p className="text-on-surface-variant">Tunjukkan potensi akademik dan profesional Anda kepada dunia melalui portofolio digital yang terverifikasi.</p>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-primary font-label-md hover:underline">
                                View All Student Features <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bento-card bg-surface-container-low p-8 rounded-[1.5rem] flex flex-col h-full">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary">person_search</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md mb-2">Digital Portfolio</h3>
                                <p className="text-on-surface-variant text-sm mb-6">Etalase pencapaian akademik dan proyek non-akademik dalam satu profil profesional.</p>
                                <div className="mt-auto">
                                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-bold tracking-wider uppercase">ActivityTag: Verified</span>
                                </div>
                            </div>
                            <div className="bento-card bg-surface-container-low p-8 rounded-[1.5rem] flex flex-col h-full">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary">work</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md mb-2">Internships</h3>
                                <p className="text-on-surface-variant text-sm mb-6">Akses langsung ke program magang di berbagai perusahaan industri terkemuka.</p>
                                <div className="mt-auto">
                                    <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-[10px] font-bold tracking-wider uppercase">IKUImpactTag: Kerja Layak</span>
                                </div>
                            </div>
                            <div className="bento-card bg-surface-container-low p-8 rounded-[1.5rem] flex flex-col h-full">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary">trending_up</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md mb-2">Career Path</h3>
                                <p className="text-on-surface-variant text-sm mb-6">Rencanakan karier masa depan dengan rekomendasi berbasis kompetensi dan minat.</p>
                                <div className="mt-auto">
                                    <div className="flex items-center gap-1 text-primary text-xs font-bold">
                                        <span className="material-symbols-outlined text-[14px]">bolt</span>
                                        Career Readiness 85%
                                    </div>
                                </div>
                            </div>
                            <div className="bento-card bg-surface-container-low p-8 rounded-[1.5rem] flex flex-col h-full">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary">military_tech</span>
                                </div>
                                <h3 className="font-headline-md text-headline-md mb-2">Certification</h3>
                                <p className="text-on-surface-variant text-sm mb-6">Dapatkan sertifikasi kompetensi yang diakui oleh industri dan dunia kerja global.</p>
                                <div className="mt-auto flex -space-x-1">
                                    <div className="w-6 h-6 rounded-full bg-blue-400 border border-white"></div>
                                    <div className="w-6 h-6 rounded-full bg-emerald-400 border border-white"></div>
                                    <div className="w-6 h-6 rounded-full bg-orange-400 border border-white"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* For Lecturers & Research Section */}
                <section className="py-24">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-5 space-y-6">
                                <h2 className="font-display-lg text-[40px] leading-tight">Empowering Modern Academics</h2>
                                <p className="text-on-surface-variant text-body-lg">Platform pendukung bagi dosen untuk memperluas jangkauan riset, kolaborasi lintas disiplin, dan publikasi berkualitas.</p>
                                <div className="space-y-4 pt-6">
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                                        <span className="material-symbols-outlined text-primary p-2 bg-blue-50 rounded-lg">science</span>
                                        <div>
                                            <h4 className="font-bold">Research Profile</h4>
                                            <p className="text-sm text-on-surface-variant">Dokumentasi rekam jejak riset yang terintegrasi secara global.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                                        <span className="material-symbols-outlined text-primary p-2 bg-blue-50 rounded-lg">group_add</span>
                                        <div>
                                            <h4 className="font-bold">Collaboration</h4>
                                            <p className="text-sm text-on-surface-variant">Temukan mitra peneliti dari berbagai kampus dan industri.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7">
                                <div className="bg-surface-container-low rounded-[2.5rem] p-8 h-full relative overflow-hidden">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="font-headline-md">Publication Showcase</h3>
                                        <span className="material-symbols-outlined text-primary">auto_awesome</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary">
                                            <div className="flex justify-between items-start mb-2">
                                                <h5 className="font-bold text-on-surface">AI in Sustainable Urban Planning: A Multidisciplinary Approach</h5>
                                                <button className="material-symbols-outlined text-on-surface-variant hover:text-primary">bookmark</button>
                                            </div>
                                            <p className="text-sm text-on-surface-variant mb-4">Journal of Future Cities, Vol 12, 2024</p>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-1 text-xs font-bold text-blue-600">
                                                    <span className="material-symbols-outlined text-[14px]">format_quote</span>
                                                    128 Citations
                                                </div>
                                                <div className="px-2 py-0.5 bg-violet-100 text-violet-700 rounded text-[10px] font-bold">RESEARCH</div>
                                                <div className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold">IKUImpactTag: IKU 5</div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl shadow-sm opacity-60">
                                            <h5 className="font-bold text-on-surface">Blockchain for Academic Credentialing</h5>
                                            <p className="text-sm text-on-surface-variant">International Conference on EdTech</p>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex justify-center">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-label-md">
                                            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                                            Join 5,000+ Researchers
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategic Partnership & IKU Compliance */}
                <section className="py-20 bg-surface-container-low">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-emerald-100">
                                <span className="material-symbols-outlined text-sm">verified_user</span>
                                Kepatuhan IKU PT 2025
                            </div>
                            <h2 className="font-headline-lg text-headline-lg mb-4">Strategic Partnership Ecosystem</h2>
                            <p className="text-on-surface-variant max-w-2xl mx-auto">Mempertemukan institusi pendidikan tinggi dengan dunia industri untuk menciptakan inovasi yang berdampak, sekaligus memenuhi 12 Indikator Kinerja Utama secara otomatis.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
                            <div className="md:col-span-8 bg-white p-8 rounded-[2rem] flex flex-col justify-between shadow-sm relative overflow-hidden group">
                                <div className="flex justify-between items-start relative z-10">
                                    <div>
                                        <div className="text-primary font-label-md mb-2 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">location_city</span>
                                            For Campuses
                                        </div>
                                        <h3 className="font-headline-lg">Campus Reputation & IKU Hub</h3>
                                    </div>
                                    <div className="p-3 bg-blue-50 rounded-full">
                                        <span className="material-symbols-outlined text-primary text-[32px]">insights</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-3 relative z-10">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl border border-outline-variant">
                                        <span className="material-symbols-outlined text-primary text-[18px]">hub</span>
                                        <span className="font-label-sm">IKU 6: Partnerships</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl border border-outline-variant">
                                        <span className="material-symbols-outlined text-primary text-[18px]">auto_graph</span>
                                        <span className="font-label-sm">IKU 8: Accreditation Support</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
                                        <span className="font-label-sm">Audit-Ready Evidence Center</span>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/10 transition-all"></div>
                            </div>
                            <div className="md:col-span-4 bg-primary text-white p-8 rounded-[2rem] flex flex-col justify-between">
                                <div>
                                    <span className="material-symbols-outlined text-[32px] mb-4">search</span>
                                    <h3 className="font-headline-md leading-tight mb-2">Talent Search for Industry</h3>
                                    <p className="text-blue-100 text-sm">Temukan talenta terbaik kampus dengan filter kompetensi real-time.</p>
                                </div>
                                <button className="w-full py-3 bg-white text-primary rounded-xl font-bold text-sm">Explore Talents</button>
                            </div>
                            <div className="md:col-span-4 bg-white p-8 rounded-[2rem] flex flex-col shadow-sm">
                                <span className="material-symbols-outlined text-tertiary text-[32px] mb-4">rocket_launch</span>
                                <h3 className="font-bold text-xl mb-2">Project Challenges</h3>
                                <p className="text-sm text-on-surface-variant flex-grow">Luncurkan tantangan riset atau proyek bagi mahasiswa dan dosen.</p>
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-[10px] font-bold">IKUImpactTag: IKU 2</span>
                                </div>
                            </div>
                            <div className="md:col-span-8 bg-white p-8 rounded-[2rem] flex items-center gap-8 shadow-sm">
                                <img alt="Collaboration" className="w-48 h-full object-cover rounded-2xl hidden sm:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ATUzjp-_6wAWsXfZf378_JLZfvOKJPR74v2DQP4E8EysMrZlu2w7dHOQwcFr90YyNVgm0ebyKQ7Da4sadEdXt18BzIyUQNd8nq1cydyJ3EYdw6EkFpTvdcUY1i_K0uOcsGQy2yn3o81AV5-Sroi3PW-eIUsot844GoAy1nhVtctxaGSfIQRoEM9XRoZJ9PlcpUG4COquW92PNLkbGOLwraqexTLMmEBsVUbgq5WTvYqbGEkL6IwGWkb7_hD_nMugARjqHmy6t_E"/>
                                <div className="flex flex-col justify-center">
                                    <h3 className="font-headline-md mb-2">Research Collaboration</h3>
                                    <p className="text-sm text-on-surface-variant mb-6">Jembatani riset laboratorium dengan kebutuhan pasar industri secara praktis.</p>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold">Joint R&D</span>
                                        <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold">Technology Transfer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 bg-white text-center">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-4">
                                <span className="material-symbols-outlined text-primary text-4xl">public</span>
                            </div>
                            <h2 className="font-display-lg text-display-lg">Aktivitas Anda membangun dampak kampus.</h2>
                            <p className="text-body-lg text-on-surface-variant">Bergabunglah dengan komunitas akademik terbesar yang berorientasi pada hasil nyata dan kolaborasi berkelanjutan.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">Start Your Impact Journey</button>
                                <button className="w-full sm:w-auto px-8 py-4 bg-surface-container text-on-surface rounded-2xl font-bold text-lg hover:bg-surface-container-high transition-all">Talk to Partnership Team</button>
                            </div>
                            <div className="pt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <span className="font-bold text-xl">UNIVERSITY NETWORK</span>
                                <span className="font-bold text-xl">GLOBAL RESEARCH</span>
                                <span className="font-bold text-xl">INDUSTRY HUB</span>
                                <span className="font-bold text-xl">CAREER BRIDGE</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-100 py-16 font-manrope text-sm">
                    <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="text-lg font-bold text-blue-600">Campus Network</div>
                            <p className="text-gray-500 max-w-sm">© 2024 Campus Network. The Modern Academic Social Platform. Bridging the gap between scholarship and industry.</p>
                            <div className="flex gap-4">
                                <a className="p-2 bg-gray-50 rounded-full hover:text-blue-600 transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                                <a className="p-2 bg-gray-50 rounded-full hover:text-blue-600 transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-on-surface">Platform</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-gray-500 hover:text-blue-600 underline-offset-4 transition-all" href="#">About</a></li>
                                    <li><a className="text-gray-500 hover:text-blue-600 underline-offset-4 transition-all" href="#">Research Ethics</a></li>
                                    <li><a className="text-gray-500 hover:text-blue-600 underline-offset-4 transition-all" href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-on-surface">Legal</h4>
                                <ul className="space-y-2">
                                    <li><a className="text-gray-500 hover:text-blue-600 underline-offset-4 transition-all" href="#">Privacy Policy</a></li>
                                    <li><a className="text-gray-500 hover:text-blue-600 underline-offset-4 transition-all" href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
