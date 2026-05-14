import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function SearchIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Search Results | Campus Network" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Header & Breadcrumbs Section */}
                <header className="col-span-12 mb-2">
                    <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4">
                        <span>Campus Network</span>
                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                        <span>Global Search</span>
                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                        <span className="text-primary font-bold">Sustainability in Urban Planning</span>
                    </nav>
                    <div className="relative w-full max-w-2xl">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input 
                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm" 
                            type="text" 
                            defaultValue="Sustainability in Urban Planning"
                        />
                    </div>
                </header>

                {/* Horizontal Filter Navigation */}
                <div className="col-span-12 flex items-center border-b border-gray-200 mb-2 overflow-x-auto no-scrollbar gap-2 pb-px">
                    <button className="px-5 py-3 text-sm font-bold border-b-2 border-primary text-primary transition-colors whitespace-nowrap">All</button>
                    <button className="px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors whitespace-nowrap">People</button>
                    <button className="px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors whitespace-nowrap">Campuses</button>
                    <button className="px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors whitespace-nowrap">Research</button>
                    <button className="px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors whitespace-nowrap">Internship</button>
                    <button className="px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors whitespace-nowrap">Posts</button>
                    <button className="px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors whitespace-nowrap">Learning</button>
                    <button className="px-5 py-3 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors whitespace-nowrap">Industry</button>
                </div>

                {/* Left Content: Search Results */}
                <section className="col-span-12 lg:col-span-8 flex flex-col gap-5">
                    {/* Result 1: Research */}
                    <article className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all hover:border-primary/30 hover:shadow-md group">
                        <div className="flex justify-between items-start mb-3">
                            <span className="px-3 py-1 bg-violet-50 border border-violet-100 text-violet-700 rounded-md text-[11px] font-extrabold uppercase tracking-wider">Research</span>
                            <button className="text-gray-400 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">bookmark</span>
                            </button>
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors cursor-pointer">Sustainable Urban Development in Coastal Cities</h3>
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 font-medium">
                            <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer transition-colors">
                                <span className="material-symbols-outlined text-[18px]">person</span>
                                Dr. Elena Rossi
                            </div>
                            <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer transition-colors">
                                <span className="material-symbols-outlined text-[18px]">account_balance</span>
                                North University
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-100 transition-colors">#Sustainability</span>
                            <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-100 transition-colors">#UrbanPlanning</span>
                            <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-100 transition-colors">#Q1Journal</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto pt-2">
                            <span className="text-xs font-bold text-gray-500">Cited by 142 researchers</span>
                            <button className="px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-sm active:scale-95 transition-all">View Project</button>
                        </div>
                    </article>

                    {/* Result 2: People */}
                    <article className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all hover:border-blue-100 hover:shadow-md">
                        <div className="flex gap-5 items-start">
                            <img className="w-16 h-16 rounded-2xl object-cover border border-gray-100 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_8_M0nediPEKcj1Jg6DnB14hfwL2cM8wioZfOaucwntxgqauTHtGBDjphXAkDVpZk590U0z7y1bKLHwjdWPJ63o2E82nWQafKGxdfMUcmJd1ncuOr_BL3pvGJI9dGJpI8BjLbakr-SG8nlznH6Y_it0lDtVn-LxafhWKxblfuyN3_NLYF1PIy8dd-5V5YTZHT91hc7J7XYjO6E1koAQsoqnNgW64Db0i1h96jlc7UMRP_I7VJHO4P7EEVQ5SslJmvifL8_Dq33w0" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-lg font-extrabold text-gray-900 cursor-pointer hover:text-primary transition-colors">Prof. Arthur Wells</h3>
                                    <span className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-md text-[11px] font-extrabold uppercase tracking-wider">Lecturer</span>
                                </div>
                                <p className="text-sm font-medium text-gray-600 mb-3">Head of Urban Planning at <span className="font-bold text-gray-800 cursor-pointer hover:underline">West Institute</span></p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-100 transition-colors">#GreenCity</span>
                                    <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-100 transition-colors">#Policy</span>
                                </div>
                                <div className="flex justify-end mt-2">
                                    <button className="px-6 py-2 bg-blue-50 border border-blue-200 text-primary rounded-xl text-sm font-bold hover:bg-blue-100 transition-all active:scale-95 flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-[18px]">person_add</span> Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Result 3: Internship */}
                    <article className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all hover:border-emerald-100 hover:shadow-md group">
                        <div className="flex justify-between items-start mb-3">
                            <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-md text-[11px] font-extrabold uppercase tracking-wider">Internship</span>
                            <span className="text-[11px] font-bold text-gray-400">Posted 2 days ago</span>
                        </div>
                        <h3 className="text-lg font-extrabold text-gray-900 mb-2 cursor-pointer hover:text-primary transition-colors">Urban Green Spaces Intern</h3>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-white shadow-sm">
                                <span className="material-symbols-outlined text-[16px]">eco</span>
                            </div>
                            <span className="text-sm font-extrabold text-gray-800 cursor-pointer hover:underline">EcoCity Solutions</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-5">
                            <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-100 transition-colors">#Environment</span>
                            <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-100 transition-colors">#Design</span>
                        </div>
                        <div className="flex justify-between items-center mt-2 pt-4 border-t border-gray-50">
                            <div className="flex items-center gap-1.5 text-gray-500">
                                <span className="material-symbols-outlined text-[18px]">location_on</span>
                                <span className="text-xs font-bold">Remote / Zurich</span>
                            </div>
                            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 shadow-sm active:scale-95 transition-all">Apply Now</button>
                        </div>
                    </article>

                    {/* Result 4: Campus */}
                    <article className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm transition-all hover:border-amber-100 hover:shadow-md group">
                        <div className="flex gap-5">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-gray-100 shadow-sm relative">
                                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEUmZ7-xo32q4GHmBtbj8wt4Pzz6jUSlcZ62329CLHC95uv5n9b5NVIVQgIQdyjwwVO0-CBZ4XHM3G9jXvbbZZV_m2Hs6UovyM9ofY3mXliiH-9WAp1LkEQ2R0UF0XxRubsMTzdUXQ9jNuj5CG-5oGHqCGY8tDWp-OnahL-W3M76G-mYWKdVgr3zxBlDA0dtF0egzpRMFDbTAeh7-KdtUVr_b3Lx3fuK0p1fOKvsWyiPZvXk_rjuJPoLpD2WWibFWNpAmlFdIQrzE" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <span className="px-2 py-0.5 bg-amber-50 border border-amber-100 text-amber-700 rounded text-[10px] font-extrabold uppercase tracking-wider mb-1.5 inline-block">Campus</span>
                                        <h3 className="text-lg font-extrabold text-gray-900 cursor-pointer hover:text-primary transition-colors leading-tight">Global Institute of Technology</h3>
                                    </div>
                                    <button className="px-5 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 shadow-sm transition-all active:scale-95">Follow</button>
                                </div>
                                <div className="flex items-center gap-1.5 mt-1 text-gray-500">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                                    <span className="text-xs font-bold">New York, USA</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto pt-3">
                                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">social_leaderboard</span> Rank 1</span>
                                    <span className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold cursor-pointer hover:bg-gray-100 transition-colors">#ResearchHub</span>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Right Sidebar: Filters and Trends */}
                <aside className="hidden lg:flex lg:col-span-4 flex-col gap-6">
                    {/* Suggested Filters */}
                    <section className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                        <h4 className="text-xs font-extrabold text-gray-400 mb-4 uppercase tracking-widest">Suggested Filters</h4>
                        <div className="flex flex-col gap-5">
                            
                            <div className="space-y-3">
                                <p className="text-sm font-bold text-gray-900">Institution</p>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-colors" type="checkbox" />
                                    <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">North University</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-colors" type="checkbox" />
                                    <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">West Institute</span>
                                </label>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="space-y-3">
                                <p className="text-sm font-bold text-gray-900">Field of Study</p>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input defaultChecked className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-colors" type="checkbox" />
                                    <span className="text-sm font-medium text-gray-900 transition-colors">Urban Planning</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer transition-colors" type="checkbox" />
                                    <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Environmental Science</span>
                                </label>
                            </div>

                            <hr className="border-gray-100" />

                            <div className="space-y-3">
                                <p className="text-sm font-bold text-gray-900">Date Posted</p>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input className="w-4 h-4 text-primary focus:ring-primary cursor-pointer transition-colors border-gray-300" name="date" type="radio" />
                                    <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Past 24 Hours</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input defaultChecked className="w-4 h-4 text-primary focus:ring-primary cursor-pointer transition-colors border-gray-300" name="date" type="radio" />
                                    <span className="text-sm font-medium text-gray-900 transition-colors">Past Week</span>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Trending Topics */}
                    <section className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                        <div className="flex items-center justify-between mb-5">
                            <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Trending Topics</h4>
                            <span className="material-symbols-outlined text-gray-400 text-lg">trending_up</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a className="group flex flex-col gap-0.5" href="#">
                                <p className="text-sm font-extrabold text-gray-900 group-hover:text-primary transition-colors">#AIinResearch</p>
                                <p className="text-[11px] font-bold text-gray-400">2.4k discussions</p>
                            </a>
                            <a className="group flex flex-col gap-0.5" href="#">
                                <p className="text-sm font-extrabold text-gray-900 group-hover:text-primary transition-colors">#ClimateAction</p>
                                <p className="text-[11px] font-bold text-gray-400">1.8k discussions</p>
                            </a>
                            <a className="group flex flex-col gap-0.5" href="#">
                                <p className="text-sm font-extrabold text-gray-900 group-hover:text-primary transition-colors">#CircularEconomy</p>
                                <p className="text-[11px] font-bold text-gray-400">950 discussions</p>
                            </a>
                        </div>
                    </section>

                    {/* Recommended Communities */}
                    <section className="flex flex-col gap-3">
                        <h4 className="text-xs font-extrabold text-gray-400 px-2 uppercase tracking-widest mt-2">Recommended Communities</h4>
                        
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group">
                            <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-primary group-hover:bg-blue-100 transition-colors">
                                <span className="material-symbols-outlined">hub</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-extrabold text-gray-900 group-hover:text-primary transition-colors">Urban Planners Hub</p>
                                <p className="text-[11px] font-bold text-gray-400 mt-0.5">12k Members</p>
                            </div>
                            <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">add_circle</span>
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer group">
                            <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                                <span className="material-symbols-outlined">public</span>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-extrabold text-gray-900 group-hover:text-emerald-600 transition-colors">Sustainability Network</p>
                                <p className="text-[11px] font-bold text-gray-400 mt-0.5">8.5k Members</p>
                            </div>
                            <span className="material-symbols-outlined text-gray-300 group-hover:text-emerald-600 transition-colors">add_circle</span>
                        </div>
                    </section>
                </aside>
            </div>
        </AuthenticatedLayout>
    );
}
