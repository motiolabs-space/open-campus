import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function TracerStudyForm({ existingTracer }: { existingTracer: any }) {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        status: existingTracer?.status || 'working',
        company_name: existingTracer?.company_name || '',
        job_title: existingTracer?.job_title || '',
        salary_range: existingTracer?.salary_range || '',
        business_name: existingTracer?.business_name || '',
        business_sector: existingTracer?.business_sector || '',
        institution_name: existingTracer?.institution_name || '',
        study_program: existingTracer?.study_program || '',
        graduation_date: existingTracer?.graduation_date || '',
        start_date: existingTracer?.start_date || '',
        notes: existingTracer?.notes || '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('tracer.store'));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tracer Study | Akuntabilitas Lulusan" />

            <div className="max-w-[1280px] mx-auto px-6 py-12">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* Sidebar Info */}
                        <div className="lg:col-span-4 bg-primary p-12 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                                    IKU 2 Monitoring
                                </span>
                                <h1 className="text-4xl font-display-lg font-bold mb-6">Tracer Study Kampus</h1>
                                <p className="text-white/80 leading-relaxed mb-12">
                                    Kontribusi Anda sangat berharga bagi akreditasi kampus. Data ini digunakan untuk mengukur daya serap lulusan di dunia kerja dan industri.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined">verified</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Data Terverifikasi</h4>
                                            <p className="text-sm text-white/60">Pastikan data yang Anda masukkan akurat sesuai kondisi terkini.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                            <span className="material-symbols-outlined">trending_up</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Mendukung IKU 2</h4>
                                            <p className="text-sm text-white/60">Membantu meningkatkan peringkat universitas di level nasional.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
                        </div>

                        {/* Form Content */}
                        <div className="lg:col-span-8 p-12">
                            <form onSubmit={submit} className="space-y-10">
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b pb-4">Status Saat Ini</h2>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { id: 'working', label: 'Bekerja', icon: 'work' },
                                            { id: 'entrepreneur', label: 'Wiraswasta', icon: 'storefront' },
                                            { id: 'studying', label: 'Studi Lanjut', icon: 'school' },
                                            { id: 'searching', label: 'Mencari Kerja', icon: 'search' },
                                        ].map((opt) => (
                                            <button
                                                key={opt.id}
                                                type="button"
                                                onClick={() => setData('status', opt.id as any)}
                                                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${data.status === opt.id ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-primary/30'}`}
                                            >
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${data.status === opt.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                                    <span className="material-symbols-outlined">{opt.icon}</span>
                                                </div>
                                                <span className={`font-bold ${data.status === opt.id ? 'text-primary' : 'text-gray-600'}`}>{opt.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Conditional Fields: Working */}
                                {data.status === 'working' && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                                        <h3 className="text-lg font-bold text-gray-700">Detail Pekerjaan</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-600">Nama Perusahaan / Instansi</label>
                                                <input 
                                                    className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary" 
                                                    value={data.company_name}
                                                    onChange={e => setData('company_name', e.target.value)}
                                                    placeholder="PT. Example Indonesia"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-600">Posisi / Jabatan</label>
                                                <input 
                                                    className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary" 
                                                    value={data.job_title}
                                                    onChange={e => setData('job_title', e.target.value)}
                                                    placeholder="Software Engineer"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-600">Rentang Gaji</label>
                                                <select 
                                                    className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary"
                                                    value={data.salary_range}
                                                    onChange={e => setData('salary_range', e.target.value)}
                                                >
                                                    <option value="">Pilih Gaji...</option>
                                                    <option value="< 1.2 UMP">Di bawah 1.2 x UMP</option>
                                                    <option value="1.2 - 3 UMP">1.2 x - 3 x UMP</option>
                                                    <option value="> 3 UMP">Di atas 3 x UMP</option>
                                                </select>
                                                <p className="text-[10px] text-gray-400">*Gaji {'>'} 1.2 UMP memberikan bobot tertinggi bagi IKU PT.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Conditional Fields: Entrepreneur */}
                                {data.status === 'entrepreneur' && (
                                    <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                                        <h3 className="text-lg font-bold text-gray-700">Detail Usaha</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-600">Nama Bisnis / Startup</label>
                                                <input 
                                                    className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary" 
                                                    value={data.business_name}
                                                    onChange={e => setData('business_name', e.target.value)}
                                                    placeholder="Nama Brand Anda"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-600">Sektor Bisnis</label>
                                                <input 
                                                    className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary" 
                                                    value={data.business_sector}
                                                    onChange={e => setData('business_sector', e.target.value)}
                                                    placeholder="Teknologi, Kuliner, dll"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Common Fields */}
                                <div className="space-y-6 pt-6 border-t">
                                    <h3 className="text-lg font-bold text-gray-700">Informasi Kelulusan</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-600">Tanggal Lulus (Yudisium)</label>
                                            <input 
                                                type="date"
                                                className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary" 
                                                value={data.graduation_date}
                                                onChange={e => setData('graduation_date', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-600">Mulai Aktifitas (Tgl Mulai Kerja/Bisnis)</label>
                                            <input 
                                                type="date"
                                                className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary" 
                                                value={data.start_date}
                                                onChange={e => setData('start_date', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-600">Catatan Tambahan / Testimoni</label>
                                        <textarea 
                                            className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary min-h-[100px]" 
                                            value={data.notes}
                                            onChange={e => setData('notes', e.target.value)}
                                            placeholder="Pengalaman Anda mencari kerja atau pesan untuk almamater..."
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-8">
                                    <div className="flex items-center gap-2">
                                        {recentlySuccessful && (
                                            <div className="flex items-center gap-2 text-emerald-600 animate-in fade-in slide-in-from-left-4">
                                                <span className="material-symbols-outlined">check_circle</span>
                                                <span className="text-sm font-bold">Data berhasil disimpan!</span>
                                            </div>
                                        )}
                                    </div>
                                    <button 
                                        type="submit"
                                        disabled={processing}
                                        className="px-12 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-surface-tint active:scale-95 transition-all disabled:opacity-50"
                                    >
                                        {processing ? 'Menyimpan...' : 'Kirim Data Tracer'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
