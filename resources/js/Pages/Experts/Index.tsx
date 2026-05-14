import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

export default function ExpertFinderIndex({ experts, filters }: any) {
    const [search, setSearch] = useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route('experts.index'), { search }, { preserveState: true });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Expert Finder - Direktori Pakar" />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-display-lg font-extrabold text-gray-900 tracking-tight">Direktori Pakar & Peneliti</h1>
                        <p className="text-gray-500 mt-2 text-lg">Temukan tenaga ahli, konsultan riset, dan praktisi akademis terverifikasi IKU.</p>
                    </div>
                    <form onSubmit={handleSearch} className="w-full md:w-96 relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input 
                            type="text" 
                            placeholder="Cari pakar, bidang keahlian, atau riset..."
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert: any) => (
                        <div key={expert.id} className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-[1.5rem] bg-primary/10 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                                            <img src={`https://i.pravatar.cc/150?u=${expert.id}`} alt={expert.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center text-white">
                                            <span className="material-symbols-outlined text-[14px]">verified</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors">{expert.name}</h3>
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">{expert.headline || 'Senior Researcher'}</p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed italic">
                                        "{expert.bio || 'Berdedikasi untuk pengembangan inovasi dan hilirisasi riset di bidang teknologi tepat guna.'}"
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(expert.skills?.split(',') || ['AI', 'Research', 'Strategy']).map((skill: string) => (
                                            <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg border border-gray-100 uppercase tracking-widest">
                                                {skill.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50 mb-8">
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Impact Score</p>
                                        <p className="text-xl font-black text-gray-900">{expert.impact_score || '85'}<span className="text-xs text-gray-400 ml-1">/100</span></p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Verified IKU</p>
                                        <div className="flex gap-1 text-emerald-500">
                                            <span className="text-xs font-black">IKU 3, 4, 5</span>
                                        </div>
                                    </div>
                                </div>

                                <Link 
                                    href={route('experts.show', expert.id)}
                                    className="block w-full py-4 bg-gray-900 text-white rounded-2xl text-center font-bold hover:bg-primary transition-all shadow-xl shadow-gray-900/10 group-hover:shadow-primary/20"
                                >
                                    Lihat Profil Pakar
                                </Link>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
                        </div>
                    ))}

                    {experts.length === 0 && (
                        <div className="col-span-full py-24 text-center bg-white rounded-[3rem] border-4 border-dashed border-gray-50">
                            <span className="material-symbols-outlined text-6xl text-gray-200 mb-6">person_search</span>
                            <p className="text-gray-400 font-bold text-xl tracking-tight">Tidak menemukan pakar yang sesuai kriteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
