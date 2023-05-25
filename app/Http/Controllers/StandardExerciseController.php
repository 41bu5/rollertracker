<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\StandardExercise;
use Exception;
use Inertia\Inertia;

class StandardExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exercises = StandardExercise::all();
        return Inertia::render('Personal/Standard/Search/StandardSearch', [
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
            $exercise = new StandardExercise();
            $exercise->name = $request->name;
            $exercise->description = $request->description;
            $exercise->image = $request->image;
            //Aquí habría que modificar la imagen
            $exercise->category = $request->category;
            $exercise->difficulty = $request->difficulty;
            $exercise->save();

            return "Ejercicio estándar creado con éxito: " . $exercise;
        } catch (Exception $e) {
            return "No se ha podido crear el ejercicio estándar: " . $e->getMessage();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $exercise = StandardExercise::findOrFail($id);
            return $exercise;
        } catch (Exception $e) {
            return "No se ha podido encontrar el ejercicio estándar: " . $e->getMessage();
        }
    }


    /**
    * Show the form for editing the specified resource.
    */
    public function edit(StandardExercise $exercise)
    {
        //Aquí hace el return de la vista de edición
        // Inertia::render('StandardExercise/EditStandardExercise', [
        //     'exercise' => $exercise,
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        try {
            $exercise = StandardExercise::findOrFail($request->id);
            $exercise->name = $request->name;
            $exercise->description = $request->description;
            $exercise->image = $request->image;
            //Aquí habría que modificar la imagen
            $exercise->category = $request->category;
            $exercise->difficulty = $request->difficulty;
            $exercise->save();

            return "Ejercicio estándar actualizado con éxito: ". $exercise;
        } catch (Exception $e) {
            return "No se pudo editar el ejercicio estándar:" . $e->getMessage();
        }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $exercise = StandardExercise::findOrFail($id);
            $exercise->delete();

            return "Ejercicio estándar eliminado con éxito: " .  $exercise;
        } catch (Exception $e) {
            return "No se puedo eliminar el ejercicio estándar: " . $e->getMessage();
        }
    }
}
