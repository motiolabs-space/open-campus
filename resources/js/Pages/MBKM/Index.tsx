import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

export default function MBKMIndex({ activities }: { activities: any[] }) {
    const [showModal, setShowModal] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        type: 'internship',
        title: '',
        company_name: '',
        mentor_name: '',
        mentor_email: '',
        start_date: '',
        end_date: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('mbkm.activity.store'), {
            onSuccess: () => {
                setShowModal(false);
                reset();
            }
        });
    };

    const getTypeLabel = (type: string) => {
        const types: any = {
            internship: 'Magang Industri',
            research: 'Riset / Penelitian',
            student_exchange: 'Pertukaran Mahasiswa',
            entrepreneurship: 'Wirausaha',
            village_project: 'Proyek Desa',
            teaching_assistance: 'Asistensi Mengajar'
        };
        return types[type] || type;
    };

    return (
        <AuthenticatedLayout>
            <Head title="MBKM Center | Monitoring Aktivitas" />

            <div className="max-w-[1280px] mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-display-lg font-extrabold text-gray-900 tracking-tight">MBKM Center</h1>
                        <p className="text-gray-500 mt-2">Kelola dan pantau seluruh aktivitas Merdeka Belajar Anda.</p>
                    </div>
                    <button 
                        onClick={() => setShowModal(true)}
                        className="bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">add</span>
                        Daftar Aktivitas Baru
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity) => (
                        <div key={activity.id} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">
                                        {activity.type === 'internship' ? 'work' : 
                                         activity.type === 'research' ? 'science' : 
                                         activity.type === 'entrepreneurship' ? 'storefront' : 'school'}
                                    </span>
                                </div>
                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${activity.status === 'ongoing' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                                    {activity.status}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{activity.title}</h3>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <span className="material-symbols-outlined text-lg">corporate_fare</span>
                                    {activity.company_name}
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                                    {new Date(activity.start_date).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    <span className="material-symbols-outlined text-lg">assignment</span>
                                    {activity.logbooks_count} Logbook terisi
                                </div>
                            </div>

                            <Link 
                                href={route('mbkm.logbook', activity.id)}
                                className="w-full py-4 bg-gray-50 rounded-2xl flex items-center justify-center gap-2 font-bold text-gray-600 hover:bg-primary hover:text-white transition-all"
                            >
                                Buka Logbook
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    ))}

                    {activities.length === 0 && (
                        <div className="col-span-full py-24 text-center bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">clinical_notes</span>
                            <h3 className="text-xl font-bold text-gray-400">Belum ada aktivitas MBKM</h3>
                            <p className="text-gray-400 mt-2">Daftarkan magang atau riset Anda untuk mulai mencatat logbook.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Registration Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
                    <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="bg-primary p-8 text-white flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Daftar Aktivitas Baru</h2>
                            <button onClick={() => setShowModal(false)} className="hover:rotate-90 transition-transform">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={submit} className="p-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600">Jenis Program</label>
                                    <select 
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary"
                                        value={data.type}
                                        onChange={e => setData('type', e.target.value as any)}
                                    >
                                        <option value="internship">Magang Industri</option>
                                        <option value="research">Riset / Penelitian</option>
                                        <option value="student_exchange">Pertukaran Mahasiswa</option>
                                        <option value="entrepreneurship">Wirausaha</option>
                                        <option value="village_project">Proyek Desa</option>
                                        <option value="teaching_assistance">Asistensi Mengajar</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600">Judul Aktivitas</label>
                                    <input 
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary"
                                        placeholder="Contoh: Magang Front-end Developer"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600">Nama Perusahaan/Instansi</label>
                                    <input 
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary"
                                        placeholder="PT. Maju Bersama"
                                        value={data.company_name}
                                        onChange={e => setData('company_name', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600">Nama Mentor (Opsional)</label>
                                    <input 
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary"
                                        placeholder="Bpk. Jaka"
                                        value={data.mentor_name}
                                        onChange={e => setData('mentor_name', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600">Tanggal Mulai</label>
                                    <input 
                                        type="date"
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary"
                                        value={data.start_date}
                                        onChange={e => setData('start_date', e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600">Estimasi Selesai</label>
                                    <input 
                                        type="date"
                                        className="w-full bg-gray-50 border-none rounded-xl p-3 focus:ring-2 focus:ring-primary"
                                        value={data.end_date}
                                        onChange={e => setData('end_date', e.target.value)}
                                    />
                                </div>
                            </div>
                            <button 
                                type="submit"
                                disabled={processing}
                                className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:bg-surface-tint transition-all"
                            >
                                {processing ? 'Memproses...' : 'Daftarkan Sekarang'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
