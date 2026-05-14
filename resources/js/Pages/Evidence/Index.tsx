import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function EvidenceIndex({ evidences }: any) {
    const { appName } = usePage().props as any;

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'verified': return 'bg-emerald-100 text-emerald-700';
            case 'rejected': return 'bg-red-100 text-red-700';
            case 'ai_categorized': return 'bg-blue-100 text-blue-700';
            case 'analyzing': return 'bg-amber-100 text-amber-700 animate-pulse';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Daftar Bukti IKU | ${appName}`} />

            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1 className="font-headline-lg text-3xl font-bold text-gray-900">Riwayat Pelaporan</h1>
                        <p className="text-gray-600 mt-2">Daftar semua bukti aktivitas yang telah Anda unggah.</p>
                    </div>
                    <Link
                        href={route('evidence.create')}
                        className="px-6 py-3 bg-primary text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-blue-700 transition-all"
                    >
                        <span className="material-symbols-outlined">add</span>
                        Unggah Bukti Baru
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {evidences.length === 0 ? (
                        <div className="bg-white p-20 rounded-[2rem] border border-gray-100 text-center">
                            <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">folder_open</span>
                            <p className="text-gray-500 font-medium">Belum ada data pelaporan.</p>
                        </div>
                    ) : (
                        evidences.map((item: any) => (
                            <div key={item.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                                <div className="h-16 w-16 bg-surface-container-low rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-3xl text-primary">description</span>
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <h3 className="font-bold text-lg text-gray-900 truncate max-w-md">{item.original_filename}</h3>
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(item.status)}`}>
                                            {item.status.replace('_', ' ')}
                                        </span>
                                        {item.iku_category && (
                                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700">
                                                IKU {item.iku_category}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                                    <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">calendar_today</span>
                                        Unggah pada {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2 w-full md:w-auto">
                                    {item.ai_analysis && (
                                        <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                                            <p className="text-[10px] font-bold text-blue-800 uppercase mb-1">Analisis AI:</p>
                                            <p className="text-xs text-blue-700 italic">"{item.ai_analysis.reasoning}"</p>
                                        </div>
                                    )}
                                    <a 
                                        href={`/storage/${item.file_path}`} 
                                        target="_blank"
                                        className="text-center px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                                    >
                                        Lihat Dokumen
                                    </a>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
