import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function LearningShow() {
    return (
        <AuthenticatedLayout>
            <Head title="Course Detail | Campus Network" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
                    <Link href={route('learning.index')} className="hover:text-primary transition-colors">Learning</Link>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="hover:text-primary transition-colors cursor-pointer">Technology</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-primary font-bold">Advanced React Patterns</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left/Main Column - Video Player & Details */}
                    <div className="lg:col-span-8 space-y-6">
                        
                        {/* Video Player Placeholder */}
                        <div className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden relative shadow-lg">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all group">
                                    <span className="material-symbols-outlined text-white text-4xl ml-1 group-hover:scale-110 transition-transform">play_arrow</span>
                                </button>
                            </div>
                            {/* Video Controls (Mock) */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-2">
                                <div className="h-1 w-full bg-white/30 rounded-full cursor-pointer">
                                    <div className="h-full bg-primary w-[35%] rounded-full relative">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-white text-xs font-bold">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">pause</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary text-[18px]">volume_up</span>
                                        <span>12:45 / 35:20</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">closed_caption</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">settings</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-primary">fullscreen</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Course Info */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Module 4: Higher-Order Components (HOC)</h1>
                            <p className="text-sm text-gray-500 font-medium mb-6">Advanced React Patterns & Next.js • Taught by Prof. Sarah Jenkins</p>
                            
                            <div className="flex items-center gap-4 border-b border-gray-100 pb-4 mb-6 overflow-x-auto no-scrollbar">
                                <button className="px-4 py-2 text-sm font-bold border-b-2 border-primary text-primary whitespace-nowrap">Overview</button>
                                <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Notes</button>
                                <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Resources (3)</button>
                                <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap">Q&A</button>
                            </div>

                            <div className="prose prose-sm max-w-none text-gray-600">
                                <p className="mb-4">In this module, we will dive deep into Higher-Order Components (HOCs) in React. You will learn how to reuse component logic, handle cross-cutting concerns, and understand the difference between HOCs and Custom Hooks.</p>
                                <h4 className="font-bold text-gray-900 mb-2">Learning Objectives:</h4>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>Understand the concept and structure of HOCs.</li>
                                    <li>Implement an authentication wrapper HOC.</li>
                                    <li>Compare HOCs with render props and custom hooks.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Course Syllabus/Playlist */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col h-[calc(100vh-140px)] sticky top-24">
                            <div className="mb-4">
                                <h3 className="text-base font-extrabold text-gray-900 mb-1">Course Content</h3>
                                <div className="flex items-center justify-between text-xs text-gray-500 font-bold">
                                    <span>65% Complete</span>
                                    <span>4 / 12 Modules</span>
                                </div>
                                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                                    <div className="bg-primary h-full w-[65%] rounded-full"></div>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                                {/* Section 1 */}
                                <div>
                                    <h4 className="text-xs font-extrabold text-gray-900 mb-2 uppercase tracking-widest bg-gray-50 px-3 py-2 rounded-lg">1. Introduction</h4>
                                    <ul className="space-y-1">
                                        <li className="flex items-start gap-3 p-2 rounded-xl bg-emerald-50/50 cursor-pointer">
                                            <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0 mt-0.5">check_circle</span>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900 line-clamp-1">Welcome & Setup</p>
                                                <p className="text-[10px] text-gray-500">Video • 5:20</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 p-2 rounded-xl bg-emerald-50/50 cursor-pointer">
                                            <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0 mt-0.5">check_circle</span>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900 line-clamp-1">React Fundamentals Refresher</p>
                                                <p className="text-[10px] text-gray-500">Video • 18:45</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 2 */}
                                <div>
                                    <h4 className="text-xs font-extrabold text-gray-900 mb-2 uppercase tracking-widest bg-gray-50 px-3 py-2 rounded-lg">2. Advanced Patterns</h4>
                                    <ul className="space-y-1">
                                        <li className="flex items-start gap-3 p-2 rounded-xl bg-emerald-50/50 cursor-pointer">
                                            <span className="material-symbols-outlined text-emerald-500 text-[18px] shrink-0 mt-0.5">check_circle</span>
                                            <div>
                                                <p className="text-sm font-bold text-gray-900 line-clamp-1">Compound Components</p>
                                                <p className="text-[10px] text-gray-500">Video • 22:10</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 p-2 rounded-xl bg-blue-50 border border-blue-100 cursor-pointer relative">
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full"></div>
                                            <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5 pl-1">play_circle</span>
                                            <div>
                                                <p className="text-sm font-extrabold text-primary line-clamp-1">Higher-Order Components</p>
                                                <p className="text-[10px] text-primary">Video • 35:20</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                                            <span className="material-symbols-outlined text-gray-300 text-[18px] shrink-0 mt-0.5">lock</span>
                                            <div>
                                                <p className="text-sm font-bold text-gray-600 line-clamp-1">Custom Hooks Architecture</p>
                                                <p className="text-[10px] text-gray-400">Video • 28:15</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div>
                                    <h4 className="text-xs font-extrabold text-gray-900 mb-2 uppercase tracking-widest bg-gray-50 px-3 py-2 rounded-lg flex items-center justify-between">
                                        3. Assignment
                                        <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[9px]">+50 Pts</span>
                                    </h4>
                                    <ul className="space-y-1">
                                        <li className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                                            <span className="material-symbols-outlined text-gray-300 text-[18px] shrink-0 mt-0.5">lock</span>
                                            <div>
                                                <p className="text-sm font-bold text-gray-600 line-clamp-1">Build a Dashboard</p>
                                                <p className="text-[10px] text-gray-400">Project • Est. 2h</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                                            <span className="material-symbols-outlined text-gray-300 text-[18px] shrink-0 mt-0.5">lock</span>
                                            <div>
                                                <p className="text-sm font-bold text-gray-600 line-clamp-1">Module Quiz</p>
                                                <p className="text-[10px] text-gray-400">Quiz • 10 Questions</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #e5e7eb;
                    border-radius: 10px;
                }
            `}} />
        </AuthenticatedLayout>
    );
}
