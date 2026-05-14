import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';

export default function MbkmLogbook({ activity, logbooks }: { activity: any, logbooks: any[] }) {
    const [showForm, setShowForm] = useState(false);
    const { data, setData, post, processing, reset, recentlySuccessful } = useForm({
        date: new Date().toISOString().split('T')[0],
        activity_details: '',
        hours_spent: 8,
        attachment: null as File | null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('mbkm.logbook.store', activity.id), {
            forceFormData: true,
            onSuccess: () => {
                setShowForm(false);
                reset();
            }
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Logbook | ${activity.title}`} />

            <div className="max-w-[1280px] mx-auto px-6 py-12">
                {/* Header Card */}
                <div className="bg-primary rounded-[3rem] p-10 text-white mb-12 shadow-2xl shadow-primary/20 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest">
                                        MBKM Activity Log
                                    </span>
                                    <span className="text-white/60">•</span>
                                    <span className="text-sm font-medium">{activity.company_name}</span>
                                </div>
                                <h1 className="text-4xl font-display-lg font-bold mb-4 tracking-tight">{activity.title}</h1>
                                <div className="flex flex-wrap gap-6 text-sm text-white/80">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                                        Mulai: {new Date(activity.start_date).toLocaleDateString('id-ID', { dateStyle: 'long' })}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">person</span>
                                        Mentor: {activity.mentor_name || 'Belum diatur'}
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setShowForm(!showForm)}
                                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${showForm ? 'bg-white text-primary' : 'bg-secondary text-on-secondary shadow-xl shadow-secondary/20'}`}
                            >
                                <span className="material-symbols-outlined">{showForm ? 'close' : 'add'}</span>
                                {showForm ? 'Batal' : 'Isi Logbook'}
                            </button>
                        </div>
                    </div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Logbook Feed */}
                    <div className="lg:col-span-8 space-y-8">
                        {showForm && (
                            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl border-2 border-primary/20 animate-in slide-in-from-top-8 duration-300">
                                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <span className="p-2 bg-primary/10 text-primary rounded-xl">
                                        <span className="material-symbols-outlined">edit_note</span>
                                    </span>
                                    Catat Aktivitas Hari Ini
                                </h2>
                                <form onSubmit={submit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-600">Tanggal</label>
                                            <input 
                                                type="date"
                                                className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary"
                                                value={data.date}
                                                onChange={e => setData('date', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-600">Jam Kerja (Durasi)</label>
                                            <div className="flex items-center gap-4">
                                                <input 
                                                    type="number"
                                                    className="flex-1 bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary text-center font-bold"
                                                    value={data.hours_spent}
                                                    onChange={e => setData('hours_spent', parseInt(e.target.value))}
                                                    min="1" max="24"
                                                    required
                                                />
                                                <span className="font-bold text-gray-400">Jam</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-600">Detail Aktivitas</label>
                                        <textarea 
                                            className="w-full bg-gray-50 border-none rounded-2xl p-6 focus:ring-2 focus:ring-primary min-h-[150px]"
                                            placeholder="Jelaskan apa yang Anda kerjakan hari ini secara mendetail..."
                                            value={data.activity_details}
                                            onChange={e => setData('activity_details', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-600">Bukti Kegiatan (Opsional)</label>
                                        <input 
                                            type="file"
                                            className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                                            onChange={e => setData('attachment', e.target.files ? e.target.files[0] : null)}
                                            accept=".pdf,.jpg,.jpeg,.png"
                                        />
                                        <p className="text-[10px] text-gray-400">Format: PDF, JPG, PNG (Max 2MB)</p>
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <button 
                                            type="submit"
                                            disabled={processing}
                                            className="px-12 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                                        >
                                            {processing ? 'Menyimpan...' : 'Simpan Logbook'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="space-y-6">
                            {logbooks.map((log) => (
                                <div key={log.id} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:border-primary/20 transition-all flex gap-8 items-start relative group">
                                    <div className="hidden md:flex flex-col items-center">
                                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary font-bold text-lg mb-2">
                                            {new Date(log.date).getDate()}
                                        </div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            {new Date(log.date).toLocaleDateString('id-ID', { month: 'short' })}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider md:hidden">
                                                    {new Date(log.date).toLocaleDateString('id-ID', { dateStyle: 'medium' })}
                                                </span>
                                                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                                                    {log.hours_spent} Jam Kerja
                                                </span>
                                                {log.attachment_path && (
                                                    <a 
                                                        href={`/storage/${log.attachment_path}`} 
                                                        target="_blank"
                                                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 hover:bg-blue-100 transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-[14px]">attach_file</span>
                                                        Bukti
                                                    </a>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-4">
                                                {!log.ai_validation_result && (
                                                    <Link 
                                                        href={route('ai.logbook.evaluate', log.id)} 
                                                        method="post"
                                                        as="button"
                                                        className="px-4 py-1.5 bg-gray-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-black/10"
                                                    >
                                                        <span className="material-symbols-outlined text-[14px] animate-pulse text-primary">psychology</span>
                                                        AI Verify
                                                    </Link>
                                                )}
                                                {log.is_verified_by_mentor && (
                                                    <span className="text-emerald-500 material-symbols-outlined" title="Verified by Mentor">verified</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-4">
                                            {log.activity_details}
                                        </div>

                                        {/* AI Feedback Box */}
                                        {log.ai_validation_result && (
                                            <div className="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 animate-in fade-in duration-500">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-sm text-primary">psychology</span>
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">AI Evaluation</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-xs font-black text-primary">{log.ai_validation_result.score}% Match</span>
                                                        {log.ai_validation_result.valid && (
                                                            <span className="material-symbols-outlined text-[14px] text-emerald-500">verified_user</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-[11px] text-gray-600 italic">"{log.ai_validation_result.feedback}"</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {logbooks.length === 0 && !showForm && (
                                <div className="text-center py-24 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
                                    <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">edit_calendar</span>
                                    <h3 className="text-xl font-bold text-gray-400">Logbook masih kosong</h3>
                                    <p className="text-gray-400 mt-2">Mulai catat aktivitas harian Anda untuk monitoring MBKM.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Stats Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-8">Statistik Progress</h3>
                            <div className="space-y-8">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 mb-1">Total Jam</p>
                                        <h4 className="text-4xl font-display-lg font-bold text-primary">{logbooks.reduce((acc, curr) => acc + curr.hours_spent, 0)}</h4>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-gray-400 mb-1">Total Hari</p>
                                        <h4 className="text-2xl font-bold text-gray-900">{logbooks.length}</h4>
                                    </div>
                                </div>
                                <div className="p-6 bg-primary/5 rounded-[1.5rem] space-y-4">
                                    <div className="flex justify-between text-xs font-bold text-primary tracking-widest">
                                        <span>DURASI PROGRAM</span>
                                        <span>{(logbooks.length / 120 * 100).toFixed(0)}%</span>
                                    </div>
                                    <div className="h-3 bg-white rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${(logbooks.length / 120 * 100)}%` }}></div>
                                    </div>
                                    <p className="text-[10px] text-gray-400 leading-tight">
                                        Estimasi target 120 hari kerja (6 bulan) untuk konversi 20 SKS penuh.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-emerald-200">
                            <span className="material-symbols-outlined text-4xl mb-4">stars</span>
                            <h3 className="text-xl font-bold mb-2">IKU 3 Milestone</h3>
                            <p className="text-white/80 text-sm leading-relaxed mb-6">
                                Aktivitas MBKM Anda berkontribusi pada pencapaian Indikator Kinerja Utama Kampus kategori Mahasiswa Berkegiatan di Luar Kampus.
                            </p>
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-bold uppercase tracking-widest">IKU 3.1</span>
                                <span className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-bold uppercase tracking-widest">VERIFIED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
