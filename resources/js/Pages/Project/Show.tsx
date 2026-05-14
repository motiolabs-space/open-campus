import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function ProjectShow() {
    return (
        <AuthenticatedLayout>
            <Head title="ResearchHub | AI-Driven Urban Resilience" />

            <main className="pt-8 pb-20 px-4 md:px-8 max-w-[1280px] mx-auto">
                {/* Header Section */}
                <section className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                    Open for collaboration
                                </span>
                                <div className="flex gap-2">
                                    <span className="text-xs font-medium text-slate-400 uppercase tracking-widest px-2 py-1 border border-slate-200 rounded">Research Quality</span>
                                    <span className="text-xs font-medium text-slate-400 uppercase tracking-widest px-2 py-1 border border-slate-200 rounded">International Collaboration</span>
                                </div>
                            </div>
                            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">AI-Driven Urban Resilience in Southeast Asia</h1>
                            <div className="flex items-center gap-4">
                                <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnijhp1zNtzd7GDNnxxu5ldLpLZWpAQLVOo__aEsET7-N9E-GwEQ6m_mCuv79RLVS-vxME1Ahw-BgFVbyXfCj3qn9qEqWBLavn192E1IhRyBE1_YCQL_9PT4dG_wbzrBwmKLGk-pX_BpcAnSDicu3AWy1zA923jPuteFUEAMvzlq0-_e6iLicL1q4P-o_wozOcR5YE5aAx1AG2EFqAKa9bnrh30tFQf8yJXjrpYoOQvEZ7AyNncctPzPDB_VTFCN7pEdrJ9vVxxTU"/>
                                <div>
                                    <p className="font-bold text-gray-900 text-lg">Dr. Elena Rossi</p>
                                    <p className="text-sm font-medium text-gray-500">University of Oxford • Senior Researcher</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <button className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
                                Apply to Collaborate <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                            <button className="p-3 text-primary border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined">bookmark</span>
                            </button>
                            <button className="p-3 text-primary border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                <span className="material-symbols-outlined">share</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Bento Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Primary Content (8 Cols) */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Problem & Objective Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-surface-container-low p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary bg-white p-2 rounded-lg shadow-sm">crisis_alert</span>
                                    <h2 className="text-xl font-bold text-gray-900">Problem Background</h2>
                                </div>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    Southeast Asia's dense urban centers are increasingly vulnerable to catastrophic climate events. Rapid urbanization has outpaced infrastructure development, leaving millions at risk of monsoon flooding and heat stress. Current resilience models often fail to account for the complex interplay between informal settlements and formal municipal planning in high-density environments.
                                </p>
                            </div>
                            <div className="bg-surface-container-low p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary bg-white p-2 rounded-lg shadow-sm">track_changes</span>
                                    <h2 className="text-xl font-bold text-gray-900">Research Objective</h2>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <p className="text-base text-gray-700">Develop a real-time predictive model for flood propagation in informal settlement networks using multi-spectral satellite imagery.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <p className="text-base text-gray-700">Quantify the socio-economic impact of infrastructure failure on marginalized urban populations in Jakarta and Bangkok.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <p className="text-base text-gray-700">Draft evidence-based policy frameworks for adaptive urban renewal that integrates nature-based solutions with hard infrastructure.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-8">Project Timeline</h2>
                            <div className="relative">
                                <div className="absolute top-4 left-0 w-full h-1 bg-slate-100 hidden md:block"></div>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                                    <div className="space-y-2">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 relative mx-auto md:mx-0">1</div>
                                        <h4 className="font-bold text-sm text-gray-900">Phase 1: Data Collection</h4>
                                        <p className="text-xs text-gray-500">Satellite data acquisition and ground truth validation.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 relative mx-auto md:mx-0">2</div>
                                        <h4 className="font-bold text-sm text-gray-900">Phase 2: Model Training</h4>
                                        <p className="text-xs text-gray-500">ML development and vulnerability indexing.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold z-10 relative mx-auto md:mx-0">3</div>
                                        <h4 className="font-bold text-sm text-gray-900">Phase 3: Field Testing</h4>
                                        <p className="text-xs text-gray-500">Stakeholder interviews and prototype simulation.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold z-10 relative mx-auto md:mx-0">4</div>
                                        <h4 className="font-bold text-sm text-gray-900">Phase 4: Synthesis</h4>
                                        <p className="text-xs text-gray-500">Journal publication and policy brief finalization.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Attached Documents */}
                        <div className="bg-surface-container-low p-8 rounded-2xl">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Attached Documents</h2>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 w-full sm:w-auto shadow-sm">
                                    <span className="material-symbols-outlined text-red-500">description</span>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Initial Proposal.pdf</p>
                                        <p className="text-xs text-slate-400">2.4 MB • Oct 12, 2023</p>
                                    </div>
                                    <button className="ml-auto p-2 hover:bg-slate-50 rounded-lg"><span className="material-symbols-outlined text-slate-400">download</span></button>
                                </div>
                                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 w-full sm:w-auto shadow-sm">
                                    <span className="material-symbols-outlined text-emerald-500">table_chart</span>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Dataset_V1.csv</p>
                                        <p className="text-xs text-slate-400">18.1 MB • Oct 15, 2023</p>
                                    </div>
                                    <button className="ml-auto p-2 hover:bg-slate-50 rounded-lg"><span className="material-symbols-outlined text-slate-400">download</span></button>
                                </div>
                            </div>
                        </div>

                        {/* Discussion Thread */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold text-gray-900">Discussion</h2>
                                <span className="text-xs font-bold text-primary">12 Comments</span>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjIgYJshm7ujYblEJiYrF8kA9pdndLkIqTnAOScfuYIBfvjCL7CEDii8ivi6mgxkFsVBmqBd2PlI5iNtxXGm4hz65Ro08f51Pj8NxI8tluVuQF-meo1Xq852tzNV-TMR2nlBgABClpzYwBlWZkZcNunZVeLrNUUUmHEIYfT0M9u-sHD_AF7NPkhtbnJzOO_Nowe9lvaksenHQmIMYCj9Q_mCbsU9cbJlVrTqw4Y15gBhwZTm4i_s8zSSp1zRvjXzRW1SzQKkSDhtk"/>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm text-gray-900">Dr. Marcus Thorne</span>
                                            <span className="text-xs text-slate-400">2 hours ago</span>
                                        </div>
                                        <p className="text-sm text-gray-600">This methodology is quite robust. Have you considered integrating LiDAR data for the informal settlement mapping phase? It might provide the elevation precision needed for the micro-flooding simulations.</p>
                                        <div className="mt-4 flex items-center gap-4 text-xs font-bold text-slate-400">
                                            <button className="flex items-center gap-1 hover:text-primary"><span className="material-symbols-outlined text-sm">thumb_up</span> 4</button>
                                            <button className="hover:text-primary">Reply</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 ml-12">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApFyfYNfVYhlOiB3kxozb-2jHog8hG1ZK9zaZj-zMAjfq647QcRPyN8NbHTPWjjbd63tyMw2AZ-JD9vJXfut6atzNFUzDwq7otmFKIYc-PpewLERM6pP1fW5JZM7sJc-pDTu2YFaiZG0CoONyu2Khm1WUxg6Ei3PlVmSFlnPjPlW5lRq_lMDnLpalaebazXPrRsrv2RmtC8DsUBptbR4iCvblEoDVUoq7aoFj3rzQoe8fs2xIfG4x7pBuPXSOPqneQUIi-hT-hrBY"/>
                                    <div className="bg-blue-50 p-6 rounded-2xl flex-1 border border-blue-100">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-sm text-primary">Dr. Elena Rossi (Author)</span>
                                            <span className="text-xs text-slate-400">45 mins ago</span>
                                        </div>
                                        <p className="text-sm text-gray-700">Excellent point, Marcus. We are currently negotiating access to high-res LiDAR through a partner in Singapore. It would certainly reduce our margin of error in Z-axis modeling.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center">
                                <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClFxSUyVynsPDtCSYrSkhJtiUmdB0UaIfldi9wZfLygVAIpy2_VapCGXPAHOSf8RG_d0y7Ic2VIMBbyrA8fMv-yoEBI0ljMjTv6dWZQTVPewR_XxnhHxDrREj_4QHnb-yhPFaHNAO1FljJoYW8CG9uQM66M6AQn1FOT12wa-0bozhu32R3NaCjVeB5nYT4NztshC49bTZ_Kx6yDbrhcwP8dQfNGRu0Ql2BZUKaEskKAm0CuFbM6ZiD603-bX8k9TWciJ41jnZpoXY"/>
                                <input className="flex-1 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary px-4 py-2" placeholder="Add a scholarly insight..." type="text"/>
                                <button className="bg-primary text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"><span className="material-symbols-outlined">send</span></button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar (4 Cols) */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Required Collaborators */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg text-gray-900 mb-6">Required Collaborators</h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-sm text-gray-900">Co-author</span>
                                        <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded">High Priority</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-3">Focus on socio-economic impact modeling and policy synthesis.</p>
                                    <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">View Details <span className="material-symbols-outlined text-[14px]">open_in_new</span></button>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-sm text-gray-900">Industry Partner</span>
                                        <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded">Urban Tech</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-3">Provision of satellite API access and infrastructure datasets.</p>
                                    <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">View Details <span className="material-symbols-outlined text-[14px]">open_in_new</span></button>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="font-bold text-sm text-gray-900">Student Assistant</span>
                                        <span className="text-[10px] bg-violet-100 text-violet-700 font-bold px-2 py-0.5 rounded">PhD/MSc</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-3">GIS mapping and literature review coordination.</p>
                                    <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">View Details <span className="material-symbols-outlined text-[14px]">open_in_new</span></button>
                                </div>
                            </div>
                        </div>

                        {/* Expected Output */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg text-gray-900 mb-6">Expected Output</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">article</span>
                                    <span className="text-sm font-medium text-gray-700">Q1 Journal Publication</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">policy</span>
                                    <span className="text-sm font-medium text-gray-700">Policy Brief for ASEAN Cities</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary">terminal</span>
                                    <span className="text-sm font-medium text-gray-700">Interactive Risk Prototype</span>
                                </div>
                            </div>
                        </div>

                        {/* Required Skills */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg text-gray-900 mb-4">Required Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-violet-50 text-violet-700 text-[11px] font-bold px-3 py-1.5 rounded-full">Machine Learning</span>
                                <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-3 py-1.5 rounded-full">Urban Planning</span>
                                <span className="bg-blue-50 text-blue-700 text-[11px] font-bold px-3 py-1.5 rounded-full">Data Visualization</span>
                                <span className="bg-amber-50 text-amber-700 text-[11px] font-bold px-3 py-1.5 rounded-full">GIS</span>
                            </div>
                        </div>

                        {/* Current Applicants */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg text-gray-900">Applicants</h3>
                                <span className="text-xs font-bold text-primary hover:underline cursor-pointer">View All</span>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmjtFVGvkDKo5zRx_ZxWj3Q-Ld8opKPBK5omdukzMIlKo_ZYzQeog8ZCvWdiL7xuaU4VEyIJKuNYIQLj11hWGxpTlLpQqJGC6GemlGr2tlHCre8Hd1-X48O_k2cChjSek2Ei9d9USO25FJr6C3cQL3GQBYpZmGiPdXnU7ACwW6Vhnk6wcKjcnPmLLmmPRk26kwaFQE3oDr6koAomptqNCmYn7eJXbBhQ-3U6GmYx57jJVd6iA7lZxiFHTjY6g9KITKSel9Cjnw24Q"/>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Liam Nguyen</p>
                                        <p className="text-[11px] text-slate-400">PhD Candidate, NUS</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-m62G0mCgaYo85GSp9sJc-i62xrcY_CQrqdfdzQWp0xujnKTqmCxLDBb43MNXvX0Qt0NcVWPKT0O5IA6ijt8FZepYoucIY3agGc980QdGRLHMjZnU3qFS1w4EfEFI2OMC0MT3EzaMsZGgDKllmW_cUdx_W2UwcD-WCDC43FCnsnHiDRBNBQJOVWixEaWL95TEIecguxpVrGAg8sljyZ7GANNiTaFXoqFTxcR9tgQU5cC1hMKZZ-ZXjsXlHJONF4YrXtIuQ-6f0fE"/>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Sarah Chen</p>
                                        <p className="text-[11px] text-slate-400">Postdoc, MIT</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNbhVIN_WOVIsCe0JsUBavRV-GgYvtWnmxRlwIWjKPHEws3gtBZj5Qh35NZkFb1q8qWgibbui4fGw7UbTUGFTEN31od2TSPFF3M5qkYkSI0FhYN4Y8IIzOnnSiKOyFn7pKUfDVZGjV76nC0QZ7yLuYBqt2rSQ1YT5mSh8J5rn1ZEKXPThq7s8DB5RL0mm9gtL3bkdTXct-E_N_PhhK27p44kWErfJKeoAfA1eV2QXcJ04FmBTelK1ioYU5n_DFwsDbixTnHR-sv-w"/>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">David Miller</p>
                                        <p className="text-[11px] text-slate-400">GIS Specialist</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Impact Badges */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-surface-container-low border border-gray-100 p-4 rounded-xl text-center">
                                <span className="material-symbols-outlined text-primary mb-1">rocket_launch</span>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Innovation</p>
                            </div>
                            <div className="bg-surface-container-low border border-gray-100 p-4 rounded-xl text-center">
                                <span className="material-symbols-outlined text-primary mb-1">groups</span>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Community</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
