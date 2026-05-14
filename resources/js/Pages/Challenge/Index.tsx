import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ChallengeIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Challenges & Competitions | Campus Network" />

            <main className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col gap-10">
                {/* Hero Section: Active Challenge Banner */}
                <section className="relative rounded-3xl overflow-hidden bg-primary p-8 md:p-12 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-600">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjXmoL2hdvBtIWv6gwLxQI8r0figr7J2rg3m4mN97bpNMQjwP3Wfo2wMwdOjkbcwS6g823WIxL1rBVyTTtHikryI-pagHn_SsvAnaIQ16zzFnazC-uCpKfC0I-M41J1znJcltPtQ5vuemBPqNaFRQCUp8h5Ook5zk3m1gU_1Bbxl1BcqeQgU9AIYoC7F1hN0ZEfkIrCspEoz24QK72ruHdVUpIt1nToyuCJ9DnjnqckxJcvj05bRqKRiKX1B-6KKd6lrqPWjqW4lw" />
                    </div>
                    <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full backdrop-blur-md w-fit">
                            <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                            <span className="text-xs font-bold uppercase tracking-wider">Currently Active</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Global Research Sprint 2024</h1>
                        <p className="text-lg opacity-90">Join 500+ global institutions in a collaborative effort to solve pressing sustainability challenges through interdisciplinary research.</p>
                        <div className="flex flex-wrap items-center gap-6 mt-4">
                            <button className="bg-white text-primary font-bold px-8 py-3 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all">Join Challenge</button>
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">14</span>
                                    <span className="text-[10px] font-bold uppercase opacity-70">Days</span>
                                </div>
                                <span className="text-xl opacity-50">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">08</span>
                                    <span className="text-[10px] font-bold uppercase opacity-70">Hours</span>
                                </div>
                                <span className="text-xl opacity-50">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">42</span>
                                    <span className="text-[10px] font-bold uppercase opacity-70">Mins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 hidden lg:block">
                        <div className="w-64 h-64 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex flex-col justify-between">
                            <span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs font-bold opacity-70">Grand Prize</p>
                                <p className="text-2xl font-extrabold">$25,000 Grant</p>
                                <p className="text-xs font-medium opacity-80">+ Global Feature</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="flex flex-wrap gap-4 items-center overflow-x-auto pb-2 scrollbar-hide">
                    <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm shadow-sm transition-all border border-primary">All Challenges</button>
                    <button className="px-6 py-2 rounded-full bg-white text-gray-600 font-bold text-sm hover:bg-gray-50 transition-all border border-gray-200">Internship Participation</button>
                    <button className="px-6 py-2 rounded-full bg-white text-gray-600 font-bold text-sm hover:bg-gray-50 transition-all border border-gray-200">Research Collaboration</button>
                    <button className="px-6 py-2 rounded-full bg-white text-gray-600 font-bold text-sm hover:bg-gray-50 transition-all border border-gray-200">Impact Story</button>
                    <button className="px-6 py-2 rounded-full bg-white text-gray-600 font-bold text-sm hover:bg-gray-50 transition-all border border-gray-200">Certification Completion</button>
                    <button className="px-6 py-2 rounded-full bg-white text-gray-600 font-bold text-sm hover:bg-gray-50 transition-all border border-gray-200">International Collaboration</button>
                </section>

                {/* Main Content Area: Leaderboard & Secondary Challenges */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Filters and Leaderboard (8 Cols) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {/* Filters Bar */}
                        <div className="bg-white p-4 rounded-3xl flex flex-wrap items-center gap-4 shadow-sm border border-gray-100">
                            <div className="flex-grow flex flex-wrap items-center gap-3">
                                <select className="bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 px-4 py-2 focus:ring-2 focus:ring-primary min-w-[140px] appearance-none cursor-pointer">
                                    <option>National</option>
                                </select>
                                <select className="bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 px-4 py-2 focus:ring-2 focus:ring-primary min-w-[140px] appearance-none cursor-pointer">
                                    <option>Province</option>
                                </select>
                                <select className="bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 px-4 py-2 focus:ring-2 focus:ring-primary min-w-[140px] appearance-none cursor-pointer">
                                    <option>Campus</option>
                                </select>
                                <select className="bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 px-4 py-2 focus:ring-2 focus:ring-primary min-w-[140px] appearance-none cursor-pointer">
                                    <option>Faculty</option>
                                </select>
                            </div>
                            <button className="flex items-center gap-2 text-primary font-bold text-sm px-4 py-2 hover:bg-blue-50 rounded-xl transition-all">
                                <span className="material-symbols-outlined text-sm">tune</span>
                                Advanced
                            </button>
                        </div>

                        {/* Leaderboard Table */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <h2 className="text-xl font-bold text-gray-900">Challenge Leaderboard</h2>
                                <span className="text-xs font-bold text-gray-400">Updated 5m ago</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="text-xs text-gray-500 uppercase tracking-wider bg-white">
                                            <th className="px-6 py-4 font-bold">Rank</th>
                                            <th className="px-6 py-4 font-bold">Campus / User</th>
                                            <th className="px-6 py-4 font-bold text-center">Score</th>
                                            <th className="px-6 py-4 font-bold text-center">Growth</th>
                                            <th className="px-6 py-4 font-bold text-right">Badges</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-extrabold border border-amber-200">1</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
                                                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDGl5RiGBU6xRxxppR5LQRQixnR5cUhvXFBRxGuz-cOSx9sNL06SkM1mBxOuWvbB9w3WmFkONqPDYRO9m77JiY5dxffsO9PFV4WBsMUaHnQf7hpNZwoyUDhqmzQve4DjJPKSnjRqF_RzxXq3gJxQwn9VeXEyHJ1_GfrprLpyPms1JmcMnAU6Yl6xqt_nSYFCveCnE6EQpBRusTkgJJXwdy9TWLJcKnUpqGAtm9-afCUhGQb68PBuMkYqmX_1NPiyl4MOZeXtNp734" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm text-gray-900">Stanford University</p>
                                                        <p className="text-xs text-gray-500 font-medium">Palo Alto, CA</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center font-extrabold text-gray-900">12,450</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-1 rounded-lg">
                                                    <span className="material-symbols-outlined text-sm">trending_up</span> 12%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-1">
                                                    <span className="material-symbols-outlined text-blue-500 text-xl" style={{fontVariationSettings: "'FILL' 1"}} title="Top Researcher">verified</span>
                                                    <span className="material-symbols-outlined text-purple-500 text-xl" style={{fontVariationSettings: "'FILL' 1"}} title="High Impact">military_tech</span>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Highlighted User Rank */}
                                        <tr className="bg-blue-50/50 border-y-2 border-primary/20">
                                            <td className="px-6 py-4">
                                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-extrabold shadow-sm shadow-blue-200 border border-blue-600">42</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-primary border border-blue-200 flex items-center justify-center font-bold">JD</div>
                                                    <div>
                                                        <p className="font-bold text-sm text-blue-900">John Doe (You)</p>
                                                        <p className="text-xs text-blue-600 font-semibold">Faculty of Engineering</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center font-extrabold text-blue-900">8,920</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-1 rounded-lg">
                                                    <span className="material-symbols-outlined text-sm">trending_up</span> 24%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-1">
                                                    <span className="material-symbols-outlined text-blue-500 text-xl" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <span className="w-8 h-8 inline-flex items-center justify-center text-gray-500 font-bold bg-gray-100 rounded-full border border-gray-200">2</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
                                                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXkk9EyeB71aaYuMO4eu1jOGPk_w1Pr_xA5dMYouuQORxoajOA0gB6aEbpU1z7YQpvx6QUZZ7lahMxGyrER7tuZYAbK-P2jQk3Nt5jADUoG54BW_QwxSlISOLNLA1FFuKeDjxIIYkhQLtaEZdaJN6Y8XtJc-IHx335RCN8maS65z2xINMq10LieyahVxWHRSh99Q4KWYMEZWqbsIMe9u_5wQ_RjvTmien3YYlqXe7g2iPwCYzlYqhiTvGJuuWR4oKFeUZwnA63hF8" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm text-gray-900">MIT</p>
                                                        <p className="text-xs text-gray-500 font-medium">Cambridge, MA</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center font-extrabold text-gray-900">11,980</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-sm bg-emerald-50 px-2 py-1 rounded-lg">
                                                    <span className="material-symbols-outlined text-sm">trending_up</span> 8%
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-1">
                                                    <span className="material-symbols-outlined text-purple-500 text-xl" style={{fontVariationSettings: "'FILL' 1"}}>science</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="w-full py-4 text-primary font-bold text-sm hover:bg-gray-50 transition-all border-t border-gray-100">View Full Leaderboard</button>
                        </div>
                    </div>

                    {/* Right: Secondary Challenges Grid (4 Cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <h3 className="text-xl font-bold text-gray-900 px-2">Active Side-Quests</h3>
                        {/* Challenge Card 1 */}
                        <div className="bg-white p-6 rounded-3xl flex flex-col gap-4 shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-purple-100 rounded-xl text-purple-700 border border-purple-200">
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>work</span>
                                </div>
                                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">3d Left</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary transition-colors">Career Bridge 2024</h4>
                                <p className="text-sm text-gray-500">Goal: 1,000 Internship Placements across STEM faculties.</p>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
                                <div className="h-full bg-purple-500 w-3/4 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold text-gray-500 uppercase">
                                <span>750 Joined</span>
                                <span className="text-purple-600">75% Complete</span>
                            </div>
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <p className="text-xs text-gray-500 font-medium mb-3">Reward: "Industry Pioneer" Badge + 500 Pts</p>
                                <button className="w-full py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all">How to Contribute</button>
                            </div>
                        </div>

                        {/* Challenge Card 2 */}
                        <div className="bg-white p-6 rounded-3xl flex flex-col gap-4 shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200">
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>public</span>
                                </div>
                                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">12h Left</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary transition-colors">Impact Story Marathon</h4>
                                <p className="text-sm text-gray-500">Share your research impact story and get peer-reviewed.</p>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
                                <div className="h-full bg-emerald-500 w-1/2 rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold text-gray-500 uppercase">
                                <span>124 Stories</span>
                                <span className="text-emerald-600">50% Complete</span>
                            </div>
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <p className="text-xs text-gray-500 font-medium mb-3">Reward: Publication Boost Token</p>
                                <button className="w-full py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all">Submit Entry</button>
                            </div>
                        </div>

                        {/* Challenge Card 3 */}
                        <div className="bg-white p-6 rounded-3xl flex flex-col gap-4 shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-blue-100 text-blue-700 rounded-xl border border-blue-200">
                                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>history_edu</span>
                                </div>
                                <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md border border-rose-200">Ends Tonight</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary transition-colors">Certification Blitz</h4>
                                <p className="text-sm text-gray-500">Complete any LinkedIn or Coursera linked certification.</p>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
                                <div className="h-full bg-primary w-[90%] rounded-full"></div>
                            </div>
                            <div className="flex justify-between text-[11px] font-bold text-gray-500 uppercase">
                                <span>450 Earned</span>
                                <span className="text-primary">90% Complete</span>
                            </div>
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <p className="text-xs text-gray-500 font-medium mb-3">Reward: Profile "Verified Skill" Status</p>
                                <button className="w-full py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all">Claim Points</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
