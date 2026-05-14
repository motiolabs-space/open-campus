import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function IkuDashboard({ ikuScores, tracerStats, mbkmStats, sdgStats, totals }: any) {
    const sdgs = [
        { id: 1, name: 'No Poverty', color: '#E5243B' },
        { id: 2, name: 'Zero Hunger', color: '#DDA63A' },
        { id: 3, name: 'Good Health', color: '#4C9F38' },
        { id: 4, name: 'Quality Education', color: '#C5192D' },
        { id: 5, name: 'Gender Equality', color: '#FF3A21' },
        { id: 6, name: 'Clean Water', color: '#26BDE2' },
        { id: 7, name: 'Clean Energy', color: '#FCC30B' },
        { id: 8, name: 'Decent Work', color: '#A21942' },
        { id: 9, name: 'Industry & Innovation', color: '#FD6925' },
        { id: 10, name: 'Reduced Inequality', color: '#DD1367' },
        { id: 11, name: 'Sustainable Cities', color: '#FD9D24' },
        { id: 12, name: 'Responsible Consumption', color: '#BF8B2E' },
        { id: 13, name: 'Climate Action', color: '#3F7E44' },
        { id: 14, name: 'Life Below Water', color: '#0A97D9' },
        { id: 15, name: 'Life on Land', color: '#56C02B' },
        { id: 16, name: 'Peace & Justice', color: '#00689D' },
        { id: 17, name: 'Partnerships', color: '#19486A' },
    ];

    const getStatusLabel = (status: string) => {
        const labels: any = {
            working: 'Bekerja',
            studying: 'Lanjut Studi',
            entrepreneur: 'Wirausaha',
            searching: 'Mencari Kerja',
            other: 'Lainnya'
        };
        return labels[status] || status;
    };

    const getMbkmLabel = (type: string) => {
        const labels: any = {
            internship: 'Magang',
            research: 'Riset',
            student_exchange: 'Pertukaran',
            entrepreneurship: 'Wirausaha',
            village_project: 'Proyek Desa',
            teaching_assistance: 'Asistensi'
        };
        return labels[type] || type;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Executive Dashboard | IKU Analytics" />

    return (
        <AuthenticatedLayout>
            <Head title="Executive Dashboard | IKU Analytics" />

            <div className="max-w-[1440px] mx-auto px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                    <div>
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">
                            {isLppm ? 'Institutional Monitoring' : 'Personal Achievement'}
                        </span>
                        <h1 className="text-5xl font-display-lg font-extrabold text-gray-900 mt-2 tracking-tight">
                            {isLppm ? 'IKU Command Center' : 'Impact Dashboard'}
                        </h1>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">
                                {isLppm ? 'LPPM OVERVIEW 2026' : 'LIVE ACTIVITY FEED'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Top KPI Cards - Adaptive Labels */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex items-center gap-6 group hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl">history_edu</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{isLppm ? 'IKU 1 & 2' : 'Lulusan'}</p>
                            <h3 className="text-2xl font-extrabold text-gray-900">{totals.graduates}</h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">{isLppm ? 'Target vs Riil' : 'Telah Terlacak'}</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex items-center gap-6 group hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{isLppm ? 'IKU 3' : 'Kegiatan'}</p>
                            <h3 className="text-2xl font-extrabold text-gray-900">{totals.mbkm}</h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">{isLppm ? 'Partisipasi MBKM' : 'Luar Kampus'}</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex items-center gap-6 group hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl">science</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{isLppm ? 'IKU 5 & 10' : 'Inovasi'}</p>
                            <h3 className="text-2xl font-extrabold text-gray-900">{totals.research}</h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">{isLppm ? 'Hilirisasi Riset' : 'Penelitian Aktif'}</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex items-center gap-6 group hover:scale-[1.02] transition-all">
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl">handshake</span>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{isLppm ? 'IKU 6' : 'Koneksi'}</p>
                            <h3 className="text-2xl font-extrabold text-gray-900">{totals.partnerships}</h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">{isLppm ? 'Kemitraan Prodi' : 'MoU Industri'}</p>
                        </div>
                    </div>
                </div>

                {/* Performance Matrix - Role Sensitive Labels */}
                <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-50 mb-12 overflow-hidden relative">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                                {isLppm ? '12 IKU Performance Matrix' : 'Capaian Kontribusi Akademik'}
                            </h2>
                            <p className="text-gray-500 mt-1 uppercase text-[10px] font-black tracking-[0.2em]">
                                {isLppm ? 'LPPM Monitoring & Institutional Benchmarks' : 'Rekap Dampak Nyata bagi Masyarakat & Industri'}
                            </p>
                        </div>
                        {isLppm && (
                            <button className="px-6 py-3 bg-gray-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-all">
                                Update Target 2026
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ikuScores?.map((iku: any) => (
                            <div key={iku.id} className="p-6 bg-surface-container-low rounded-[2rem] border border-gray-50 group hover:border-primary/20 hover:shadow-lg transition-all relative overflow-hidden">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                                        iku.type === 'Wajib' ? 'bg-primary/10 text-primary' : 
                                        iku.type === 'Pilihan' ? 'bg-amber-100 text-amber-700' : 
                                        'bg-purple-100 text-purple-700'
                                    }`}>
                                        {iku.type}
                                    </span>
                                    <span className={`text-xs font-black ${
                                        iku.status === 'Excellent' ? 'text-emerald-500' :
                                        iku.status === 'Good' ? 'text-blue-500' :
                                        iku.status === 'Warning' ? 'text-amber-500' :
                                        'text-red-500'
                                    }`}>
                                        {iku.status}
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold text-gray-800 mb-6 h-10 leading-snug">{iku.name}</h4>
                                <div className="flex items-end justify-between">
                                    <div>
                                        <span className="text-3xl font-black text-gray-900">{iku.score}%</span>
                                        {isLppm && iku.target && (
                                            <p className="text-[10px] font-bold text-gray-400 mt-1">Target: {iku.target}</p>
                                        )}
                                    </div>
                                    <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full rounded-full ${
                                                iku.score > 85 ? 'bg-emerald-500' :
                                                iku.score > 60 ? 'bg-primary' :
                                                'bg-red-500'
                                            }`}
                                            style={{ width: `${iku.score}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Tracer Study Detail (IKU 2) */}
                    <div className="lg:col-span-4 bg-white rounded-[3rem] p-10 shadow-xl border border-gray-50">
                        <div className="flex justify-between items-start mb-10">
                            <h3 className="text-2xl font-bold text-gray-900 leading-tight">Status Lulusan<br/><span className="text-primary text-sm uppercase tracking-widest">(IKU 1 & 2)</span></h3>
                            <span className="p-3 bg-gray-50 rounded-2xl material-symbols-outlined text-gray-400">donut_large</span>
                        </div>
                        <div className="space-y-6">
                            {tracerStats.map((stat: any) => (
                                <div key={stat.status} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="font-bold text-gray-600">{getStatusLabel(stat.status)}</span>
                                        <span className="font-bold text-primary">{(stat.count / (totals.graduates || 1) * 100).toFixed(1)}%</span>
                                    </div>
                                    <div className="h-3 bg-gray-50 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-primary rounded-full transition-all duration-1000" 
                                            style={{ width: `${(stat.count / (totals.graduates || 1) * 100)}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">{stat.count} Responden</p>
                                </div>
                            ))}
                            {tracerStats.length === 0 && <p className="text-center py-12 text-gray-400 font-bold italic">Belum ada data tracer.</p>}
                        </div>
                    </div>

                    {/* MBKM Participation Detail (IKU 3) */}
                    <div className="lg:col-span-8 bg-gray-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <h3 className="text-3xl font-bold">Kategori MBKM</h3>
                                    <p className="text-gray-400 mt-2">Sebaran aktivitas mahasiswa di luar kampus (IKU 3)</p>
                                </div>
                                <div className="px-6 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">
                                    Total: {totals.mbkm} Siswa
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {mbkmStats.map((stat: any) => (
                                    <div key={stat.type} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all group">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-2xl font-bold">{stat.count}</span>
                                            <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">
                                                {stat.type === 'internship' ? 'work' : stat.type === 'research' ? 'science' : 'school'}
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{getMbkmLabel(stat.type)}</p>
                                        <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-secondary rounded-full" 
                                                style={{ width: `${(stat.count / totals.mbkm * 100)}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                                {mbkmStats.length === 0 && <p className="col-span-full text-center py-12 text-gray-500 font-bold italic">Belum ada aktivitas terdaftar.</p>}
                            </div>

                            <div className="mt-12 p-8 bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined">verified</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Evidence Integrity</h4>
                                        <p className="text-xs text-gray-400">Seluruh data telah diverifikasi dengan bukti logbook.</p>
                                    </div>
                                </div>
                                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all">Download Report</button>
                            </div>
                        </div>
                        
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
                    </div>

                    {/* SDG Impact Matrix (IKU 7) */}
                    <div className="lg:col-span-12 bg-white rounded-[3rem] p-12 shadow-xl border border-gray-50">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">SDG Impact Matrix</h3>
                                <p className="text-gray-500 mt-1">Kontribusi Civitas Akademika terhadap Sustainable Development Goals (IKU 7)</p>
                            </div>
                            <div className="flex gap-2">
                                <span className="px-4 py-2 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-lg uppercase tracking-widest border border-gray-100">Live Metric</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4">
                            {sdgs.map((sdg) => {
                                const stat = sdgStats.find((s: any) => s.sdg_tag === sdg.id);
                                return (
                                    <div 
                                        key={sdg.id} 
                                        className={`relative group h-32 rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 ${stat ? 'shadow-lg scale-100 cursor-pointer' : 'opacity-20 grayscale'}`}
                                        style={{ backgroundColor: sdg.color }}
                                    >
                                        <span className="absolute top-2 left-2 text-[10px] font-bold text-white/60">{sdg.id}</span>
                                        <span className="text-2xl font-black text-white mb-1">{stat?.count || 0}</span>
                                        <p className="text-[8px] font-bold text-white text-center uppercase tracking-tighter leading-none">{sdg.name}</p>
                                        
                                        {stat && (
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center p-2">
                                                <p className="text-[10px] font-bold text-white text-center">{stat.count} Kontribusi</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
