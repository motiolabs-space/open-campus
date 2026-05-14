import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function NotificationIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Notifications | Campus Network" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Sidebar: Contextual Navigation */}
                <aside className="hidden lg:flex flex-col col-span-3 gap-6">
                    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <img className="w-10 h-10 rounded-xl object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Banvf05DtBy0_puHK1DyzQRHbS-qj6Kvg6e1MSUb5uLslK3CGWntRPqiCm59uJlvyjKREaPhHRZ3LAYFyJ29kiHMUAUF3T4TOvncIr6jp2TauWXm3mo8aL__HpLxFLX7J4dYH-u7xcuqoF8_eJ88CEHvSwgOIYdJ0oIjWQ5tF2V0-TW6BkaniD-BUzSmBGg6k6xQUt7jUZ2ki4mukz8D8MNy2hmWJVSl8b0SajPNdAQN3cijoh0G9VVr3byd9VgJdRBYdpD0tQ0" />
                            <div>
                                <h2 className="text-sm font-extrabold text-primary">Campus Network</h2>
                                <p className="text-xs font-bold text-gray-500">Academic Portal</p>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-2">
                            <a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-primary transition-all rounded-xl px-4 py-3 text-sm font-bold group" href="#">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">dynamic_feed</span> Feed
                            </a>
                            <a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-primary transition-all rounded-xl px-4 py-3 text-sm font-bold group" href="#">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">group</span> Colleagues
                            </a>
                            <a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-primary transition-all rounded-xl px-4 py-3 text-sm font-bold group" href="#">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">book_2</span> Library
                            </a>
                            <a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-primary transition-all rounded-xl px-4 py-3 text-sm font-bold group" href="#">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">payments</span> Grants
                            </a>
                            <a className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 hover:text-primary transition-all rounded-xl px-4 py-3 text-sm font-bold group" href="#">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">analytics</span> Analytics
                            </a>
                        </nav>
                        <button className="mt-6 w-full bg-primary text-white text-sm font-bold py-3 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95">
                            Start Research
                        </button>
                    </div>
                </aside>

                {/* Main Content: Notifications */}
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">
                    <header className="flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900">Notifications</h1>
                            <p className="text-gray-500 text-sm font-medium mt-1">Stay updated with your academic and professional network.</p>
                        </div>
                        <button className="text-primary text-sm font-bold hover:underline transition-all">Mark all as read</button>
                    </header>

                    {/* Today Section */}
                    <section className="flex flex-col gap-3">
                        <h3 className="text-gray-400 text-xs font-extrabold uppercase tracking-widest px-2 mb-1">Today</h3>
                        
                        {/* Connection Request */}
                        <div className="bg-white rounded-3xl p-5 flex gap-4 border border-gray-100 shadow-sm transition-all hover:border-primary/30 hover:shadow-md group relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                            <img className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2lt0sCRpPvMIFFj39UXgS_34GVYXGYbpEwYhegS03PIwPb4f5X8MwvXLngpAaASAsKVZdQE6r0tSy8C7AbvNkEDaUkyguq-_xEy7jQS2NR6nauHUWIlcHxi5Tl7M8X2Gc_u4TeJK_kiDgVu-6YSskPNoxxfzMCj-f4Y7EpQk1s4ronIOtRo-c5D0vP6y-QNESl7XtHheqmRNEXNI3buaDZhaKXH7Ypd_7f5S6T-WN2RloBUpo1wLNbYBAz-6owDz-r_xEVC2-L1E" />
                            <div className="flex-1">
                                <p className="text-sm text-gray-800"><span className="font-extrabold text-gray-900 group-hover:text-primary transition-colors cursor-pointer">Dr. Aris Thorne</span> sent you a connection request</p>
                                <p className="text-[11px] font-bold text-gray-400 mt-1">2 hours ago • Researcher at BioTech Institute</p>
                                <div className="flex gap-2 mt-4">
                                    <button className="bg-primary text-white text-xs font-bold px-5 py-2 rounded-xl hover:bg-blue-700 transition-all shadow-sm active:scale-95">Accept</button>
                                    <button className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-bold px-5 py-2 rounded-xl hover:bg-gray-100 transition-all">Ignore</button>
                                </div>
                            </div>
                            <span className="material-symbols-outlined text-primary bg-blue-50 w-8 h-8 flex items-center justify-center rounded-full text-sm">person_add</span>
                        </div>

                        {/* Internship Match */}
                        <div className="bg-white rounded-3xl p-5 flex gap-4 border border-gray-100 shadow-sm transition-all hover:border-blue-100 hover:shadow-md group">
                            <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-blue-100 transition-colors">
                                <span className="material-symbols-outlined">work</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider">New Match</span>
                                </div>
                                <p className="text-sm text-gray-800">Senior UX Research Intern at <span className="font-extrabold text-gray-900 cursor-pointer hover:underline">Global Tech Solutions</span></p>
                                <p className="text-[11px] font-bold text-gray-400 mt-1">4 hours ago • Based on your Portfolio and Skills</p>
                                <button className="mt-3 text-primary text-xs font-bold flex items-center gap-1 group-hover:underline">
                                    View Job <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Engagement */}
                        <div className="bg-white rounded-3xl p-5 flex gap-4 border border-gray-100 shadow-sm transition-all hover:border-rose-100 hover:shadow-md group">
                            <div className="flex -space-x-3 shrink-0">
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8rNys2_twb8RtDwNsKQhIOhTUhKDnysPzVUcSIRMGEF4MTExqX-XzniZrbssdMaoJM34bcbR9_Q5XebcKgDUaefXidNLqYkeyssN5b8ybB0-2ph1xMG1Y9LfzX3LZHD-6LuceR0C43Vw95xkwDQR2ckJsp8nYek5TeMgTgkI7N0gFzCI1hsN8Snhi8LrOlkASiLsmxBNPelpmytoMnNnzarcC69-Aox7oXwQfRbpkVNXOgCLkatwOrcB96ei__Pc_mzkTBIO6uAo" />
                                <div className="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-[10px] text-white font-bold relative z-0">+12</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-800"><span className="font-extrabold text-gray-900 cursor-pointer hover:underline">Maria Lopez</span> and 12 others liked your Research Idea: <span className="font-bold italic cursor-pointer hover:text-primary transition-colors">Quantum Cryptography</span></p>
                                <p className="text-[11px] font-bold text-gray-400 mt-1">8 hours ago</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                                <span className="material-symbols-outlined text-sm">favorite</span>
                            </div>
                        </div>
                    </section>

                    {/* This Week Section */}
                    <section className="flex flex-col gap-3">
                        <h3 className="text-gray-400 text-xs font-extrabold uppercase tracking-widest px-2 mb-1 mt-4">This Week</h3>
                        
                        {/* Evidence Approved */}
                        <div className="bg-white rounded-3xl p-5 flex gap-4 border border-gray-100 shadow-sm transition-all hover:border-emerald-100 hover:shadow-md group">
                            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-800 font-semibold">Evidence Approved: Your internship experience at <span className="font-extrabold text-gray-900">BioGen Lab</span> has been verified</p>
                                <p className="text-[11px] font-bold text-gray-400 mt-1">2 days ago • <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Career Impact +200</span></p>
                                <button className="mt-3 bg-white border border-gray-200 text-gray-700 text-xs font-bold px-4 py-1.5 rounded-xl hover:bg-gray-50 transition-all shadow-sm">View Details</button>
                            </div>
                        </div>

                        {/* Collaboration Request */}
                        <div className="bg-white rounded-3xl p-5 flex gap-4 border border-gray-100 shadow-sm transition-all hover:border-blue-100 hover:shadow-md group">
                            <img className="w-12 h-12 rounded-full object-cover border border-gray-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCu8KZqcwEM7VQwMiKYeT1Ys85bY_u9y7v-gW4D9XSj8eRceXIyGIENVenDhCJWblvJSPwR8mABnH3yWCsusGpUXmsgzdhdQX-dTSWGIwQRqq4i-Bl4yyXypVbfY7OimWoXx04AtEwmK1sFQs1ddHKW9WG-1RUtGPk2fkwxNriGXW6LY2Ju8JYqeZOk1lpl76eeafu9TQ5DVRHyhRE_mAvK7rBEgr2FUyos4giuhH8PcN0G6yaFpgl1vieoiISK5zzIW2jDhCQ9-g" />
                            <div className="flex-1">
                                <p className="text-sm text-gray-800"><span className="font-extrabold text-gray-900 cursor-pointer hover:underline">Prof. Arthur Wells</span> invited you to collaborate on <span className="font-extrabold text-gray-900 cursor-pointer hover:text-primary transition-colors">'Urban Planning AI'</span></p>
                                <p className="text-[11px] font-bold text-gray-400 mt-1">3 days ago • Research Opportunity</p>
                                <button className="mt-3 bg-primary text-white text-xs font-bold px-5 py-2 rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all">View Project</button>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                <span className="material-symbols-outlined text-[16px]">hub</span>
                            </div>
                        </div>

                        {/* Challenge Update */}
                        <div className="bg-white rounded-3xl p-5 flex gap-4 border border-gray-100 shadow-sm transition-all hover:border-amber-100 hover:shadow-md group">
                            <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition-colors">
                                <span className="material-symbols-outlined">military_tech</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-800 font-semibold">Campus Challenge: Your faculty moved up to <span className="font-extrabold text-amber-600 bg-amber-50 px-1 rounded">2nd place</span> in the Research Sprint!</p>
                                <p className="text-[11px] font-bold text-gray-400 mt-1.5 flex items-center gap-1">4 days ago • <span className="material-symbols-outlined text-[12px]">schedule</span> 12 hours remaining</p>
                                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
                                    <div className="bg-amber-500 h-full w-[85%] rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Earlier Section */}
                    <section className="flex flex-col gap-3">
                        <h3 className="text-gray-400 text-xs font-extrabold uppercase tracking-widest px-2 mb-1 mt-4">Earlier</h3>
                        
                        {/* Badge Earned */}
                        <div className="bg-white rounded-3xl p-5 flex gap-4 border border-gray-100 shadow-sm transition-all hover:border-blue-100 hover:shadow-md group">
                            <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex flex-col items-center justify-center text-white p-1 text-center shadow-md">
                                <span className="material-symbols-outlined text-[28px]">public</span>
                                <span className="text-[7px] font-extrabold uppercase mt-0.5 tracking-wider">Global</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-800">New Badge Earned: <span className="font-extrabold text-gray-900">Global Exposure - Level 1</span></p>
                                <p className="text-[11px] font-medium text-gray-500 mt-1 leading-relaxed">1 week ago • Achieved by connecting with 5 international researchers</p>
                                <div className="mt-2.5 flex gap-2">
                                    <span className="bg-blue-50 text-blue-700 text-[9px] font-extrabold px-2 py-0.5 rounded border border-blue-100">SOCIAL IMPACT</span>
                                    <span className="bg-indigo-50 text-indigo-700 text-[9px] font-extrabold px-2 py-0.5 rounded border border-indigo-100">NETWORKER</span>
                                </div>
                            </div>
                        </div>

                        {/* Evidence Action Required */}
                        <div className="bg-rose-50/50 rounded-3xl p-5 flex gap-4 border-2 border-dashed border-rose-200 transition-all hover:bg-white hover:shadow-md hover:border-rose-300 group">
                            <div className="w-12 h-12 bg-white border border-rose-200 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm group-hover:bg-rose-50 transition-colors">
                                <span className="material-symbols-outlined">priority_high</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-extrabold text-rose-600">Action Required: Publication Submission</p>
                                <p className="text-[11px] font-medium text-gray-600 mt-1 leading-relaxed">10 days ago • Please provide additional details for <span className="font-bold italic text-gray-800">"Neural Plasticity in Hybrid Learning Models"</span></p>
                                <button className="mt-3 bg-rose-500 text-white text-xs font-bold px-5 py-2 rounded-xl shadow-sm hover:bg-rose-600 hover:shadow-md active:scale-95 transition-all">Resolve Now</button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Sidebar: Settings & Filters */}
                <aside className="hidden lg:flex flex-col col-span-3 gap-6">
                    {/* Filters Section */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-sm font-extrabold text-gray-900 mb-4">Filter by Category</h4>
                        <div className="flex flex-wrap gap-2">
                            <button className="bg-blue-50 text-primary px-3 py-1.5 rounded-lg text-xs font-bold border border-blue-100 flex items-center gap-1.5 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Social
                            </button>
                            <button className="bg-white text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Career
                            </button>
                            <button className="bg-white text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Research
                            </button>
                            <button className="bg-white text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                                Impact
                            </button>
                        </div>
                    </div>

                    {/* Preferences Section */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-5">
                            <h4 className="text-sm font-extrabold text-gray-900">Preferences</h4>
                            <span className="material-symbols-outlined text-gray-400 text-lg cursor-pointer hover:text-primary transition-colors">tune</span>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between group cursor-pointer">
                                <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Email Digest</span>
                                <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer shadow-inner">
                                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between group cursor-pointer">
                                <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Push Alerts</span>
                                <div className="w-10 h-5 bg-primary rounded-full relative cursor-pointer shadow-inner">
                                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between group cursor-pointer">
                                <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">SMS Updates</span>
                                <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer shadow-inner">
                                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5 border-gray-100" />
                        <button className="w-full text-center text-primary text-xs font-bold py-2.5 border border-primary/20 bg-blue-50/50 rounded-xl hover:bg-blue-50 transition-colors">
                            Advanced Settings
                        </button>
                    </div>

                    {/* Promotion Card */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 text-white p-6 rounded-2xl shadow-md border border-blue-600">
                        <div className="relative z-10">
                            <h5 className="text-sm font-extrabold mb-1.5 flex items-center gap-2">Grow your Network <span className="material-symbols-outlined text-[16px] text-amber-300">verified</span></h5>
                            <p className="text-[11px] font-medium text-blue-100 mb-4 leading-relaxed">You're in the top 5% of researchers in your field this month.</p>
                            <button className="bg-white text-primary px-4 py-2 rounded-xl text-xs font-bold shadow-sm hover:shadow-md active:scale-95 transition-all w-full">Share Profile</button>
                        </div>
                        <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-6xl opacity-10 rotate-12">auto_awesome</span>
                    </div>
                </aside>
            </div>
        </AuthenticatedLayout>
    );
}
