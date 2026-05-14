import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function MarketplaceIndex({ jobs }: any) {
    const { appName } = usePage().props as any;
    const [filter, setFilter] = useState('all');

    const filteredJobs = filter === 'all' 
        ? jobs 
        : jobs.filter((j: any) => j.work_type === filter);

    return (
        <AuthenticatedLayout>
            <Head title={`Marketplace Karir | ${appName}`} />

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* AI Recommendation Banner */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-[3rem] p-10 text-white mb-16 relative overflow-hidden shadow-2xl shadow-primary/20">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em]">AI Powered</span>
                                <div className="flex -space-x-2">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-white/80">+120 mahasiswa sudah mendapat kerja</span>
                            </div>
                            <h2 className="text-4xl font-display-lg font-bold mb-4 tracking-tight">Temukan Karir yang Sesuai dengan Lencana IKU Anda.</h2>
                            <p className="text-white/80 text-lg">AI kami menganalisis logbook MBKM dan hasil riset Anda untuk merekomendasikan posisi terbaik di industri.</p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="w-48 h-48 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/20 relative animate-pulse">
                                <span className="material-symbols-outlined text-7xl text-white">psychology</span>
                                <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-ping"></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                        <h1 className="font-display-lg text-4xl font-extrabold text-gray-900 tracking-tight">
                            Explore <span className="text-primary">Opportunities</span>
                        </h1>
                        <p className="text-gray-500 mt-2 text-lg">Peluang eksklusif untuk Mahasiswa Unggul.</p>
                    </div>
                    
                    <div className="flex bg-gray-100 p-1.5 rounded-2xl border border-gray-200">
                        {['all', 'internship', 'research', 'full-time'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                                    filter === type 
                                    ? 'bg-white text-primary shadow-lg shadow-primary/10' 
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {type === 'all' ? 'Semua' : type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredJobs.length === 0 ? (
                        <div className="col-span-full py-24 text-center bg-white rounded-[4rem] border-4 border-dashed border-gray-50">
                            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-symbols-outlined text-5xl text-gray-200">search_off</span>
                            </div>
                            <p className="text-gray-400 font-bold text-xl tracking-tight">Belum ada lowongan yang tersedia.</p>
                        </div>
                    ) : (
                        filteredJobs.map((job: any) => (
                            <Link 
                                key={job.id} 
                                href={route('marketplace.show', job.id)}
                                className="group bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center text-primary font-black text-2xl border border-gray-200 group-hover:scale-110 transition-transform">
                                        {job.company_name.charAt(0)}
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                            job.work_type === 'internship' ? 'bg-amber-50 text-amber-600' :
                                            job.work_type === 'research' ? 'bg-purple-50 text-purple-600' :
                                            'bg-blue-50 text-blue-600'
                                        }`}>
                                            {job.work_type}
                                        </span>
                                        {job.is_iku_partner && (
                                            <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                                                <span className="material-symbols-outlined text-[12px]">verified</span>
                                                IKU PARTNER
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="font-display-md text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors">
                                    {job.title}
                                </h3>
                                <p className="text-gray-400 font-bold text-sm mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">apartment</span>
                                    {job.company_name}
                                </p>
                                
                                <div className="flex flex-wrap gap-3 mb-10">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        {job.location}
                                    </div>
                                    {job.salary_range && (
                                        <div className="flex items-center gap-2 text-[10px] text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl font-black border border-emerald-100">
                                            <span className="material-symbols-outlined text-[16px]">payments</span>
                                            {job.salary_range}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                                        Posted {new Date(job.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                    </div>
                                    <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:rotate-12 transition-all">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
