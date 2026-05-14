import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ResearchHubIndex({ projects }: any) {
    const categories = [
        { id: 'applied', name: 'Riset Terapan', icon: 'science' },
        { id: 'basic', name: 'Riset Dasar', icon: 'menu_book' },
        { id: 'innovation', name: 'Inovasi & Paten', icon: 'lightbulb' },
        { id: 'social', name: 'Sosial & Humaniora', icon: 'groups' },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Research & Innovation Hub" />

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Section */}
                <div className="bg-gray-900 rounded-[3.5rem] p-12 mb-16 relative overflow-hidden text-white shadow-2xl">
                    <div className="relative z-10 md:max-w-2xl">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Innovation Marketplace</span>
                        <h1 className="text-5xl font-display-lg font-extrabold mt-4 mb-6 leading-tight">
                            Kolaborasi Riset untuk <span className="text-primary italic">Dampak Nyata</span>.
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Hubungkan penelitian Anda dengan mitra industri, ajukan pendanaan, dan temukan kolaborator terbaik antar fakultas.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
                                Ajukan Proyek Riset
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all">
                                Cari Kolaborator
                            </button>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070" 
                            className="w-full h-full object-cover opacity-50"
                            alt="Research"
                        />
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {categories.map((cat) => (
                        <div key={cat.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer">
                            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all mb-6">
                                <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                            </div>
                            <h3 className="font-bold text-gray-900">{cat.name}</h3>
                            <p className="text-xs text-gray-400 mt-2 font-bold uppercase tracking-widest">12 Proyek Aktif</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-display-md font-bold text-gray-900">Proyek Riset Terbuka</h2>
                    <div className="flex gap-2">
                        <span className="px-4 py-2 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-emerald-100">Verified by IKU 5</span>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.length === 0 ? (
                        <div className="col-span-full py-24 text-center bg-white rounded-[3rem] border-4 border-dashed border-gray-50">
                            <span className="material-symbols-outlined text-6xl text-gray-200 mb-6">science</span>
                            <p className="text-gray-400 font-bold text-xl tracking-tight">Belum ada proyek riset yang dipublikasikan.</p>
                        </div>
                    ) : (
                        projects.map((project: any) => (
                            <Link 
                                key={project.id} 
                                href={route('research-hub.show', project.id)}
                                className="group bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                <div className="p-10 flex-1">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                                                project.category === 'innovation' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                                            }`}>
                                                {project.category}
                                            </span>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                                <img src={`https://i.pravatar.cc/150?u=${project.user_id}`} alt="user" />
                                            </div>
                                            <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white text-[10px] flex items-center justify-center font-bold">
                                                +2
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-3 mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.sdg_target && (
                                            <div className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2">
                                                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                                <span className="text-[10px] font-bold text-gray-600">SDG {project.sdg_target}</span>
                                            </div>
                                        )}
                                        <div className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2 text-[10px] font-bold text-gray-600">
                                            <span className="material-symbols-outlined text-[14px]">payments</span>
                                            Rp {(project.budget / 1000000).toFixed(1)}M
                                        </div>
                                    </div>
                                </div>
                                <div className="px-10 py-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center group-hover:bg-primary/5 transition-colors">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">IKU 5 & 10 Impact</span>
                                    <div className="flex items-center gap-1 text-primary font-bold text-sm">
                                        Lihat Detail
                                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
