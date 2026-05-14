import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ImpactIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Impact Console | Campus Network" />

            <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
                {/* Left Sidebar (Strategic Analytics) */}
                <aside className="w-full md:w-64 flex-shrink-0 flex flex-col space-y-2">
                    <div className="mb-6 px-2">
                        <h1 className="text-xl font-bold text-gray-900">Impact Console</h1>
                        <p className="text-xs text-gray-500 font-medium">Strategic Analytics</p>
                    </div>
                    <nav className="flex-grow space-y-1">
                        <a className="flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 font-bold rounded-xl transition-all" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm">Overview</span>
                        </a>
                        <a className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-all font-bold" href="#">
                            <span className="material-symbols-outlined">account_balance</span>
                            <span className="text-sm">Contributions</span>
                        </a>
                        <a className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-all font-bold" href="#">
                            <span className="material-symbols-outlined">insights</span>
                            <span className="text-sm">Impact Tracking</span>
                        </a>
                        <a className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-all font-bold" href="#">
                            <span className="material-symbols-outlined">school</span>
                            <span className="text-sm">Faculty Progress</span>
                        </a>
                        <a className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-all font-bold" href="#">
                            <span className="material-symbols-outlined">crisis_alert</span>
                            <span className="text-sm">Risk Center</span>
                        </a>
                        <a className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-xl transition-all font-bold" href="#">
                            <span className="material-symbols-outlined">rocket_launch</span>
                            <span className="text-sm">Strategic Actions</span>
                        </a>
                    </nav>
                    <div className="pt-4 border-t border-gray-100 mt-4">
                        <button className="w-full bg-primary text-white py-3 px-4 rounded-xl font-bold text-sm mb-4 shadow-sm hover:shadow-md transition-all">
                            Generate Report
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-grow flex flex-col gap-8 w-full overflow-hidden">
                    {/* Top Stats Grid */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col justify-between h-36 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start">
                                <span className="font-bold text-sm text-gray-500">Internships</span>
                                <span className="text-emerald-600 font-bold text-xs flex items-center bg-emerald-50 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+12%
                                </span>
                            </div>
                            <div className="text-4xl font-extrabold text-primary">1,482</div>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col justify-between h-36 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start">
                                <span className="font-bold text-sm text-gray-500">Alumni Reach</span>
                                <span className="text-emerald-600 font-bold text-xs flex items-center bg-emerald-50 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+5%
                                </span>
                            </div>
                            <div className="text-4xl font-extrabold text-primary">42.5k</div>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col justify-between h-36 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start">
                                <span className="font-bold text-sm text-gray-500">Research Grants</span>
                                <span className="text-rose-600 font-bold text-xs flex items-center bg-rose-50 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_down</span>-2%
                                </span>
                            </div>
                            <div className="text-4xl font-extrabold text-primary">$4.2M</div>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-3xl flex flex-col justify-between h-36 shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start">
                                <span className="font-bold text-sm text-gray-500">Publications</span>
                                <span className="text-emerald-600 font-bold text-xs flex items-center bg-emerald-50 px-2 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-sm mr-1">trending_up</span>+18%
                                </span>
                            </div>
                            <div className="text-4xl font-extrabold text-primary">312</div>
                        </div>
                    </section>

                    {/* Charts & Risks Section */}
                    <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                        <div className="xl:col-span-7 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Contribution by Activity Type</h3>
                                <button className="text-primary font-bold text-sm flex items-center hover:underline">
                                    View Details <span className="material-symbols-outlined text-sm ml-1">chevron_right</span>
                                </button>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600 font-semibold">Alumni Employment</span>
                                        <span className="font-bold text-gray-900">45%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <div className="bg-primary h-3 rounded-full" style={{width: '45%'}}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600 font-semibold">Research Collaboration</span>
                                        <span className="font-bold text-gray-900">28%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <div className="bg-purple-500 h-3 rounded-full" style={{width: '28%'}}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600 font-semibold">Practitioner Teaching</span>
                                        <span className="font-bold text-gray-900">15%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <div className="bg-emerald-500 h-3 rounded-full" style={{width: '15%'}}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600 font-semibold">Community Impact</span>
                                        <span className="font-bold text-gray-900">12%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-3">
                                        <div className="bg-gray-400 h-3 rounded-full" style={{width: '12%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="xl:col-span-5 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="material-symbols-outlined text-rose-500">warning</span>
                                <h3 className="text-xl font-bold text-gray-900">Risk Signals</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between border-l-4 border-rose-500">
                                    <div>
                                        <p className="font-bold text-sm text-gray-900">Low internship participation</p>
                                        <p className="text-xs text-gray-500 font-medium">-12% vs target for Q3</p>
                                    </div>
                                    <button className="p-2 text-primary hover:bg-blue-50 rounded-full transition-colors">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between border-l-4 border-amber-500">
                                    <div>
                                        <p className="font-bold text-sm text-gray-900">Missing evidence for Research grants</p>
                                        <p className="text-xs text-gray-500 font-medium">12 submissions pending review</p>
                                    </div>
                                    <button className="p-2 text-primary hover:bg-blue-50 rounded-full transition-colors">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between border-l-4 border-gray-400">
                                    <div>
                                        <p className="font-bold text-sm text-gray-900">Alumni update lag</p>
                                        <p className="text-xs text-gray-500 font-medium">Sync required for 2023 Cohort</p>
                                    </div>
                                    <button className="p-2 text-primary hover:bg-blue-50 rounded-full transition-colors">
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conversion & Strategy Section */}
                    <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                        <div className="xl:col-span-8 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm overflow-hidden">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Activity-to-Impact Conversion</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left border-b border-gray-100">
                                            <th className="pb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Activity Event</th>
                                            <th className="pb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Impact Category</th>
                                            <th className="pb-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Indicator Contribution</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 text-sm font-semibold text-gray-900">Student Internship</td>
                                            <td className="py-4">
                                                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">Talent Development</span>
                                            </td>
                                            <td className="py-4 font-bold text-sm text-emerald-600">IKU-1 +15 pts</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 text-sm font-semibold text-gray-900">Faculty Patent Filing</td>
                                            <td className="py-4">
                                                <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full">Innovation</span>
                                            </td>
                                            <td className="py-4 font-bold text-sm text-emerald-600">IKU-5 +8 pts</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 text-sm font-semibold text-gray-900">Alumni Workshop</td>
                                            <td className="py-4">
                                                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full">Engagement</span>
                                            </td>
                                            <td className="py-4 font-bold text-sm text-emerald-600">IKU-2 +12 pts</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 text-sm font-semibold text-gray-900">Journal Publication</td>
                                            <td className="py-4">
                                                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">Scholarship</span>
                                            </td>
                                            <td className="py-4 font-bold text-sm text-emerald-600">IKU-4 +22 pts</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="xl:col-span-4 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Strategic Actions</h3>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 border border-transparent rounded-2xl hover:border-blue-100 hover:bg-blue-50 transition-all cursor-pointer group">
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-white rounded-xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">rocket</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors">Launch Internship Challenge</h4>
                                            <p className="text-xs text-gray-500 font-medium mt-1">Boost participation across STEM departments</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 border border-transparent rounded-2xl hover:border-blue-100 hover:bg-blue-50 transition-all cursor-pointer group">
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-white rounded-xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">campaign</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors">Invite Alumni Update Campaign</h4>
                                            <p className="text-xs text-gray-500 font-medium mt-1">Target 2020-2023 graduates for data refresh</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-gray-50 border border-transparent rounded-2xl hover:border-blue-100 hover:bg-blue-50 transition-all cursor-pointer group">
                                    <div className="flex items-start space-x-3">
                                        <div className="p-2 bg-white rounded-xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <span className="material-symbols-outlined">groups</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-gray-900 group-hover:text-primary transition-colors">Open Research Collaboration Call</h4>
                                            <p className="text-xs text-gray-500 font-medium mt-1">Focus on Cross-Disciplinary Sustainability grants</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 text-primary font-bold border-2 border-primary/20 rounded-xl hover:bg-primary/5 transition-colors">
                                View Strategic Roadmap
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
