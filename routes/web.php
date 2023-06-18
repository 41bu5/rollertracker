<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\StandardExerciseController;
use App\Http\Controllers\DerbyExerciseController;
use App\Http\Controllers\RoutineController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\RegisteredUserController;
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
Route::get('/informacion', function () {
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
Route::get('/espacio-personal/standard', function () {
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
    //Vista creación de rutina
    Route::get('/espacio-personal/standard/rutinas/create', [RoutineController::class, 'create'])->name('routines.create');
    //Visualización de una rutina en concreto y sus ejercicios
    Route::get('/espacio-personal/standard/rutinas/{id}', [RoutineController::class, 'show'])->name('routines.show');
    //Creación de rutina en la BBDD
    Route::post('/espacio-personal/standard/rutinas', [RoutineController::class, 'store'])->name('routines.store');
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
    Route::post('/admin/clubs', [ClubController::class, 'store'])->name('admin.clubs.store');
    Route::patch('/admin/clubs', [ClubController::class, 'update'])->name('admin.clubs.update');
    Route::delete('/admin/clubs/{id}', [ClubController::class, 'destroy'])->name('admin.clubs.delete');
});

//Panel de ejercicios estándar.
Route::middleware('admin')->group(function () {
    Route::get('/admin/standard', [StandardExerciseController::class, 'indexAdmin'])->name('admin.standard');
    Route::get('/admin/standard/create', [StandardExerciseController::class, 'create'])->name('admin.standard.create');
    Route::post('/admin/standard', [StandardExerciseController::class, 'store'])->name('admin.standard.store');
    Route::patch('/admin/standard', [StandardExerciseController::class, 'update'])->name('admin.standard.update');
    Route::delete('/admin/standard/{id}', [StandardExerciseController::class, 'destroy'])->name('admin.standard.delete');
});

//Panel de ejercicios derby.
Route::middleware('admin')->group(function () {
    Route::get('/admin/derby', [DerbyExerciseController::class, 'indexAdmin'])->name('admin.derby');
    Route::get('/admin/derby/create', [DerbyExerciseController::class, 'create'])->name('admin.derby.create');
    Route::post('/admin/derby', [DerbyExerciseController::class, 'store'])->name('admin.derby.store');
    Route::patch('/admin/derby', [DerbyExerciseController::class, 'update'])->name('admin.derby.update');
    Route::delete('/admin/derby/{id}', [DerbyExerciseController::class, 'destroy'])->name('admin.derby.delete');
});

//Panel de usuarios.
Route::middleware('admin')->group(function () {
    Route::get('/admin/users', [UserController::class, 'indexAdmin'])->name('admin.users');
    Route::get('admin/users/create', [UserController::class, 'create'])->name('admin.users.create');
    Route::post('/admin/users', [RegisteredUserController::class, 'storeAdmin']);
});

require __DIR__ . '/auth.php';
