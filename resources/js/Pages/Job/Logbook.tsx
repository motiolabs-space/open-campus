import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Logbook() {
    return (
        <AuthenticatedLayout>
            <Head title="Internship Logbook | Campus Network" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
                            <Link href={route('job.index')} className="hover:text-primary transition-colors">Internship</Link>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-primary font-bold">Activity Logbook</span>
                        </nav>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">MBKM Logbook</h1>
                        <p className="text-gray-500 mt-1 font-medium">Record your daily internship activities and submit evidence for academic credit.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">download</span> Export PDF
                        </button>
                        <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2 active:scale-95">
                            <span className="material-symbols-outlined text-[18px]">add</span> Add Log Entry
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column - Log Entries */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        {/* New Entry Form (Inline) */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h2 className="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">edit_document</span> Create New Entry
                            </h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">Date</label>
                                        <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary p-2.5" defaultValue="2026-05-14" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 mb-1">Activity Type</label>
                                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary p-2.5">
                                            <option>Project Development</option>
                                            <option>Meeting / Standup</option>
                                            <option>Research & Analysis</option>
                                            <option>Training / Workshop</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1">Description</label>
                                    <textarea rows={3} placeholder="Describe what you worked on today..." className="w-full bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary p-3"></textarea>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1">Evidence (Optional)</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 hover:border-primary/50 transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined text-3xl mb-2 text-gray-400">upload_file</span>
                                        <p className="text-sm font-bold text-gray-700">Click to upload files</p>
                                        <p className="text-xs">PDF, JPG, PNG up to 10MB</p>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-2">
                                    <button type="button" className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 shadow-sm active:scale-95 transition-all">Submit Entry</button>
                                </div>
                            </form>
                        </div>

                        {/* Log History */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-extrabold text-gray-400 uppercase tracking-widest px-2 mb-2">Recent Logs</h3>
                            
                            {/* Log Item 1 */}
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex gap-4 relative overflow-hidden group hover:border-primary/30 transition-colors">
                                <div className="w-1 bg-emerald-500 absolute left-0 top-0 bottom-0"></div>
                                <div className="flex flex-col items-center min-w-[60px] border-r border-gray-100 pr-4 shrink-0">
                                    <span className="text-2xl font-extrabold text-gray-900 leading-none">13</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">May</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded text-[10px] font-extrabold uppercase tracking-wider mb-1 inline-block">Approved</span>
                                            <h4 className="text-base font-extrabold text-gray-900">Implemented Frontend Authentication</h4>
                                        </div>
                                        <button className="text-gray-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">Integrated OAuth2 login for the new employee portal. Worked with the backend team to resolve token expiration issues during edge cases. Also wrote unit tests for the login component.</p>
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                                        <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                                            <span className="material-symbols-outlined text-[16px] text-blue-500">picture_as_pdf</span>
                                            <span className="text-gray-700">Sprint_Report.pdf</span>
                                        </div>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">schedule</span> 8 Hours
                                        </span>
                                    </div>
                                    {/* Mentor Feedback */}
                                    <div className="mt-4 bg-gray-50 p-3 rounded-xl border border-gray-100 flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-[16px]">verified_user</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-gray-900">Sarah Jenkins (Mentor)</p>
                                            <p className="text-[11px] text-gray-600 italic mt-0.5">"Great work on catching the edge cases early. Code looks solid."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Log Item 2 */}
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex gap-4 relative overflow-hidden group hover:border-primary/30 transition-colors">
                                <div className="w-1 bg-amber-500 absolute left-0 top-0 bottom-0"></div>
                                <div className="flex flex-col items-center min-w-[60px] border-r border-gray-100 pr-4 shrink-0">
                                    <span className="text-2xl font-extrabold text-gray-900 leading-none">12</span>
                                    <span className="text-[10px] font-bold text-gray-500 uppercase">May</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded text-[10px] font-extrabold uppercase tracking-wider mb-1 inline-block">Pending Review</span>
                                            <h4 className="text-base font-extrabold text-gray-900">UI/UX Design Planning</h4>
                                        </div>
                                        <button className="text-gray-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_vert</span>
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">Participated in the weekly design sprint. Created wireframes for the new dashboard analytics module using Figma. Presented the initial concepts to the product manager.</p>
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                                        <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                                            <span className="material-symbols-outlined text-[16px] text-purple-500">image</span>
                                            <span className="text-gray-700">Wireframes_v1.png</span>
                                        </div>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">schedule</span> 6 Hours
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Internship Context */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Internship Info Card */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm">
                                    <span className="material-symbols-outlined text-white">business</span>
                                </div>
                                <div>
                                    <h3 className="text-base font-extrabold text-gray-900">Global Tech Solutions</h3>
                                    <p className="text-xs font-bold text-primary">Software Engineer Intern</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs font-bold mb-1">
                                        <span className="text-gray-600">Program Progress</span>
                                        <span className="text-primary">Week 4 of 12</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[33%] rounded-full"></div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 text-center">
                                        <span className="block text-2xl font-extrabold text-gray-900">18</span>
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Logs</span>
                                    </div>
                                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 text-center">
                                        <span className="block text-2xl font-extrabold text-emerald-600">120</span>
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Hours</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mentors */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-extrabold text-gray-900 mb-4">Supervisors</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Industry Mentor" className="w-10 h-10 rounded-full border border-gray-200" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">David Chen</p>
                                        <p className="text-[10px] font-medium text-gray-500">Industry Mentor • Global Tech</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Academic Supervisor" className="w-10 h-10 rounded-full border border-gray-200" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Dr. Sarah Jenkins</p>
                                        <p className="text-[10px] font-medium text-gray-500">Academic Supervisor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
