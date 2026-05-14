import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function ProfileShow() {
    const user = usePage().props.auth.user;
    
    return (
        <AuthenticatedLayout>
            <Head title={`${user.name} | Campus Network`} />

            <main className="max-w-[1280px] mx-auto mt-20 pt-8 pb-20 px-6">
                {/* Header / Hero Section */}
                <header className="relative mb-8">
                    <div className="h-64 md:h-80 w-full rounded-[1.5rem] overflow-hidden relative">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrvjdzogI0TXW7K8VfM7A2Qm8wuuyb3RoADwcI4Rx8KynB5ZlP8EumXbb6jOvgSbHHvcAbll5H10Z9dmGZ0naRm_i-qFAd8TU1rAxYD2FtdicZwOjklCeop7nFHiXAiaCJAx23VkwTGvtmgamA_fXNil06eo6dYrlAqd1y9T_-EZI18uasuXJk7_DfOupPgJn1AbYFHp2O8Nd_uslc0hYm7rtfVsKliTPKMm459u3vzOEVvRtiDcTfozir7aIGoiRryFjQ-dXyXLM"/>
                    </div>
                    <div className="max-w-[1200px] mx-auto px-8 -mt-20 relative z-10 flex flex-col md:flex-row items-end gap-6">
                        <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white shrink-0 flex items-center justify-center bg-primary text-white text-5xl font-bold">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-grow pb-4 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
                            <div>
                                <h1 className="font-headline-lg text-3xl font-bold text-on-surface">{user.name}</h1>
                                <p className="font-body-md text-gray-600 mt-1">Computer Science Student @ University of Oxford</p>
                                <div className="flex gap-2 mt-3">
                                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">Software Engineering & AI</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md">
                                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                                    Connect
                                </button>
                                <button className="bg-white text-primary border-2 border-primary/10 px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                    Message
                                </button>
                                <button className="bg-surface-container-low text-on-surface-variant px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all">
                                    <span className="material-symbols-outlined text-[20px]">download</span>
                                    CV
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left/Center Column (8 columns) */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* About Section */}
                        <section className="bg-surface-container-low p-8 rounded-[1.5rem]">
                            <h2 className="font-headline-md text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                About
                            </h2>
                            <p className="text-on-surface-variant font-body-lg leading-relaxed">
                                Passionate Computer Science student at the University of Oxford specializing in Artificial Intelligence and Scalable Distributed Systems. With a strong foundation in algorithmic problem-solving and full-stack development, I'm driven by the potential of AI to solve complex real-world challenges. I thrive in collaborative environments and am actively seeking opportunities to contribute to cutting-edge software engineering projects.
                            </p>
                        </section>

                        {/* Skills Section */}
                        <section className="bg-surface-container-low p-8 rounded-[1.5rem]">
                            <h2 className="font-headline-md text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">psychology</span>
                                Skills
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Python</span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Java</span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">TypeScript</span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">PyTorch</span>
                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">React.js</span>
                                
                                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">Technical Leadership</span>
                                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">Agile Methodology</span>
                                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold">Public Speaking</span>
                            </div>
                        </section>

                        {/* Portfolio Grid */}
                        <section className="bg-surface-container-low p-8 rounded-[1.5rem]">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-headline-md text-2xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">grid_view</span>
                                    Portfolio
                                </h2>
                                <button className="text-primary font-semibold text-sm hover:underline">View All</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <img className="w-full h-40 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqe3DPLr2GiniKF-Ikh7O2lgyV5v_h32ggORTc2-1qaLQex5VSifWchf0QYEu7SH6U9AF0Qhlm-xaFOUK56DiUIb8repw9dEXw7Q_Xiu44zdfJW6vNEovvad88E8q4NPFalD7mr-xU24cTriIpnOUSNL6Jfbr-ykO5Qul9zNRskhIeKUuiZkrpiIDykul3X-a-mkoLNVGyJZZ61GUaRleDOeNI_JcQ7AVkhFP7Iot5qYv-bn-WdOt8_I_0_y6B4c_Lmmk_aCTLZGI"/>
                                    <div className="p-4">
                                        <h3 className="font-bold text-[18px] mb-2">NeuralNet Visualizer</h3>
                                        <p className="text-on-surface-variant text-sm line-clamp-2">A real-time 3D visualization tool for deep learning models built with Three.js and Python.</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <img className="w-full h-40 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL414z3gTwTD2-zZRgt3X2kjWMxMPHEF2HjFYVAqxfbRvSu8Yc6PXUpjH1OXcTsaxDkiTC9obWl0hVWFQNduzzAWCujTzjqPT5-RQ4ZhJtwNhaNzcbzGk589mBLH4S_xNKfHywaFapLNLw6whK1mBMoEYf7xikvJyyaSMx4dOV1IZM9o0Q1pReTdk437sIm7uzxCLRXFubk9CTlrmLon-y5ekYsKWMLWqj2xt7UUSEimpOeNzAmADFbfdWtBjYAICs-cyIWl-SMUA"/>
                                    <div className="p-4">
                                        <h3 className="font-bold text-[18px] mb-2">CampusConnect Mobile</h3>
                                        <p className="text-on-surface-variant text-sm line-clamp-2">React Native social platform for cross-department research collaboration at Oxford.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Internship Experience */}
                        <section className="bg-surface-container-low p-8 rounded-[1.5rem]">
                            <h2 className="font-headline-md text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">work</span>
                                Internship Experience
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 bg-white rounded-xl">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-blue-600">corporate_fare</span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-[18px]">Software Engineering Intern</h3>
                                            <span className="text-xs font-medium text-gray-500">June 2023 - Sept 2023</span>
                                        </div>
                                        <p className="text-primary text-sm font-semibold">Google • Mountain View, CA</p>
                                        <p className="text-on-surface-variant mt-2 text-sm">Worked on the Google Cloud platform, optimizing backend latency for BigQuery connectors by 15%.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white rounded-xl">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-blue-600">apartment</span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-[18px]">Research Intern (AI)</h3>
                                            <span className="text-xs font-medium text-gray-500">June 2022 - Sept 2022</span>
                                        </div>
                                        <p className="text-primary text-sm font-semibold">Microsoft Research • Cambridge, UK</p>
                                        <p className="text-on-surface-variant mt-2 text-sm">Contributed to NLP model evaluation frameworks for large-scale language models.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar (4 columns) */}
                    <aside className="lg:col-span-4 space-y-6">
                        {/* Profile Completion */}
                        <div className="bg-surface-container-low p-6 rounded-[1.5rem] text-center">
                            <h3 className="text-sm font-semibold text-gray-600 mb-6">Profile Strength</h3>
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle className="text-gray-200" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                                    <circle className="text-blue-600" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364" strokeDashoffset="54.6" strokeWidth="8"></circle>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl font-extrabold text-on-surface">85%</span>
                                </div>
                            </div>
                            <p className="text-xs font-medium text-gray-500 px-4">Complete your "Research Interests" to reach 100%</p>
                            <button className="mt-4 w-full bg-white text-primary border border-blue-100 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-all">Update Profile</button>
                        </div>

                        {/* Level Card */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-[1.5rem] text-white shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider">Current Status</p>
                                    <h3 className="text-2xl font-bold">Impact Maker</h3>
                                </div>
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                </div>
                            </div>
                            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-2">
                                <div className="bg-white w-[75%] h-full"></div>
                            </div>
                            <p className="text-blue-100 text-xs font-medium">Level 4 • 1,250 Points</p>
                        </div>

                        {/* Impact Contribution */}
                        <div className="bg-surface-container-low p-6 rounded-[1.5rem]">
                            <h3 className="font-bold text-[18px] mb-4">Impact Points</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-emerald-600 bg-emerald-50 p-1.5 rounded-lg text-sm">auto_awesome</span>
                                        <span className="text-sm font-semibold text-on-surface">Talent</span>
                                    </div>
                                    <span className="font-bold text-on-surface">450</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-blue-600 bg-blue-50 p-1.5 rounded-lg text-sm">bolt</span>
                                        <span className="text-sm font-semibold text-on-surface">Skill</span>
                                    </div>
                                    <span className="font-bold text-on-surface">320</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-violet-600 bg-violet-50 p-1.5 rounded-lg text-sm">work_outline</span>
                                        <span className="text-sm font-semibold text-on-surface">Internship</span>
                                    </div>
                                    <span className="font-bold text-on-surface">280</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-orange-600 bg-orange-50 p-1.5 rounded-lg text-sm">groups</span>
                                        <span className="text-sm font-semibold text-on-surface">Community</span>
                                    </div>
                                    <span className="font-bold text-on-surface">200</span>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Internships */}
                        <div className="bg-surface-container-low p-6 rounded-[1.5rem]">
                            <h3 className="font-bold text-[18px] mb-4">Recommended for You</h3>
                            <div className="space-y-4">
                                <div className="p-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                                    <p className="font-bold text-sm text-on-surface">Machine Learning Engineer</p>
                                    <p className="text-xs text-gray-500">DeepMind • London</p>
                                    <button className="mt-2 text-primary text-xs font-bold flex items-center gap-1">Apply Now <span className="material-symbols-outlined text-xs">arrow_forward</span></button>
                                </div>
                                <div className="p-3 bg-white rounded-xl border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
                                    <p className="font-bold text-sm text-on-surface">Software Developer Intern</p>
                                    <p className="text-xs text-gray-500">Stripe • Dublin (Remote)</p>
                                    <button className="mt-2 text-primary text-xs font-bold flex items-center gap-1">Apply Now <span className="material-symbols-outlined text-xs">arrow_forward</span></button>
                                </div>
                            </div>
                        </div>

                        {/* Skill Gaps */}
                        <div className="bg-surface-container-low p-6 rounded-[1.5rem]">
                            <h3 className="font-bold text-[18px] mb-4">Skill Gap Recommendations</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-sm">school</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-on-surface">Kubernetes Fundamentals</p>
                                        <p className="text-xs text-gray-500">Required for Stripe Developer role</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-sm">school</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-on-surface">Advanced Graph Algorithms</p>
                                        <p className="text-xs text-gray-500">High demand in DeepMind roles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Additional Bottom Sections */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 space-y-6">
                        {/* Activity Feed */}
                        <section className="bg-surface-container-low p-8 rounded-[1.5rem]">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-headline-md text-2xl font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">rss_feed</span>
                                    Activity Feed
                                </h2>
                                <button className="text-primary text-sm font-semibold hover:underline">View All</button>
                            </div>
                            <div className="space-y-6">
                                <div className="border-l-2 border-blue-200 pl-6 relative">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Yesterday</p>
                                    <p className="text-on-surface text-sm font-semibold">Published a new research snippet: "Efficiency of Transformer Models in Edge Computing"</p>
                                    <div className="mt-2 flex gap-4 text-xs text-on-surface-variant font-semibold">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">thumb_up</span> 42</span>
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">chat_bubble</span> 12</span>
                                    </div>
                                </div>
                                <div className="border-l-2 border-gray-200 pl-6 relative">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-300 rounded-full"></div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">3 days ago</p>
                                    <p className="text-on-surface text-sm font-semibold">Joined the "Oxford AI Ethics Symposium" group</p>
                                </div>
                            </div>
                        </section>

                        {/* Achievements Section */}
                        <section className="bg-surface-container-low p-8 rounded-[1.5rem]">
                            <h2 className="font-headline-md text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">emoji_events</span>
                                Achievements
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                                    <span className="material-symbols-outlined text-orange-400 text-3xl">military_tech</span>
                                    <div>
                                        <h4 className="font-bold text-on-surface">Dean's List 2023</h4>
                                        <p className="text-xs text-gray-500">Top 1% of Computer Science Department</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
                                    <span className="material-symbols-outlined text-blue-400 text-3xl">code</span>
                                    <div>
                                        <h4 className="font-bold text-on-surface">HackOxford Winner</h4>
                                        <p className="text-xs text-gray-500">1st Place for 'Sustainability AI'</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4">
                        {/* Badges */}
                        <section className="bg-surface-container-low p-6 rounded-[1.5rem]">
                            <h3 className="font-bold text-[18px] mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                Earned Badges
                            </h3>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="group relative flex flex-col items-center">
                                    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-1 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">history_edu</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400 text-center">Researcher</span>
                                </div>
                                <div className="group relative flex flex-col items-center">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-1 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">terminal</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400 text-center">Dev Pro</span>
                                </div>
                                <div className="group relative flex flex-col items-center">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-1 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">volunteer_activism</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400 text-center">Mentor</span>
                                </div>
                                <div className="group relative flex flex-col items-center opacity-40">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-1">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400 text-center">Speaker</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
