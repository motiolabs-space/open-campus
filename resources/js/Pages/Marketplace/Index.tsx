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
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                        <h1 className="font-headline-lg text-4xl font-bold text-gray-900 tracking-tight">
                            Campus <span className="text-primary">Marketplace</span>
                        </h1>
                        <p className="text-gray-500 mt-2 text-lg">Temukan peluang magang, proyek riset, dan karir impian Anda.</p>
                    </div>
                    
                    <div className="flex bg-surface-container-low p-1.5 rounded-2xl border border-gray-100">
                        {['all', 'internship', 'research', 'full-time'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                                    filter === type 
                                    ? 'bg-white text-primary shadow-sm shadow-primary/10' 
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                {type === 'all' ? 'Semua' : type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredJobs.length === 0 ? (
                        <div className="col-span-full py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                            <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">work_off</span>
                            <p className="text-gray-400 font-medium text-lg">Belum ada lowongan yang tersedia saat ini.</p>
                        </div>
                    ) : (
                        filteredJobs.map((job: any) => (
                            <Link 
                                key={job.id} 
                                href={route('marketplace.show', job.id)}
                                className="group bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="material-symbols-outlined text-8xl">work</span>
                                </div>

                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-surface-container-high rounded-2xl flex items-center justify-center text-primary font-bold text-xl border border-gray-50">
                                        {job.company_name.charAt(0)}
                                    </div>
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                        job.work_type === 'internship' ? 'bg-amber-50 text-amber-600' :
                                        job.work_type === 'research' ? 'bg-purple-50 text-purple-600' :
                                        'bg-blue-50 text-blue-600'
                                    }`}>
                                        {job.work_type}
                                    </span>
                                </div>

                                <h3 className="font-headline-md text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {job.title}
                                </h3>
                                <p className="text-gray-500 font-bold text-sm mb-4">{job.company_name}</p>
                                
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        {job.location}
                                    </div>
                                    {job.salary_range && (
                                        <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg font-bold">
                                            <span className="material-symbols-outlined text-sm">payments</span>
                                            {job.salary_range}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-gray-400">Diposting {new Date(job.created_at).toLocaleDateString()}</span>
                                    <div className="flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                                        Detail
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
