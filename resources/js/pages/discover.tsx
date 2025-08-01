import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Discover',
        href: '/discover',
    },
];

export default function Discover() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Discover Destinations" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                {/* Header */}
                <div className="text-center">
                    <h1 className="mb-2 text-4xl font-bold text-gray-800 dark:text-white">🌍 Discover Amazing Destinations</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">Find your next adventure from around the world</p>
                </div>

                {/* Search Bar */}
                <div className="mx-auto w-full max-w-2xl">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="🔍 Search destinations, activities, or experiences..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full border-0 bg-white px-6 py-4 text-lg shadow-lg backdrop-blur-sm transition-all focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
                        />
                        <button className="absolute right-2 top-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-white shadow-lg transition-all hover:scale-105">
                            Search
                        </button>
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2">
                    {[
                        { id: 'all', label: '🌟 All', emoji: '🌟' },
                        { id: 'beaches', label: '🏖️ Beaches', emoji: '🏖️' },
                        { id: 'mountains', label: '🏔️ Mountains', emoji: '🏔️' },
                        { id: 'cities', label: '🏙️ Cities', emoji: '🏙️' },
                        { id: 'culture', label: '🏛️ Culture', emoji: '🏛️' },
                        { id: 'adventure', label: '🎯 Adventure', emoji: '🎯' },
                        { id: 'luxury', label: '✨ Luxury', emoji: '✨' }
                    ].map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`rounded-full px-4 py-2 font-medium transition-all ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 shadow hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Featured Destinations */}
                <div>
                    <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">✨ Featured Destinations</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: 'Santorini, Greece',
                                image: '🏛️',
                                rating: 4.9,
                                price: '$1,299',
                                category: 'Luxury',
                                highlight: 'Stunning sunsets',
                                color: 'from-blue-400 to-cyan-500'
                            },
                            {
                                name: 'Bali, Indonesia',
                                image: '🏝️',
                                rating: 4.8,
                                price: '$899',
                                category: 'Adventure',
                                highlight: 'Tropical paradise',
                                color: 'from-green-400 to-emerald-500'
                            },
                            {
                                name: 'Tokyo, Japan',
                                image: '🗾',
                                rating: 4.9,
                                price: '$1,599',
                                category: 'Culture',
                                highlight: 'Modern meets traditional',
                                color: 'from-pink-400 to-red-500'
                            },
                            {
                                name: 'Swiss Alps',
                                image: '🏔️',
                                rating: 4.7,
                                price: '$1,799',
                                category: 'Adventure',
                                highlight: 'Mountain adventures',
                                color: 'from-purple-400 to-pink-500'
                            },
                            {
                                name: 'Maldives',
                                image: '🏖️',
                                rating: 5.0,
                                price: '$2,499',
                                category: 'Luxury',
                                highlight: 'Overwater villas',
                                color: 'from-cyan-400 to-blue-500'
                            },
                            {
                                name: 'Machu Picchu, Peru',
                                image: '🏛️',
                                rating: 4.8,
                                price: '$1,199',
                                category: 'Culture',
                                highlight: 'Ancient wonders',
                                color: 'from-yellow-400 to-orange-500'
                            }
                        ].map((destination, index) => (
                            <div key={index} className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-gray-800">
                                <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${destination.color} text-6xl text-white`}>
                                    {destination.image}
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{destination.name}</h3>
                                        <div className="flex items-center space-x-1">
                                            <span className="text-yellow-400">⭐</span>
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{destination.rating}</span>
                                        </div>
                                    </div>
                                    <p className="mb-3 text-gray-600 dark:text-gray-300">{destination.highlight}</p>
                                    <div className="flex items-center justify-between">
                                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                                            destination.category === 'Luxury' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                                            destination.category === 'Adventure' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                        }`}>
                                            {destination.category}
                                        </span>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">From</p>
                                            <p className="text-xl font-bold text-gray-800 dark:text-white">{destination.price}</p>
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 text-white transition-all hover:scale-105">
                                        Explore Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Travel Inspiration */}
                <div>
                    <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">💡 Travel Inspiration</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            { icon: '🌊', title: 'Best Beaches 2024', desc: 'Top 10 pristine beaches worldwide' },
                            { icon: '🍕', title: 'Food Adventures', desc: 'Culinary journeys around the globe' },
                            { icon: '🎒', title: 'Budget Travel', desc: 'Amazing trips under $1000' },
                            { icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', desc: 'Perfect destinations for families' }
                        ].map((inspiration, index) => (
                            <div key={index} className="cursor-pointer rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:bg-gray-800">
                                <div className="mb-4 text-4xl text-center">{inspiration.icon}</div>
                                <h3 className="mb-2 text-center font-bold text-gray-800 dark:text-white">{inspiration.title}</h3>
                                <p className="text-center text-sm text-gray-600 dark:text-gray-300">{inspiration.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Right Now */}
                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
                    <h2 className="mb-6 text-2xl font-bold">🔥 Trending Destinations</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {[
                            { name: 'Iceland', trend: '+45%', reason: 'Northern Lights season' },
                            { name: 'Vietnam', trend: '+38%', reason: 'Reopened to tourists' },
                            { name: 'Morocco', trend: '+29%', reason: 'Cultural experiences' }
                        ].map((trend, index) => (
                            <div key={index} className="rounded-xl bg-white/20 p-4 backdrop-blur-sm">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold">{trend.name}</h3>
                                    <span className="rounded-full bg-green-400 px-2 py-1 text-xs font-bold text-green-900">
                                        {trend.trend}
                                    </span>
                                </div>
                                <p className="text-sm opacity-90">{trend.reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}