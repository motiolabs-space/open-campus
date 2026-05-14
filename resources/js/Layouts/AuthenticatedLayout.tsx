import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

export default function AuthenticatedLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const { auth, appName, campusMode } = usePage().props as any;
    const user = auth.user;

    return (
        <div className="bg-surface font-body-md text-on-background antialiased min-h-screen flex flex-col">
            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
                <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 h-20">
                    <div className="flex items-center gap-8">
                        <Link href={route('welcome')} className="text-2xl font-extrabold tracking-tight text-primary font-display-lg">{appName}</Link>
                        <div className="relative hidden lg:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                            <input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 w-64 focus:ring-2 focus:ring-primary text-sm" placeholder="Search research, students, or jobs" type="text"/>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden xl:flex items-center gap-6 h-20">
                            <Link href={route('network.index')} className="flex flex-col items-center justify-center text-primary font-bold border-b-2 border-primary h-full px-2">
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
                                <span className="text-[10px] font-label-md">Home</span>
                            </Link>
                            <Link href={route('network.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">group</span>
                                <span className="text-[10px] font-label-md">Network</span>
                            </Link>
                            <Link href={route('marketplace.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">work</span>
                                <span className="text-[10px] font-label-md">Jobs</span>
                            </Link>
                            <Link href={route('research-hub.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">science</span>
                                <span className="text-[10px] font-label-md">Research Hub</span>
                            </Link>
                            <Link href={route('learning.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">school</span>
                                <span className="text-[10px] font-label-md">Learning</span>
                            </Link>
                            <Link href={route('mbkm.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">edit_calendar</span>
                                <span className="text-[10px] font-label-md">MBKM Center</span>
                            </Link>
                            <Link href={route('messages.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2 relative">
                                <span className="material-symbols-outlined">chat_bubble</span>
                                <span className="text-[10px] font-label-md">Messages</span>
                                <span className="absolute top-2 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
                            </Link>
                            <Link href={route('notifications.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2 relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="text-[10px] font-label-md">Notifications</span>
                                <span className="absolute top-2 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
                            </Link>
                            <Link href={route('iku.analytics')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">analytics</span>
                                <span className="text-[10px] font-label-md">IKU Report</span>
                            </Link>
                            <Link href={route('partnerships.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">handshake</span>
                                <span className="text-[10px] font-label-md">Partnerships</span>
                            </Link>
                            <Link href={route('tracer.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">history_edu</span>
                                <span className="text-[10px] font-label-md">Tracer Study</span>
                            </Link>
                            <Link href={route('marketplace.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">shopping_cart</span>
                                <span className="text-[10px] font-label-md">Marketplace</span>
                            </Link>
                            <Link href={route('talents.index')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                <span className="material-symbols-outlined">groups</span>
                                <span className="text-[10px] font-label-md">Talents</span>
                            </Link>
                            {auth.user.roles?.some((r: any) => r.name === 'superadmin' || r.name === 'admin_kampus' || r.name === 'dosen') && (
                                <div className="flex gap-4 items-center">
                                    <Link href={route('admin.dashboard')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                        <span className="material-symbols-outlined text-primary">dashboard_customize</span>
                                        <span className="text-[10px] font-label-md">Analytics</span>
                                    </Link>
                                    <Link href={route('admin.evidence')} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary transition-all px-2">
                                        <span className="material-symbols-outlined">admin_panel_settings</span>
                                        <span className="text-[10px] font-label-md">Admin IKU</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-3 border-l pl-6 border-gray-100 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="flex items-center gap-3 focus:outline-none transition hover:opacity-80">
                                        <div className="text-right hidden sm:block">
                                            <p className="text-sm font-bold text-on-surface leading-tight">{user.name}</p>
                                            <p className="text-[11px] text-outline font-label-sm">View Profile</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm border border-primary/20">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.show')}>My Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('profile.edit')}>Settings</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-1 mt-20 mb-20 md:mb-0">
                {children}
            </main>

            {/* Global Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto hidden md:block">
                <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-extrabold tracking-tight text-primary font-display-lg">{appName}</span>
                        <span className="text-sm text-gray-500 font-medium">© {new Date().getFullYear()} Open Source Campus Network.</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
                        <a href="#" className="hover:text-primary transition-colors">About</a>
                        <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
                        <a href="#" className="hover:text-primary transition-colors">Help Center</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy & Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Ad Choices</a>
                    </div>
                </div>
            </footer>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 flex justify-around py-3 z-50">
                <Link href={route('network.index')} className="text-primary flex flex-col items-center">
                    <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
                    <span className="text-[10px] font-label-md">Home</span>
                </Link>
                <Link href={route('network.index')} className="text-outline flex flex-col items-center">
                    <span className="material-symbols-outlined">group</span>
                    <span className="text-[10px] font-label-md">Network</span>
                </Link>
                <button className="text-outline flex flex-col items-center">
                    <span className="material-symbols-outlined text-primary-container p-1 rounded-full border-2 border-primary-container">add</span>
                    <span className="text-[10px] font-label-md">Post</span>
                </button>
                <Link href={route('notifications.index')} className="text-outline flex flex-col items-center">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="text-[10px] font-label-md">Alerts</span>
                </Link>
                <Link href={route('marketplace.index')} className="text-outline flex flex-col items-center">
                    <span className="material-symbols-outlined">work</span>
                    <span className="text-[10px] font-label-md">Jobs</span>
                </Link>
            </nav>
        </div>
    );
}
