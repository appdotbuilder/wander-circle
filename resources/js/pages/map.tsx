import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Map View',
        href: '/map',
    },
];

export default function MapView() {
    const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
    const [mapView, setMapView] = useState('world');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Travel Map" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🗺️ Travel Map</h1>
                        <p className="text-gray-600 dark:text-gray-300">Explore destinations and track your journeys</p>
                    </div>
                    <div className="flex space-x-2">
                        {[
                            { id: 'world', label: '🌍 World' },
                            { id: 'visited', label: '✅ Visited' },
                            { id: 'wishlist', label: '❤️ Wishlist' }
                        ].map((view) => (
                            <button
                                key={view.id}
                                onClick={() => setMapView(view.id)}
                                className={`rounded-full px-4 py-2 font-medium transition-all ${
                                    mapView === view.id
                                        ? 'bg-blue-500 text-white shadow-lg'
                                        : 'bg-white text-gray-600 shadow hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                                }`}
                            >
                                {view.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Map Container */}
                <div className="relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 shadow-2xl dark:from-blue-900 dark:to-green-900">
                    {/* Mock World Map */}
                    <div className="flex h-full items-center justify-center p-8">
                        <div className="relative h-full w-full max-w-6xl">
                            {/* Continents represented as colored shapes */}
                            <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-blue-300 to-blue-500 shadow-inner">
                                
                                {/* Interactive Destination Pins */}
                                {[
                                    { name: 'Paris', x: '48%', y: '25%', emoji: '🗼', status: 'visited', continent: 'Europe' },
                                    { name: 'Tokyo', x: '85%', y: '35%', emoji: '🗾', status: 'visited', continent: 'Asia' },
                                    { name: 'New York', x: '25%', y: '30%', emoji: '🗽', status: 'visited', continent: 'North America' },
                                    { name: 'Santorini', x: '52%', y: '35%', emoji: '🏛️', status: 'wishlist', continent: 'Europe' },
                                    { name: 'Bali', x: '80%', y: '65%', emoji: '🏝️', status: 'visited', continent: 'Asia' },
                                    { name: 'Sydney', x: '90%', y: '80%', emoji: '🏄‍♂️', status: 'wishlist', continent: 'Australia' },
                                    { name: 'Cairo', x: '54%', y: '45%', emoji: '🏛️', status: 'wishlist', continent: 'Africa' },
                                    { name: 'Rio', x: '35%', y: '70%', emoji: '🏖️', status: 'visited', continent: 'South America' },
                                    { name: 'Reykjavik', x: '42%', y: '15%', emoji: '🌋', status: 'wishlist', continent: 'Europe' },
                                    { name: 'Dubai', x: '62%', y: '40%', emoji: '🏗️', status: 'visited', continent: 'Asia' }
                                ].map((destination, index) => (
                                    <div
                                        key={index}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all hover:scale-125"
                                        style={{ left: destination.x, top: destination.y }}
                                        onClick={() => setSelectedDestination(selectedDestination === destination.name ? null : destination.name)}
                                    >
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl shadow-lg transition-all ${
                                            destination.status === 'visited' 
                                                ? 'bg-green-500 text-white' 
                                                : 'bg-pink-500 text-white'
                                        } ${selectedDestination === destination.name ? 'ring-4 ring-yellow-400' : ''}`}>
                                            {destination.emoji}
                                        </div>
                                        
                                        {/* Destination Info Popup */}
                                        {selectedDestination === destination.name && (
                                            <div className="absolute bottom-full left-1/2 mb-2 w-48 transform -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl dark:bg-gray-800">
                                                <div className="text-center">
                                                    <h3 className="font-bold text-gray-800 dark:text-white">{destination.name}</h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300">{destination.continent}</p>
                                                    <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                                                        destination.status === 'visited' 
                                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                            : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300'
                                                    }`}>
                                                        {destination.status === 'visited' ? '✅ Visited' : '❤️ Wishlist'}
                                                    </span>
                                                    {destination.status === 'wishlist' && (
                                                        <button className="mt-2 w-full rounded-full bg-blue-500 py-1 text-white text-xs transition-all hover:bg-blue-600">
                                                            📋 Plan Trip
                                                        </button>
                                                    )}
                                                </div>
                                                {/* Arrow pointing down */}
                                                <div className="absolute top-full left-1/2 h-0 w-0 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                
                                {/* Continent Labels */}
                                <div className="absolute left-[20%] top-[20%] rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm">
                                    🌎 North America
                                </div>
                                <div className="absolute left-[35%] top-[60%] rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm">
                                    🌎 South America
                                </div>
                                <div className="absolute left-[48%] top-[20%] rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm">
                                    🌍 Europe
                                </div>
                                <div className="absolute left-[54%] top-[50%] rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm">
                                    🌍 Africa
                                </div>
                                <div className="absolute left-[75%] top-[35%] rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm">
                                    🌏 Asia
                                </div>
                                <div className="absolute left-[85%] top-[75%] rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-gray-800 backdrop-blur-sm">
                                    🌏 Australia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Travel Statistics */}
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">12</p>
                                <p className="opacity-90">Countries Visited</p>
                            </div>
                            <span className="text-3xl">✅</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">18</p>
                                <p className="opacity-90">Wishlist Destinations</p>
                            </div>
                            <span className="text-3xl">❤️</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">6</p>
                                <p className="opacity-90">Continents</p>
                            </div>
                            <span className="text-3xl">🌍</span>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 p-6 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">47k</p>
                                <p className="opacity-90">Miles Traveled</p>
                            </div>
                            <span className="text-3xl">✈️</span>
                        </div>
                    </div>
                </div>

                {/* Travel Progress */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                        <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">🏆 Travel Achievements</h3>
                        <div className="space-y-3">
                            {[
                                { title: 'Globe Trotter', desc: 'Visit 10 countries', progress: 100, icon: '🌍' },
                                { title: 'Continent Collector', desc: 'Visit all 7 continents', progress: 71, icon: '🗺️' },
                                { title: 'Cultural Explorer', desc: 'Visit 5 UNESCO sites', progress: 60, icon: '🏛️' },
                                { title: 'Adventure Seeker', desc: 'Try 10 extreme sports', progress: 30, icon: '🎯' }
                            ].map((achievement, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <span className="text-2xl">{achievement.icon}</span>
                                    <div className="flex-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-medium text-gray-800 dark:text-white">{achievement.title}</span>
                                            <span className="text-gray-600 dark:text-gray-300">{achievement.progress}%</span>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.desc}</p>
                                        <div className="mt-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                            <div
                                                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                                                style={{ width: `${achievement.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
                        <h3 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">📊 Travel Insights</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20">
                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">🏖️</span>
                                    <span className="font-medium text-gray-800 dark:text-white">Favorite Type</span>
                                </div>
                                <span className="text-blue-600 dark:text-blue-400">Beach Destinations</span>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-green-50 p-3 dark:bg-green-900/20">
                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">📅</span>
                                    <span className="font-medium text-gray-800 dark:text-white">Best Season</span>
                                </div>
                                <span className="text-green-600 dark:text-green-400">Spring & Summer</span>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20">
                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">💰</span>
                                    <span className="font-medium text-gray-800 dark:text-white">Avg Trip Cost</span>
                                </div>
                                <span className="text-purple-600 dark:text-purple-400">$2,150</span>
                            </div>
                            <div className="flex items-center justify-between rounded-xl bg-orange-50 p-3 dark:bg-orange-900/20">
                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">⏱️</span>
                                    <span className="font-medium text-gray-800 dark:text-white">Avg Duration</span>
                                </div>
                                <span className="text-orange-600 dark:text-orange-400">8 days</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Features */}
                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
                    <h3 className="mb-4 text-xl font-bold">🎯 Map Features</h3>
                    <div className="grid gap-4 md:grid-cols-4">
                        {[
                            { icon: '🔍', title: 'Search Destinations', desc: 'Find new places to explore' },
                            { icon: '📏', title: 'Measure Distance', desc: 'Calculate travel distances' },
                            { icon: '🛤️', title: 'Plan Routes', desc: 'Create optimal travel paths' },
                            { icon: '📸', title: 'Photo Memories', desc: 'View photos by location' }
                        ].map((feature, index) => (
                            <button
                                key={index}
                                className="rounded-xl bg-white/20 p-4 text-center transition-all hover:bg-white/30 hover:scale-105"
                            >
                                <div className="mb-2 text-2xl">{feature.icon}</div>
                                <h4 className="mb-1 text-sm font-semibold">{feature.title}</h4>
                                <p className="text-xs opacity-90">{feature.desc}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}