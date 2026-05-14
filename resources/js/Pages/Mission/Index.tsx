import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function MissionIndex() {
    return (
        <AuthenticatedLayout>
            <Head title="Mission Center | Campus Network" />

            <main className="pt-8 pb-12 px-6 max-w-[1280px] mx-auto">
                {/* Page Header */}
                <header className="mb-10 mt-6">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Mission Center</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">Complete missions to build your academic impact and earn rewards.</p>
                </header>

                {/* Tab Bar */}
                <div className="flex items-center gap-2 mb-8 bg-surface-container-low p-1.5 rounded-2xl w-fit border border-gray-100">
                    <button className="px-6 py-2.5 rounded-xl font-bold text-sm bg-white text-primary shadow-sm transition-all">Student Missions</button>
                    <button className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-500 hover:bg-white/50 transition-all">Lecturer Missions</button>
                    <button className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-500 hover:bg-white/50 transition-all">Campus Missions</button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content: Mission Grid */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 1: Complete Your Profile */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-blue-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                                        Verified
                                    </div>
                                    <div className="text-primary font-bold text-xl">+100 pts</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Your Profile</h3>
                                <p className="text-sm text-gray-500 mb-6">Help others find you by filling in your details.</p>
                                <div className="mb-6">
                                    <div className="flex justify-between text-xs font-bold mb-2">
                                        <span className="text-gray-500">Progress</span>
                                        <span className="text-primary font-bold">80%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full" style={{width: '80%'}}></div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">Finish Profile</button>
                            </div>

                            {/* Card 2: Upload Portfolio Projects */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-blue-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>palette</span>
                                        Creator
                                    </div>
                                    <div className="text-primary font-bold text-xl">+250 pts</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Portfolio Projects</h3>
                                <p className="text-sm text-gray-500 mb-6">Showcase your best work to potential employers.</p>
                                <div className="mb-6">
                                    <div className="flex justify-between text-xs font-bold mb-2">
                                        <span className="text-gray-500">Projects: 1/3</span>
                                        <span className="text-primary font-bold">33%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full" style={{width: '33%'}}></div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-gray-100 text-gray-700 hover:text-white rounded-xl font-bold text-sm hover:bg-primary transition-colors">Upload Project</button>
                            </div>

                            {/* Card 3: Apply to Internships */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-blue-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>work</span>
                                        Career Hunter
                                    </div>
                                    <div className="text-primary font-bold text-xl">+500 pts</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Apply to Internships</h3>
                                <p className="text-sm text-gray-500 mb-6">Take the next step in your career journey.</p>
                                <div className="mb-6">
                                    <div className="flex justify-between text-xs font-bold mb-2">
                                        <span className="text-gray-500">Apps: 2/5</span>
                                        <span className="text-primary font-bold">40%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full" style={{width: '40%'}}></div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-gray-100 text-gray-700 hover:text-white rounded-xl font-bold text-sm hover:bg-primary transition-colors">Browse Jobs</button>
                            </div>

                            {/* Card 4: Earn a Certification */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-blue-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>military_tech</span>
                                        Certified
                                    </div>
                                    <div className="text-primary font-bold text-xl">+300 pts</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Earn a Certification</h3>
                                <p className="text-sm text-gray-500 mb-6">Validate your skills with a professional certificate.</p>
                                <div className="mb-6">
                                    <div className="flex justify-between text-xs font-bold mb-2">
                                        <span className="text-gray-500">Not started</span>
                                        <span className="text-primary font-bold">0%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full rounded-full" style={{width: '0%'}}></div>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-gray-100 text-gray-700 hover:text-white rounded-xl font-bold text-sm hover:bg-primary transition-colors">Find Courses</button>
                            </div>

                            {/* Card 5: Share Internship Story */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md md:col-span-2 transition-all duration-300 group border border-gray-100 hover:border-blue-100 relative overflow-hidden">
                                <div className="relative z-10 md:flex md:items-center md:gap-8">
                                    <div className="md:w-2/3">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>auto_stories</span>
                                                Storyteller
                                            </div>
                                            <div className="text-primary font-bold text-xl md:hidden">+150 pts</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Share Internship Story</h3>
                                        <p className="text-sm text-gray-500 mb-6">Inspire others with your real-world experience. Help the community grow by sharing your journey.</p>
                                        <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">Write Story</button>
                                    </div>
                                    <div className="hidden md:flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-6 shadow-inner border border-gray-100 flex-1 text-center">
                                        <div className="text-blue-600 text-4xl font-extrabold mb-1">+150</div>
                                        <div className="font-bold text-sm text-gray-500">Impact Points</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Your Progress Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Your Progress</h4>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-primary font-extrabold text-2xl border border-blue-100">4</div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Current Level</div>
                                        <div className="text-xl font-bold text-gray-900">Senior Scholar</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                        <div className="text-xs font-bold text-gray-500 mb-1">Points</div>
                                        <div className="font-bold text-2xl text-primary">1,250</div>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                        <div className="text-xs font-bold text-gray-500 mb-1">Badges</div>
                                        <div className="font-bold text-2xl text-primary">6</div>
                                    </div>
                                </div>
                                <button className="w-full py-4 bg-blue-50 text-blue-700 font-bold text-sm rounded-2xl hover:bg-blue-100 transition-colors">View Achievements</button>
                            </div>
                        </div>

                        {/* Leaderboard Preview */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="text-xl font-bold text-gray-900">Leaderboard</h4>
                                <a className="text-primary font-bold text-sm hover:underline" href="#">View All</a>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-2">
                                    <span className="font-bold text-gray-400 w-4">1</span>
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWhsM1DvbafsDByBb7EkUdrQ18A-pW_PhPiWzA4xFE2SwrBicVzaViJfTY96B2paCWl4LOxglRi-fJi-lQJauQsb0ZIo7oujVXR3G8-1NEf3MMBhiolaJmteEFpiT-uPCu4Y2FcWjhidyS60O_B-K-mZhJzdFuKOKxbRmDp9fzBkC61fA9w579uLHDJv_InPvdM3Tq_Ms1s_IcgLOqzH8X8o_bYxRANK8W0RcLvMTRQn1V2p0f8AM9hEK_N_r67dXdO0IHKhxMzOA" />
                                    <div className="flex-1">
                                        <div className="font-bold text-sm text-gray-900">Alex Rivera</div>
                                        <div className="text-xs text-gray-500 font-medium">3,420 pts</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-2 bg-blue-50 rounded-xl border border-blue-100">
                                    <span className="font-bold text-blue-500 w-4">2</span>
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe88atosbEB7tclD1nc5mK2szfggZKjRtgWUOQFgFQNHqqtGF3fU08D-F7s3B_n3D236A43rmjOJ0UHpFSM0_FKg4_PT2s1Upbl_u5ZVL0r-sPunxqtql3C8USfrZYgKKJ90ebZkq3ZDP9CCEzg1zpz0XkPlCWuaWuYZbZOf6hQWOyjzaZvTSsIcpaGxIE3FF1zY3Hpw1HdLlXspH3Q9wahrT9uYBT-RvxUOAUIJ-Acp_hA1jxrBv_3zS2TnvdKfAC-PM9TMjLA30" />
                                    <div className="flex-1">
                                        <div className="font-bold text-sm text-blue-900">Sarah Chen (You)</div>
                                        <div className="text-xs text-blue-600 font-medium">1,250 pts</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-2">
                                    <span className="font-bold text-gray-400 w-4">3</span>
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoeA5qOyYgzQ7pCjwKdVnNy6hwfKXOXQ7VqblD4wDvFKNPBPdMIe3WC6ViZ3mkzXossNdfAJWoPSIo5xOqsg1_gNBh7qli9GG0HDMYATiqCyeHKYVT6KLNi_qril_589Yesq3YvkMIizp3QEKm_o24i8VSi1TY0bb-T2tAv2VaqxeVkjyh9HBq8wJUxl8iv5cjfFhII5Qajjw3cI-r-hi3v9qAOsH7dxU8o2OMSqtCBaJ_5PZxA0KRZ3adKH26VzOjM8BAEEf4tHI" />
                                    <div className="flex-1">
                                        <div className="font-bold text-sm text-gray-900">Jordan Smith</div>
                                        <div className="text-xs text-gray-500 font-medium">980 pts</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Rewards */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Recent Rewards</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center border border-amber-100">
                                        <span className="material-symbols-outlined text-amber-600">redeem</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-gray-900">Premium Library Access</div>
                                        <div className="text-xs text-gray-500">Unlocked 2 days ago</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                                        <span className="material-symbols-outlined text-blue-600">stars</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm text-gray-900">'Impact Scholar' Badge</div>
                                        <div className="text-xs text-gray-500">Unlocked 1 week ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
