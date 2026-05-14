import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function EvidenceReview({ evidences }: any) {
    const { appName } = usePage().props as any;
    const { post, processing } = useForm({});

    const handleVerify = (id: number, status: string, category: number) => {
        post(route('admin.evidence.verify', { 
            evidence: id,
            status: status,
            iku_category: category
        }), {
            preserveScroll: true
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Review Bukti IKU | ${appName}`} />

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-10">
                    <h1 className="font-headline-lg text-3xl font-bold text-gray-900">Console Reviewer IKU</h1>
                    <p className="text-gray-600 mt-2">Tinjau klasifikasi otomatis AI dan berikan verifikasi akhir untuk data MBKM/IKU.</p>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low">
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Mahasiswa</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Deskripsi & Bukti</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Analisis AI</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {evidences.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-20 text-center text-gray-400 font-medium">Belum ada antrean verifikasi.</td>
                                </tr>
                            ) : (
                                evidences.map((item: any) => (
                                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-6 align-top">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                                                    {item.user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-900 text-sm">{item.user.name}</p>
                                                    <p className="text-xs text-gray-500">{item.user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-6 align-top max-w-md">
                                            <p className="text-sm text-gray-700 line-clamp-3 mb-3">{item.description}</p>
                                            <a 
                                                href={`/storage/${item.file_path}`} 
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                                            >
                                                <span className="material-symbols-outlined text-sm">attach_file</span>
                                                {item.original_filename}
                                            </a>
                                        </td>
                                        <td className="px-6 py-6 align-top">
                                            {item.ai_analysis ? (
                                                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-bold rounded">IKU {item.iku_category}</span>
                                                        <span className="text-[10px] font-bold text-blue-600">Conf: {(item.ai_analysis.confidence * 100).toFixed(0)}%</span>
                                                    </div>
                                                    <p className="text-xs text-blue-800 italic leading-relaxed">"{item.ai_analysis.reasoning}"</p>
                                                </div>
                                            ) : (
                                                <span className="text-xs text-gray-400">Menunggu analisis...</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-6 align-top">
                                            <div className="flex flex-col gap-2">
                                                {item.status === 'verified' ? (
                                                    <div className="flex items-center justify-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 py-2 rounded-xl">
                                                        <span className="material-symbols-outlined text-sm">verified</span>
                                                        Verified
                                                    </div>
                                                ) : item.status === 'rejected' ? (
                                                    <div className="flex items-center justify-center gap-1 text-red-600 font-bold text-xs bg-red-50 py-2 rounded-xl">
                                                        <span className="material-symbols-outlined text-sm">cancel</span>
                                                        Rejected
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className="flex gap-1 mb-2">
                                                            <select 
                                                                className="flex-1 text-[10px] py-1 border-gray-200 rounded-lg focus:ring-primary focus:border-primary"
                                                                defaultValue={item.iku_category}
                                                                id={`cat-select-${item.id}`}
                                                            >
                                                                {[...Array(12)].map((_, i) => (
                                                                    <option key={i+1} value={i+1}>IKU {i+1}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <button
                                                            onClick={() => {
                                                                const select = document.getElementById(`cat-select-${item.id}`) as HTMLSelectElement;
                                                                handleVerify(item.id, 'verified', parseInt(select.value));
                                                            }}
                                                            disabled={processing}
                                                            className="w-full py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200"
                                                        >
                                                            Verifikasi
                                                        </button>
                                                        <button
                                                            onClick={() => handleVerify(item.id, 'rejected', item.iku_category)}
                                                            disabled={processing}
                                                            className="w-full py-2 border border-red-200 text-red-600 rounded-xl text-xs font-bold hover:bg-red-50 transition-all"
                                                        >
                                                            Tolak
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
