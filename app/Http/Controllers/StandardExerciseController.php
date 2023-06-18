<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\StandardExercise;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
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

    function showRoutines($id, $userId)
    {
        try {
            $routinesTitles = [];
            $relationRows = DB::table('standard_exercise_routine')->where('standard_exercise_id', $id)->get();
            foreach ($relationRows as $routineInRelationship) {
                $routineData = DB::table('routines')
                ->where('id', $routineInRelationship->routine_id)
                ->where('user_id', $userId)
                ->get();
                array_push($routinesTitles, $routineData->title);
            }
            return json_encode($routinesTitles);
        } catch (Exception $e) {
            return "No se han podido recuperar las rutinas que contienen dicho ejercicio: " . $e->getMessage();
        }
    }

    /**
     * Display a listing of the resource in the administrator view.
     */
    public function indexAdmin()
    {
        $exercises = StandardExercise::all();
        return Inertia::render('Admin/Standard/StandardPanel', [
            'exercises' => $exercises,
        ]);
    }

    /**
     * Display a listing of the resource in JSON format.
     */
    public function indexApi()
    {
        $exercises = StandardExercise::all();
        return str_replace('\/', '/', str_replace('\/\/', '//', $exercises));
    }

    /**
     * Return the view for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Standard/CreateStandard');
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
     * Display the specified resource in JSON format.
     */
    public function showApi($id)
    {
        try {
            $exercise = StandardExercise::findOrFail($id);
            return str_replace('\/', '/', str_replace('\/\/', '//', $exercise));
        } catch (Exception $e) {
            return "No se ha podido encontrar el ejercicio estándar: " . $e->getMessage();
        }
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

            return "Ejercicio estándar actualizado con éxito: " . $exercise;
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
