import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function MessageIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Messages | Campus Network" />

            {/* Use a full-width container minus navbar height */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-64px-48px)]">
                <div className="grid grid-cols-1 md:grid-cols-12 h-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    
                    {/* Left Column: Conversation List */}
                    <aside className="hidden md:flex md:col-span-4 lg:col-span-3 border-r border-gray-100 flex-col bg-white">
                        <div className="p-6 pb-4">
                            <h1 className="text-2xl font-extrabold text-gray-900 mb-4">Messages</h1>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
                                <input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Search messages..." type="text"/>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-1">
                            {/* Conversation Item Active */}
                            <div className="group flex items-center gap-3 p-3 rounded-2xl bg-blue-50 border border-blue-100 cursor-pointer transition-all">
                                <div className="relative shrink-0">
                                    <img className="w-12 h-12 rounded-full object-cover border border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1o7Gn4hy5AgMVm8OCr1Q_OXBm617NCDTjh3oPEyDzUTFSUuuuNXb-sIuLrKuee3MJxwhKpDq5LtGRwXguc4eL52kMAqi22c_rFnN-VTJ8bX65lcSEQVG5LwO8m6zqhHVxOoOjBYUVbkiYQqvgZhBY0rrTuE4EDqMwRh8sR_2zbHc6cHL2yEUhlVvXgTAk--7rE4tr940YkfUY19FtuRv__Xmieupz6s8KryS73WvX1jC76anIKOz7Mgr2bwpfaKF_avBN1PLzwIo" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-sm text-gray-900 truncate">Global Tech Solutions</h3>
                                        <span className="text-[10px] font-bold text-blue-600">10:42 AM</span>
                                    </div>
                                    <p className="text-xs text-blue-700 font-medium truncate">The internship proposal looks excellent...</p>
                                </div>
                            </div>
                            {/* Conversation Items */}
                            <div className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 border border-transparent cursor-pointer transition-all">
                                <div className="relative shrink-0">
                                    <img className="w-12 h-12 rounded-full object-cover border border-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArleuA2HOXP1xWZ9iG8OEBwcaK9WpU312ZvXEMfyUxIVf3Dc_zvy6e3T8CYzE_V-ObE8ZXOkrq5kyKiGBOSnyY02-neX8B-hkYyUcxfbc8wQJKdLIohRa6nMb0euhuvZaD3nBbvBH6n6o7FrnCUUNQe31xxCs8CdNzrcUoAF9tm_6kRkrx60tU0-eNzAxuLeXjvhBhe1nq7kFYOuhPwGeubKL1ApJnamtFnFgRLEY1U444a1S9oHPMe0KK2YaGSEgqS3PNQ-U1Fx0" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-300 border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-sm text-gray-900 truncate group-hover:text-primary transition-colors">Dr. Aris Thorne</h3>
                                        <span className="text-[10px] text-gray-400 font-semibold">Yesterday</span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate">I've reviewed your latest research chapter.</p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 border border-transparent cursor-pointer transition-all">
                                <div className="relative shrink-0">
                                    <img className="w-12 h-12 rounded-full object-cover border border-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY1f7cPvRiFncLy7P1pbJu9UV3JwJFqb4CrX5k0eat7HtCtRZmLO5iyKqTPeYwfskylklNJn5yk4JZdGAoufC3Ce9NZQlvGQYYpGRw9TjZKYU2PgRsvL6CB81_Epl7pyY5J5wnnObnvNYtw9_g-qSLfhR12GFcsPiS_mXPMnasUCaNptWSgfQqmjU25egYrfLAdqnAqznKOf2VmUcOy3Mf3F8xYb5eixjh_SZsAI5ZFMiIES03nIwqLojJwZ3ATB5O_sOKggyo4hA" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-sm text-gray-900 truncate group-hover:text-primary transition-colors">Maria Lopez</h3>
                                        <span className="text-[10px] text-gray-400 font-semibold">Tue</span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate">Conference registration is now open.</p>
                                </div>
                            </div>
                            <div className="group flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 border border-transparent cursor-pointer transition-all">
                                <div className="relative shrink-0">
                                    <img className="w-12 h-12 rounded-full object-cover border border-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAewENW6mYMiVezSZg4VlCPG15zVn3QivZ57Q1wCxkfFcSmQZAm8f8uGy7YPpEyQIhpSYRnXOCpsI4yhyeAUSHZ2sd84Omc1J0ysfhF0_QOn_jud1w_xHYoQ5BwKcSIJx0oRy3lVOLu8XG-o49NehmSFHc21pOsSLVqgzWESbc6EHaz66p8I6hg1E1gdJXrbLBXT7l8VZHo6klOJRCg3v4LXN993zSnP-AAzJgSls9x8NsfiZsUCVVVAugKKMiG3xnnxvQ8WW2O7bg" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-amber-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-sm text-gray-900 truncate group-hover:text-primary transition-colors">BioGen Lab Group</h3>
                                        <span className="text-[10px] text-gray-400 font-semibold">Oct 24</span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate">New grant opportunity shared in the group.</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Center Column: Chat Thread */}
                    <section className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col bg-white/50 relative">
                        {/* Chat Header */}
                        <header className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-gray-100 bg-white">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <img className="w-10 h-10 rounded-full border border-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNV6huejOUW8jYQpp5dYCxPR2i6Xn21fsrY3hnlL5plzqnjVDjo3Yu0J3gKdmpHBDQppbDHXmJkUPtQdGQfyhGraNXmU3CJWtVg3FMRcqYyK2yl9TlqmBkoGgrL5ElXQLIQ8ZqZTXDpK0BM3WOMlI9L8yM5aHZgNgf1AtbDG8EbgKAwKuCr-VoxkBqsa3qmlEPGLVgcN1OhXUFzyq0bHA9rRl-MfcLDC9dKa5CD_crVOU87xQW_y5k22m3bi1UfuHs9NnU_cJwQbw" />
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h2 className="font-bold text-sm text-gray-900">Global Tech Solutions</h2>
                                    <p className="text-[11px] text-gray-500 font-medium">Industry Partner • <span className="text-emerald-600">Active Now</span></p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button className="material-symbols-outlined text-gray-400 hover:text-primary hover:bg-blue-50 p-2 rounded-full transition-all">videocam</button>
                                <button className="material-symbols-outlined text-gray-400 hover:text-primary hover:bg-blue-50 p-2 rounded-full transition-all">call</button>
                                <button className="material-symbols-outlined text-gray-400 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-full transition-all">more_vert</button>
                            </div>
                        </header>
                        
                        {/* Conversation Thread */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-gray-50/50 bg-blend-multiply">
                            <div className="flex justify-center">
                                <span className="bg-white border border-gray-200 shadow-sm text-[10px] font-bold text-gray-500 px-4 py-1.5 rounded-full uppercase tracking-widest">Monday, Oct 28</span>
                            </div>
                            
                            {/* Partner Message */}
                            <div className="flex items-end gap-3 max-w-[85%]">
                                <img className="w-8 h-8 rounded-full shrink-0 shadow-sm border border-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr1YORQaIdQoGpnaGMPEdmD5WrjLywAq8WyZ147VO0Eb8xAs1R1zfJQTHX_nemsxwxdiEvlbDVqPugxcuqGzA_QTAk2S08lCCsqccavg7Hn4UrAySh_D-ApzDBA3ouuDm8q5eHV046KfhlUd6ci6RZgPgFRc9kG3NoLCXXZNoDFGQxwwyz_T_hl5A7Ytk8MuCp4vZGued8yvD3YKrK7nJ1GkelijZBR0_6uItccRUQjHGdcs-RpXD9NjX-2jUn8-xQGpOEyrx-rjc" />
                                <div>
                                    <div className="bg-white border border-gray-100 shadow-sm text-gray-800 p-4 rounded-2xl rounded-bl-none">
                                        <p className="text-sm leading-relaxed">Hello Alex, we've reviewed your thesis abstract on quantum algorithms. We are very interested in discussing a research internship for the upcoming summer session.</p>
                                    </div>
                                    <span className="text-[10px] font-medium text-gray-400 mt-1.5 ml-2 block">9:15 AM</span>
                                </div>
                            </div>
                            
                            {/* User Message */}
                            <div className="flex items-end gap-3 max-w-[85%] ml-auto flex-row-reverse">
                                <div>
                                    <div className="bg-primary text-white p-4 rounded-2xl rounded-br-none shadow-md">
                                        <p className="text-sm leading-relaxed">Thank you for reaching out! I'm very excited about the possibility. I've been following Global Tech's recent work on lattice-based cryptography. Would you like to see my full internship proposal?</p>
                                    </div>
                                    <span className="flex items-center justify-end text-[10px] font-medium text-gray-400 mt-1.5 mr-2">
                                        10:20 AM <span className="material-symbols-outlined text-[14px] text-blue-500 ml-1">done_all</span>
                                    </span>
                                </div>
                            </div>
                            
                            {/* Partner Message */}
                            <div className="flex items-end gap-3 max-w-[85%]">
                                <img className="w-8 h-8 rounded-full shrink-0 shadow-sm border border-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqZHKuJQ6_lgEbvC7cVIiHUyuQ9qpyFS08Nr9Z_q3w9S9yjuaLBm3_jI39V9dCIwT-5N_WXHEff47A0baHKZWQw96-v1JqE2XVFiu9SNN1En99Li8fupoNThBTEbtCqmqr6B6kQzD5x3oOTf35Tm7IIED9EB2cdgmuUGn20JExLyBEVJSMM9etwawq28jX2sJ0jbPYsm64LCgCYGF5_lb-S5S89PWby9d7-k-ct7FCrK2teuf69k5rvP5wi561uXZO0QyO_TWzwxo" />
                                <div>
                                    <div className="bg-white border border-gray-100 shadow-sm text-gray-800 p-4 rounded-2xl rounded-bl-none">
                                        <p className="text-sm leading-relaxed">Absolutely. Please share the proposal and any relevant documentation. The internship proposal looks excellent from the initial overview!</p>
                                    </div>
                                    <span className="text-[10px] font-medium text-gray-400 mt-1.5 ml-2 block">10:42 AM</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Composer */}
                        <footer className="p-4 bg-white border-t border-gray-100 shrink-0 z-10 shadow-[0_-4px_10px_-4px_rgba(0,0,0,0.05)]">
                            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                                <textarea className="w-full bg-transparent border-none focus:ring-0 text-sm resize-none min-h-[44px] max-h-32 px-4 py-2 placeholder-gray-400" placeholder="Type a message..." rows={1}></textarea>
                                <div className="flex items-center justify-between px-2 pb-1 mt-1">
                                    <div className="flex items-center gap-1">
                                        <button className="material-symbols-outlined text-gray-400 hover:text-primary hover:bg-blue-50 p-2 rounded-xl transition-colors">attach_file</button>
                                        <button className="material-symbols-outlined text-gray-400 hover:text-primary hover:bg-blue-50 p-2 rounded-xl transition-colors">image</button>
                                        <button className="material-symbols-outlined text-gray-400 hover:text-primary hover:bg-blue-50 p-2 rounded-xl transition-colors hidden sm:block">sentiment_satisfied</button>
                                    </div>
                                    <button className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all active:scale-95 shadow-md hover:shadow-lg">
                                        Send <span className="material-symbols-outlined text-[18px]">send</span>
                                    </button>
                                </div>
                            </div>
                        </footer>
                    </section>

                    {/* Right Column: Contact Profile Summary */}
                    <aside className="hidden lg:flex lg:col-span-3 border-l border-gray-100 flex-col bg-white overflow-y-auto">
                        <div className="p-8 text-center border-b border-gray-50">
                            <img className="w-24 h-24 rounded-[1.5rem] mx-auto mb-4 object-cover shadow-sm border border-gray-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8hS4X0hDC1LjYTe9L4TtPHzKSTicDaFcHsX7_e_dOT8ljOqSLJaVhKzKn0m-VFQ0Xe6Zt_APWRR164lF35P3b2wd4DBBKpa40lqAd3fu32AJNAhNVTDZ8ND7MW_f5H8hE0na7MFchCHGiruhtpYp-zySeIuqmun7reb2z1oJxoZ1vFrpa-pD1ceAi8mxkrFwoKNzCdJlgBgBFQ0ixSd4AIKFjBVgapb7fUkI4ke07lHxACFW56HHMOcQ0gviH5DkopiiFDC4Vsk4" />
                            <h3 className="text-lg font-extrabold text-gray-900 mb-1">Global Tech Solutions</h3>
                            <p className="text-xs text-gray-500 font-medium px-4">Leading the frontier in Quantum Computing &amp; Cryptographic Research</p>
                            <div className="flex justify-center gap-2 mt-5">
                                <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wider">STEM Partner</span>
                                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">Hiring</span>
                            </div>
                        </div>
                        <div className="p-6 space-y-8">
                            {/* Quick Actions */}
                            <section>
                                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Actions</h4>
                                <div className="grid gap-2">
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-bold text-gray-700 border border-transparent hover:border-blue-100 group">
                                        <span className="material-symbols-outlined text-[20px] text-gray-400 group-hover:text-blue-600 transition-colors">person_add</span>
                                        Send Collab Invite
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-bold text-gray-700 border border-transparent hover:border-blue-100 group">
                                        <span className="material-symbols-outlined text-[20px] text-gray-400 group-hover:text-blue-600 transition-colors">share</span>
                                        Share Profile
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-bold text-gray-700 border border-transparent hover:border-blue-100 group">
                                        <span className="material-symbols-outlined text-[20px] text-gray-400 group-hover:text-blue-600 transition-colors">description</span>
                                        Share Proposal
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-all text-sm font-bold text-gray-700 border border-transparent hover:border-blue-100 group">
                                        <span className="material-symbols-outlined text-[20px] text-gray-400 group-hover:text-blue-600 transition-colors">calendar_today</span>
                                        Schedule Meeting
                                    </button>
                                </div>
                            </section>
                            
                            {/* Shared Assets */}
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Shared Assets</h4>
                                    <button className="text-[11px] font-bold text-primary hover:underline">View All</button>
                                </div>
                                <div className="space-y-3">
                                    {/* File Asset */}
                                    <div className="flex items-center gap-3 p-3 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100 group-hover:bg-rose-100 transition-colors">
                                            <span className="material-symbols-outlined text-rose-500">picture_as_pdf</span>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-gray-900 truncate group-hover:text-primary transition-colors">Internship_Agreement.pdf</p>
                                            <p className="text-[10px] font-medium text-gray-500 mt-0.5">2.4 MB • Oct 27, 2023</p>
                                        </div>
                                    </div>
                                    {/* File Asset */}
                                    <div className="flex items-center gap-3 p-3 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                                            <span className="material-symbols-outlined text-blue-500">description</span>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-gray-900 truncate group-hover:text-primary transition-colors">Proposal_Final_V2.docx</p>
                                            <p className="text-[10px] font-medium text-gray-500 mt-0.5">842 KB • Oct 26, 2023</p>
                                        </div>
                                    </div>
                                    {/* File Asset */}
                                    <div className="flex items-center gap-3 p-3 rounded-2xl border border-gray-200 bg-white hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group">
                                        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100 group-hover:bg-amber-100 transition-colors">
                                            <span className="material-symbols-outlined text-amber-500">folder_zip</span>
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-bold text-gray-900 truncate group-hover:text-primary transition-colors">Project_Assets.zip</p>
                                            <p className="text-[10px] font-medium text-gray-500 mt-0.5">12.8 MB • Oct 24, 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </aside>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
