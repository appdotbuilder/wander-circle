import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bookings',
        href: '/bookings',
    },
];

export default function Bookings() {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Bookings" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🏨 My Bookings</h1>
                        <p className="text-gray-600 dark:text-gray-300">Manage all your travel reservations</p>
                    </div>
                    <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                        📋 New Booking
                    </button>
                </div>

                {/* Filter Tabs */}
                <div className="flex space-x-2">
                    {[
                        { id: 'all', label: 'All Bookings', count: 12 },
                        { id: 'flights', label: 'Flights', count: 4 },
                        { id: 'hotels', label: 'Hotels', count: 5 },
                        { id: 'tours', label: 'Tours', count: 3 }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`rounded-full px-6 py-2 font-medium transition-all ${
                                activeTab === tab.id
                                    ? 'bg-blue-500 text-white shadow-lg'
                                    : 'bg-white text-gray-600 shadow hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                        >
                            {tab.label} ({tab.count})
                        </button>
                    ))}
                </div>

                {/* Bookings List */}
                <div className="space-y-4">
                    {[
                        {
                            type: 'flight',
                            icon: '✈️',
                            title: 'American Airlines AA1234',
                            subtitle: 'New York → Tokyo',
                            date: 'March 15, 2024 • 14:30',
                            status: 'confirmed',
                            price: '$1,299',
                            reference: 'AA123456',
                            color: 'from-blue-400 to-cyan-500'
                        },
                        {
                            type: 'hotel',
                            icon: '🏨',
                            title: 'Grand Hyatt Tokyo',
                            subtitle: 'Deluxe Room with City View',
                            date: 'March 15-22, 2024 • 7 nights',
                            status: 'confirmed',
                            price: '$2,100',
                            reference: 'HY789012',
                            color: 'from-purple-400 to-pink-500'
                        },
                        {
                            type: 'tour',
                            icon: '🎯',
                            title: 'Tokyo City Explorer Tour',
                            subtitle: 'Full Day Cultural Experience',
                            date: 'March 16, 2024 • 09:00',
                            status: 'pending',
                            price: '$189',
                            reference: 'TX345678',
                            color: 'from-green-400 to-emerald-500'
                        },
                        {
                            type: 'flight',
                            icon: '✈️',
                            title: 'Japan Airlines JL567',
                            subtitle: 'Tokyo → Paris',
                            date: 'March 22, 2024 • 11:45',
                            status: 'confirmed',
                            price: '$1,599',
                            reference: 'JL901234',
                            color: 'from-blue-400 to-cyan-500'
                        },
                        {
                            type: 'hotel',
                            icon: '🏨',
                            title: 'Le Meurice Paris',
                            subtitle: 'Superior Room',
                            date: 'March 22-29, 2024 • 7 nights',
                            status: 'confirmed',
                            price: '$2,800',
                            reference: 'LM567890',
                            color: 'from-purple-400 to-pink-500'
                        },
                        {
                            type: 'tour',
                            icon: '🎯',
                            title: 'Versailles Palace Tour',
                            subtitle: 'Skip-the-line guided tour',
                            date: 'March 24, 2024 • 10:00',
                            status: 'waitlist',
                            price: '$129',
                            reference: 'VP123456',
                            color: 'from-yellow-400 to-orange-500'
                        }
                    ].map((booking, index) => (
                        <div key={index} className="rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
                            <div className="flex items-start space-x-4">
                                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${booking.color} text-2xl text-white shadow-lg`}>
                                    {booking.icon}
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{booking.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-300">{booking.subtitle}</p>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">📅 {booking.date}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">🔖 Ref: {booking.reference}</p>
                                        </div>
                                        
                                        <div className="text-right">
                                            <div className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">{booking.price}</div>
                                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                                                booking.status === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                                booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                                                'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300'
                                            }`}>
                                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-4 flex space-x-2">
                                        <button className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 transition-all hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800">
                                            📄 View Details
                                        </button>
                                        <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 transition-all hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                                            📧 Email Receipt
                                        </button>
                                        {booking.status === 'confirmed' && (
                                            <button className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 transition-all hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800">
                                                ❌ Cancel
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Stats */}
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">$8,116</p>
                                <p className="opacity-90">Total Spent</p>
                            </div>
                            <span className="text-3xl">💰</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">12</p>
                                <p className="opacity-90">Active Bookings</p>
                            </div>
                            <span className="text-3xl">📋</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">847</p>
                                <p className="opacity-90">Reward Points</p>
                            </div>
                            <span className="text-3xl">⭐</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">96%</p>
                                <p className="opacity-90">Success Rate</p>
                            </div>
                            <span className="text-3xl">✅</span>
                        </div>
                    </div>
                </div>

                {/* Booking Assistant */}
                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
                    <h2 className="mb-4 text-2xl font-bold">🤖 AI Booking Assistant</h2>
                    <p className="mb-6 opacity-90">Need help with your bookings? Our AI assistant can help you find the best deals and manage your reservations.</p>
                    <div className="flex space-x-4">
                        <button className="rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30">
                            💬 Chat with Assistant
                        </button>
                        <button className="rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30">
                            🔍 Find Deals
                        </button>
                        <button className="rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30">
                            📊 Analytics
                        </button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}