<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\StandardExerciseController;
use App\Http\Controllers\DerbyExerciseController;
use App\Http\Controllers\RoutineController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Home');
});

Route::get('/espacio-personal', function () {
    return Inertia::render('Dashboard');
})->middleware('auth')->name('dashboard');

Route::middleware('not.admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/informacion', function() {
    return Inertia::render('Informacion/InfoPage');
});

/**
 * Model controllers
 * 
 * Here I define and name the routes to call the controllers via Inertia.
 * 
 */

Route::get('/encuentra-clubes', [ClubController::class, 'indexGuest'])->name('clubs.guest.index');

Route::get('/admin-clubes', function () {
    return Inertia::render('Dashboard');
})->middleware('auth')->name('dashboard');

Route::get('/espacio-personal/standard', function() {
    return Inertia::render('Personal/Standard/StandardHome');
})->middleware('auth')->name('standard.home');

Route::middleware('auth')->group(function () {
    Route::get('/espacio-personal/standard/busqueda', [StandardExerciseController::class, 'index'])->name('standard.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/espacio-personal/standard/rutinas', [RoutineController::class, 'index'])->name('routines.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/espacio-personal/derby', [DerbyExerciseController::class, 'index'])->name('derby.index');
});

require __DIR__.'/auth.php';
