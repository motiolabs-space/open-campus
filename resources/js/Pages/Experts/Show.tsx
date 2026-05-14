import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ExpertFinderShow({ expert }: any) {
    return (
        <AuthenticatedLayout>
            <Head title={`${expert.name} - Academic Expert Profile`} />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <Link href={route('experts.index')} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group font-bold text-sm">
                    <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Kembali ke Direktori Pakar
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Sidebar - Profile Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-[3.5rem] p-10 shadow-xl border border-gray-50 text-center sticky top-24">
                            <div className="relative inline-block mb-8">
                                <div className="w-40 h-40 rounded-[2.5rem] bg-gray-50 overflow-hidden border-8 border-white shadow-xl mx-auto">
                                    <img src={`https://i.pravatar.cc/150?u=${expert.id}`} alt={expert.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg">
                                    <span className="material-symbols-outlined text-2xl">verified</span>
                                </div>
                            </div>

                            <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-tight">{expert.name}</h1>
                            <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-8">{expert.headline || 'Senior Research Fellow'}</p>

                            <div className="flex justify-center gap-4 mb-10">
                                <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined">mail</span>
                                </button>
                                <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined">share</span>
                                </button>
                                <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold flex-1 hover:bg-primary transition-all shadow-xl shadow-gray-900/10">
                                    Unduh CV
                                </button>
                            </div>

                            <div className="space-y-6 pt-10 border-t border-gray-50 text-left">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Bidang Fokus</p>
                                    <p className="text-sm font-bold text-gray-700">Teknologi Terapan, Sistem Cerdas, Inovasi Digital</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Verified IKU Compliance</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['IKU 3', 'IKU 4', 'IKU 5'].map(iku => (
                                            <span key={iku} className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-lg border border-emerald-100">
                                                {iku}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Detailed Bio & Impact */}
                    <div className="lg:col-span-8">
                        {/* Impact Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Impact Score</p>
                                <p className="text-4xl font-black text-gray-900">{expert.impact_score || '92'}</p>
                                <p className="text-[10px] text-emerald-500 font-bold mt-2 uppercase tracking-widest">Top 5% Faculty</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Research Index</p>
                                <p className="text-4xl font-black text-gray-900">4.8</p>
                                <p className="text-[10px] text-primary font-bold mt-2 uppercase tracking-widest">Scopus Verified</p>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Industry Link</p>
                                <p className="text-4xl font-black text-gray-900">12</p>
                                <p className="text-[10px] text-amber-500 font-bold mt-2 uppercase tracking-widest">Active MoUs</p>
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-gray-50 mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">account_circle</span>
                                Biografi & Kepakaran
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-10">
                                <p>
                                    {expert.bio || 'Dr. ' + expert.name + ' adalah seorang pakar akademis dengan pengalaman lebih dari 15 tahun dalam penelitian terapan dan hilirisasi inovasi. Fokus utamanya adalah pada pengembangan sistem cerdas yang mampu memberikan dampak efisiensi bagi sektor industri menengah ke atas.'}
                                </p>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Keahlian Utama</h3>
                            <div className="flex flex-wrap gap-3">
                                {(expert.skills?.split(',') || ['AI Engineering', 'Research Methodology', 'Strategic Planning', 'Product Innovation']).map((skill: string) => (
                                    <div key={skill} className="px-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl flex items-center gap-3 group hover:bg-primary transition-colors">
                                        <span className="w-2 h-2 bg-primary rounded-full group-hover:bg-white transition-colors"></span>
                                        <span className="text-sm font-bold text-gray-700 group-hover:text-white transition-colors">{skill.trim()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Projects / Activity */}
                        <div className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-gray-50">
                            <h2 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">science</span>
                                Aktivitas Riset & Dampak (IKU 5)
                            </h2>
                            <div className="space-y-8">
                                {[1, 2].map(i => (
                                    <div key={i} className="p-8 rounded-[2.5rem] border border-gray-50 bg-gray-50 group hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-3 py-1 bg-white text-[10px] font-black text-primary rounded-lg uppercase tracking-widest border border-gray-100">Research Project</span>
                                            <span className="text-xs text-gray-400 font-bold uppercase">2026</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Optimalisasi Algoritma IoT untuk Smart Campus</h4>
                                        <p className="text-sm text-gray-500 line-clamp-2">Pemanfaatan machine learning untuk efisiensi energi di gedung perkuliahan dengan target SDG 7.</p>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full py-4 mt-8 border-2 border-dashed border-gray-100 rounded-[2rem] text-gray-400 font-bold hover:border-primary hover:text-primary transition-all">
                                Lihat Semua Portofolio (12 Item)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
