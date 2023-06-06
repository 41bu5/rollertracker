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


/**
 * Guest user views.
 */
Route::get('/', function () {
    return Inertia::render('Home/Home');
});

Route::get('/encuentra-clubes', [ClubController::class, 'indexGuest'])->name('clubs.index');

Route::get('/informacion', function() {
    return Inertia::render('Informacion/InfoPage');
});

/**
 * Authenticated user routes.
 * 
 */

Route::get('/espacio-personal', function () {
    return Inertia::render('Dashboard');
})->middleware('auth')->name('dashboard');

Route::middleware('not.admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/espacio-personal/standard', function() {
    return Inertia::render('Personal/Standard/StandardHome');
})->middleware('auth')->name('standard.home');

Route::middleware('auth')->group(function () {
    Route::get('/espacio-personal/standard/busqueda', [StandardExerciseController::class, 'index'])->name('standard.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/espacio-personal/standard/rutinas', [RoutineController::class, 'indexUser'])->name('routines.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/espacio-personal/derby', [DerbyExerciseController::class, 'index'])->name('derby.index');
});

/**
 * Administrator user routes.
 */

 //Main home view.
Route::get('/admin', function () {
    return Inertia::render('Admin/AdminHome');
})->middleware('admin')->name('admin');

//Club panel.
Route::middleware('admin')->group(function () {
    Route::get('/admin/clubs', [ClubController::class, 'indexAdmin'])->name('admin.clubs');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

//Standard exercises panel.
Route::middleware('admin')->group(function () {
    Route::get('/admin/standard', [StandardExerciseController::class, 'indexAdmin'])->name('admin.standard');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

//Derby exercises panel.
Route::middleware('admin')->group(function () {
    Route::get('/admin/derby', [DerbyExercisesController::class, 'indexAdmin'])->name('admin.derby');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

//User panel.
Route::middleware('admin')->group(function () {
    Route::get('/admin/users', [UserController::class, 'indexAdmin'])->name('admin.users');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

require __DIR__.'/auth.php';
