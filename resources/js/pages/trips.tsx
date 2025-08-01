import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Trips',
        href: '/trips',
    },
];

export default function Trips() {
    const [filter, setFilter] = useState('all');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Trips" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🗓️ My Trips</h1>
                        <p className="text-gray-600 dark:text-gray-300">Plan, track, and manage all your adventures</p>
                    </div>
                    <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                        ✈️ Plan New Trip
                    </button>
                </div>

                {/* Filter Tabs */}
                <div className="flex space-x-2">
                    {[
                        { id: 'all', label: 'All Trips' },
                        { id: 'upcoming', label: 'Upcoming' },
                        { id: 'past', label: 'Past' },
                        { id: 'draft', label: 'Drafts' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setFilter(tab.id)}
                            className={`rounded-full px-6 py-2 font-medium transition-all ${
                                filter === tab.id
                                    ? 'bg-blue-500 text-white shadow-lg'
                                    : 'bg-white text-gray-600 shadow hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Trips Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: 'Tokyo Adventure',
                            destination: 'Tokyo, Japan',
                            dates: 'March 15 - 22, 2024',
                            status: 'upcoming',
                            image: '🗾',
                            progress: 85,
                            color: 'from-pink-400 to-red-500'
                        },
                        {
                            title: 'Paris Romance',
                            destination: 'Paris, France',
                            dates: 'April 10 - 17, 2024',
                            status: 'planning',
                            image: '🗼',
                            progress: 45,
                            color: 'from-purple-400 to-pink-500'
                        },
                        {
                            title: 'Bali Retreat',
                            destination: 'Bali, Indonesia',
                            dates: 'December 5 - 15, 2023',
                            status: 'completed',
                            image: '🏝️',
                            progress: 100,
                            color: 'from-green-400 to-emerald-500'
                        },
                        {
                            title: 'Swiss Alps Hiking',
                            destination: 'Switzerland',
                            dates: 'July 20 - 28, 2024',
                            status: 'draft',
                            image: '🏔️',
                            progress: 15,
                            color: 'from-blue-400 to-cyan-500'
                        },
                        {
                            title: 'NYC Business Trip',
                            destination: 'New York, USA',
                            dates: 'May 5 - 8, 2024',
                            status: 'upcoming',
                            image: '🗽',
                            progress: 90,
                            color: 'from-yellow-400 to-orange-500'
                        },
                        {
                            title: 'African Safari',
                            destination: 'Kenya',
                            dates: 'September 10 - 20, 2024',
                            status: 'wishlist',
                            image: '🦁',
                            progress: 5,
                            color: 'from-orange-400 to-red-500'
                        }
                    ].map((trip, index) => (
                        <div key={index} className="group cursor-pointer rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-gray-800">
                            <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${trip.color} text-3xl text-white shadow-lg`}>
                                {trip.image}
                            </div>
                            
                            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">{trip.title}</h3>
                            <p className="mb-1 text-gray-600 dark:text-gray-300">📍 {trip.destination}</p>
                            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">📅 {trip.dates}</p>
                            
                            {/* Progress Bar */}
                            <div className="mb-3">
                                <div className="mb-1 flex justify-between text-sm">
                                    <span className="text-gray-600 dark:text-gray-300">Planning Progress</span>
                                    <span className="text-gray-600 dark:text-gray-300">{trip.progress}%</span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div
                                        className={`h-2 rounded-full bg-gradient-to-r ${trip.color}`}
                                        style={{ width: `${trip.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                                    trip.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                    trip.status === 'upcoming' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                                    trip.status === 'planning' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                                    trip.status === 'draft' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' :
                                    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
                                }`}>
                                    {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                                </span>
                                <div className="flex space-x-2">
                                    <button className="rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                                        📝
                                    </button>
                                    <button className="rounded-full bg-gray-100 p-2 text-gray-600 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                                        📤
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State (if no trips) */}
                <div className="hidden rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center dark:border-gray-600">
                    <div className="mb-4 text-6xl">✈️</div>
                    <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">No trips planned yet</h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">Start planning your next adventure!</p>
                    <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                        Plan Your First Trip
                    </button>
                </div>
            </div>
        </AppLayout>
    );
}