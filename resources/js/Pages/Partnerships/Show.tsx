import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PartnershipShow({ partnership }: any) {
    const isExpired = new Date(partnership.end_date) < new Date();

    return (
        <AuthenticatedLayout>
            <Head title={`Detail MoU - ${partnership.partner_name}`} />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <Link href={route('partnerships.index')} className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group font-bold text-sm">
                    <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Kembali ke Daftar Kemitraan
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Header & Main Info */}
                    <div className="lg:col-span-8">
                        <div className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-gray-50 mb-12 relative overflow-hidden">
                            <div className="flex flex-wrap items-center gap-3 mb-10">
                                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                                    isExpired ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
                                }`}>
                                    {isExpired ? 'Expired' : 'Active Agreement'}
                                </span>
                                <span className="px-4 py-1.5 bg-primary/5 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest">
                                    {partnership.partner_type}
                                </span>
                            </div>

                            <h1 className="text-4xl font-display-lg font-extrabold text-gray-900 mb-6 leading-tight">
                                {partnership.title}
                            </h1>
                            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                                {partnership.scope_of_work}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Partner Institution</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary font-black text-2xl shadow-sm">
                                            {partnership.partner_name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-lg">{partnership.partner_name}</p>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Global Partner</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Masa Berlaku</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm">
                                            <span className="material-symbols-outlined text-3xl">event_available</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">{new Date(partnership.end_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Tanggal Berakhir</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 bg-gray-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl">picture_as_pdf</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Dokumen Digital MoU</p>
                                        <p className="text-xs text-gray-400">MoU_{partnership.mou_number}.pdf</p>
                                    </div>
                                </div>
                                <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                    Unduh Dokumen
                                </button>
                            </div>

                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                        </div>

                        {/* Partnership Impact (IKU 6 Support) */}
                        <div className="bg-white rounded-[3.5rem] p-12 shadow-xl border border-gray-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">trending_up</span>
                                Dampak Strategis & IKU 6
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 flex items-start gap-4">
                                        <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">MBKM Approved</p>
                                            <p className="text-xs text-gray-500 mt-1">Mitra ini mendukung program magang dan studi independen mahasiswa.</p>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-4">
                                        <span className="material-symbols-outlined text-blue-500">check_circle</span>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">Research Collaboration</p>
                                            <p className="text-xs text-gray-500 mt-1">Terdaftar untuk proyek riset bersama dosen dan praktisi industri.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col items-center justify-center text-center">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Verified PIC</p>
                                    <img src={`https://i.pravatar.cc/150?u=${partnership.user_id}`} className="w-16 h-16 rounded-full border-4 border-white shadow-md mb-4" alt="PIC"/>
                                    <p className="font-bold text-gray-900">{partnership.user.name}</p>
                                    <p className="text-xs text-gray-500">Penanggung Jawab Kerjasama</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Actions */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-50 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-8">Administrasi MoU</h3>
                            <div className="space-y-4">
                                <button className="w-full py-4 bg-gray-50 text-gray-600 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
                                    <span className="material-symbols-outlined">edit</span>
                                    Edit Detail MoU
                                </button>
                                <button className="w-full py-4 bg-gray-50 text-gray-600 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
                                    <span className="material-symbols-outlined">history</span>
                                    Riwayat Amandemen
                                </button>
                                <button className="w-full py-4 bg-primary/10 text-primary rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary/20 transition-all">
                                    <span className="material-symbols-outlined">sync</span>
                                    Ajukan Perpanjangan
                                </button>
                                <div className="pt-6 mt-6 border-t border-gray-100">
                                    <button className="w-full py-4 bg-red-50 text-red-600 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-red-100 transition-all">
                                        <span className="material-symbols-outlined">delete_forever</span>
                                        Arsipkan Kerjasama
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
