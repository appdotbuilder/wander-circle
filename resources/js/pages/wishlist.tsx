import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wishlist',
        href: '/wishlist',
    },
];

export default function Wishlist() {
    const [viewMode, setViewMode] = useState('grid');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Wishlist" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">❤️ My Wishlist</h1>
                        <p className="text-gray-600 dark:text-gray-300">Dream destinations you want to visit</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex rounded-full bg-white p-1 shadow-lg dark:bg-gray-800">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                                    viewMode === 'grid'
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                            >
                                🔲 Grid
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                                    viewMode === 'list'
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                            >
                                📋 List
                            </button>
                        </div>
                        <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                            ➕ Add Destination
                        </button>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 p-4 text-white shadow-lg">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">❤️</span>
                            <div>
                                <p className="text-lg font-bold">24</p>
                                <p className="text-sm opacity-90">Total Saved</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 p-4 text-white shadow-lg">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🌍</span>
                            <div>
                                <p className="text-lg font-bold">18</p>
                                <p className="text-sm opacity-90">Countries</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 p-4 text-white shadow-lg">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">💰</span>
                            <div>
                                <p className="text-lg font-bold">$24k</p>
                                <p className="text-sm opacity-90">Est. Total Cost</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 p-4 text-white shadow-lg">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">📈</span>
                            <div>
                                <p className="text-lg font-bold">3</p>
                                <p className="text-sm opacity-90">Price Alerts</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wishlist Items */}
                <div className={viewMode === 'grid' ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'space-y-4'}>
                    {[
                        {
                            name: 'Santorini, Greece',
                            image: '🏛️',
                            category: 'Luxury',
                            saved: '2 weeks ago',
                            price: '$2,499',
                            priceChange: '+5%',
                            priority: 'high',
                            notes: 'Perfect for honeymoon - blue domes and sunsets',
                            color: 'from-blue-400 to-cyan-500'
                        },
                        {
                            name: 'Kyoto, Japan',
                            image: '🌸',
                            category: 'Culture',
                            saved: '1 month ago',
                            price: '$1,899',
                            priceChange: '-8%',
                            priority: 'medium',
                            notes: 'Cherry blossom season in spring',
                            color: 'from-pink-400 to-rose-500'
                        },
                        {
                            name: 'Swiss Alps',
                            image: '🏔️',
                            category: 'Adventure',
                            saved: '3 weeks ago',
                            price: '$1,799',
                            priceChange: '+2%',
                            priority: 'high',
                            notes: 'Skiing and mountain hiking adventures',
                            color: 'from-purple-400 to-indigo-500'
                        },
                        {
                            name: 'Maldives',
                            image: '🏝️',
                            category: 'Luxury',
                            saved: '1 week ago',
                            price: '$3,299',
                            priceChange: '-12%',
                            priority: 'medium',
                            notes: 'Overwater bungalows and crystal clear waters',
                            color: 'from-cyan-400 to-blue-500'
                        },
                        {
                            name: 'Machu Picchu, Peru',
                            image: '🦙',
                            category: 'Culture',
                            saved: '2 months ago',
                            price: '$1,299',
                            priceChange: '+15%',
                            priority: 'low',
                            notes: 'Ancient Incan ruins and hiking trails',
                            color: 'from-yellow-400 to-orange-500'
                        },
                        {
                            name: 'Iceland',
                            image: '🌋',
                            category: 'Adventure',
                            saved: '5 days ago',
                            price: '$1,599',
                            priceChange: '+3%',
                            priority: 'high',
                            notes: 'Northern lights and geysers',
                            color: 'from-green-400 to-teal-500'
                        }
                    ].map((item, index) => (
                        <div key={index} className={viewMode === 'grid' 
                            ? "group cursor-pointer rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-gray-800"
                            : "flex items-center space-x-4 rounded-2xl bg-white p-4 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
                        }>
                            {viewMode === 'grid' ? (
                                <>
                                    <div className="flex items-start justify-between">
                                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-3xl text-white shadow-lg`}>
                                            {item.image}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                                                item.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                                                item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                                                'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                            }`}>
                                                {item.priority}
                                            </span>
                                            <button className="rounded-full bg-red-100 p-2 text-red-600 transition-all hover:bg-red-200 dark:bg-red-900 dark:text-red-300">
                                                ❤️
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <h3 className="mb-2 mt-4 text-xl font-bold text-gray-800 dark:text-white">{item.name}</h3>
                                    <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">{item.notes}</p>
                                    
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                                            item.category === 'Luxury' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                                            item.category === 'Adventure' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                        }`}>
                                            {item.category}
                                        </span>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-gray-800 dark:text-white">{item.price}</p>
                                            <p className={`text-xs ${
                                                item.priceChange.startsWith('-') ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                                {item.priceChange}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>Saved {item.saved}</span>
                                        <button className="rounded-full bg-blue-100 px-3 py-1 text-blue-800 transition-all hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                                            📋 Plan Trip
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-xl text-white shadow-lg`}>
                                        {item.image}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="font-bold text-gray-800 dark:text-white">{item.name}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">{item.notes}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-gray-800 dark:text-white">{item.price}</p>
                                                <p className={`text-xs ${
                                                    item.priceChange.startsWith('-') ? 'text-green-600' : 'text-red-600'
                                                }`}>
                                                    {item.priceChange}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button className="rounded-full bg-blue-100 p-2 text-blue-600 transition-all hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
                                            📋
                                        </button>
                                        <button className="rounded-full bg-red-100 p-2 text-red-600 transition-all hover:bg-red-200 dark:bg-red-900 dark:text-red-300">
                                            ❤️
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* Price Alerts */}
                <div className="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="mb-2 text-xl font-bold">🔔 Price Alert!</h3>
                            <p className="opacity-90">Maldives prices dropped by 12% - now is a great time to book!</p>
                        </div>
                        <div className="flex space-x-3">
                            <button className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white/30">
                                📋 Plan Trip
                            </button>
                            <button className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white/30">
                                🔕 Dismiss
                            </button>
                        </div>
                    </div>
                </div>

                {/* Smart Recommendations */}
                <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">🎯 Smart Recommendations</h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">Based on your wishlist, here are some similar destinations you might love:</p>
                    
                    <div className="grid gap-4 md:grid-cols-3">
                        {[
                            { name: 'Mykonos, Greece', reason: 'Similar to Santorini', image: '🏖️' },
                            { name: 'Norway Fjords', reason: 'Similar to Swiss Alps', image: '⛰️' },
                            { name: 'Seychelles', reason: 'Similar to Maldives', image: '🏝️' }
                        ].map((rec, index) => (
                            <div key={index} className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 p-4 text-center transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-gray-600 dark:hover:border-blue-400 dark:hover:bg-blue-900/20">
                                <div className="mb-2 text-3xl">{rec.image}</div>
                                <h4 className="mb-1 font-semibold text-gray-800 dark:text-white">{rec.name}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{rec.reason}</p>
                                <button className="mt-2 rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                    ➕ Add to Wishlist
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}