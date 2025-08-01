import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [activeTab, setActiveTab] = useState('discover');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <Head title="TravelSphere - Discover Your Next Adventure">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
                {/* Header */}
                <header className="relative z-10 px-6 py-6">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                                <span className="text-xl font-bold">🌍</span>
                            </div>
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">TravelSphere</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-full border-2 border-blue-500 px-6 py-2 text-blue-500 transition-all hover:bg-blue-500 hover:text-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    >
                                        Start Journey
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="px-6 py-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-6 text-5xl font-bold text-gray-800 dark:text-white">
                            ✈️ Discover Your Next Adventure
                        </h2>
                        <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
                            From breathtaking destinations to seamless bookings - your perfect trip starts here
                        </p>
                        
                        {/* Search Bar */}
                        <div className="mx-auto mb-12 max-w-2xl">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="🔍 Where do you want to go?"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full rounded-full border-0 bg-white/80 px-6 py-4 text-lg shadow-xl backdrop-blur-sm transition-all focus:ring-4 focus:ring-blue-300 dark:bg-gray-800/80 dark:text-white"
                                />
                                <button className="absolute right-2 top-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-2 text-white shadow-lg transition-all hover:scale-105">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Tabs */}
                <section className="px-6 py-12">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-8 flex justify-center">
                            <div className="rounded-full bg-white/80 p-2 shadow-xl backdrop-blur-sm dark:bg-gray-800/80">
                                {[
                                    { id: 'discover', label: '🗺️ Discover', emoji: '🗺️' },
                                    { id: 'plan', label: '📋 Plan', emoji: '📋' },
                                    { id: 'book', label: '🏨 Book', emoji: '🏨' },
                                    { id: 'share', label: '📸 Share', emoji: '📸' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`rounded-full px-6 py-3 font-medium transition-all ${
                                            activeTab === tab.id
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm dark:bg-gray-800/80">
                            {activeTab === 'discover' && (
                                <div className="grid gap-6 md:grid-cols-3">
                                    <div className="group cursor-pointer rounded-2xl bg-gradient-to-br from-green-400 to-blue-500 p-6 text-white transition-transform hover:scale-105">
                                        <div className="mb-4 text-4xl">🏝️</div>
                                        <h3 className="mb-2 text-xl font-bold">Tropical Paradises</h3>
                                        <p>Discover pristine beaches and crystal-clear waters</p>
                                    </div>
                                    <div className="group cursor-pointer rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 p-6 text-white transition-transform hover:scale-105">
                                        <div className="mb-4 text-4xl">🏔️</div>
                                        <h3 className="mb-2 text-xl font-bold">Mountain Adventures</h3>
                                        <p>Explore breathtaking peaks and hiking trails</p>
                                    </div>
                                    <div className="group cursor-pointer rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-6 text-white transition-transform hover:scale-105">
                                        <div className="mb-4 text-4xl">🏛️</div>
                                        <h3 className="mb-2 text-xl font-bold">Cultural Heritage</h3>
                                        <p>Immerse yourself in history and traditions</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'plan' && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                                            🎯 Smart Trip Planning
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Let our AI-powered planner create the perfect itinerary for you
                                        </p>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                        {[
                                            { icon: '📅', title: 'Custom Itineraries', desc: 'Personalized day-by-day plans' },
                                            { icon: '💰', title: 'Budget Tracking', desc: 'Keep expenses in check' },
                                            { icon: '🗺️', title: 'Route Optimization', desc: 'Efficient travel routes' },
                                            { icon: '👥', title: 'Group Planning', desc: 'Collaborate with friends' }
                                        ].map((feature, index) => (
                                            <div key={index} className="rounded-2xl bg-gray-50 p-4 text-center dark:bg-gray-700">
                                                <div className="mb-2 text-3xl">{feature.icon}</div>
                                                <h4 className="mb-1 font-semibold text-gray-800 dark:text-white">{feature.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'book' && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                                            🏨 Seamless Bookings
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Book accommodations, flights, and experiences all in one place
                                        </p>
                                    </div>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                                            <div className="mb-4 flex items-center space-x-3">
                                                <span className="text-3xl">🏨</span>
                                                <h4 className="text-xl font-bold">Accommodations</h4>
                                            </div>
                                            <ul className="space-y-2">
                                                <li>• Luxury hotels & resorts</li>
                                                <li>• Boutique accommodations</li>
                                                <li>• Budget-friendly hostels</li>
                                                <li>• Unique local stays</li>
                                            </ul>
                                        </div>
                                        <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                                            <div className="mb-4 flex items-center space-x-3">
                                                <span className="text-3xl">🎯</span>
                                                <h4 className="text-xl font-bold">Experiences</h4>
                                            </div>
                                            <ul className="space-y-2">
                                                <li>• Guided tours & activities</li>
                                                <li>• Adventure sports</li>
                                                <li>• Cultural experiences</li>
                                                <li>• Local cuisine tours</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'share' && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                                            📸 Share Your Journey
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Create beautiful travel memories and inspire others
                                        </p>
                                    </div>
                                    <div className="grid gap-4 md:grid-cols-3">
                                        {[
                                            { icon: '📱', title: 'Travel Journal', desc: 'Document your adventures' },
                                            { icon: '🌟', title: 'Reviews & Ratings', desc: 'Help fellow travelers' },
                                            { icon: '👥', title: 'Travel Community', desc: 'Connect with explorers' }
                                        ].map((feature, index) => (
                                            <div key={index} className="rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-gray-600 dark:hover:border-blue-400 dark:hover:bg-blue-900/20">
                                                <div className="mb-3 text-4xl">{feature.icon}</div>
                                                <h4 className="mb-2 font-semibold text-gray-800 dark:text-white">{feature.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Traveler Types */}
                <section className="px-6 py-16">
                    <div className="mx-auto max-w-6xl">
                        <h3 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white">
                            Perfect for Every Type of Traveler
                        </h3>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { icon: '🎒', title: 'Backpackers', desc: 'Budget-friendly adventures', color: 'from-green-400 to-emerald-500' },
                                { icon: '👨‍👩‍👧‍👦', title: 'Families', desc: 'Kid-friendly destinations', color: 'from-blue-400 to-cyan-500' },
                                { icon: '💼', title: 'Business', desc: 'Efficient travel solutions', color: 'from-gray-400 to-slate-500' },
                                { icon: '✨', title: 'Luxury', desc: 'Premium experiences', color: 'from-purple-400 to-pink-500' }
                            ].map((type, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <div className={`mb-4 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${type.color} text-3xl text-white shadow-xl transition-transform group-hover:scale-110`}>
                                        {type.icon}
                                    </div>
                                    <div className="text-center">
                                        <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">{type.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-300">{type.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-6 py-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-12 text-white shadow-2xl">
                            <h3 className="mb-4 text-3xl font-bold">Ready to Start Your Adventure? 🚀</h3>
                            <p className="mb-8 text-xl opacity-90">
                                Join thousands of travelers who trust TravelSphere for their perfect trips
                            </p>
                            {!auth.user && (
                                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    >
                                        🌟 Start Free Journey
                                    </Link>
                                    <Link
                                        href={route('login')}
                                        className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-blue-600"
                                    >
                                        Welcome Back
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="px-6 py-8 text-center">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-4 flex items-center justify-center space-x-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                                <span className="text-sm">🌍</span>
                            </div>
                            <span className="text-lg font-bold text-gray-800 dark:text-white">TravelSphere</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                            Built with ❤️ by{" "}
                            <a 
                                href="https://app.build" 
                                target="_blank" 
                                className="font-medium text-blue-500 hover:underline"
                            >
                                app.build
                            </a>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}