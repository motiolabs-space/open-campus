import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function LecturerProfile() {
    return (
        <AuthenticatedLayout>
            <Head title="Dr. Sarah Jenkins | Campus Network" />

            <main className="max-w-[1280px] mx-auto pb-24 lg:pb-12">
                {/* Hero Section */}
                <div className="relative w-full h-64 md:h-80 overflow-hidden lg:rounded-b-3xl">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4xu5R8y1gWH9LZG12sN67xNhXFdIr_LgT2QEsElRbwCH202LomLG3MMT9KLT3-hEi6G1v5ZUu8lWkBsEzhDhInTxi08NvH4_8p0QFUSjFkP4ODmW5J2HURNpu0dJl5A4wa_ewBM5yL1H3A8gcmb4XLQ1pYcpOAuDiiMIMPCz6EdQ01Dx9V8O1OuHn646BaMnDHu9KICLzyuyCFqAg13-EisEzYUtewt1FI36C0FZ5SbqLniXfDMaquEumcDaMgMyupDl6dGbyYvI"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="px-6 -mt-24 relative z-10 flex flex-col lg:flex-row gap-8">
                    {/* Profile Left Info */}
                    <div className="lg:w-1/4">
                        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="relative">
                                <img className="w-40 h-40 rounded-[1.5rem] object-cover mb-4 border-4 border-white shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUUk9sYHGDq2qPd6clzod6lZVApTeUe1RUn4oCrY7b5rAiIZ6XmPl9WHIBNiKSQz5X9J4vi0hFVEwIL-7MVcUCZgWpOfdrGuCxRxgDbrukgnHkbzgz3LKSKpa1m9Gp7Fr6HvOhW_JRChcHH9CkFldOff108yVSrmJG5hcw_YmmhD3jbESxk4voj--8EcZmVTmhI9vdtHmiwnFJ9qoHnu-FSRWRPG_jxFgMyuWxCYVnC7XKtLfISPZURcOwGkFuzRKSIq9vSUQVPqE"/>
                                <div className="absolute bottom-6 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse"></div>
                            </div>
                            <h1 className="font-headline-lg text-on-surface">Dr. Sarah Jenkins</h1>
                            <p className="text-primary font-semibold mt-1">Senior Researcher & Associate Professor</p>
                            <p className="text-gray-500 text-sm mt-2">University of Oxford, Faculty of Engineering Science</p>
                            
                            <div className="flex flex-col w-full gap-3 mt-6">
                                <button className="bg-primary text-white font-label-md py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2 active:scale-95">
                                    <span className="material-symbols-outlined text-sm">handshake</span> Invite Collaboration
                                </button>
                                <div className="flex gap-2">
                                    <button className="flex-1 border border-primary text-primary font-label-md py-2.5 rounded-xl hover:bg-primary-fixed transition-all active:scale-95">Follow</button>
                                    <button className="flex-1 bg-surface-container-low text-primary font-label-md py-2.5 rounded-xl hover:bg-blue-50 transition-all active:scale-95">Message</button>
                                </div>
                            </div>

                            <hr className="w-full my-6 border-gray-100"/>
                            
                            <div className="w-full text-left space-y-4">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <span className="material-symbols-outlined text-primary">pin_drop</span>
                                    <span className="text-sm">Oxford, United Kingdom</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <span className="material-symbols-outlined text-primary">link</span>
                                    <a className="text-sm hover:underline text-primary" href="#">jenkins-lab.ox.ac.uk</a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                    <span className="text-sm">s.jenkins@ox.ac.uk</span>
                                </div>
                            </div>
                        </div>

                        {/* Research Impact (Sidebar) */}
                        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 mt-6">
                            <h3 className="font-headline-md text-sm mb-4">Research Impact</h3>
                            <div className="flex items-center justify-center py-4">
                                <div className="relative flex items-center justify-center">
                                    <svg className="w-32 h-32 transform -rotate-90">
                                        <circle className="text-gray-100" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="8"></circle>
                                        <circle className="text-primary" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeDasharray="351.85" strokeDashoffset="52.7" strokeWidth="8"></circle>
                                    </svg>
                                    <div className="absolute flex flex-col items-center">
                                        <span className="text-2xl font-bold">85</span>
                                        <span className="text-[10px] uppercase font-bold text-gray-400">Score</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="bg-surface-container-low p-3 rounded-xl text-center">
                                    <p className="text-xs text-gray-500 font-medium">Citations</p>
                                    <p className="text-lg font-bold text-on-surface">4,281</p>
                                </div>
                                <div className="bg-surface-container-low p-3 rounded-xl text-center">
                                    <p className="text-xs text-gray-500 font-medium">H-Index</p>
                                    <p className="text-lg font-bold text-on-surface">32</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:w-1/2 space-y-6">
                        {/* About */}
                        <section className="bg-surface-container-low p-8 rounded-[1.5rem]">
                            <h2 className="font-headline-md text-on-surface mb-4">About</h2>
                            <p className="text-body-lg text-on-surface-variant leading-relaxed">
                                I am a Senior Researcher at the University of Oxford specializing in the intersection of Quantum Computing and Urban Infrastructure. My current work focuses on developing ethical AI frameworks for future smart cities. With over 15 years of academic and industry experience, I aim to bridge the gap between theoretical physics and practical urban policy.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold">Quantum Computing</span>
                                <span className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">Urban Planning</span>
                                <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">AI Ethics</span>
                                <span className="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">Sustainabilty</span>
                            </div>
                        </section>

                        {/* Activity Feed (Latest Post) */}
                        <section className="bg-white p-6 rounded-[1.5rem] border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-primary">rss_feed</span>
                                <h2 className="font-headline-md text-base">Recent Activity</h2>
                            </div>
                            <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-primary">
                                <p className="text-sm font-semibold text-primary mb-2">Announcement</p>
                                <p className="text-on-surface-variant">Thrilled to announce our latest grant approval from the European Research Council for the 'Quantum-City' project. We are now recruiting PhD candidates!</p>
                                <div className="mt-4 flex gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider">
                                    <span>2 days ago</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">favorite</span> 124</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">chat_bubble</span> 18</span>
                                </div>
                            </div>
                        </section>

                        {/* Research Projects */}
                        <section>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-headline-md text-on-surface">Research Projects</h2>
                                <button className="text-primary text-sm font-bold">View All</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">biotech</span>
                                        </div>
                                        <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded uppercase">Active</span>
                                    </div>
                                    <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors">QuantumGrid 2030</h3>
                                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">Optimizing urban power distribution using quantum-inspired annealing algorithms.</p>
                                    <div className="mt-4">
                                        <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase mb-1">
                                            <span>Progress</span>
                                            <span>75%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[75%] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                            <span className="material-symbols-outlined">psychology</span>
                                        </div>
                                        <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded uppercase">Planning</span>
                                    </div>
                                    <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors">AI Ethics Sandbox</h3>
                                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">Developing a virtual environment for testing policy impact of autonomous systems.</p>
                                    <div className="mt-4">
                                        <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase mb-1">
                                            <span>Setup</span>
                                            <span>20%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500 w-[20%] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Publications */}
                        <section className="bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm mt-6">
                            <h2 className="font-headline-md text-on-surface mb-6">Recent Publications</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-gray-400">
                                        <span className="material-symbols-outlined">description</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-on-surface leading-tight hover:text-primary cursor-pointer">Quantum Resilience in Modern Power Grids: A Stochastic Approach</h3>
                                        <p className="text-sm text-gray-500 mt-1">Nature Communications, 2023 • Cited by 142</p>
                                        <div className="mt-2 flex gap-3">
                                            <a className="text-xs font-bold text-primary flex items-center gap-1" href="#"><span className="material-symbols-outlined text-sm">link</span> DOI: 10.1038/s41467</a>
                                            <button className="text-xs font-bold text-gray-400 flex items-center gap-1 hover:text-primary"><span className="material-symbols-outlined text-sm">bookmark</span> Save</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-gray-400">
                                        <span className="material-symbols-outlined">description</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-on-surface leading-tight hover:text-primary cursor-pointer">AI Accountability Frameworks for Municipal Governance</h3>
                                        <p className="text-sm text-gray-500 mt-1">Journal of Urban Technology, 2022 • Cited by 89</p>
                                        <div className="mt-2 flex gap-3">
                                            <a className="text-xs font-bold text-primary flex items-center gap-1" href="#"><span className="material-symbols-outlined text-sm">link</span> DOI: 10.1080/1063</a>
                                            <button className="text-xs font-bold text-gray-400 flex items-center gap-1 hover:text-primary"><span className="material-symbols-outlined text-sm">bookmark</span> Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-8 py-3 border border-gray-100 rounded-xl font-label-md text-primary hover:bg-gray-50 transition-all">Explore All 42 Publications</button>
                        </section>

                        {/* Patents */}
                        <section className="bg-surface-container-low p-6 rounded-[1.5rem] mt-6">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <h2 className="font-headline-md text-base">Patents & HKI</h2>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <p className="text-sm font-bold text-on-surface">US 11,432,091 B2</p>
                                <p className="text-xs text-gray-500 mt-1">Dynamic Quantum-Safe Encryption for Smart Metering Networks</p>
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-1/4 space-y-6">
                        {/* Badges */}
                        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100">
                            <h3 className="font-headline-md text-sm mb-4">Collaboration Badges</h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <div className="flex flex-col items-center group cursor-help">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                                    </div>
                                    <span className="text-[10px] font-bold mt-2 text-center uppercase text-gray-400">Top Peer Reviewer</span>
                                </div>
                                <div className="flex flex-col items-center group cursor-help">
                                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                    </div>
                                    <span className="text-[10px] font-bold mt-2 text-center uppercase text-gray-400">Open Collaborator</span>
                                </div>
                                <div className="flex flex-col items-center group cursor-help">
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>science</span>
                                    </div>
                                    <span className="text-[10px] font-bold mt-2 text-center uppercase text-gray-400">Lab Founder</span>
                                </div>
                            </div>
                        </div>

                        {/* Industry Partners */}
                        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100">
                            <h3 className="font-headline-md text-sm mb-4">Industry Partners</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                                    <img alt="IBM" className="max-h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsgRL9u4DYizFTxeSkB5Sq48qtuSmoqCVn6lp6uK1uKF3oz3VJyIMWaPV3-p8fjAE9KVarVq6YMhZgunvsQ4HsJldfy9ShpKkN6vD7O2OCGZPjgruoK7F7QBcdFA6NOdVLMYNeRwJKvve2Pbqh6VHkp0NJKMlml4A3ZGNWuLl4TSKgr-LIojAAiEO0Vq5OuTd2pk0nZfPJJc_uPUaj9pChyqZ8kaMd3S3VM16BeETWNr_QIMq9sby3x7BKERN8ixDx3RKBqWTybHU"/>
                                </div>
                                <div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-center h-16 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                                    <img alt="Google" className="max-h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg7jRL2VPCmsns4G3bGc4H0wxvElz75kLUrPZYlxPwFTfecG6ot5tJeJ1C8D1Gft_mka2BecamHHowkiVi5TpVgk8PE9VbPuKBnUrjV-fV0_iQWnFx1l7oKoIyd5BOeaubAaLuCS3P8QofFpyM6uUVdqk55I6mDx64wHaDq3gwPPwCmoTdEEofvQXwkQ0PJMuAe33NstBFL2JVkobiwCbvK-EFCyGE64unloiEbwJ-vCg7_bn2I0dEI3d63JmuUlKRBpKR21VwP-U"/>
                                </div>
                            </div>
                        </div>

                        {/* Suggested Collaborators */}
                        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100">
                            <h3 className="font-headline-md text-sm mb-4">Suggested Collaborators</h3>
                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMdTvgqd0vtef3aGV9_oKi4Na2KdG10gBL-8betB5GSQEh6rTb_YOHBKWztRQZ8ytMvq5kXJ4Zsc9xNRjPNwDs8op0A7-yBTFjwSuREsuog887euVD5Mq_8g2qMsd7XsHm-QEPSISKfcZMb-wRS_BU_r2CAeabtEeRqNB522edKwb9RCeeaIi0Tjaa9kPpy8wNJb23ZGPvm6BB_fpobL7JPuxhCskLse4jAa5yM5_1iQtigKl6UEXuhe1nP7GL8R4Nv1T2YWvL-JU"/>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold">Dr. Marcus Thorne</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Quantum Crypto</p>
                                    </div>
                                    <button className="p-1.5 text-primary hover:bg-blue-50 rounded-lg transition-all"><span className="material-symbols-outlined">person_add</span></button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ID2s086ZkxRmCeyjfWuSxUCRENURVz_qdtw5A6av0Nl3u3uQpb50k9gVvJm3RoxzmW2nEf2_6aJrQD80_c8gJwNOs4d1Z585vywFMJFJH_v3FxRyFNK74hYsuzUGmbvIIfIit7hu7KCEKXxDz7RwPGNLsTMC6dLBRoLHy7ZVugEuhkWhiFl4D-KS-lZE0N19vCfb9Sl_CT8XY5II1dtW_cw8oSEKHMLl2sDIbkbesx_s9BUO_On8iqmjLZhoWrZcEwYnmHISlhM"/>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold">Prof. Wei Zhang</p>
                                        <p className="text-[10px] text-gray-500 uppercase font-bold">Smart Systems</p>
                                    </div>
                                    <button className="p-1.5 text-primary hover:bg-blue-50 rounded-lg transition-all"><span className="material-symbols-outlined">person_add</span></button>
                                </div>
                            </div>
                        </div>

                        {/* Open Research Calls */}
                        <div className="bg-primary p-6 rounded-[1.5rem] text-white">
                            <h3 className="font-headline-md text-sm mb-4">Open Research Calls</h3>
                            <div className="space-y-4">
                                <div className="p-3 bg-white/10 rounded-xl border border-white/20">
                                    <p className="text-xs font-bold uppercase opacity-80 mb-1">Grant Opportunity</p>
                                    <p className="text-sm font-semibold">Post-Doc: Urban Heat Island Mitigation</p>
                                    <button className="mt-3 text-[10px] font-bold py-1.5 px-3 bg-white text-primary rounded-lg uppercase tracking-wider">Apply Now</button>
                                </div>
                            </div>
                        </div>

                        {/* Courses */}
                        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100">
                            <h3 className="font-headline-md text-sm mb-4">Current Courses</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    ENG 402: Quantum Algorithms
                                </li>
                                <li className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    URB 101: Future City Foundations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
