<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\DerbyExercise;
use Exception;
use Inertia\Inertia;

class DerbyExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exercises = DerbyExercise::all();
        return Inertia::render('Personal/Derby/DerbySearch', [
            'exercises' => $exercises,
        ]);
    }

    /**
     * Return the view for creating a new resource.
     */
    public function create()
    {
        //Aquí hace el return de la vista de creación
        // Inertia::render('DerbyExercise/CreateDerbyExercise');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $exercise = new DerbyExercise();
            $exercise->name = $request->name;
            $exercise->description = $request->description;
            $exercise->image = $request->image;
            //Aquí habría que modificar la imagen
            $exercise->category = $request->category;
            $exercise->difficulty = $request->difficulty;
            $exercise->save();

            return "Ejercicio derby creado con éxito: " . $exercise;
        } catch (Exception $e) {
            return "No se ha podido crear el ejercicio derby: " . $e->getMessage();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $exercise = DerbyExercise::findOrFail($id);
            return $exercise;
        } catch (Exception $e) {
            return "No se ha podido encontrar el ejercicio derby: " . $e->getMessage();
        }
    }


    /**
    * Show the form for editing the specified resource.
    */
    public function edit(DerbyExercise $exercise)
    {
        //Aquí hace el return de la vista de edición
        // Inertia::render('DErbyExercise/EditDerbyExercise', [
        //     'exercise' => $exercise,
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        try {
            $exercise = DerbyExercise::findOrFail($request->id);
            $exercise->name = $request->name;
            $exercise->description = $request->description;
            $exercise->image = $request->image;
            //Aquí habría que modificar la imagen
            $exercise->category = $request->category;
            $exercise->difficulty = $request->difficulty;
            $exercise->save();

            return "Ejercicio derby actualizado con éxito: ". $exercise;
        } catch (Exception $e) {
            return "No se pudo editar el ejercicio derby:" . $e->getMessage();
        }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $exercise = DerbyExercise::findOrFail($id);
            $exercise->delete();

            return "Ejercicio derby eliminado con éxito: " .  $exercise;
        } catch (Exception $e) {
            return "No se puedo eliminar el ejercicio derby: " . $e->getMessage();
        }
    }
}
