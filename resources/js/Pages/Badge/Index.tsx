import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function BadgeIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Badges & Levels | Campus Network" />

            <main className="p-8 min-h-screen max-w-[1280px] mx-auto">
                {/* User Level Progress (Top) */}
                <section className="mb-12 mt-4">
                    <div className="flex items-end justify-between mb-6">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Academic Eminence</h1>
                            <p className="text-gray-600 text-lg">You are among the top 2% of contributors this quarter.</p>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-bold text-primary block">Level 4</span>
                            <span className="text-2xl font-extrabold text-gray-900">Impact Maker</span>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-8 relative z-10">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white ring-4 ring-blue-100">
                                    <span className="material-symbols-outlined text-sm">explore</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">Explorer</span>
                            </div>
                            <div className="h-[2px] flex-1 bg-primary mx-2"></div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white ring-4 ring-blue-100">
                                    <span className="material-symbols-outlined text-sm">construction</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">Skilled</span>
                            </div>
                            <div className="h-[2px] flex-1 bg-primary mx-2"></div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white ring-4 ring-blue-100">
                                    <span className="material-symbols-outlined text-sm">work</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">Professional</span>
                            </div>
                            <div className="h-[2px] flex-1 bg-primary mx-2"></div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white border-4 border-primary text-primary shadow-xl scale-110">
                                    <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
                                </div>
                                <span className="text-[10px] font-extrabold uppercase tracking-tighter text-primary">Impact Maker</span>
                            </div>
                            <div className="h-[2px] flex-1 bg-gray-200 mx-2"></div>
                            <div className="flex flex-col items-center gap-2 opacity-40">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-500">
                                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500">Elite Talent</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden mr-4">
                                <div className="bg-primary h-full rounded-full w-[75%] transition-all"></div>
                            </div>
                            <span className="text-xs font-bold text-gray-500">7,500 / 10,000 pts to Elite</span>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Main Badges Column */}
                    <div className="xl:col-span-2 space-y-12">
                        {/* Earned Badges */}
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                                <h2 className="text-2xl font-bold text-gray-900">Distinguished Honors</h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {/* Badge 1 */}
                                <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col items-center text-center group hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="w-20 h-20 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm relative overflow-hidden border border-gray-50">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-white opacity-50"></div>
                                        <span className="material-symbols-outlined text-4xl text-blue-600 relative z-10" style={{fontVariationSettings: "'FILL' 1"}}>star_rate</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900">Research Pioneer</h3>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Unlocked Oct 2023</p>
                                    <span className="mt-3 px-2 py-1 bg-blue-50 text-[10px] font-bold text-blue-600 rounded uppercase">Research</span>
                                </div>
                                {/* Badge 2 */}
                                <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col items-center text-center group hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="w-20 h-20 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm relative border border-gray-50">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-50 to-white opacity-50"></div>
                                        <span className="material-symbols-outlined text-4xl text-amber-500" style={{fontVariationSettings: "'FILL' 1"}}>diversity_3</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900">Master Collaborator</h3>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Unlocked Jan 2024</p>
                                    <span className="mt-3 px-2 py-1 bg-amber-50 text-[10px] font-bold text-amber-600 rounded uppercase">Collaboration</span>
                                </div>
                                {/* Badge 3 */}
                                <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col items-center text-center group hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="w-20 h-20 mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm relative border border-gray-50">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-white opacity-50"></div>
                                        <span className="material-symbols-outlined text-4xl text-emerald-600" style={{fontVariationSettings: "'FILL' 1"}}>lightbulb</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900">Innovation Lead</h3>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-bold">Unlocked Mar 2024</p>
                                    <span className="mt-3 px-2 py-1 bg-emerald-50 text-[10px] font-bold text-emerald-600 rounded uppercase">Innovation</span>
                                </div>
                            </div>
                        </section>

                        {/* Locked Badges */}
                        <section>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-gray-400">lock</span>
                                <h2 className="text-2xl font-bold text-gray-900">Upcoming Milestones</h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {/* Locked 1 */}
                                <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center text-center opacity-70 border border-dashed border-gray-300 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                    <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl text-gray-500">public</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900">Global Envoy</h3>
                                    <p className="text-[10px] text-primary mt-2 font-bold uppercase tracking-wider">Attend 3 Global Summits</p>
                                </div>
                                {/* Locked 2 */}
                                <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center text-center opacity-70 border border-dashed border-gray-300 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                    <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl text-gray-500">history_edu</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900">Legacy Author</h3>
                                    <p className="text-[10px] text-primary mt-2 font-bold uppercase tracking-wider">Publish 5 Research Papers</p>
                                </div>
                                {/* Locked 3 */}
                                <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center text-center opacity-70 border border-dashed border-gray-300 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                                    <div className="w-16 h-16 mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl text-gray-500">volunteer_activism</span>
                                    </div>
                                    <h3 className="font-bold text-sm text-gray-900">Community Pillar</h3>
                                    <p className="text-[10px] text-primary mt-2 font-bold uppercase tracking-wider">Mentor 10 Undergraduates</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Content */}
                    <div className="space-y-8">
                        {/* Leaderboard Preview */}
                        <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-bold text-gray-900 flex items-center gap-2 text-lg">
                                    <span className="material-symbols-outlined text-amber-500">leaderboard</span>
                                    Field Leaders
                                </h2>
                                <button className="text-[10px] font-bold text-primary uppercase hover:underline">View All</button>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-bold text-gray-400 w-4">1</span>
                                        <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEDedRz-VI24xJo4XnXKIpXk6-oza8Cs22DFF3oONXuRHHc6V8gRke3tCq3NnEkDdvYe-zhygG1ByvFMZEqAtCSmj1BIwENc_7h_RSifFa7MaJLID_Up_sMZl7rss9PCFmFdDabyXA3mu5zcvCfj04OQgMsXR_11cChj7vtUhKbbpxAsAuYw5DY0Lmm_3v6qqNeHODe9lmvVbPGrDIEQffMVWYe1xbSAS5w_kb8c55YAJUf8s2mZITL1nYEwRBDlU8ml5yjdsauBs" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Dr. Elena Vos</p>
                                            <p className="text-[10px] text-gray-500 font-medium">Neuroscience</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-gray-900">12.4k</span>
                                </div>
                                <div className="flex items-center justify-between p-2 rounded-xl bg-blue-50/50 border border-blue-100">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-bold text-primary w-4">4</span>
                                        <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6wxyccSJwo0xvM6qdJvC1PaNKEFlqFuc67j8NDRJdd2id0mTVTW_eye6DDUFceBunYqpg1Jlb3_0XWIkryEwomzSPmNj5ehyhe73orMZGKCWNycmThlUQl5TY10jobKtcgE105-fNaml-tr2bVPf5uRtL4KoMnU4FhazTAOYveW1JugSmW6g6nPEZVtV-MgfjgdSY_3AmgzoaGFUdzU86vc9LYSRb1psQLVLBCYPhaZUCNlhiDEe8eKNWU1pt1SnR9t0CR01_TEU" />
                                        <div>
                                            <p className="text-sm font-bold text-primary">Aris Thorne (You)</p>
                                            <p className="text-[10px] text-blue-500 font-medium">Computer Science</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-primary">7.5k</span>
                                </div>
                                <div className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-bold text-gray-400 w-4">5</span>
                                        <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyTPqFw1mc1rmndf9rDkcmMWsxqcjR5AbmbvN_0Brubcv0K7kGhnP1AQkbfqvjRu7L7-RQ9pU0oqie0SxoYwDU-2fNlZv7PcLtyfQ0AVUTrGLMZtOoU9SMUeWiqCbXkceWuI_gDnOqvGsPDnqDVYmhAZAS6Z63_1SGBac4eTAP8Tc8B9_vc6yPEKlu8VOTyjgqDIOmwH7zOASjpemrHW4TcFf2l28DuzAuwzUFB4QNX85chusrlO_YTRSFze7fTIHTcODBUwx8mqE" />
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Marcus Chen</p>
                                            <p className="text-[10px] text-gray-500 font-medium">Biotechnology</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-gray-900">6.9k</span>
                                </div>
                            </div>
                        </section>

                        {/* How to Earn Points */}
                        <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <h2 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                                <span className="material-symbols-outlined text-primary">bolt</span>
                                Point Opportunities
                            </h2>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:shadow-sm border border-transparent hover:border-blue-100 transition-all cursor-pointer">
                                    <div>
                                        <p className="text-xs font-bold text-gray-900">Review a Publication</p>
                                        <p className="text-[10px] text-gray-500 font-medium">Quality peer feedback</p>
                                    </div>
                                    <span className="text-xs font-extrabold text-emerald-600">+150 pts</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:shadow-sm border border-transparent hover:border-blue-100 transition-all cursor-pointer">
                                    <div>
                                        <p className="text-xs font-bold text-gray-900">Share Research Idea</p>
                                        <p className="text-[10px] text-gray-500 font-medium">Community contribution</p>
                                    </div>
                                    <span className="text-xs font-extrabold text-emerald-600">+50 pts</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:shadow-sm border border-transparent hover:border-blue-100 transition-all cursor-pointer">
                                    <div>
                                        <p className="text-xs font-bold text-gray-900">Certification</p>
                                        <p className="text-[10px] text-gray-500 font-medium">Complete a lab module</p>
                                    </div>
                                    <span className="text-xs font-extrabold text-emerald-600">+200 pts</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
