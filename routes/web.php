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
//Menú raíz
Route::get('/', function () {
    return Inertia::render('Home/Home');
});

//Vista de clubes
Route::get('/encuentra-clubes', [ClubController::class, 'indexGuest'])->name('clubs.index');

//Vista de información
Route::get('/informacion', function() {
    return Inertia::render('Informacion/InfoPage');
});

/**
 * Authenticated user routes.
 * 
 */

 //Espacio personal
Route::get('/espacio-personal', function () {
    return Inertia::render('Personal');
})->middleware('auth')->name('personal');

//Acceso al perfil, prohibido al administrador para que no borre su propia cuenta ni cambie nada
Route::middleware('not.admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Home del espacio para ejercicios estándar
Route::get('/espacio-personal/standard', function() {
    return Inertia::render('Personal/Standard/StandardHome');
})->middleware('auth')->name('standard.home');

//Búsqueda de ejercicios estándar
Route::middleware('auth')->group(function () {
    Route::get('/espacio-personal/standard/busqueda', [StandardExerciseController::class, 'index'])->name('standard.index');
});

//Vistas de rutinas
Route::middleware('auth')->group(function () {
    //Visualización de todas las rutinas del usuario
    Route::get('/espacio-personal/standard/rutinas', [RoutineController::class, 'indexUser'])->name('routines.index');
    //Visualización de una rutina en concreto y sus ejercicios
    Route::get('/espacio-personal/standard/rutinas/{id}', [RoutineController::class, 'show'])->name('routines.show');
});

Route::middleware('auth')->group(function () {
    //Visualización de todos los ejercicios derby
    Route::get('/espacio-personal/derby', [DerbyExerciseController::class, 'index'])->name('derby.index');
});

/**
 * Administrator user routes.
 */

 //Panel administrador.
Route::get('/admin', function () {
    return Inertia::render('Admin/AdminHome');
})->middleware('admin')->name('admin');

//Panel de clubes.
Route::middleware('admin')->group(function () {
    Route::get('/admin/clubs', [ClubController::class, 'indexAdmin'])->name('admin.clubs');
    Route::get('/admin/clubs/create', [ClubController::class, 'create'])->name('admin.clubs.create');
    Route::put('/admin/clubs/put', [ClubController::class, 'store'])->name('admin.clubs.store');
});

//Panel de ejercicios estándar.
Route::middleware('admin')->group(function () {
    Route::get('/admin/standard', [StandardExerciseController::class, 'indexAdmin'])->name('admin.standard');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

//Panel de ejercicios derby.
Route::middleware('admin')->group(function () {
    Route::get('/admin/derby', [DerbyExercisesController::class, 'indexAdmin'])->name('admin.derby');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

//Panel de usuarios.
Route::middleware('admin')->group(function () {
    Route::get('/admin/users', [UserController::class, 'indexAdmin'])->name('admin.users');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

require __DIR__.'/auth.php';
