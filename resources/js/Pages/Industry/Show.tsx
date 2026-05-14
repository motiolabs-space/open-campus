import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function IndustryShow() {
    return (
        <AuthenticatedLayout>
            <Head title="Global Tech Foundation | Campus Network Industry Partner" />

            <main className="pb-12">
                {/* Hero Section */}
                <div className="w-full h-80 relative overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp3CLgNySqCzIImxiHn3iqN4ZQLlrfWnMLR06XHIlKSBVT7GoTUUn3kdlC71po0HQlZ4AlP70WhJQdyIG0uWYoss9xHVEVxBd8AlIBla-VWpLxNv8WmNxQa4r8SjOKZtmbxGrhfVV_0cl8tNnpiJjTeA_DYkjUWhYOgBh7xPZzLSrOF1G1Z9I68yMWrr6ITeelJy5plY9yw-dU5XKnMQ7O0MjqIYsWlFJRsbTyhQ3BsfXlpu2TTc0FIkNRqYShIVB9rz67SACUEQU" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Profile Header Area */}
                <div className="max-w-[1280px] mx-auto px-6 -mt-16 relative z-10">
                    <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-end justify-between gap-6">
                        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 w-full">
                            <div className="w-32 h-32 bg-white rounded-2xl shadow-md border-4 border-white flex items-center justify-center p-4 overflow-hidden shrink-0">
                                <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3jKaGQrzNU40sgnSFEPrSqqZttsIiAyzwY1rB_ffSTf8sZt8uryGpywtHWWVo9eMPzuXrEpWkJUUeqlvwtWIcAIa2DpcFsXqD1g1Qvvbco6sRSlZhh-b26LAMV3j2Lqm8S1WaxiIbnAhk2U-n7xBxtlx6yZmKhPneT1aIoUEB8wW09RDyckcJF70xmuhVb7-ztmXPcwSjDC-XeWSVV1ObWq8BXT8w2399NeCGbmvSUEgaEeL1OG5NHtPcsRPvBVemaoseMZ_62Qc" />
                            </div>
                            <div className="flex-1 pb-2">
                                <h1 className="text-3xl font-extrabold text-gray-900">Global Tech Foundation</h1>
                                <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600 font-bold text-sm">
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">domain</span>
                                        Technology & AI
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                                        San Francisco, CA
                                    </span>
                                    <span className="flex items-center gap-1 text-primary">
                                        <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                                        Verified Industry Partner
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 w-full md:w-auto shrink-0">
                            <button className="flex-1 md:flex-none px-6 py-2.5 bg-primary text-white font-bold rounded-xl shadow-sm hover:bg-blue-700 transition-all">
                                Post Internship
                            </button>
                            <button className="flex-1 md:flex-none px-6 py-2.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-blue-50 transition-all">
                                Contact Campus
                            </button>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex items-center gap-8 mt-8 border-b border-gray-200 overflow-x-auto pb-0">
                        <a className="pb-4 px-1 font-bold text-sm text-primary border-b-2 border-primary whitespace-nowrap" href="#">Overview</a>
                        <a className="pb-4 px-1 font-bold text-sm text-gray-500 hover:text-primary transition-colors whitespace-nowrap" href="#">Internship</a>
                        <a className="pb-4 px-1 font-bold text-sm text-gray-500 hover:text-primary transition-colors whitespace-nowrap" href="#">Project Challenge</a>
                        <a className="pb-4 px-1 font-bold text-sm text-gray-500 hover:text-primary transition-colors whitespace-nowrap" href="#">Research Problems</a>
                        <a className="pb-4 px-1 font-bold text-sm text-gray-500 hover:text-primary transition-colors whitespace-nowrap" href="#">Practitioner Teaching</a>
                        <a className="pb-4 px-1 font-bold text-sm text-gray-500 hover:text-primary transition-colors whitespace-nowrap" href="#">Campus Partners</a>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
                        {/* Main Content (Left) */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* About Section */}
                            <section className="bg-surface-container-low rounded-3xl p-8">
                                <h2 className="text-xl font-bold mb-4 text-gray-900">About Global Tech Foundation</h2>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Global Tech Foundation is a premier research and development organization dedicated to fostering the next generation of technological innovation through rigorous academic collaboration. Our mission is to bridge the gap between theoretical computer science and practical industry application. We believe that by providing students and faculty with access to real-world datasets and complex computational problems, we can accelerate the pace of ethical AI development and sustainable technology solutions.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <button className="flex items-center gap-2 text-primary font-bold text-sm bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-all">
                                        <span className="material-symbols-outlined text-[18px]">add_circle</span> Post Research Problem
                                    </button>
                                    <button className="flex items-center gap-2 text-primary font-bold text-sm bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-all">
                                        <span className="material-symbols-outlined text-[18px]">school</span> Offer Guest Lecture
                                    </button>
                                </div>
                            </section>

                            {/* Collaboration Interests (Bento-style Grid) */}
                            <section>
                                <h2 className="text-xl font-bold mb-6 px-2 text-gray-900">Collaboration Interests</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group border border-gray-100">
                                        <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined">security</span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-gray-900">AI Ethics</h3>
                                        <p className="text-sm text-gray-500">Developing frameworks for responsible and transparent algorithmic decision making.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group border border-gray-100">
                                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined">eco</span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-gray-900">Sustainable Tech</h3>
                                        <p className="text-sm text-gray-500">Reducing the carbon footprint of large-scale data center operations globally.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all group border border-gray-100">
                                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined">commute</span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-gray-900">Urban Mobility</h3>
                                        <p className="text-sm text-gray-500">Using machine learning to optimize traffic flow and public transit in dense cities.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Open Opportunities */}
                            <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">Latest Opportunities</h2>
                                    <a className="text-primary font-bold text-sm hover:underline" href="#">View All</a>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-pointer">
                                        <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center font-bold text-primary shrink-0">IA</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900">Interdisciplinary AI Research Intern</h4>
                                            <p className="text-sm text-gray-500">Summer 2024 • San Francisco or Remote</p>
                                        </div>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-full tracking-wider shrink-0">Open</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-pointer">
                                        <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center font-bold text-primary shrink-0">RP</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900">Large Language Model Hallucination Challenge</h4>
                                            <p className="text-sm text-gray-500">Research Problem • $5,000 Grant Award</p>
                                        </div>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-full tracking-wider shrink-0">Open</span>
                                    </div>
                                </div>
                            </section>

                            {/* Past Campus Collaborations */}
                            <section>
                                <h2 className="text-xl font-bold mb-6 px-2 text-gray-900">Global Partnerships</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-surface-container-low p-4 rounded-xl flex flex-col items-center justify-center text-center">
                                        <img className="w-12 h-12 rounded-full mb-3 grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCInVKSoqqHDt1RjLi_bqHDX9AYh48PqvEgFgb8_-lhwH31fX6k_q2HE8japJhnV6AZlbJhXTYFSBAvTGyXcNB3Ugo-gUkwp_KaKmj125_gyPGxBd5hvzfQ6CjFPArDqNAMTtJM4J9khL6-pd_H7wTuzH9yMQ1n_4I4FRAu4FDWHkwZomPPuGGziPw0fNEwBvR3-OZoKNyO4dyvQsb-_mou182ipagglKVeDdYak3Jt8O-DYWrCQrWSmj_5NjDNvRfn0xcvB4ymn7k" />
                                        <span className="font-bold text-xs text-gray-900">Stanford University</span>
                                    </div>
                                    <div className="bg-surface-container-low p-4 rounded-xl flex flex-col items-center justify-center text-center">
                                        <img className="w-12 h-12 rounded-full mb-3 grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD144WpqPHrlxX-x1FSzCEB9ofCqsw2f_Cz3BaUworMnQHCmOQgovmcJ38Ja7m2KCcxY19YVMGM4aMYvINO1WI7BujFQ4k_QcFw_MXVUkWa-f-tk3iv3aojfyHx6tN3-ZXS8eY2FUL6dnnByrxpdZCgLFzy8tAKP4N0RUcRvol73Wj-GCCbUNCFVrkOmIqN_-mZM439cTpwBo0ZALidQWynSHFQg0f8AY8F1jIXSE_JyGwS8h-ybUhnN1Lw6Lk6xXawAOgnZfR-vbM" />
                                        <span className="font-bold text-xs text-gray-900">MIT</span>
                                    </div>
                                    <div className="bg-surface-container-low p-4 rounded-xl flex flex-col items-center justify-center text-center">
                                        <img className="w-12 h-12 rounded-full mb-3 grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA_NZj5ff9WO1XJNqjyLDhQtv6VBLEa3UuOrjI4dv03uhnFow-K1jCbMYEMRgPL4vIhyyF3DX-i29B643gd7gYA7IHuhM-jcPrdENJNriR238AUvhHL4oLULWdLCqwWXp-G-mtg-Dp-zJQem1MIlPwWNtIz01SDV04vfVpHWcHoNQzviTvtzVg0LZA8qSeOT9Kv6QR-g0meOZhXGYpVfH77oSmc58zEEvBOYh8E4xp82ynpzXZX36s_H-NZ1-fQ5B8SWaFv1lIo38" />
                                        <span className="font-bold text-xs text-gray-900">Oxford University</span>
                                    </div>
                                    <div className="bg-surface-container-low p-4 rounded-xl flex flex-col items-center justify-center text-center">
                                        <img className="w-12 h-12 rounded-full mb-3 grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1SS66auy8xWUivCZ7VdUndnP99jo8_OaZF2MO08mbM5fWheIP9ftSP3kx1LsXEFZ9PcYaTxtmbiCAeoMh44f4PJUXiTSLbto-688bUFqq8Ro63P1BSRhSbsIySFGLFMlfVyyxekton73i7zKk_0EBlgc7VDjNGSu7sey0KTSPf5chOE24v_ST-hBUjT5iaMWETDLFbNOiN0uaagnrSic6b2pcD5GlWevCMhQyFEdsScb8orcalrgufv1vl98WIvaktNYOqDg4vno" />
                                        <span className="font-bold text-xs text-gray-900">Harvard University</span>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Impact Stats */}
                            <div className="bg-primary text-white rounded-3xl p-8 shadow-lg">
                                <h3 className="font-bold text-lg mb-6 opacity-90 uppercase tracking-widest text-xs">Engagement Impact</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-3xl font-extrabold">240+</div>
                                        <div className="text-sm opacity-80 font-medium">Students Placed</div>
                                    </div>
                                    <div className="h-[1px] bg-white/20"></div>
                                    <div>
                                        <div className="text-3xl font-extrabold">12</div>
                                        <div className="text-sm opacity-80 font-medium">Active Research Grants</div>
                                    </div>
                                    <div className="h-[1px] bg-white/20"></div>
                                    <div>
                                        <div className="text-3xl font-extrabold">45</div>
                                        <div className="text-sm opacity-80 font-medium">Published Peer Reviews</div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links & Actions */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-900 mb-4 text-lg">Partner Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <a className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-bold text-sm group" href="#">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">description</span>
                                            Collaboration Guidelines
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-bold text-sm group" href="#">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">verified_user</span>
                                            IP & Licensing Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-bold text-sm group" href="#">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">event</span>
                                            Industry Day 2024 Schedule
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-bold text-sm group" href="#">
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">mail</span>
                                            Engagement Coordinator
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Campus Map Snippet */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 overflow-hidden">
                                <h3 className="font-bold text-gray-900 mb-4 text-lg">HQ Location</h3>
                                <div className="w-full h-40 bg-surface-container rounded-xl overflow-hidden relative">
                                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMWQYkxGQnpsuXyKHVlbzEytsxkHsmsutUkZEmLraAbkkqLfTW_R2ME6b5Q8vtekeyIabxLv8XLxfSPXOdiF8dEVT0LGAoNdUwAJR2wjEbo5bVoIiwgK8kZibLbFf3ZbkGpNcSwQjRsfXyzCiz1bLICSV58iAWcGekeDw6k2EGd-XAQbejtGzJxk0mUzYXOxwJ9SxpHUjDGXGRVTloWzkFZqhLiLLuieNha_22BH1kmfoCqr7e26RPZhiABQsrHurBYEIOrXK1xHg" />
                                </div>
                                <p className="mt-3 text-xs text-gray-600 font-medium">101 Innovation Way, San Francisco, CA 94103</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
