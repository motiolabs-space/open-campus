import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function TalentIndex({ talents }: any) {
    const { appName } = usePage().props as any;

    return (
        <AuthenticatedLayout>
            <Head title={`Talent Pool | ${appName}`} />

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <h1 className="font-headline-lg text-4xl font-bold text-gray-900 tracking-tight">
                        Verified <span className="text-primary">Talents</span>
                    </h1>
                    <p className="text-gray-500 mt-2 text-lg">Direktori mahasiswa berprestasi dengan portofolio yang diverifikasi AI.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {talents.data.map((talent: any) => (
                        <Link 
                            key={talent.id}
                            href={route('talents.show', talent.id)}
                            className="group bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all text-center"
                        >
                            <div className="relative mb-4 inline-block">
                                <div className="w-24 h-24 rounded-full bg-surface-container-high mx-auto flex items-center justify-center text-primary text-3xl font-bold border-4 border-white shadow-md overflow-hidden">
                                    {talent.avatar ? (
                                        <img src={talent.avatar} alt={talent.name} className="w-full h-full object-cover" />
                                    ) : (
                                        talent.name.charAt(0)
                                    )}
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                </div>
                            </div>

                            <h3 className="font-headline-md text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                                {talent.name}
                            </h3>
                            <p className="text-xs text-gray-500 font-medium mb-4 line-clamp-1">
                                {talent.academic_profile?.department || 'Mahasiswa'} • {talent.academic_profile?.batch_year || '2023'}
                            </p>

                            <div className="bg-surface-container-low rounded-2xl py-3 px-4 flex justify-between items-center mb-4">
                                <div className="text-left">
                                    <p className="text-[10px] text-gray-400 font-black uppercase">Impact Score</p>
                                    <p className="text-lg font-black text-gray-900">{talent.impact_score}</p>
                                </div>
                                <div className="h-8 w-[1px] bg-gray-200"></div>
                                <div className="text-right">
                                    <p className="text-[10px] text-gray-400 font-black uppercase">IKU Badge</p>
                                    <p className="text-lg font-black text-primary">
                                        {Object.keys(talent.verified_iku_stats || {}).length}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5 justify-center">
                                {(talent.skills || ['PHP', 'React', 'AI']).slice(0, 3).map((skill: string) => (
                                    <span key={skill} className="text-[9px] font-bold px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination placeholder */}
                {talents.total > talents.per_page && (
                    <div className="mt-12 flex justify-center">
                        <p className="text-sm text-gray-400 font-medium">Tampilkan lebih banyak...</p>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
