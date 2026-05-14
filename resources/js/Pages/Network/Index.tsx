import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage, Link } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

dayjs.extend(relativeTime);

export default function NetworkIndex({ posts }: any) {
    const { auth, appName } = usePage().props as any;
    const { data, setData, post, processing, reset, errors } = useForm({
        content: '',
    });

    const [commentData, setCommentData] = useState<{ [key: number]: string }>({});

    const submitPost: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('network.store'), {
            onSuccess: () => reset('content'),
        });
    };

    const submitComment = (e: React.FormEvent, postId: number) => {
        e.preventDefault();
        // Since we can't use useForm hook dynamically in a loop easily without a sub-component, 
        // we'll use Inertia's manual post for comments.
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
                            <a className="text-gray-600 hover:bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-3 font-manrope text-sm font-medium hover:translate-x-1 transition-transform duration-200 cursor-pointer">
                                <span className="material-symbols-outlined">bookmarks</span>
                                Saved Posts
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
                                <textarea
                                    className="flex-1 bg-surface-container-low border-none rounded-xl resize-none text-sm p-3 focus:ring-2 focus:ring-primary min-h-[80px]"
                                    placeholder="Write your thoughts, share research, or ask a question..."
                                    value={data.content}
                                    onChange={e => setData('content', e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            {errors.content && <p className="text-red-500 text-xs mt-2 ml-14">{errors.content}</p>}
                            <div className="mt-3 ml-14 flex justify-between items-center">
                                <div className="flex gap-2 text-gray-500">
                                    <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors tooltip flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">image</span>
                                    </button>
                                    <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center">
                                        <span className="material-symbols-outlined text-lg">description</span>
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing || !data.content.trim()}
                                    className="px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all disabled:opacity-50"
                                >
                                    Post
                                </button>
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
                        <div key={post.id} className="bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 space-y-4">
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
                    
                    {/* Pagination or Load More could go here */}
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
