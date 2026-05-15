import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

export default function NetworkIndex({ posts }: any) {
    const { auth, appName, flash } = usePage().props as any;
    const sdgs = [
        { id: 1, name: 'No Poverty', color: '#E5243B' },
        { id: 2, name: 'Zero Hunger', color: '#DDA63A' },
        { id: 3, name: 'Good Health', color: '#4C9F38' },
        { id: 4, name: 'Quality Education', color: '#C5192D' },
        { id: 5, name: 'Gender Equality', color: '#FF3A21' },
        { id: 6, name: 'Clean Water', color: '#26BDE2' },
        { id: 7, name: 'Clean Energy', color: '#FCC30B' },
        { id: 8, name: 'Decent Work', color: '#A21942' },
        { id: 9, name: 'Industry & Innovation', color: '#FD6925' },
        { id: 10, name: 'Reduced Inequality', color: '#DD1367' },
        { id: 11, name: 'Sustainable Cities', color: '#FD9D24' },
        { id: 12, name: 'Responsible Consumption', color: '#BF8B2E' },
        { id: 13, name: 'Climate Action', color: '#3F7E44' },
        { id: 14, name: 'Life Below Water', color: '#0A97D9' },
        { id: 15, name: 'Life on Land', color: '#56C02B' },
        { id: 16, name: 'Peace & Justice', color: '#00689D' },
        { id: 17, name: 'Partnerships', color: '#19486A' },
    ];

    const { data, setData, post, processing, reset, errors } = useForm({
        content: '',
        sdg_tag: null as number | null,
    });

    const [commentData, setCommentData] = useState<{ [key: number]: string }>({});
    const [showSdgPicker, setShowSdgPicker] = useState(false);

    const submitPost: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('network.store'), {
            onSuccess: () => {
                reset('content', 'sdg_tag');
                setShowSdgPicker(false);
            },
        });
    };

    const submitComment = (e: React.FormEvent, postId: number) => {
        e.preventDefault();
        import('@inertiajs/react').then(({ router }) => {
            router.post(route('network.comment', postId), {
                content: commentData[postId] || '',
            }, {
                preserveScroll: true,
                onSuccess: () => {
                    setCommentData(prev => ({ ...prev, [postId]: '' }));
                }
            });
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title={`My Network | ${appName}`} />

            {/* Flash Messages / Harvesting Notification */}
            {flash?.harvested && flash.harvested.length > 0 && (
                <div className="fixed bottom-10 right-10 z-50 animate-in slide-in-from-right-10 fade-in duration-500">
                    <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-emerald-400/30">
                        <div className="bg-white/20 p-2 rounded-full">
                            <span className="material-symbols-outlined text-white">auto_awesome</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">OSCN Intelligence</h4>
                            {flash.harvested.map((msg: string, i: number) => (
                                <p key={i} className="text-[11px] text-emerald-100">{msg}</p>
                            ))}
                        </div>
                        <button className="ml-4 text-white/50 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>
                </div>
            )}

            <main className="max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Sidebar */}
                <aside className="md:col-span-3 space-y-6 hidden md:block">
                    <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 overflow-hidden">
                        <div className="h-16 bg-primary/10"></div>
                        <div className="px-6 pb-6 relative">
                            <div className="h-16 w-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl absolute -top-8 border-4 border-white">
                                {auth.user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="mt-10">
                                <h2 className="font-headline-md font-bold text-gray-900">{auth.user.name}</h2>
                                <p className="text-sm text-gray-500">{auth.user.email}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Connections</span>
                                    <span className="font-bold text-primary">1,204</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Profile Views</span>
                                    <span className="font-bold text-primary">84</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-[1.5rem] shadow-lg text-white">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-white/80">auto_awesome</span>
                            <h3 className="font-bold text-sm">Compliance Assistant</h3>
                        </div>
                        <p className="text-xs text-white/80 leading-relaxed mb-4">
                            Sistem kami mendeteksi postingan Anda untuk membantu pelaporan IKU kampus secara otomatis.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-[10px] font-medium bg-white/10 p-2 rounded-lg border border-white/10">
                                <span className="font-bold text-blue-200">#prestasi</span>
                                <span>Input SIMBELMAWA</span>
                            </li>
                            <li className="flex items-center gap-2 text-[10px] font-medium bg-white/10 p-2 rounded-lg border border-white/10">
                                <span className="font-bold text-blue-200">#riset</span>
                                <span>Input BIMA / SISTER</span>
                            </li>
                            <li className="flex items-center gap-2 text-[10px] font-medium bg-white/10 p-2 rounded-lg border border-white/10">
                                <span className="font-bold text-blue-200">#magang</span>
                                <span>Input PDDIKTI</span>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col h-fit space-y-1">
                        <nav className="space-y-1">
                            <a className="bg-blue-50 text-blue-700 rounded-lg px-4 py-3 flex items-center gap-3 font-manrope text-sm font-medium hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                                <span className="material-symbols-outlined">dynamic_feed</span>
                                My Feed
                            </a>
                            <a className="text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-3 font-manrope text-sm font-medium hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                                <span className="material-symbols-outlined">group</span>
                                My Network
                            </a>
                            <Link href={route('evidence.index')} className="text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-3 font-manrope text-sm font-medium hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                                <span className="material-symbols-outlined">analytics</span>
                                My IKU Report
                            </Link>
                        </nav>
                    </div>
                </aside>

                {/* Main Content (Feed) */}
                <section className="md:col-span-6 space-y-6">
                    {/* Create Post Card */}
                    <div className="bg-white p-4 rounded-[1.5rem] shadow-sm border border-gray-100">
                        <form onSubmit={submitPost}>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 flex-shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                                    {auth.user.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1 space-y-3">
                                    <textarea
                                        className="w-full bg-surface-container-low border-none rounded-xl resize-none text-sm p-3 focus:ring-2 focus:ring-primary min-h-[80px]"
                                        placeholder="Share impact, research, or campus updates... (use #prestasi, #riset, or #magang)"
                                        value={data.content}
                                        onChange={e => setData('content', e.target.value)}
                                        required
                                    ></textarea>
                                    
                                    {data.sdg_tag && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tagged SDG:</span>
                                            <div 
                                                className="px-3 py-1 rounded-full text-white text-[10px] font-bold flex items-center gap-1.5 animate-in zoom-in-90"
                                                style={{ backgroundColor: sdgs.find(s => s.id === data.sdg_tag)?.color }}
                                            >
                                                <span>SDG {data.sdg_tag}: {sdgs.find(s => s.id === data.sdg_tag)?.name}</span>
                                                <button type="button" onClick={() => setData('sdg_tag', null)} className="hover:scale-110">
                                                    <span className="material-symbols-outlined text-[14px]">close</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {errors.content && <p className="text-red-500 text-xs mt-2 ml-14">{errors.content}</p>}
                            <div className="mt-3 ml-14 flex justify-between items-center relative">
                                <div className="flex gap-2 text-gray-500">
                                    <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center" title="Upload Image">
                                        <span className="material-symbols-outlined text-lg">image</span>
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setShowSdgPicker(!showSdgPicker)}
                                        className={`p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center ${showSdgPicker ? 'text-primary bg-primary/10' : ''}`}
                                        title="Tag SDGs (IKU 7)"
                                    >
                                        <span className="material-symbols-outlined text-lg">public</span>
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing || !data.content.trim()}
                                    className="px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all disabled:opacity-50"
                                >
                                    Post
                                </button>

                                {showSdgPicker && (
                                    <div className="absolute top-12 left-0 z-20 bg-white shadow-2xl rounded-2xl border border-gray-100 p-4 w-72 animate-in fade-in slide-in-from-top-4">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Select SDG (IKU 7)</h4>
                                        <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                                            {sdgs.map((sdg) => (
                                                <button
                                                    key={sdg.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setData('sdg_tag', sdg.id);
                                                        setShowSdgPicker(false);
                                                    }}
                                                    className="text-[10px] font-bold text-white p-2 rounded-lg hover:opacity-80 transition-opacity text-left leading-tight"
                                                    style={{ backgroundColor: sdg.color }}
                                                >
                                                    {sdg.id}. {sdg.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center gap-4 my-2">
                        <hr className="flex-1 border-gray-200" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sort by: Recent</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    {/* Feed Posts */}
                    {posts.data.map((post: any) => (
                        <div key={post.id} className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 space-y-4 relative overflow-hidden group">
                            {post.sdg_tag && (
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-0.5 bg-emerald-600 text-white text-[9px] font-bold rounded-md animate-pulse">BERDAMPAK</span>
                                    <div 
                                        className="px-3 py-0.5 rounded-full text-[9px] font-bold text-white uppercase tracking-widest shadow-sm"
                                        style={{ backgroundColor: sdgs.find(s => s.id === post.sdg_tag)?.color }}
                                    >
                                        SDG {post.sdg_tag}: {sdgs.find(s => s.id === post.sdg_tag)?.name}
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {post.user.avatar ? (
                                        <img src={post.user.avatar} alt="Avatar" className="w-12 h-12 rounded-full object-cover" />
                                    ) : (
                                        <div className="h-12 w-12 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold">
                                            {post.user.name.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-headline-md text-base font-bold text-gray-900">{post.user.name}</h4>
                                        <p className="text-xs text-gray-500">{post.user.headline || 'Campus Member'}</p>
                                        <p className="text-[11px] text-gray-400 mt-0.5">{dayjs(post.created_at).fromNow()}</p>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>

                            <p className="text-gray-800 text-sm whitespace-pre-line">{post.content}</p>

                            {post.metadata?.impact && (
                                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 rounded-r-xl my-2 animate-in slide-in-from-left-2">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
                                        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Capaian Dampak</span>
                                    </div>
                                    <p className="text-xs italic text-emerald-800 leading-relaxed">
                                        "{post.metadata.impact}"
                                    </p>
                                </div>
                            )}

                            <div className="flex items-center gap-6 border-t border-b border-gray-50 py-2">
                                <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">thumb_up</span>
                                    <span className="text-xs font-bold">{post.likes?.length || 0} Likes</span>
                                </button>
                                <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                                    <span className="text-xs font-bold">{post.comments?.length || 0} Comments</span>
                                </button>
                                <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors ml-auto">
                                    <span className="material-symbols-outlined text-[20px]">share</span>
                                    <span className="text-xs font-bold">Share</span>
                                </button>
                            </div>

                            {/* Comments Section */}
                            <div className="space-y-4">
                                {post.comments?.map((comment: any) => (
                                    <div key={comment.id} className="flex gap-3">
                                        {comment.user.avatar ? (
                                            <img src={comment.user.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                                        ) : (
                                            <div className="h-8 w-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold text-xs">
                                                {comment.user.name.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                        <div className="flex-1 bg-surface-container-low p-3 rounded-xl rounded-tl-none">
                                            <h5 className="font-bold text-xs text-gray-900">{comment.user.name}</h5>
                                            <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* Add Comment */}
                                <div className="flex gap-3 mt-4">
                                    <div className="h-8 w-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                                        {auth.user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <form onSubmit={(e) => submitComment(e, post.id)} className="flex-1 relative">
                                        <input
                                            type="text"
                                            value={commentData[post.id] || ''}
                                            onChange={(e) => setCommentData(prev => ({ ...prev, [post.id]: e.target.value }))}
                                            placeholder="Write a comment..."
                                            className="w-full bg-surface-container-low border-none rounded-full text-sm pl-4 pr-10 py-1.5 focus:ring-2 focus:ring-primary"
                                        />
                                        <button 
                                            type="submit" 
                                            disabled={!commentData[post.id]?.trim()}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-primary disabled:opacity-50 flex items-center justify-center"
                                        >
                                            <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>send</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Right Sidebar */}
                <aside className="md:col-span-3 space-y-6 hidden lg:block">
                    {/* IKU Progress Card */}
                    <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 bg-gradient-to-br from-white to-blue-50/30">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-headline-md text-base font-bold text-gray-900">IKU Progress</h3>
                            <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">3/12 Verified</span>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-500 font-medium">IKU 3: MBKM</span>
                                    <span className="font-bold text-primary">80%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[80%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-gray-500 font-medium">IKU 6: Riset</span>
                                    <span className="font-bold text-emerald-500">45%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full w-[45%]"></div>
                                </div>
                            </div>
                        </div>
                        <Link href={route('evidence.index')} className="mt-6 w-full py-2.5 bg-surface-container-high text-gray-700 text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                            Manage Evidence
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100">
                        <h3 className="font-headline-md text-base font-bold text-gray-900 mb-4">Trending on Campus</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="group">
                                    <p className="text-xs text-gray-500 mb-1">Hackathon 2026</p>
                                    <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">Registration for AI Challenge is now open!</p>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="group">
                                    <p className="text-xs text-gray-500 mb-1">Computer Science</p>
                                    <p className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">New paper on Quantum Computing published.</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </main>
        </AuthenticatedLayout>
    );
}
