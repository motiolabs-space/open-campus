import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function CommunityShow() {
    return (
        <AuthenticatedLayout>
            <Head title="AI Research Group | Campus Network" />

            {/* Community Banner & Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto px-0 md:px-6 lg:px-8">
                    <div className="h-48 md:h-64 bg-gray-900 md:rounded-b-3xl overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Community Banner" className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    </div>
                    
                    <div className="px-4 sm:px-6 lg:px-8 pb-6 relative -mt-16 sm:-mt-20">
                        <div className="flex flex-col md:flex-row gap-6 md:items-end">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white p-1 rounded-2xl shadow-sm z-10 shrink-0">
                                <div className="w-full h-full bg-primary rounded-xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white text-4xl sm:text-5xl">memory</span>
                                </div>
                            </div>
                            
                            <div className="flex-1 pb-2">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="bg-purple-100 text-purple-700 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">Research Group</span>
                                            <span className="bg-gray-100 text-gray-700 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">public</span> Public</span>
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Artificial Intelligence Lab</h1>
                                        <p className="text-gray-500 font-medium text-sm mt-1">A community for students and researchers interested in Machine Learning, Computer Vision, and NLP.</p>
                                    </div>
                                    <div className="flex gap-3 shrink-0">
                                        <button className="px-6 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-gray-800 transition-colors flex items-center gap-2 active:scale-95">
                                            <span className="material-symbols-outlined text-[18px]">group_add</span> Join Group
                                        </button>
                                        <button className="p-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
                                            <span className="material-symbols-outlined">more_horiz</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Community Tabs */}
                    <div className="px-4 sm:px-6 lg:px-8 border-t border-gray-100 flex items-center gap-6 overflow-x-auto no-scrollbar">
                        <button className="px-2 py-4 text-sm font-bold border-b-2 border-primary text-primary whitespace-nowrap">Discussion</button>
                        <button className="px-2 py-4 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">About</button>
                        <button className="px-2 py-4 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Members (342)</button>
                        <button className="px-2 py-4 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Events</button>
                        <button className="px-2 py-4 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Projects</button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column - Feed */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        {/* Create Post */}
                        <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                                S
                            </div>
                            <div className="flex-1">
                                <textarea rows={1} className="w-full bg-gray-50 border border-transparent hover:border-gray-200 rounded-2xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary resize-none transition-all placeholder-gray-500" placeholder="Share an article, ask a question, or post an update to the group..."></textarea>
                                <div className="flex items-center justify-between mt-3">
                                    <div className="flex items-center gap-2">
                                        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors tooltip-trigger" title="Add Image">
                                            <span className="material-symbols-outlined text-[20px]">image</span>
                                        </button>
                                        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors tooltip-trigger" title="Attach Document">
                                            <span className="material-symbols-outlined text-[20px]">attach_file</span>
                                        </button>
                                        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors tooltip-trigger" title="Create Poll">
                                            <span className="material-symbols-outlined text-[20px]">poll</span>
                                        </button>
                                    </div>
                                    <button className="px-5 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors disabled:opacity-50" disabled>Post</button>
                                </div>
                            </div>
                        </div>

                        {/* Feed Filter */}
                        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                            <h3 className="text-sm font-extrabold text-gray-900">Recent Activity</h3>
                            <button className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">
                                Sort by: Top <span className="material-symbols-outlined text-[16px]">expand_more</span>
                            </button>
                        </div>

                        {/* Post 1 */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex gap-3">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" className="w-12 h-12 rounded-full border border-gray-200" />
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <h3 className="text-sm font-extrabold text-gray-900 hover:text-primary transition-colors cursor-pointer">David Chen</h3>
                                            <span className="bg-blue-100 text-blue-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Admin</span>
                                        </div>
                                        <p className="text-xs text-gray-500 font-medium">Postdoctoral Researcher</p>
                                        <p className="text-[10px] text-gray-400 font-medium mt-0.5 flex items-center gap-1">
                                            2 hours ago • <span className="material-symbols-outlined text-[12px]">public</span>
                                        </p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            
                            <div className="mb-4">
                                <p className="text-sm text-gray-800 leading-relaxed mb-3">
                                    We are organizing a study session for the upcoming "Deep Learning architectures" mid-term. We'll be focusing on Transformers and Attention mechanisms. Let me know if you want to join, and please vote on the best time below! 🧠🤖
                                </p>
                                
                                {/* Poll */}
                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                                    <h4 className="text-sm font-bold text-gray-900 mb-3">When should we hold the study session?</h4>
                                    <div className="space-y-2">
                                        <button className="w-full relative bg-white border border-gray-200 p-3 rounded-xl flex items-center justify-between group hover:border-primary transition-colors">
                                            <div className="absolute left-0 top-0 bottom-0 bg-primary/10 rounded-l-xl w-[45%]"></div>
                                            <span className="text-sm font-bold text-gray-700 relative z-10 group-hover:text-primary">Friday, 3:00 PM</span>
                                            <span className="text-xs font-bold text-gray-500 relative z-10">45%</span>
                                        </button>
                                        <button className="w-full relative bg-white border border-gray-200 p-3 rounded-xl flex items-center justify-between group hover:border-primary transition-colors">
                                            <div className="absolute left-0 top-0 bottom-0 bg-primary/10 rounded-l-xl w-[30%]"></div>
                                            <span className="text-sm font-bold text-gray-700 relative z-10 group-hover:text-primary">Saturday, 10:00 AM</span>
                                            <span className="text-xs font-bold text-gray-500 relative z-10">30%</span>
                                        </button>
                                        <button className="w-full relative bg-white border border-gray-200 p-3 rounded-xl flex items-center justify-between group hover:border-primary transition-colors">
                                            <div className="absolute left-0 top-0 bottom-0 bg-primary/10 rounded-l-xl w-[25%]"></div>
                                            <span className="text-sm font-bold text-gray-700 relative z-10 group-hover:text-primary">Sunday, 1:00 PM</span>
                                            <span className="text-xs font-bold text-gray-500 relative z-10">25%</span>
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-gray-500 mt-3">24 votes • Poll ends in 2 days</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 pt-3 border-t border-gray-50">
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-primary transition-colors group">
                                    <span className="material-symbols-outlined text-[20px] group-active:scale-125 transition-transform">thumb_up</span>
                                    <span className="text-xs font-bold">12</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                                    <span className="text-xs font-bold">4</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-gray-500 hover:text-primary transition-colors ml-auto">
                                    <span className="material-symbols-outlined text-[20px]">share</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - About & Widgets */}
                    <div className="lg:col-span-4 space-y-6">
                        
                        {/* About Card */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-extrabold text-gray-900 mb-3">About this Group</h3>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                Welcome to the AI Research Lab group! We discuss the latest papers, share project ideas, and organize workshops related to Artificial Intelligence. Open to all students and faculty.
                            </p>
                            <div className="space-y-3 mb-5 border-t border-gray-50 pt-4">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <span className="material-symbols-outlined text-gray-400">group</span>
                                    <span className="font-bold text-gray-900">342 Members</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <span className="material-symbols-outlined text-gray-400">public</span>
                                    <span>Public visibility</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <span className="material-symbols-outlined text-gray-400">calendar_today</span>
                                    <span>Created Jan 2023</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-bold">#MachineLearning</span>
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-bold">#AI</span>
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-bold">#Research</span>
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-sm font-extrabold text-gray-900">Upcoming Events</h3>
                                <button className="p-1 rounded hover:bg-gray-50 text-gray-400 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                </button>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex gap-4 group cursor-pointer">
                                    <div className="flex flex-col items-center bg-gray-50 rounded-xl px-3 py-2 min-w-[50px] shrink-0 border border-gray-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                                        <span className="text-[10px] font-bold text-primary uppercase">May</span>
                                        <span className="text-xl font-extrabold text-gray-900">24</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">Paper Reading: GPT-4 Architecture</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">Lab 302 • 15:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group cursor-pointer">
                                    <div className="flex flex-col items-center bg-gray-50 rounded-xl px-3 py-2 min-w-[50px] shrink-0 border border-gray-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                                        <span className="text-[10px] font-bold text-primary uppercase">Jun</span>
                                        <span className="text-xl font-extrabold text-gray-900">02</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">Kaggle Hackathon Kickoff</h4>
                                        <p className="text-[11px] text-gray-500 mt-0.5">Online • 09:00 AM</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-4 text-xs font-bold text-primary hover:text-blue-700 transition-colors">View all events</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
