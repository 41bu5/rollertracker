<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Routine;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class RoutineController extends Controller
{
    /**
     * Display a listing of the resource for the admin view.
     */
    public function indexAdmin()
    {
        $routines = Routine::all();
        return Inertia::render('Personal/Standard/Routine/RoutineBrowser', [
            'routines' => $routines,
        ]);
    }

    /**
     * Display a listing of the resources associated with a certain user.
     */
    public function indexUser() {
        $userRoutines = DB::table('routines')->where('user_id', auth()->id())->get();
        return Inertia::render('Personal/Standard/Routine/RoutineBrowser', [
            'routines' => $userRoutines,
        ]);
    }

    /**
     * Return the view for creating a new resource.
     */
    public function create()
    {
        //Aquí hace el return de la vista de creación
        // Inertia::render('Routine/CreateRoutine');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $routine = new Routine();
            $routine->user_id = $request->user_id;
            $routine->title = $request->title;
            $routine->description = $request->description;
            $routine->created_at = now();
            $routine->modified_at = null;
            $routine->save();

            return "Rutina creada con éxito: " . $routine;
        } catch (Exception $e) {
            return "No se ha podido crear la rutina: " . $e->getMessage();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $routine = Routine::findOrFail($id);
            return $routine;
        } catch (Exception $e) {
            return "No se ha podido encontrar la rutina: " . $e->getMessage();
        }
    }


    /**
    * Show the form for editing the specified resource.
    */
    public function edit(Routine $routine)
    {
        //Aquí hace el return de la vista de edición
        // Inertia::render('Routine/EditRoutine', [
        //     'routine' => $routine,
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        try {
            $routine = Routine::findOrFail($request->id);
            $routine->user_id = $request->user_id;
            $routine->title = $request->title;
            $routine->description = $request->description;
            $routine->created_at = $request->created_at;
            $routine->modified_at = now();
            $routine->save();

            return "Routine actualizado con éxito: " . $routine;
        } catch (Exception $e) {
            return "No se pudo editar la rutina:" . $e->getMessage();
        }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $routine = Routine::findOrFail($id);
            $routine->delete();

            return "Rutina eliminada con éxito: " .  $routine;
        } catch (Exception $e) {
            return "No se pudo eliminar la rutina: " . $e->getMessage();
        }
    }
}
