import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function TalentShow({ talent }: any) {
    const { appName } = usePage().props as any;

    return (
        <AuthenticatedLayout>
            <Head title={`${talent.name} | Talent Profile`} />

            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar / Basic Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 text-center">
                            <div className="w-32 h-32 rounded-full bg-surface-container-high mx-auto mb-6 flex items-center justify-center text-primary text-4xl font-bold border-4 border-white shadow-xl overflow-hidden">
                                {talent.avatar ? (
                                    <img src={talent.avatar} alt={talent.name} className="w-full h-full object-cover" />
                                ) : (
                                    talent.name.charAt(0)
                                )}
                            </div>
                            <h1 className="font-headline-lg text-2xl font-bold text-gray-900">{talent.name}</h1>
                            <p className="text-primary font-bold mt-1">{talent.headline || 'Verified Student Talent'}</p>
                            
                            <div className="mt-8 flex justify-center gap-8">
                                <div>
                                    <p className="text-xl font-black text-gray-900">{talent.impact_score}</p>
                                    <p className="text-[10px] text-gray-400 font-black uppercase">Impact</p>
                                </div>
                                <div className="h-10 w-[1px] bg-gray-100"></div>
                                <div>
                                    <p className="text-xl font-black text-primary">
                                        {Object.keys(talent.verified_iku_stats || {}).length}
                                    </p>
                                    <p className="text-[10px] text-gray-400 font-black uppercase">Badges</p>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold mt-10 hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-200">
                                <span className="material-symbols-outlined text-sm">mail</span>
                                Contact Talent
                            </button>

                            <div className="mt-10 p-6 bg-surface-container-low rounded-3xl border border-dashed border-gray-200">
                                <p className="text-[10px] text-gray-400 font-black uppercase mb-4">Scan Profile</p>
                                <img 
                                    src={route('talents.qr', talent.id)} 
                                    alt="Profile QR" 
                                    className="w-32 h-32 mx-auto mix-blend-multiply"
                                />
                                <p className="text-[9px] text-gray-400 mt-4 leading-tight italic">Scan untuk melihat portofolio terverifikasi IKU via mobile.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Academic Info</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Fakultas</span>
                                    <span className="font-bold text-gray-900">{talent.academic_profile?.faculty}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Prodi</span>
                                    <span className="font-bold text-gray-900">{talent.academic_profile?.department}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-500">Angkatan</span>
                                    <span className="font-bold text-gray-900">{talent.academic_profile?.batch_year}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content / Portfolio */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Bio & Skills */}
                        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
                            <h2 className="font-headline-md text-2xl font-bold text-gray-900 mb-6">About</h2>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                {talent.bio || 'Belum ada deskripsi profil.'}
                            </p>

                            <h3 className="font-bold text-gray-900 mb-4">Skills & Expertise</h3>
                            <div className="flex flex-wrap gap-2">
                                {(talent.skills || ['Leadership', 'Teamwork', 'Communication']).map((skill: string) => (
                                    <span key={skill} className="px-4 py-2 bg-primary/5 text-primary text-xs font-bold rounded-xl border border-primary/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* IKU Verified Achievements */}
                        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100">
                            <h2 className="font-headline-md text-2xl font-bold text-gray-900 mb-2">Verified IKU Achievements</h2>
                            <p className="text-gray-500 text-sm mb-8 italic">Hasil verifikasi AI berdasarkan bukti aktivitas akademik & MBKM.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {talent.iku_evidences?.map((ev: any) => (
                                    <div key={ev.id} className="p-6 bg-surface-container-low rounded-[2rem] border border-gray-50 group hover:border-primary/20 transition-all">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-lg uppercase">IKU {ev.iku_category}</span>
                                            <span className="material-symbols-outlined text-emerald-500">verified</span>
                                        </div>
                                        <p className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">{ev.description}</p>
                                        <p className="text-[10px] text-gray-400 font-medium">Verifikasi AI pada {new Date(ev.updated_at).toLocaleDateString()}</p>
                                    </div>
                                ))}
                                {(!talent.iku_evidences || talent.iku_evidences.length === 0) && (
                                    <div className="col-span-full py-10 text-center text-gray-400">
                                        <p className="text-sm font-medium">Belum ada bukti IKU yang diverifikasi.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
