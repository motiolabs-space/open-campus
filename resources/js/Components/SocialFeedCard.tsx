import React from 'react';

export default function SocialFeedCard({ user, time, content, likes, comments }: any) {
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg mb-4 border border-gray-100 dark:border-gray-700">
            <div className="p-6 text-gray-900 dark:text-gray-100">
                <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mr-3">
                        {user.charAt(0)}
                    </div>
                    <div>
                        <div className="font-semibold text-sm">{user}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{time}</div>
                    </div>
                </div>
                <div className="mb-4 text-sm leading-relaxed">
                    {content}
                </div>
                <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                    <button className="flex items-center mr-6 hover:text-indigo-500 transition">
                        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path></svg>
                        {likes} Likes
                    </button>
                    <button className="flex items-center hover:text-indigo-500 transition">
                        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        {comments} Comments
                    </button>
                </div>
            </div>
        </div>
    );
}
