import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function MarketplaceShow({ job, already_applied }: any) {
    const { appName } = usePage().props as any;
    const [showApplyModal, setShowApplyModal] = useState(false);
    const { data, setData, post, processing, reset } = useForm({
        message: ''
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('marketplace.apply', job.id), {
            onSuccess: () => {
                setShowApplyModal(false);
                reset();
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title={`${job.title} | ${appName}`} />

            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
                    {/* Cover / Header */}
                    <div className="h-48 bg-gradient-to-r from-primary/10 to-blue-50 relative">
                        <div className="absolute -bottom-12 left-12">
                            <div className="w-24 h-24 bg-white rounded-3xl shadow-lg border border-gray-50 flex items-center justify-center text-primary font-black text-3xl">
                                {job.company_name.charAt(0)}
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 px-12 pb-12">
                        <div className="flex flex-col md:flex-row justify-between gap-8">
                            <div className="flex-1">
                                <h1 className="font-headline-lg text-3xl font-bold text-gray-900">{job.title}</h1>
                                <p className="text-primary font-bold text-lg mt-1">{job.company_name}</p>
                                
                                <div className="flex flex-wrap gap-4 mt-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="material-symbols-outlined text-lg">location_on</span>
                                        {job.location}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="material-symbols-outlined text-lg">schedule</span>
                                        {job.work_type}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span className="material-symbols-outlined text-lg">payments</span>
                                        {job.salary_range || 'Competitive'}
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <h2 className="font-headline-md text-xl font-bold text-gray-900 mb-4">Deskripsi Pekerjaan</h2>
                                    <div className="prose prose-sm text-gray-600 max-w-none leading-relaxed">
                                        {job.description}
                                    </div>
                                </div>

                                {job.requirements && (
                                    <div className="mt-10">
                                        <h2 className="font-headline-md text-xl font-bold text-gray-900 mb-4">Persyaratan</h2>
                                        <ul className="space-y-3">
                                            {job.requirements.map((req: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="w-full md:w-80">
                                <div className="sticky top-24 p-8 bg-surface-container-low rounded-[2.5rem] border border-gray-50">
                                    {already_applied ? (
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="material-symbols-outlined text-3xl">verified</span>
                                            </div>
                                            <h3 className="font-bold text-emerald-900 mb-2">Terdaftar</h3>
                                            <p className="text-xs text-emerald-700">Anda sudah melamar posisi ini. Cek progres di dashboard Anda.</p>
                                        </div>
                                    ) : (
                                        <>
                                            <h3 className="font-bold text-gray-900 mb-4 text-center">Tertarik dengan posisi ini?</h3>
                                            <button 
                                                onClick={() => setShowApplyModal(true)}
                                                className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
                                            >
                                                Lamar Sekarang
                                                <span className="material-symbols-outlined">rocket_launch</span>
                                            </button>
                                            <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest font-black">
                                                Data Profil IKU Anda akan otomatis dilampirkan
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Modal */}
            {showApplyModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-[2.5rem] w-full max-w-lg p-10 shadow-2xl animate-in fade-in zoom-in duration-200">
                        <h2 className="font-headline-lg text-2xl font-bold text-gray-900 mb-2">Kirim Lamaran</h2>
                        <p className="text-sm text-gray-500 mb-8">Tuliskan pesan singkat kepada recruiter mengapa Anda tertarik dengan posisi ini.</p>
                        
                        <form onSubmit={submit}>
                            <textarea
                                className="w-full h-40 p-6 bg-surface-container-low border-gray-100 rounded-2xl focus:ring-primary focus:border-primary text-sm resize-none"
                                placeholder="Halo, saya tertarik dengan posisi ini karena..."
                                value={data.message}
                                onChange={e => setData('message', e.target.value)}
                            />
                            
                            <div className="flex gap-4 mt-8">
                                <button 
                                    type="button"
                                    onClick={() => setShowApplyModal(false)}
                                    className="flex-1 py-4 text-gray-500 font-bold hover:bg-gray-50 rounded-2xl transition-colors"
                                >
                                    Batal
                                </button>
                                <button 
                                    type="submit"
                                    disabled={processing}
                                    className="flex-[2] py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    {processing ? 'Mengirim...' : 'Kirim Lamaran'}
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
