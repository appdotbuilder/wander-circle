<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    Route::get('discover', function () {
        return Inertia::render('discover');
    })->name('discover');
    
    Route::get('trips', function () {
        return Inertia::render('trips');
    })->name('trips');
    
    Route::get('bookings', function () {
        return Inertia::render('bookings');
    })->name('bookings');
    
    Route::get('wishlist', function () {
        return Inertia::render('wishlist');
    })->name('wishlist');
    
    Route::get('map', function () {
        return Inertia::render('map');
    })->name('map');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
