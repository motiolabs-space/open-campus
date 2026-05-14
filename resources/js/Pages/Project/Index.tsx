import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ProjectIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Discover Research | Campus Network" />

            <main className="max-w-[1280px] mx-auto pt-8 px-6 pb-20">
                {/* Top Horizontal Filters */}
                <section className="bg-white rounded-xl p-4 mb-8 border border-slate-100 shadow-sm flex flex-wrap gap-4 items-center">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-1">Research Field</span>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm px-3 py-2 min-w-[160px] focus:ring-2 focus:ring-primary">
                            <option>All Fields</option>
                            <option>Artificial Intelligence</option>
                            <option>Urban Planning</option>
                            <option>Renewable Energy</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-1">Looking For</span>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm px-3 py-2 min-w-[160px] focus:ring-2 focus:ring-primary">
                            <option>Any Role</option>
                            <option>Co-author</option>
                            <option>Student Assistant</option>
                            <option>Industry Partner</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-1">Output Target</span>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm px-3 py-2 min-w-[160px] focus:ring-2 focus:ring-primary">
                            <option>All Targets</option>
                            <option>Q1 Journal</option>
                            <option>Patent</option>
                            <option>Prototype</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-1">Funding</span>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm px-3 py-2 min-w-[120px] focus:ring-2 focus:ring-primary">
                            <option>Any</option>
                            <option>Available</option>
                            <option>Grant Needed</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 px-1">Scope</span>
                        <select className="bg-surface-container-low border-none rounded-lg text-sm px-3 py-2 min-w-[140px] focus:ring-2 focus:ring-primary">
                            <option>Global</option>
                            <option>Domestic</option>
                            <option>International</option>
                        </select>
                    </div>
                    <button className="ml-auto bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors self-end">
                        Apply Filters
                    </button>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Sidebar: Detailed Filters */}
                    <aside className="lg:col-span-3 space-y-6">
                        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-xl mb-4 text-blue-900">Refine Search</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-bold text-sm mb-2 text-gray-900">Academic Rank</p>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                        <input className="rounded text-primary focus:ring-primary" type="checkbox" /> Professor
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                        <input className="rounded text-primary focus:ring-primary" type="checkbox" /> PhD Candidate
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                        <input className="rounded text-primary focus:ring-primary" type="checkbox" /> Post-Doc
                                    </label>
                                </div>
                                <div>
                                    <p className="font-bold text-sm mb-2 text-gray-900">Project Duration</p>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                        <input className="text-primary focus:ring-primary" name="dur" type="radio" /> &lt; 6 Months
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                        <input className="text-primary focus:ring-primary" name="dur" type="radio" /> 6-12 Months
                                    </label>
                                    <label className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                        <input className="text-primary focus:ring-primary" name="dur" type="radio" /> 1+ Year
                                    </label>
                                </div>
                                <hr className="border-slate-100" />
                                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                    <p className="font-bold text-sm text-blue-800 mb-1">Need specific help?</p>
                                    <p className="text-[12px] text-blue-600 mb-3 leading-tight">Post your own collaboration request to reach our global network.</p>
                                    <button className="w-full bg-white text-blue-700 border border-blue-200 py-2 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                                        Post Research
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Center Content: Research Cards */}
                    <section className="lg:col-span-6 space-y-6">
                        {/* Card 1 */}
                        <article className="bg-surface-container-low rounded-3xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfhfNbq8eekZqlJUJWB0sir2T4QDIaOEoyAIIBfUtUTl2Fgrb4ashKRkyH3x4gCATbgF2QJOraWlLfEaG0byQpWlRkVZjxeZUX1a6psPCubOuD85jvNTVimaqmM5-mScjFUhxlx9FTpycIpARhGfiFRZDQWly56buSfqJM41jYr9qoROE1FE-6ujIX6rEJZEfx7AIkxSffmD-QhySWPUHug8fLFzy7Zw_A78GvBKqHtDC1mkmb4GRIoPPts0-xZvNg0rghqmSxEqY" />
                                    <div>
                                        <p className="font-bold text-sm leading-none text-gray-900">Dr. Elena Rossi</p>
                                        <p className="text-xs text-gray-500">Senior Researcher, University of Oxford</p>
                                    </div>
                                </div>
                                <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Open
                                </span>
                            </div>
                            <h2 className="text-xl font-bold mb-3 text-blue-900 leading-snug">AI-Driven Urban Resilience in Southeast Asia</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Urban Planning</span>
                                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-bold">Artificial Intelligence</span>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                Investigating how machine learning models can predict infrastructure vulnerabilities during extreme weather events in dense urban centers like Jakarta and Manila...
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Looking For</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-bold">Industry Partner</span>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-bold">Student Assistant</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Expected Output</p>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">menu_book</span>
                                        <span className="material-symbols-outlined text-slate-400 text-lg">description</span>
                                        <span className="text-xs font-bold text-slate-600">Q1 Journal, Policy Brief</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4 border-t border-slate-200">
                                <button className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">Join / Apply</button>
                                <button className="px-6 py-2.5 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors">Contact</button>
                            </div>
                        </article>

                        {/* Card 2 */}
                        <article className="bg-surface-container-low rounded-3xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDORtPqS48JkyIpe_8l7rxSJ9hgy5uThYJt7K2bCd9KRJ6DsLnR2uZ9HD2rdJErZfLNvd2-Jeis8-NQP1ekQER4CrZOspBvk7IYlMyCn_8hUI4EAL39iB7C1Drln9C7Hp_odSn1nHRrb0PRsu6Bf6Vpp0Lktqho7SpoZx1UKXXsRt8fcPhP10odXxhromTGbIXL8pcak265mNTVSn58g6sEiLm7VpifwtlVgP0ODC2WKZOw1V4Al1KdQiBuJwwW3aPURl2p_wAJkus" />
                                    <div>
                                        <p className="font-bold text-sm leading-none text-gray-900">Prof. Marcus Chen</p>
                                        <p className="text-xs text-gray-500">Dept of Engineering, ETH Zürich</p>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-xl font-bold mb-3 text-blue-900 leading-snug">Graphene-Based Photovoltaics for Arid Climates</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">Materials Science</span>
                                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">Renewable Energy</span>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                Testing the thermal stability and efficiency of graphene-enhanced solar cells under high-temperature, high-UV conditions for Middle Eastern infrastructure deployments...
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Looking For</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-bold">Co-author</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Expected Output</p>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">new_releases</span>
                                        <span className="text-xs font-bold text-slate-600">Patent, Nature Publication</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4 border-t border-slate-200">
                                <button className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">Join / Apply</button>
                                <button className="px-6 py-2.5 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors">Contact</button>
                            </div>
                        </article>
                    </section>

                    {/* Right Sidebar: Contextual Info */}
                    <aside className="lg:col-span-3 space-y-6">
                        {/* Trending Tags */}
                        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-sm text-gray-900 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-orange-500 text-sm">trending_up</span>
                                Trending Fields
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-surface-container-low rounded-full text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">#RenewableEnergy</span>
                                <span className="px-3 py-1.5 bg-surface-container-low rounded-full text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">#QuantumComputing</span>
                                <span className="px-3 py-1.5 bg-surface-container-low rounded-full text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">#PublicHealth</span>
                                <span className="px-3 py-1.5 bg-surface-container-low rounded-full text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">#DeepLearning</span>
                                <span className="px-3 py-1.5 bg-surface-container-low rounded-full text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">#BioEthics</span>
                            </div>
                        </div>

                        {/* Suggested Collaborators */}
                        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-sm text-gray-900 mb-4">Suggested Collaborators</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-dBNztD0yKUUyLCoWyT4QYX5zpkhzQMT5uau-dkXSpb9WznBDFEKrfDNj8t9u0UBM84XaRpNUhEsF2CfGJvei2JCMzl0kVh0y6bcv3vIVq8oJoAc3bIsMSSqcd70BvqMuo11-1FIUBSH1DlcUeJuBYcJwNGT1EnEPMZ0XKtFFes_eJmlTQgCkFE8u6Kv2dZGb4UAxI0WpXXaTThzRHNKk5QrnV2JrCMILajVCEhflsorUKtzPGI5ELdjE7ddNzweFhUqxivfnOYk" />
                                        <div>
                                            <p className="text-xs font-bold leading-none text-gray-900">Sarah Jenkins</p>
                                            <p className="text-[10px] text-slate-500">MIT • Data Science</p>
                                        </div>
                                    </div>
                                    <button className="text-primary text-[10px] font-bold hover:underline">Connect</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9HpyNJDVWMR21HRPWQ-sPp7w6N_e-Vp4AFZppn0KAO-qSjzmuZRK9LU0RRbQpHb5smuY_vhTtTUixrNjmk0EsdA4vxt2gprs6H_4KraSnyoJMkhYMl5BZtR-4qb8u1nW2mRF-Uh8gYE-AB8k9g0hAhHqfnfg_B2mpbhLHCVsFPWJf5wmiQbrimFimCGg6kpL7BE3Gn-Ct9UHH_CM2eQxuna3aEQxwbhcgzBirNH9hyfL96YdQi0S95cX6dG5MYT2GxJxT5c8m37A" />
                                        <div>
                                            <p className="text-xs font-bold leading-none text-gray-900">David Kim</p>
                                            <p className="text-[10px] text-slate-500">Stanford • BioTech</p>
                                        </div>
                                    </div>
                                    <button className="text-primary text-[10px] font-bold hover:underline">Connect</button>
                                </div>
                            </div>
                        </div>

                        {/* Grant Opportunities */}
                        <div className="bg-primary text-white rounded-xl p-6 shadow-md relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-bold text-sm mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">payments</span>
                                    Funding Opportunities
                                </h3>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-blue-300 pl-3">
                                        <p className="text-xs font-bold leading-tight">EU Horizon Grant - Sustainable Infrastructure</p>
                                        <p className="text-[10px] text-blue-100 mt-1">Amount: €2.5M • Deadline: Nov 15</p>
                                    </div>
                                    <div className="border-l-2 border-blue-300 pl-3">
                                        <p className="text-xs font-bold leading-tight">NSF AI Exploration Initiative</p>
                                        <p className="text-[10px] text-blue-100 mt-1">Amount: $850k • Deadline: Dec 01</p>
                                    </div>
                                    <button className="w-full bg-white/20 hover:bg-white/30 transition-colors py-2 rounded-lg text-xs font-bold mt-2">
                                        View All Grants
                                    </button>
                                </div>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        </div>
                    </aside>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
