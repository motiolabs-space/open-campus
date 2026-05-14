import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ResearchHubShow({ project }: any) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'open': return 'text-emerald-500 bg-emerald-50';
            case 'in_progress': return 'text-blue-500 bg-blue-50';
            case 'completed': return 'text-purple-500 bg-purple-50';
            default: return 'text-gray-500 bg-gray-50';
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={project.title} />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <Link href={route('research-hub.index')} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group font-bold text-sm">
                    <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Kembali ke Research Hub
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-gray-50 mb-12">
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${getStatusColor(project.status)}`}>
                                    {project.status.replace('_', ' ')}
                                </span>
                                <span className="px-4 py-1.5 bg-gray-100 text-gray-600 rounded-xl text-[10px] font-black uppercase tracking-widest">
                                    {project.category}
                                </span>
                                {project.industry_partner_name && (
                                    <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">corporate_fare</span>
                                        {project.industry_partner_name}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl font-display-lg font-extrabold text-gray-900 mb-8 leading-tight">
                                {project.title}
                            </h1>

                            <div className="flex items-center gap-4 mb-12 p-6 bg-gray-50 rounded-3xl">
                                <img 
                                    src={`https://i.pravatar.cc/150?u=${project.user_id}`} 
                                    className="w-16 h-16 rounded-2xl object-cover border-4 border-white shadow-sm"
                                    alt="Lead"
                                />
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Lead Researcher</p>
                                    <p className="text-lg font-bold text-gray-900">{project.user.name}</p>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
                                <h3 className="text-gray-900 font-bold text-xl mb-4">Deskripsi Proyek</h3>
                                {project.description}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="p-8 bg-surface-container-low rounded-[2.5rem] border border-gray-100">
                                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Target SDGs</h4>
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-200">
                                            {project.sdg_target}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">SDG Goal {project.sdg_target}</p>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Impact Verified</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 bg-surface-container-low rounded-[2.5rem] border border-gray-100">
                                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Estimasi Budget</h4>
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20">
                                            <span className="material-symbols-outlined">payments</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Rp {(project.budget / 1000000).toFixed(1)} Juta</p>
                                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Funding: {project.funding_source}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Research Roadmap */}
                        <div className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-gray-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-10">Innovation Roadmap</h3>
                            <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-10 h-10 bg-primary rounded-full border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                    </div>
                                    <h4 className="font-bold text-gray-900">Literature Review & Design</h4>
                                    <p className="text-sm text-gray-500 mt-1">Selesai pada Maret 2026</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-10 h-10 bg-primary rounded-full border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                                        <span className="material-symbols-outlined text-sm">sync</span>
                                    </div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">Prototype Development</h4>
                                    <p className="text-sm text-gray-500 mt-1">Tahap pengerjaan (50%)</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-10 h-10 bg-gray-100 rounded-full border-4 border-white shadow-md flex items-center justify-center text-gray-400 z-10">
                                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                    </div>
                                    <h4 className="font-bold text-gray-400">Industrial Testing & Launch</h4>
                                    <p className="text-sm text-gray-400 mt-1">Estimasi Agustus 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="bg-gray-900 rounded-[3rem] p-10 text-white shadow-2xl sticky top-24 overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Collaboration Call</h3>
                                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                    Proyek ini terbuka untuk kolaborator tambahan. Jika Anda memiliki keahlian di bawah ini, silakan ajukan diri.
                                </p>

                                <div className="space-y-4 mb-10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Required Expertise</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.required_expertise?.map((skill: string) => (
                                            <span key={skill} className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold border border-white/10">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 mb-4">
                                    Ajukan Kolaborasi
                                </button>
                                <button className="w-full py-4 bg-white/10 text-white rounded-2xl font-bold border border-white/10 hover:bg-white/20 transition-all">
                                    Unduh Proposal (PDF)
                                </button>

                                <div className="mt-10 pt-10 border-t border-white/10 flex justify-between items-center">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Dukungan IKU</p>
                                        <p className="text-sm font-bold text-white">IKU 5, 6 & 10</p>
                                    </div>
                                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                                </div>
                            </div>
                            
                            {/* Decorative blur */}
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
