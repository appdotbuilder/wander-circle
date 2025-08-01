import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const [activeSection, setActiveSection] = useState('overview');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Travel Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Welcome Header */}
                <div className="rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 text-white">
                    <h1 className="mb-2 text-3xl font-bold">🌍 Welcome to Your Travel Dashboard</h1>
                    <p className="text-lg opacity-90">Plan, book, and track your adventures all in one place</p>
                </div>

                {/* Quick Stats */}
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">12</p>
                                <p className="opacity-90">Countries Visited</p>
                            </div>
                            <span className="text-3xl">🗺️</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">3</p>
                                <p className="opacity-90">Upcoming Trips</p>
                            </div>
                            <span className="text-3xl">✈️</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">847</p>
                                <p className="opacity-90">Travel Points</p>
                            </div>
                            <span className="text-3xl">⭐</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">28</p>
                                <p className="opacity-90">Reviews Written</p>
                            </div>
                            <span className="text-3xl">📝</span>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="rounded-2xl bg-white p-2 shadow-lg dark:bg-gray-800">
                    <div className="flex space-x-1">
                        {[
                            { id: 'overview', label: '📊 Overview', icon: '📊' },
                            { id: 'trips', label: '🗓️ My Trips', icon: '🗓️' },
                            { id: 'bookings', label: '🏨 Bookings', icon: '🏨' },
                            { id: 'wishlist', label: '❤️ Wishlist', icon: '❤️' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveSection(tab.id)}
                                className={`rounded-xl px-6 py-3 font-medium transition-all ${
                                    activeSection === tab.id
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    {activeSection === 'overview' && (
                        <div className="space-y-6">
                            {/* Recent Activity */}
                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">📈 Recent Activity</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: '✈️', text: 'Flight to Tokyo booked for March 15', time: '2 hours ago' },
                                        { icon: '🏨', text: 'Hotel reservation confirmed in Shibuya', time: '1 day ago' },
                                        { icon: '📝', text: 'Review posted for Bali Adventure Tour', time: '3 days ago' },
                                        { icon: '❤️', text: 'Added Swiss Alps to wishlist', time: '1 week ago' }
                                    ].map((activity, index) => (
                                        <div key={index} className="flex items-center space-x-4 rounded-xl bg-gray-50 p-4 dark:bg-gray-700">
                                            <span className="text-2xl">{activity.icon}</span>
                                            <div className="flex-1">
                                                <p className="text-gray-800 dark:text-white">{activity.text}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Travel Recommendations */}
                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">🎯 Personalized Recommendations</h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    {[
                                        { image: '🏝️', title: 'Maldives Escape', desc: 'Perfect for your luxury preferences', price: '$2,499' },
                                        { image: '🗻', title: 'Nepal Trekking', desc: 'Adventure matching your activity level', price: '$1,299' },
                                        { image: '🏛️', title: 'Greece Culture Tour', desc: 'Based on your history interests', price: '$1,899' }
                                    ].map((rec, index) => (
                                        <div key={index} className="cursor-pointer rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-lg dark:border-gray-600 dark:hover:border-blue-400">
                                            <div className="mb-2 text-center text-4xl">{rec.image}</div>
                                            <h4 className="mb-1 font-semibold text-gray-800 dark:text-white">{rec.title}</h4>
                                            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{rec.desc}</p>
                                            <p className="font-bold text-blue-600 dark:text-blue-400">{rec.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'trips' && (
                        <div className="space-y-6">
                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">🗓️ Upcoming Trips</h3>
                                    <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-white shadow-lg transition-all hover:scale-105">
                                        + New Trip
                                    </button>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {[
                                        { dest: 'Tokyo, Japan', date: 'March 15-22, 2024', status: 'Confirmed', color: 'from-green-400 to-emerald-500' },
                                        { dest: 'Paris, France', date: 'April 10-17, 2024', status: 'Planning', color: 'from-yellow-400 to-orange-500' },
                                        { dest: 'New York, USA', date: 'May 5-12, 2024', status: 'Wishlist', color: 'from-purple-400 to-pink-500' }
                                    ].map((trip, index) => (
                                        <div key={index} className={`rounded-2xl bg-gradient-to-r ${trip.color} p-6 text-white shadow-lg`}>
                                            <h4 className="mb-2 text-lg font-bold">{trip.dest}</h4>
                                            <p className="mb-2 opacity-90">{trip.date}</p>
                                            <span className="rounded-full bg-white/20 px-3 py-1 text-sm">{trip.status}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'bookings' && (
                        <div className="space-y-6">
                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">🏨 Recent Bookings</h3>
                                <div className="space-y-4">
                                    {[
                                        { type: 'Flight', name: 'American Airlines AA1234', date: 'March 15, 2024', status: 'Confirmed' },
                                        { type: 'Hotel', name: 'Grand Hyatt Tokyo', date: 'March 15-22, 2024', status: 'Confirmed' },
                                        { type: 'Tour', name: 'Tokyo City Explorer', date: 'March 16, 2024', status: 'Pending' }
                                    ].map((booking, index) => (
                                        <div key={index} className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-700">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                                                    <span className="text-lg">
                                                        {booking.type === 'Flight' ? '✈️' : booking.type === 'Hotel' ? '🏨' : '🎯'}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 dark:text-white">{booking.name}</h4>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">{booking.date}</p>
                                                </div>
                                            </div>
                                            <span className={`rounded-full px-3 py-1 text-sm ${
                                                booking.status === 'Confirmed' 
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                            }`}>
                                                {booking.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'wishlist' && (
                        <div className="space-y-6">
                            <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                                <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">❤️ Dream Destinations</h3>
                                <div className="grid gap-4 md:grid-cols-3">
                                    {[
                                        { emoji: '🏔️', name: 'Swiss Alps', country: 'Switzerland', saved: '2 weeks ago' },
                                        { emoji: '🏖️', name: 'Santorini', country: 'Greece', saved: '1 month ago' },
                                        { emoji: '🌸', name: 'Kyoto', country: 'Japan', saved: '2 months ago' },
                                        { emoji: '🦘', name: 'Sydney', country: 'Australia', saved: '3 months ago' },
                                        { emoji: '🗽', name: 'New York', country: 'USA', saved: '4 months ago' },
                                        { emoji: '🐧', name: 'Antarctica', country: 'Antarctica', saved: '6 months ago' }
                                    ].map((dest, index) => (
                                        <div key={index} className="group cursor-pointer rounded-xl border-2 border-dashed border-gray-300 p-4 text-center transition-all hover:border-pink-500 hover:bg-pink-50 dark:border-gray-600 dark:hover:border-pink-400 dark:hover:bg-pink-900/20">
                                            <div className="mb-3 text-4xl">{dest.emoji}</div>
                                            <h4 className="mb-1 font-semibold text-gray-800 dark:text-white">{dest.name}</h4>
                                            <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">{dest.country}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Saved {dest.saved}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                    <h3 className="mb-4 text-xl font-bold">🚀 Quick Actions</h3>
                    <div className="grid gap-4 md:grid-cols-4">
                        {[
                            { icon: '🔍', text: 'Find Flights' },
                            { icon: '🏨', text: 'Book Hotels' },
                            { icon: '📋', text: 'Plan Trip' },
                            { icon: '💬', text: 'Get Support' }
                        ].map((action, index) => (
                            <button
                                key={index}
                                className="rounded-xl bg-white/20 p-4 text-center transition-all hover:bg-white/30"
                            >
                                <div className="mb-2 text-2xl">{action.icon}</div>
                                <p className="text-sm font-medium">{action.text}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}