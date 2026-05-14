import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';

export default function CreatePostModal({
    show = false,
    onClose = () => {},
}: {
    show: boolean;
    onClose: () => void;
}) {
    return (
        <Transition show={show} leave="duration-200">
            <Dialog
                as="div"
                id="create-post-modal"
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
                onClose={onClose}
            >
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-[#191c1e]/40 backdrop-blur-sm" />
                </TransitionChild>

                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <DialogPanel className="relative bg-white w-full max-w-[720px] max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col z-10">
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                            <h2 className="font-headline-md text-primary font-bold text-xl">Create a Post</h2>
                            <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined text-outline">close</span>
                            </button>
                        </div>

                        {/* Modal Content (Scrollable) */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 no-scrollbar">
                            {/* Post Type Selector */}
                            <section>
                                <label className="block font-label-md text-on-surface-variant mb-3 font-semibold text-sm">Post Type</label>
                                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                                    <button className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all font-label-md border border-transparent">
                                        <span className="material-symbols-outlined text-sm">campaign</span>
                                        General Update
                                    </button>
                                    <button className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all font-label-md border border-transparent">
                                        <span className="material-symbols-outlined text-sm">work</span>
                                        Internship Experience
                                    </button>
                                    <button className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl bg-primary-container text-white shadow-md font-label-md border border-primary">
                                        <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>science</span>
                                        Research Idea
                                    </button>
                                    <button className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all font-label-md border border-transparent">
                                        <span className="material-symbols-outlined text-sm">group_add</span>
                                        Collaboration Request
                                    </button>
                                    <button className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all font-label-md border border-transparent">
                                        <span className="material-symbols-outlined text-sm">art_track</span>
                                        Portfolio Showcase
                                    </button>
                                </div>
                            </section>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block font-label-md text-on-surface-variant font-semibold text-sm">Title</label>
                                    <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container rounded-lg p-3 font-body-md text-sm" placeholder="E.g. Quantum Computing in Urban Planning" type="text"/>
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-label-md text-on-surface-variant font-semibold text-sm">Research Field</label>
                                    <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container rounded-lg p-3 font-body-md text-sm" placeholder="Select your domain" type="text"/>
                                </div>
                            </div>

                            {/* Chips Selection: Looking for */}
                            <section className="space-y-3">
                                <label className="block font-label-md text-on-surface-variant font-semibold text-sm">Looking for</label>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-4 py-2 rounded-full border-2 border-primary-container bg-blue-50 text-primary font-label-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-xs">person</span>
                                        co-author
                                    </button>
                                    <button className="px-4 py-2 rounded-full border border-outline-variant text-outline hover:border-primary-container transition-colors font-label-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-xs">business_center</span>
                                        industry partner
                                    </button>
                                    <button className="px-4 py-2 rounded-full border border-outline-variant text-outline hover:border-primary-container transition-colors font-label-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-xs">school</span>
                                        student assistant
                                    </button>
                                    <button className="px-4 py-2 rounded-full border border-outline-variant text-outline hover:border-primary-container transition-colors font-label-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-xs">payments</span>
                                        funding
                                    </button>
                                </div>
                            </section>

                            {/* Chips Selection: Expected output */}
                            <section className="space-y-3">
                                <label className="block font-label-md text-on-surface-variant font-semibold text-sm">Expected output</label>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-4 py-2 rounded-full border border-outline-variant text-outline hover:border-primary-container transition-colors font-label-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-xs">menu_book</span>
                                        publication
                                    </button>
                                    <button className="px-4 py-2 rounded-full border-2 border-primary-container bg-blue-50 text-primary font-label-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-xs">biotech</span>
                                        prototype
                                    </button>
                                    <button className="px-4 py-2 rounded-full border border-outline-variant text-outline hover:border-primary-container transition-colors font-label-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-xs">verified</span>
                                        patent
                                    </button>
                                    <button className="px-4 py-2 rounded-full border border-outline-variant text-outline hover:border-primary-container transition-colors font-label-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-xs">public</span>
                                        community impact
                                    </button>
                                </div>
                            </section>

                            {/* Post Description */}
                            <section className="space-y-2">
                                <label className="block font-label-md text-on-surface-variant font-semibold text-sm">Description</label>
                                <textarea className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container rounded-xl p-4 font-body-md text-sm resize-none" placeholder="Describe your research idea, methodology, and why it matters..." rows={4}></textarea>
                            </section>

                            {/* Attachments & Tags */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                <section className="space-y-3">
                                    <label className="block font-label-md text-on-surface-variant font-semibold text-sm">Attachments</label>
                                    <div className="flex gap-2">
                                        <button className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-outline hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">image</span>
                                        </button>
                                        <button className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-outline hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">videocam</span>
                                        </button>
                                        <button className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-outline hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">description</span>
                                        </button>
                                    </div>
                                </section>
                                <section className="space-y-2">
                                    <label className="block font-label-md text-on-surface-variant font-semibold text-sm">Tags</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">#</span>
                                        <input className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary-container rounded-lg pl-8 pr-3 py-3 font-body-md text-sm" placeholder="add tags..." type="text"/>
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-outline">
                                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                <p className="text-xs font-label-sm italic">This activity may contribute to your academic impact profile.</p>
                            </div>
                            <div className="flex gap-3 w-full md:w-auto">
                                <button onClick={onClose} className="flex-1 md:flex-none px-6 py-3 rounded-lg text-outline font-bold text-sm hover:bg-gray-100 transition-colors">Save Draft</button>
                                <button className="flex-1 md:flex-none px-8 py-3 rounded-lg bg-primary text-white font-bold text-sm shadow-lg hover:shadow-primary/20 transition-all active:scale-95">Post to Network</button>
                            </div>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}
