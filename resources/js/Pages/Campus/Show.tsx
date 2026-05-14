import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function CampusShow() {
    return (
        <AuthenticatedLayout>
            <Head title="University of Oxford | Campus Network" />

            <main className="max-w-[1280px] mx-auto px-6 py-8 mt-16">
                {/* Hero Section */}
                <header className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-gray-100 mb-8">
                    <div className="h-64 md:h-80 w-full relative">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIvhaPh8m5WHxgbPqn9zd3x_Uepiuz4evTChr3VkjkkppQDfJNfq1hGl3UpPYWbC55IHfQ6EnIQ2BEADI_RscyCnTmDXyU94-5pAJwz6JXqel3Pai_hpTudVGysGEhW_xZ5jVeaojFdqocmeUKe2eAhG16CcAjJeZ4HTdRlA43NPk85k2AJQbCS1e3q1LHomeyvq1FxI-v7VCwRPvtLVV8-8Tshs42vDtYpfVN8NXDHfp00_I-4aSpDwME3QPuAYhugS5QuD1cL6w"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="px-8 pb-8 -mt-12 relative flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="flex flex-col md:flex-row items-end gap-6">
                            <div className="w-32 h-32 bg-white p-2 rounded-[1.5rem] shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                                <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMiJUUGMXxpo4UB4DKS9FwjRdzCBraBPJ-Lx5MrEmIcI4oTExkSlrOo8FD83wIXVSDT-ScWadI6xnpIFmG_X3lIhibEqKqpRSYVpocLL6keVWQsk8NSv98Xg4sKvtZvdA-wlE4WpygB5GLn3Ir6NN6eSP8pLU_rwMGNRIjISNQwUBwG1ma-fzpjz6sb8BPlEegKlhyxA9orNX5hnj3R2MnhR348EwVSdLYhXZS-1c-UDC53FJ0Mt6xWgh7Cgvzpj5CTWO2bPaB-WM"/>
                            </div>
                            <div className="pb-2">
                                <h1 className="font-display-lg text-3xl font-bold text-gray-900">University of Oxford <span className="text-gray-400 font-normal text-xl">/ Global Campus</span></h1>
                                <div className="flex items-center gap-2 text-on-surface-variant mt-1">
                                    <span className="material-symbols-outlined text-sm">location_on</span>
                                    <span className="font-body-md text-sm">Oxford, UK</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border border-blue-100">QS #1</span>
                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">AACSB Accredited</span>
                                    <span className="px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-xs font-bold border border-violet-100">Platinum Impact Rating</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 pb-2">
                            <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all active:scale-95">Follow</button>
                            <button className="px-6 py-2.5 bg-blue-50 text-blue-600 rounded-xl font-semibold hover:bg-blue-100 transition-all border border-blue-100">Visit Website</button>
                            <button className="px-4 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition-all flex items-center justify-center">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="px-8 border-t border-gray-100">
                        <nav className="flex gap-8 overflow-x-auto no-scrollbar">
                            <button className="py-4 border-b-2 border-blue-600 text-blue-600 font-bold text-sm whitespace-nowrap">Overview</button>
                            <button className="py-4 text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">People</button>
                            <button className="py-4 text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">Research</button>
                            <button className="py-4 text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">Internship & Career</button>
                            <button className="py-4 text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">Impact Stories</button>
                            <button className="py-4 text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">Partnerships</button>
                            <button className="py-4 text-gray-500 hover:text-blue-600 transition-colors font-medium text-sm whitespace-nowrap">Challenges</button>
                        </nav>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Campus Summary */}
                        <section className="bg-surface-container-low p-8 rounded-[1.5rem] border border-gray-100">
                            <h2 className="font-headline-md text-xl font-bold text-gray-900 mb-4">About the Global Campus</h2>
                            <p className="text-body-lg text-on-surface-variant leading-relaxed">
                                Forging the future of global education through radical collaboration and unyielding pursuit of truth. Our Oxford ecosystem bridges traditional scholarship with the dynamic needs of the 21st century, creating a sanctuary for researchers and a launchpad for the next generation of global leaders. We don't just study history; we invent what comes next.
                            </p>
                        </section>

                        {/* Featured Programs - Bento Style */}
                        <section>
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="font-headline-md text-xl font-bold text-gray-900">Featured Faculties</h2>
                                <button className="text-primary font-bold text-sm hover:underline">Explore all 48 departments</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 hover:translate-y-[-4px] transition-all">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined">science</span>
                                    </div>
                                    <h3 className="font-headline-md text-lg font-bold mb-2">Quantum Sciences</h3>
                                    <p className="text-sm text-on-surface-variant mb-4">Pioneering the next frontier of computation and information theory with over $120M in active research grants.</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-blue-600 px-2 py-1 bg-blue-50 rounded">840 Researchers</span>
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                    </div>
                                </div>
                                <div className="group bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 hover:translate-y-[-4px] transition-all">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined">medical_services</span>
                                    </div>
                                    <h3 className="font-headline-md text-lg font-bold mb-2">Global Health Institute</h3>
                                    <p className="text-sm text-on-surface-variant mb-4">Solving systemic health disparities through data-driven policy and innovative vaccine distribution models.</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-emerald-600 px-2 py-1 bg-emerald-50 rounded">1.2k Partners</span>
                                        <span className="material-symbols-outlined text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Research Focus Areas - Icon Grid */}
                        <section className="bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm">
                            <h2 className="font-headline-md text-xl font-bold text-gray-900 mb-8">Strategic Research Clusters</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                                <div className="flex flex-col items-center text-center gap-3 group">
                                    <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">psychology</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">AI Ethics</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-3 group">
                                    <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">eco</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">Sustainability</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-3 group">
                                    <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">currency_exchange</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">Digital Finance</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-3 group">
                                    <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">diversity_3</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700">Urban Sociology</span>
                                </div>
                            </div>
                        </section>

                        {/* Student Achievements */}
                        <section className="relative overflow-hidden rounded-[1.5rem] bg-gray-900 text-white p-8">
                            <div className="relative z-10">
                                <span className="bg-blue-600 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded mb-4 inline-block">Breaking News</span>
                                <h2 className="font-headline-lg text-2xl font-bold mb-4">Oxford Robotics Team wins 'Global Impact' prize in Singapore.</h2>
                                <p className="text-gray-300 mb-6 max-w-lg">A multidisciplinary team of undergrads successfully deployed an autonomous reforestation swarm in Borneo, planting 50,000 trees in 48 hours.</p>
                                <button className="flex items-center gap-2 font-bold text-sm text-white group">
                                    Read the Full Story
                                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
                                </button>
                            </div>
                            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
                                <svg className="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.7,-64.1C55.4,-57.4,65.8,-46.1,72.6,-33.1C79.4,-20.1,82.5,-5.5,79.5,8.1C76.5,21.7,67.4,34.3,56.6,44.7C45.9,55.1,33.5,63.2,19.9,67.4C6.3,71.6,-8.6,71.8,-23.4,68.2C-38.3,64.7,-53.1,57.3,-63.9,46.1C-74.6,34.8,-81.4,19.7,-81.4,4.4C-81.5,-10.8,-74.8,-26.3,-65.1,-39.1C-55.5,-51.9,-42.8,-62,-29.7,-68.5C-16.7,-74.9,-3.3,-77.7,10,-75.4C23.3,-73,30,-65.4,42.7,-64.1Z" fill="#2563EB" transform="translate(200 200)"></path>
                                </svg>
                            </div>
                        </section>

                        {/* Highlighted Lecturers */}
                        <section>
                            <h2 className="font-headline-md text-xl font-bold text-gray-900 mb-6">Leading Minds</h2>
                            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                                <div className="min-w-[240px] bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <img className="w-20 h-20 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiCtlx4rhEnFDsR6kdq35QR81nhuoC6bADxaxYzQhL4s8hL1er85gveXfACcB8Q7JoiVPGgTTEbZ3SZBzVw6pxycwqeW12F_jS8KsLJabGpTMIg_0Kbk3Zv629qFZPZ77xry_Kczi5aBQU4-wRb-ORxb65Xj9eaMbjDnsxkVZyjoA6Ty200JxI6JaFP4ZX-eHybO_s5FZIeTaLiBE_9Ati-r3H6Wa3kS9xpU6wsPpC5DSml5AqP2XzZM-hMsuzzbFxzkHzi9u0uks"/>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                                            <span className="material-symbols-outlined text-emerald-500 text-xs" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900">Prof. Elena Vance</h4>
                                    <p className="text-xs text-on-surface-variant mb-4">Chair of Neural Ethics</p>
                                    <button className="w-full py-2 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-50">View Profile</button>
                                </div>
                                <div className="min-w-[240px] bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <img className="w-20 h-20 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK_-UjESMS-Lp6TAabH7iuTzi24-Hu5VmXSoOBXcA2TM8MPuvv30iJ7L6hTJ9Zh0Wr5rk7S1rHq2NTyRUCXoMmp-QqDMYK9KgmUJmLN1F5pBhJj412T7RNNux9Vhm5L7YZUr2LyvKCgsLmR6ArI5MKQpwrr1qFK_2Xa9XVkAe-tPNHwZDtC7gIuUgHphmqaXKXOEfqStOuW9ZLh8JzIyWmuP2X7wVHgwWD_03ROBnu8BCfLatLWdYXm-EPuBcZk1f9WY8cLiuYuG8"/>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                                            <span className="material-symbols-outlined text-emerald-500 text-xs" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900">Dr. Julian Thorne</h4>
                                    <p className="text-xs text-on-surface-variant mb-4">Quantum Lead</p>
                                    <button className="w-full py-2 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-50">View Profile</button>
                                </div>
                                <div className="min-w-[240px] bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                                    <div className="relative mb-4">
                                        <img className="w-20 h-20 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-KAJZhl0AcVQOtbqlbo7m_0KCGF8y277coDimL3WhjYRDPz-D4yWn3rAVJea13Tj4TA0sfVAhSl1xL-o2yaAFgOBThXSXO7Qj-mCre0X-_T9GaIExbI9gLS0n475aO-wobSrOVLuVd_wIh2woRy9RTMpmAUY-cCAfkyQsNh1oFqpzVULQpQIhrE_ouvhF-up3vqsfmSTajhla2oMBq13-DRGqoLZ6HS6gEz8aXQ6DTCpM4ZTpk7U3HxqbA4kZoFwSA_7KrQ8wjKI"/>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow">
                                            <span className="material-symbols-outlined text-emerald-500 text-xs" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900">Prof. Sarah Chen</h4>
                                    <p className="text-xs text-on-surface-variant mb-4">Global Health Director</p>
                                    <button className="w-full py-2 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-50">View Profile</button>
                                </div>
                            </div>
                        </section>

                        {/* Industry Partners */}
                        <section>
                            <h2 className="font-label-md text-gray-400 font-bold uppercase tracking-widest mb-6">Strategic Industry Partners</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                <div className="h-12 flex items-center justify-center font-bold text-xl text-gray-600">DEEP MIND</div>
                                <div className="h-12 flex items-center justify-center font-bold text-xl text-gray-600">ASTRA ZENECA</div>
                                <div className="h-12 flex items-center justify-center font-bold text-xl text-gray-600">WORLD BANK</div>
                                <div className="h-12 flex items-center justify-center font-bold text-xl text-gray-600">MICROSOFT</div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Campus Impact Snapshot */}
                        <section className="bg-white p-8 rounded-[1.5rem] border border-gray-100 shadow-sm">
                            <h3 className="font-headline-md text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">analytics</span>
                                Campus Impact
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between group">
                                    <div>
                                        <p className="text-2xl font-extrabold text-gray-900">25k+</p>
                                        <p className="text-xs text-on-surface-variant">Active Students</p>
                                    </div>
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-sm">groups</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div>
                                        <p className="text-2xl font-extrabold text-gray-900">3.5k</p>
                                        <p className="text-xs text-on-surface-variant">Internships This Year</p>
                                    </div>
                                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-sm">work</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div>
                                        <p className="text-2xl font-extrabold text-gray-900">450+</p>
                                        <p className="text-xs text-on-surface-variant">Active Collaborations</p>
                                    </div>
                                    <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-sm">handshake</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div>
                                        <p className="text-2xl font-extrabold text-gray-900">12k+</p>
                                        <p className="text-xs text-on-surface-variant">Total Publications</p>
                                    </div>
                                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-sm">menu_book</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between group">
                                    <div>
                                        <p className="text-2xl font-extrabold text-gray-900">120+</p>
                                        <p className="text-xs text-on-surface-variant">Impact Stories</p>
                                    </div>
                                    <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-sm">auto_stories</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Collaboration Badge Ad */}
                        <section className="bg-gradient-to-br from-primary-container to-blue-700 p-6 rounded-[1.5rem] text-white shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="font-bold text-lg mb-2">Open to Peer Review</h4>
                                <p className="text-sm text-blue-100 mb-4">Our faculty is currently open for collaborative research and industry review sessions.</p>
                                <button className="w-full py-2 bg-white text-primary rounded-xl font-bold text-xs hover:bg-blue-50 transition-colors">Request Partnership</button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        </section>

                        {/* Recent Activities */}
                        <section className="space-y-4">
                            <h3 className="font-label-md text-sm font-bold text-gray-900">Recent Updates</h3>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-sm text-gray-600">event</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900">Global Ethics Forum 2024</p>
                                    <p className="text-[10px] text-gray-500">Applications for attendance close in 2 days.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-lg bg-surface-container flex-shrink-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-sm text-gray-600">article</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-900">New Publication: Hydrogen Storage</p>
                                    <p className="text-[10px] text-gray-500">Co-authored with Stanford University Researchers.</p>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
