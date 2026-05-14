import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function LearningIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Learning | Campus Network" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <header className="mb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Campus Learning</h1>
                        <p className="text-gray-500 mt-2 font-medium">Enhance your skills with courses from top institutions and industry experts.</p>
                    </div>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input type="text" placeholder="Search courses, skills, or topics..." className="w-full md:w-80 pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary shadow-sm" />
                    </div>
                </header>

                {/* Categories */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 mb-6">
                    <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold whitespace-nowrap shadow-sm">For You</button>
                    <button className="px-5 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">Technology</button>
                    <button className="px-5 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">Business</button>
                    <button className="px-5 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">Design</button>
                    <button className="px-5 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">Data Science</button>
                    <button className="px-5 py-2.5 bg-white text-gray-700 border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors whitespace-nowrap shadow-sm">Soft Skills</button>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left/Main Column - Course Listings */}
                    <div className="lg:col-span-3 space-y-8">
                        
                        {/* Section: In Progress */}
                        <section>
                            <h2 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">play_circle</span> In Progress
                            </h2>
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow group">
                                <div className="w-full md:w-64 h-40 bg-gray-100 rounded-2xl overflow-hidden relative shrink-0">
                                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Coding Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-5xl opacity-80 group-hover:opacity-100 transition-opacity">play_circle</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <span className="text-[11px] font-extrabold text-blue-600 bg-blue-50 px-2 py-1 rounded inline-block w-max mb-2 uppercase tracking-wider">Technology</span>
                                    <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">Advanced React Patterns & Next.js</h3>
                                    <p className="text-sm text-gray-500 font-medium mb-4">By Global Tech Institute</p>
                                    
                                    <div className="flex items-center gap-4 text-xs font-bold text-gray-600 mb-3">
                                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[65%] rounded-full"></div>
                                        </div>
                                        <span>65% Complete</span>
                                    </div>
                                    <Link href={route('learning.show')} className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors self-start shadow-sm">Continue Learning</Link>
                                </div>
                            </div>
                        </section>

                        {/* Section: Recommended */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-amber-500">star</span> Recommended for You
                                </h2>
                                <a href="#" className="text-sm font-bold text-primary hover:underline">See all</a>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Course Card 1 */}
                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all group flex flex-col">
                                    <div className="h-40 bg-gray-100 overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Business Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">2h 45m</span>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <span className="text-[10px] font-extrabold text-emerald-600 mb-2 tracking-wider">BUSINESS</span>
                                        <h3 className="text-base font-extrabold text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">Data-Driven Business Strategy</h3>
                                        <p className="text-xs text-gray-500 mb-4">Prof. Sarah Jenkins</p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                                                <span className="material-symbols-outlined text-[14px]">star</span>
                                                <span>4.8 <span className="text-gray-400 font-medium">(1.2k)</span></span>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">+50 Impact Pts</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Course Card 2 */}
                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all group flex flex-col">
                                    <div className="h-40 bg-gray-100 overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Design Thinking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">4h 10m</span>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <span className="text-[10px] font-extrabold text-purple-600 mb-2 tracking-wider">DESIGN</span>
                                        <h3 className="text-base font-extrabold text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">UI/UX Design Masterclass</h3>
                                        <p className="text-xs text-gray-500 mb-4">DesignAcademy HQ</p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                                                <span className="material-symbols-outlined text-[14px]">star</span>
                                                <span>4.9 <span className="text-gray-400 font-medium">(3.4k)</span></span>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">+75 Impact Pts</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Course Card 3 */}
                                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all group flex flex-col">
                                    <div className="h-40 bg-gray-100 overflow-hidden relative">
                                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Machine Learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm">8h 20m</span>
                                    </div>
                                    <div className="p-5 flex-1 flex flex-col">
                                        <span className="text-[10px] font-extrabold text-blue-600 mb-2 tracking-wider">DATA SCIENCE</span>
                                        <h3 className="text-base font-extrabold text-gray-900 mb-1 leading-tight group-hover:text-primary transition-colors">Machine Learning Foundations</h3>
                                        <p className="text-xs text-gray-500 mb-4">Tech University</p>
                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                                                <span className="material-symbols-outlined text-[14px]">star</span>
                                                <span>4.7 <span className="text-gray-400 font-medium">(890)</span></span>
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">+100 Impact Pts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        
                        {/* Weekly Goal */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-extrabold text-gray-900 mb-4 flex items-center justify-between">
                                Weekly Goal
                                <span className="material-symbols-outlined text-gray-400 text-[18px]">edit</span>
                            </h3>
                            <div className="flex items-center justify-center relative w-32 h-32 mx-auto mb-4">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-gray-100 stroke-current" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    <path className="text-primary stroke-current" strokeWidth="3" strokeDasharray="60, 100" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                </svg>
                                <div className="absolute flex flex-col items-center justify-center text-center">
                                    <span className="text-2xl font-extrabold text-gray-900">3/5</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Hours</span>
                                </div>
                            </div>
                            <p className="text-center text-sm font-medium text-gray-600">You're on a 3-week learning streak! Keep it up.</p>
                        </div>

                        {/* Saved Courses */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="text-sm font-extrabold text-gray-900 mb-4">Saved Courses</h3>
                            <div className="space-y-4">
                                <div className="flex gap-3 items-center group cursor-pointer">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Leadership" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">Agile Leadership</h4>
                                        <p className="text-xs text-gray-500">2h 15m</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center group cursor-pointer">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Finance" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">Personal Finance 101</h4>
                                        <p className="text-xs text-gray-500">1h 45m</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-4 py-2 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors">View All Saved</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
