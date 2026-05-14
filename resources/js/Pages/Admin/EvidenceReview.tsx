import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function EvidenceReview() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <AuthenticatedLayout>
            <Head title="Activity Evidence Review | Campus Network Admin" />

            <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row gap-8 relative">
                {/* Left Sidebar (Admin Console) */}
                <aside className="w-full md:w-64 flex-shrink-0 flex flex-col space-y-2">
                    <div className="mb-6 px-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                                <span className="material-symbols-outlined">school</span>
                            </div>
                            <div>
                                <p className="text-lg font-black text-blue-600 leading-tight">Admin Console</p>
                                <p className="text-xs text-gray-500 font-bold">Academic Excellence</p>
                            </div>
                        </div>
                    </div>
                    <nav className="space-y-1 flex-1 font-bold text-sm">
                        <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all" href="#">
                            <span className="material-symbols-outlined">dashboard</span> Overview
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all" href="#">
                            <span className="material-symbols-outlined">insights</span> Impact Tracking
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg" href="#">
                            <span className="material-symbols-outlined">verified_user</span> Evidence Review
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all" href="#">
                            <span className="material-symbols-outlined">group</span> User Management
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all" href="#">
                            <span className="material-symbols-outlined">settings</span> Settings
                        </a>
                    </nav>
                    <div className="mt-4 p-4 bg-gray-50 rounded-xl mb-6 border border-gray-100">
                        <p className="text-xs text-gray-500 mb-2 font-semibold">Pending Tasks</p>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-bold text-gray-800">12 Submissions</span>
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        </div>
                        <button className="w-full bg-primary text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-95">Generate Report</button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 w-full overflow-hidden">
                    <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900">Evidence Review</h1>
                            <p className="text-gray-600">Validate and certify academic activity submissions from students and faculty.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white text-primary border border-primary/20 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-50 transition-colors">
                                <span className="material-symbols-outlined text-[20px]">filter_list</span> Filter
                            </button>
                            <button className="px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-95">
                                <span className="material-symbols-outlined text-[20px]">checklist</span> Bulk Actions
                            </button>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 border border-blue-100 rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined">inbox</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Pending</p>
                                <p className="text-2xl font-extrabold text-gray-900">142</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Approved (MTD)</p>
                                <p className="text-2xl font-extrabold text-gray-900">856</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 border border-amber-100 rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined">history_edu</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Avg. Review Time</p>
                                <p className="text-2xl font-extrabold text-gray-900">1.2d</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-purple-50 text-purple-600 border border-purple-100 rounded-2xl flex items-center justify-center">
                                <span className="material-symbols-outlined">trending_up</span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Impact Ratio</p>
                                <p className="text-2xl font-extrabold text-gray-900">92%</p>
                            </div>
                        </div>
                    </div>

                    {/* High-Density Data Table */}
                    <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left whitespace-nowrap">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100">
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">User</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Activity Type</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Campus/Unit</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Evidence</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Impact Tag</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {/* Selected Row */}
                                    <tr className="hover:bg-blue-50/50 transition-colors group bg-blue-50/30">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img className="w-10 h-10 rounded-full object-cover border border-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBA9ccLuCNaRymiVIWjntC9MyoLvmBhXgSNUzg38A2ZI_a4vHOdr8ArGc5knl6uuL6yX8BbspFBL0oYg2abVQhxPAnhLzFODWZRSfDnQivvH15qPJGqxZZDb97Gr6gENPTP32fiwAWpbeoAYlKxOP22x16VCiGTpPSMLZJ8RMBb034_7p4b0USrC5_pjHgrwKesNo4Zvw1gCxsihRCenkhVwfCLPVJqrV_8_vtYHKY2mMISIl78D66Ocz6LXhA1KuQ3j-n2pr9z68" />
                                                <div>
                                                    <p className="font-bold text-sm text-gray-900 cursor-pointer hover:text-primary transition-colors" onClick={() => setIsDrawerOpen(true)}>Julian Rossi</p>
                                                    <p className="text-xs text-gray-500">Senior Faculty</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-gray-400 text-[18px]">science</span>
                                                <span className="text-sm font-medium text-gray-900">Research</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">North Campus</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">Oct 24, 2023</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-white border border-gray-200 text-gray-600 rounded-md text-[11px] font-bold uppercase tracking-wider">PDF</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">IKU-1</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="flex items-center gap-1.5 text-amber-600 font-bold text-xs bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100 w-fit">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => setIsDrawerOpen(true)} className="p-1.5 text-primary hover:bg-blue-100 rounded-lg" title="View Detail"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                                                <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg" title="Approve"><span className="material-symbols-outlined text-[20px]">check_circle</span></button>
                                                <button className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg" title="Request Revision"><span className="material-symbols-outlined text-[20px]">history_edu</span></button>
                                                <button className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg" title="Reject"><span className="material-symbols-outlined text-[20px]">cancel</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 2 */}
                                    <tr className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img className="w-10 h-10 rounded-full object-cover border border-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHz7kDj0eNbokFQNO5i3v6I4usG_F9-mUgOeYbrQKtH-2WaRsAx1fc670i-xtKw9kiluTvIG23_8_x249gW_QGHPvlzkAKzsSoyX22njNT0XvJ0U-Yg83jWAFE15oK7gmQKvHqmR39ah9JH2mkkJ9ecPQ8NQy-AxNoVFl0rD8SjqBOEssX1_87HkHoukdp5oKxd-iTYuH-aoj0s5nNhOK1W9ecIlKXPPzbjBBCW6Ur9kkyfmmhPIVXVvebC7Cr-Nhef35EmgV7_is" />
                                                <div>
                                                    <p className="font-bold text-sm text-gray-900 cursor-pointer hover:text-primary transition-colors" onClick={() => setIsDrawerOpen(true)}>Sarah Chen</p>
                                                    <p className="text-xs text-gray-500">PhD Candidate</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-gray-400 text-[18px]">work</span>
                                                <span className="text-sm font-medium text-gray-900">Internship</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">Main Campus</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">Oct 23, 2023</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-white border border-gray-200 text-gray-600 rounded-md text-[11px] font-bold uppercase tracking-wider">Image</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold border border-purple-100">Talent Dev</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="flex items-center gap-1.5 text-amber-600 font-bold text-xs bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100 w-fit">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => setIsDrawerOpen(true)} className="p-1.5 text-primary hover:bg-blue-100 rounded-lg"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                                                <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg"><span className="material-symbols-outlined text-[20px]">check_circle</span></button>
                                                <button className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg"><span className="material-symbols-outlined text-[20px]">history_edu</span></button>
                                                <button className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg"><span className="material-symbols-outlined text-[20px]">cancel</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 3 */}
                                    <tr className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img className="w-10 h-10 rounded-full object-cover border border-gray-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzs5qiziSH0_9a8zSuTNIoz9yZ3vd0C0T64PQCuSGq9RVL3DVn1qTbmN-1IT5gARp-Qn1UKvGtIXGdUua_kqPa_X-nkzhZOYfLLGbofJajL8pw6nmkEcKHt2Bg_2RI-0UAt7fpZjf7Ok8Rsv8b3NyKR3bLeNLiZf4255OgxzIGobvMsAcA1Adr_wfJb0CDGiJxDYhVsPtsW3OKFElvPTb8062NtB019fTZSNymWPsCUX3T9ZQZ7IFdoJBsyAfOKq_5zP0aoKkwJ0o" />
                                                <div>
                                                    <p className="font-bold text-sm text-gray-900 cursor-pointer hover:text-primary transition-colors" onClick={() => setIsDrawerOpen(true)}>Prof. Arthur Wells</p>
                                                    <p className="text-xs text-gray-500">Dean of Science</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-gray-400 text-[18px]">public</span>
                                                <span className="text-sm font-medium text-gray-900">Community Impact</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">West Campus</td>
                                        <td className="px-6 py-4 text-gray-600 text-sm">Oct 22, 2023</td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-white border border-gray-200 text-gray-600 rounded-md text-[11px] font-bold uppercase tracking-wider">Link</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">IKU-1</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 w-fit">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                Approved
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => setIsDrawerOpen(true)} className="p-1.5 text-primary hover:bg-blue-100 rounded-lg"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                                                <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg opacity-50 cursor-not-allowed"><span className="material-symbols-outlined text-[20px]">check_circle</span></button>
                                                <button className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg opacity-50 cursor-not-allowed"><span className="material-symbols-outlined text-[20px]">history_edu</span></button>
                                                <button className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg opacity-50 cursor-not-allowed"><span className="material-symbols-outlined text-[20px]">cancel</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50">
                            <p className="text-xs font-bold text-gray-500">Showing 1-10 of 142 submissions</p>
                            <div className="flex gap-2">
                                <button className="p-2 border border-gray-200 bg-white rounded-lg text-gray-400 hover:bg-gray-50 transition-colors"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                                <button className="px-3 py-1 bg-primary text-white rounded-lg text-sm font-bold shadow-sm">1</button>
                                <button className="px-3 py-1 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg text-sm font-bold text-gray-600 transition-colors">2</button>
                                <button className="px-3 py-1 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg text-sm font-bold text-gray-600 transition-colors">3</button>
                                <button className="p-2 border border-gray-200 bg-white rounded-lg text-gray-400 hover:bg-gray-50 transition-colors"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Detail Drawer Overlay */}
                {isDrawerOpen && (
                    <div className="fixed inset-0 z-[100]">
                        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onClick={() => setIsDrawerOpen(false)}></div>
                        <div className="absolute right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-2xl flex flex-col border-l border-gray-200 overflow-hidden transform transition-transform">
                            {/* Drawer Header */}
                            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                <div className="flex items-center justify-between mb-6">
                                    <button onClick={() => setIsDrawerOpen(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors bg-white border border-gray-200 shadow-sm">
                                        <span className="material-symbols-outlined text-gray-600">close</span>
                                    </button>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-gray-50 shadow-sm transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">share</span> Share
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <img className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwxVLVpsQuK-9Nt-9axj_NQ2QgxBGtpJX4QPA_a6NECg01F9vtfFykr1GRpbYcMzuB1Xf5B_CeCKO5-dN5Xfkh3u8GyoKz70AzIN6tO2PdXlDTUrQAw7Ez4lOp2N-EAdJnVXAyPyS6Q_KKUFHUH_6LlTX2GA3gNICb4yzugp8xVyRoOMIBB7uvoqGP_-yJ-hXJeM-dMpNVyeS8P3VP5jy06Z90vVa-u97YQRBGwg3QcYZ9xMsit58K0c_gQWZTFd1Xcf7RxyBnVHo" />
                                    <div>
                                        <h2 className="text-xl font-extrabold text-gray-900">Julian Rossi</h2>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="px-2.5 py-0.5 bg-amber-50 border border-amber-200 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">pending</span> Pending Review
                                            </span>
                                            <span className="text-gray-500 text-xs font-semibold">• Submitted Oct 24</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Drawer Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-white">
                                {/* Description */}
                                <div>
                                    <h3 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">Activity Description</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                        Led a cross-disciplinary research project titled "AI in Urban Planning" involving 15 student researchers. The project resulted in a policy recommendation paper presented to the City Council on October 12th. This submission supports IKU-1 objectives for collaborative research impact.
                                    </p>
                                </div>
                                {/* Evidence Preview */}
                                <div>
                                    <h3 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">Evidence Files</h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-sm transition-all group cursor-pointer">
                                            <div className="w-10 h-10 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl flex items-center justify-center mr-3 transition-colors group-hover:bg-rose-100">
                                                <span className="material-symbols-outlined">picture_as_pdf</span>
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-sm font-bold text-gray-900 truncate group-hover:text-primary transition-colors">Research_Proposal_Final_V2.pdf</p>
                                                <p className="text-xs text-gray-500 font-medium mt-0.5">2.4 MB • PDF Document</p>
                                            </div>
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">download</span>
                                        </div>
                                        <a className="flex items-center p-4 bg-white rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-sm transition-all text-primary group" href="#">
                                            <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-3 transition-colors group-hover:bg-blue-100">
                                                <span className="material-symbols-outlined">link</span>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-sm font-bold">View platform post</span>
                                            </div>
                                            <span className="material-symbols-outlined text-sm text-primary">open_in_new</span>
                                        </a>
                                    </div>
                                </div>
                                {/* Reviewer Notes */}
                                <div>
                                    <h3 className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider flex justify-between">
                                        Reviewer Notes
                                        <span className="text-[10px] text-gray-400 normal-case font-normal italic">Visible to admins only</span>
                                    </h3>
                                    <textarea className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm min-h-[120px] focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none shadow-inner" placeholder="Add private feedback for the submitter or internal notes..."></textarea>
                                </div>
                                {/* Audit Trail */}
                                <div>
                                    <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Audit Trail</h3>
                                    <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200">
                                        <div className="relative pl-10">
                                            <div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-sm">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            </div>
                                            <p className="text-sm font-bold text-gray-900">Assigned to Reviewer</p>
                                            <p className="text-xs text-gray-500 font-medium mt-0.5">Today, 09:45 AM • Admin Console</p>
                                        </div>
                                        <div className="relative pl-10">
                                            <div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center z-10 shadow-sm">
                                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                            </div>
                                            <p className="text-sm font-bold text-gray-600">Submitted by Julian Rossi</p>
                                            <p className="text-xs text-gray-500 font-medium mt-0.5">Oct 24, 02:12 PM • Student Portal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Drawer Actions */}
                            <div className="p-6 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] grid grid-cols-3 gap-3">
                                <button className="py-3 px-4 bg-white border border-gray-200 text-rose-600 rounded-xl font-bold text-sm hover:bg-rose-50 hover:border-rose-200 transition-colors">Reject</button>
                                <button className="py-3 px-4 bg-white border border-gray-200 text-amber-600 rounded-xl font-bold text-sm hover:bg-amber-50 hover:border-amber-200 transition-colors">Revision</button>
                                <button className="py-3 px-4 bg-primary text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg hover:bg-blue-700 transition-all active:scale-95">Approve</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
