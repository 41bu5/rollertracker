<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\StandardExerciseController;
use App\Http\Controllers\DerbyExerciseController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/clubs', [ClubController::class, 'indexApi']);
Route::get('/clubs/{id}', [ClubController::class, 'showApi']);
Route::get('/exercises/standard', [StandardExerciseController::class, 'indexApi']);
Route::get('/exercises/standard/{id}', [StandardExerciseController::class, 'showApi']);
Route::get('/exercises/derby', [DerbyExerciseController::class, 'indexApi']);
Route::get('/exercises/derby/{id}', [DerbyExerciseController::class, 'showApi']);
Route::get('/routine-titles/{id}/{userId}', [StandardExerciseController::class, 'showRoutines'])
    ->name('standard.routines')
    ->middleware('auth');