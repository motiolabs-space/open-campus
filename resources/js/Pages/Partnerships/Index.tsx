import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function PartnershipIndex({ partnerships }: any) {
    const getStatusBadge = (status: string, endDate: string) => {
        const today = new Date();
        const expiry = new Date(endDate);
        const diffDays = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 3600 * 24));

        if (diffDays < 0) return <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black uppercase rounded-lg border border-red-100">Expired</span>;
        if (diffDays < 90) return <span className="px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase rounded-lg border border-amber-100">Expiring Soon</span>;
        return <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase rounded-lg border border-emerald-100">Active</span>;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Partnership & MoU Management" />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-display-lg font-extrabold text-gray-900 tracking-tight">Manajemen Kemitraan & MoU</h1>
                        <p className="text-gray-500 mt-2 text-lg">Sentralisasi dokumen kerjasama strategis untuk optimalisasi IKU 6.</p>
                    </div>
                    <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                        <span className="material-symbols-outlined">add</span>
                        Daftarkan MoU Baru
                    </button>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: 'Total MoU Aktif', val: '128', icon: 'handshake', color: 'text-primary' },
                        { label: 'Mitra Industri', val: '42', icon: 'corporate_fare', color: 'text-blue-500' },
                        { label: 'Mitra Akademik', val: '56', icon: 'school', color: 'text-purple-500' },
                        { label: 'Perlu Perpanjangan', val: '12', icon: 'pending_actions', color: 'text-amber-500' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                            <div className={`w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center ${stat.color} mb-4`}>
                                <span className="material-symbols-outlined">{stat.icon}</span>
                            </div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className="text-3xl font-black text-gray-900">{stat.val}</p>
                        </div>
                    ))}
                </div>

                {/* Partnerships Table/List */}
                <div className="bg-white rounded-[3.5rem] shadow-xl border border-gray-50 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50">
                                    <th className="px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Nama Mitra & Deskripsi</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Nomor MoU</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Masa Berlaku</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                    <th className="px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {partnerships.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-10 py-24 text-center">
                                            <span className="material-symbols-outlined text-6xl text-gray-100 mb-6 block">description</span>
                                            <p className="text-gray-400 font-bold text-xl">Belum ada dokumen MoU yang terdaftar.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    partnerships.map((p: any) => (
                                        <tr key={p.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-10 py-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-black text-xl">
                                                        {p.partner_name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">{p.partner_name}</p>
                                                        <p className="text-xs text-gray-400 line-clamp-1 max-w-xs">{p.title}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-10 py-8">
                                                <code className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-bold text-gray-600">{p.mou_number}</code>
                                            </td>
                                            <td className="px-10 py-8">
                                                <p className="text-sm font-bold text-gray-700">{new Date(p.start_date).toLocaleDateString('id-ID')}</p>
                                                <p className="text-xs text-gray-400">s/d {new Date(p.end_date).toLocaleDateString('id-ID')}</p>
                                            </td>
                                            <td className="px-10 py-8">
                                                {getStatusBadge(p.status, p.end_date)}
                                            </td>
                                            <td className="px-10 py-8 text-right">
                                                <Link 
                                                    href={route('partnerships.show', p.id)}
                                                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm"
                                                >
                                                    <span className="material-symbols-outlined text-lg">visibility</span>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
