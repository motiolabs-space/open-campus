import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { 
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { Users, FileCheck, Briefcase, TrendingUp, Download } from 'lucide-react';

export default function AdminDashboard({ stats, iku_chart_data, recent_activities }: any) {
    return (
        <AuthenticatedLayout>
            <Head title="Executive Analytics Dashboard" />

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                        <h1 className="font-headline-lg text-4xl font-bold text-gray-900 tracking-tight">
                            Executive <span className="text-primary">Analytics</span>
                        </h1>
                        <p className="text-gray-500 mt-2 text-lg">Monitoring kinerja 12 IKU dan portofolio talent mahasiswa.</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <Link 
                            href={route('admin.pddikti.bulk-sync')} 
                            method="post"
                            as="button"
                            className="flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-2xl font-bold hover:bg-primary/20 transition-all border border-primary/20"
                        >
                            <span className="material-symbols-outlined text-sm">sync</span>
                            Sync all to PDDIKTI
                        </Link>
                        <a 
                            href={route('admin.report.export')} 
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-gray-200"
                        >
                            <Download className="w-4 h-4" />
                            Export Report Kemdikti
                        </a>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard 
                        title="Total Mahasiswa" 
                        value={stats.total_students} 
                        icon={<Users className="w-6 h-6 text-blue-600" />}
                        trend="+12% bulan ini"
                        bgColor="bg-blue-50"
                    />
                    <StatCard 
                        title="Bukti Terverifikasi" 
                        value={stats.verified_evidence} 
                        icon={<FileCheck className="w-6 h-6 text-emerald-600" />}
                        trend="98% akurasi AI"
                        bgColor="bg-emerald-50"
                    />
                    <StatCard 
                        title="Total Lamaran Kerja" 
                        value={stats.job_applications} 
                        icon={<Briefcase className="w-6 h-6 text-purple-600" />}
                        trend="32 Match hari ini"
                        bgColor="bg-purple-50"
                    />
                    <StatCard 
                        title="Avg Impact Score" 
                        value={stats.average_impact} 
                        icon={<TrendingUp className="w-6 h-6 text-amber-600" />}
                        trend="Kenaikan +4.2"
                        bgColor="bg-amber-50"
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    {/* Radar Chart for IKU */}
                    <div className="lg:col-span-1 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-2">Performa 12 IKU</h3>
                        <p className="text-xs text-gray-400 mb-8 uppercase font-black tracking-widest">Distribusi Bukti Terverifikasi</p>
                        
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={iku_chart_data}>
                                    <PolarGrid stroke="#f3f4f6" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#9ca3af' }} />
                                    <Radar
                                        name="IKU"
                                        dataKey="A"
                                        stroke="#0064d2"
                                        fill="#0064d2"
                                        fillOpacity={0.1}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Bar Chart for Activity */}
                    <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-2">Trend Kinerja Mahasiswa</h3>
                        <p className="text-xs text-gray-400 mb-8 uppercase font-black tracking-widest">Progres Akumulatif IKU per Kategori</p>
                        
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={iku_chart_data}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f9fafb" />
                                    <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
                                    <Tooltip 
                                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Bar dataKey="A" fill="#0064d2" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Recent Activities Table */}
                <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="font-bold text-gray-900">Verifikasi Terbaru</h3>
                            <p className="text-xs text-gray-400 uppercase font-black tracking-widest mt-1">Antrean Penjamin Mutu</p>
                        </div>
                        <Link href={route('admin.evidence')} className="text-primary font-bold text-sm hover:underline">
                            Lihat Semua
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-50">
                                    <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Mahasiswa</th>
                                    <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Kategori</th>
                                    <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                    <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recent_activities.map((activity: any) => (
                                    <tr key={activity.id} className="group">
                                        <td className="py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs">
                                                    {activity.user.name.charAt(0)}
                                                </div>
                                                <span className="font-bold text-sm text-gray-900">{activity.user.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <span className="text-xs font-bold px-3 py-1 bg-primary/5 text-primary rounded-lg">
                                                IKU {activity.iku_category || 'N/A'}
                                            </span>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                                        activity.status === 'verified' ? 'bg-emerald-500' :
                                                        activity.status === 'analyzing' ? 'bg-amber-500' : 'bg-gray-400'
                                                    }`}></div>
                                                    <span className="text-xs font-medium text-gray-600 capitalize">{activity.status}</span>
                                                </div>
                                                {activity.status === 'verified' && (
                                                    <div className="flex items-center gap-1.5">
                                                        {activity.is_pddikti_synced ? (
                                                            <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">SYNCED</span>
                                                        ) : (
                                                            <Link 
                                                                href={route('admin.pddikti.sync', activity.id)} 
                                                                method="post" 
                                                                as="button"
                                                                className="text-[9px] font-black text-gray-400 hover:text-primary transition-colors flex items-center gap-1"
                                                            >
                                                                <span className="material-symbols-outlined text-[10px]">sync</span>
                                                                SYNC NOW
                                                            </Link>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-5 text-xs text-gray-400">
                                            {new Date(activity.created_at).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function StatCard({ title, value, icon, trend, bgColor }: any) {
    return (
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-2xl ${bgColor}`}>
                    {icon}
                </div>
                <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {trend}
                </span>
            </div>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">{title}</p>
            <h4 className="text-3xl font-black text-gray-900 tracking-tight">{value}</h4>
        </div>
    );
}
