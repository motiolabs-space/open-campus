import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function EvidenceCreate() {
    const { appName } = usePage().props as any;
    const { data, setData, post, processing, errors } = useForm({
        description: '',
        file: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('evidence.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Unggah Bukti IKU | ${appName}`} />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <h1 className="font-headline-lg text-3xl font-bold text-gray-900">Unggah Bukti Aktivitas</h1>
                    <p className="text-gray-600 mt-2">Laporkan kegiatan magang, riset, atau proyek Anda untuk diverifikasi ke dalam IKU universitas.</p>
                </div>

                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                    <form onSubmit={submit} className="space-y-8">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Deskripsi Aktivitas</label>
                            <textarea
                                className="w-full bg-surface-container-low border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary min-h-[150px]"
                                placeholder="Jelaskan secara detail kegiatan yang Anda lakukan, instansi terkait, dan durasi pelaksanaan..."
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                            ></textarea>
                            {errors.description && <p className="text-red-500 text-xs mt-2">{errors.description}</p>}
                            <p className="text-xs text-gray-400 mt-2 italic">Minimal 20 karakter agar AI dapat menganalisis dengan akurat.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">File Bukti (PDF/Gambar)</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-2xl hover:border-primary transition-colors group">
                                <div className="space-y-1 text-center">
                                    <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-primary transition-colors">cloud_upload</span>
                                    <div className="flex text-sm text-gray-600">
                                        <label className="relative cursor-pointer bg-white rounded-md font-bold text-primary hover:text-blue-500">
                                            <span>Unggah file</span>
                                            <input 
                                                type="file" 
                                                className="sr-only" 
                                                onChange={e => setData('file', e.target.files ? e.target.files[0] : null)}
                                            />
                                        </label>
                                        <p className="pl-1">atau seret dan lepas</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PDF, PNG, JPG hingga 5MB</p>
                                    {data.file && (
                                        <p className="text-sm font-bold text-emerald-600 mt-2 flex items-center justify-center gap-1">
                                            <span className="material-symbols-outlined text-sm">check_circle</span>
                                            {data.file.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                            {errors.file && <p className="text-red-500 text-xs mt-2">{errors.file}</p>}
                        </div>

                        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span className="material-symbols-outlined text-primary">info</span>
                                <span>AI akan mengklasifikasikan bukti Anda secara otomatis.</span>
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50"
                            >
                                {processing ? 'Mengunggah...' : 'Kirim Bukti'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
