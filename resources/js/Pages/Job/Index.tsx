import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function JobIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Internship & Career Hub | Campus Network" />

            <main className="max-w-[1280px] mx-auto px-6 py-8">
                {/* Hero Search Section */}
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Internship & Career Hub</h1>
                    <p className="text-gray-600 max-w-2xl text-lg">Connect with leading research labs, innovative tech firms, and global academic projects tailored to your campus profile.</p>
                </header>

                {/* Filter Bar */}
                <section className="mb-10 flex flex-wrap gap-3 items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-gray-500 px-1 uppercase tracking-wider">Role</label>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary pr-8 cursor-pointer min-w-[160px]">
                            <option>Any Role</option>
                            <option>Software Engineer</option>
                            <option>Research Assistant</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-gray-500 px-1 uppercase tracking-wider">Location</label>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary pr-8 cursor-pointer min-w-[160px]">
                            <option>Global</option>
                            <option>United States</option>
                            <option>Europe</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-gray-500 px-1 uppercase tracking-wider">Type</label>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary pr-8 cursor-pointer min-w-[160px]">
                            <option>All Types</option>
                            <option>Remote</option>
                            <option>Onsite</option>
                            <option>Hybrid</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold text-gray-500 px-1 uppercase tracking-wider">Duration</label>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm font-medium focus:ring-2 focus:ring-primary pr-8 cursor-pointer min-w-[160px]">
                            <option>Flexible</option>
                            <option>3 Months</option>
                            <option>6 Months</option>
                        </select>
                    </div>
                    <button className="mt-auto mb-1 h-10 px-4 flex items-center gap-2 text-primary hover:bg-blue-50 rounded-lg transition-colors font-bold text-sm ml-auto">
                        <span className="material-symbols-outlined text-sm">tune</span>
                        More Filters
                    </button>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area: Opportunity List */}
                    <div className="col-span-12 lg:col-span-8 space-y-4">
                        {/* Opportunity Card 1 */}
                        <div className="group bg-surface-container-low rounded-3xl p-6 transition-all duration-300 hover:bg-white hover:shadow-md border-transparent hover:border-blue-50 border">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-5">
                                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden p-2 shrink-0">
                                        <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQpCzd8wL2ro-igA0FjOp7WTmCWNIdcxB7BeAMSoQtlGO1QWbmSM6vAmjAoykwiH9qmW8aJhDgN37lqrhhBfWQR3esf6Vl27u0bBi9UFdCbyZTgHUe_zvUzS4BxuFeZhfFlWuekB2-J2kLRjrpt-2M9cTT6Trdsjt-G7ODTrYx8IImVQZmzjwquARN-fbAppjqYYYSpaNtZXGCQphTVzgMuyEHLFmD1EfMvm4VkmhVO-MU_4eJ3h4N8ElrBbU3tf2lzniifJ0OfWI" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-gray-900">Senior Research Intern - AI Ethics</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-gray-600 font-medium text-sm">Neural Nexus Labs</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">Internship</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm">Apply Now</button>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">Python</span>
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">PyTorch</span>
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">Machine Learning</span>
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">Ethics Research</span>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">calendar_today</span>6 Months</span>
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">location_on</span>Remote</span>
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">groups</span>142 Applicants</span>
                                </div>
                                <span className="text-blue-600 font-bold">Campus Eligible</span>
                            </div>
                        </div>

                        {/* Opportunity Card 2 */}
                        <div className="group bg-surface-container-low rounded-3xl p-6 transition-all duration-300 hover:bg-white hover:shadow-md border-transparent hover:border-blue-50 border">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-5">
                                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden p-2 shrink-0">
                                        <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAirHww0-R6dkh7QGGAMxTsz4UyQKibV16KWmid7QORSjsOR_yrlgZ2O15KAl65cvv9V7HqHV9y3k2jJ8HI3ILPsfvCD2V74ImVoZPjQFYRtD-8JthaKGlElOtoV1zzeJK394HojYPe37aeGXw3XwHfJsedALjm6UpUNKayeme13t80Q3Ecl9YWhxZk57YR3VpFuCm3JV_Y9t0FoGxBSRRn4ZNXpyzjyzyYKtz6vWUYOq_6M2WWT12rysYZ6vfGtXjdE14ZIl036kM" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-gray-900">Full-Stack Project Lead</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-gray-600 font-medium text-sm">Vertex Solutions Group</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold uppercase tracking-wider">Project</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm">Apply Now</button>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">React</span>
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">TypeScript</span>
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">Go</span>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">timer</span>3 Months</span>
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">apartment</span>Hybrid (NYC)</span>
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">groups</span>89 Applicants</span>
                                </div>
                                <span className="text-blue-600 font-bold">Open to Juniors</span>
                            </div>
                        </div>

                        {/* Opportunity Card 3 */}
                        <div className="group bg-surface-container-low rounded-3xl p-6 transition-all duration-300 hover:bg-white hover:shadow-md border-transparent hover:border-blue-50 border">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-5">
                                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden p-2 shrink-0">
                                        <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe1FRXBsX2iXkfJOkJGo1HDA-2zMdsA8A3rhqSlDTuQVnFVb0Hc9E3xZUAEMuk-7DvG-wJG5K5ReUEQiu6AK0c8TtxnN3wt2Fv5jvekfNdBiGTEmkfpNupMZixPxMKPYQxtyafnBUiosqULqCdTQwJlLkWBgSCU1AqgIwMkVsUch4zNnsMxcAeXKJKSwdQoSBNBGc6UJ2-Sgue3JnVqhlSGeQkfMfwszCyb7L1uvULApVKsJfOSmFWLQnvp7P6R5P_8wF6azFKy3U" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-gray-900">Data Analyst Junior Associate</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-gray-600 font-medium text-sm">InsightFlow Analytics</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider">Job</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm">Apply Now</button>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">SQL</span>
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">Tableau</span>
                                <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 border border-gray-100">Statistics</span>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-6">
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">schedule</span>Full-time</span>
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">location_on</span>London, UK</span>
                                    <span className="flex items-center gap-1.5 font-medium"><span className="material-symbols-outlined text-[18px]">groups</span>312 Applicants</span>
                                </div>
                                <span className="text-blue-600 font-bold">Sponsorship Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="col-span-12 lg:col-span-4 space-y-6">
                        {/* Recommended for You */}
                        <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900">
                                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
                                Recommended for You
                            </h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-surface-container-low hover:bg-gray-100 transition-colors cursor-pointer group">
                                    <p className="text-xs font-bold text-purple-600 mb-1">98% Match</p>
                                    <h4 className="font-bold text-sm group-hover:text-primary text-gray-900">UX Designer (Spring '25)</h4>
                                    <p className="text-xs text-gray-500 mt-1">Creative Pulse Studios</p>
                                </div>
                                <div className="p-4 rounded-xl bg-surface-container-low hover:bg-gray-100 transition-colors cursor-pointer group">
                                    <p className="text-xs font-bold text-purple-600 mb-1">94% Match</p>
                                    <h4 className="font-bold text-sm group-hover:text-primary text-gray-900">Open Source Contributor</h4>
                                    <p className="text-xs text-gray-500 mt-1">Global Tech Foundation</p>
                                </div>
                            </div>
                            <button className="w-full mt-4 text-center text-sm text-primary font-bold hover:underline">View All Matches</button>
                        </section>

                        {/* Bridge the Skill Gap */}
                        <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                Bridge the Skill Gap
                            </h2>
                            <p className="text-xs text-gray-500 mb-4">Based on your target role: <span className="text-gray-900 font-bold">Data Scientist</span></p>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-xs mb-1 font-bold">
                                        <span className="text-gray-700">Advanced Python</span>
                                        <span className="text-gray-500">85%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[85%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1 font-bold">
                                        <span className="text-gray-700">PyTorch / TensorFlow</span>
                                        <span className="text-red-500">Missing</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-red-400 h-full w-[10%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-1 font-bold">
                                        <span className="text-gray-700">Data Visualization</span>
                                        <span className="text-gray-500">60%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[60%]"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Get Certified */}
                        <section className="bg-blue-600 text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined">verified_user</span>
                                    Get Certified
                                </h2>
                                <p className="text-blue-100 text-xs mb-6 font-medium">Boost your profile visibility by 40% with these recommended courses.</p>
                                <div className="space-y-4">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">school</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold leading-tight">Neural Networks & Deep Learning</p>
                                            <p className="text-[10px] text-blue-200 font-medium">Offered by Stanford AI Hub</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined">description</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold leading-tight">Professional Scrum Master I</p>
                                            <p className="text-[10px] text-blue-200 font-medium">Global Agile Alliance</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-6 bg-white text-blue-700 font-bold py-3 rounded-xl text-sm transition-transform active:scale-95 shadow-lg">Browse Catalog</button>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                        </section>
                    </aside>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
