<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Club;
use Exception;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clubs = Club::all();
        return $clubs;
    }

    /**
     * Return the view for creating a new resource.
     */
    public function create()
    {
        //Aquí hace el return de la vista de creación
        // Inertia::render('Club/CreateClub');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $club = new Club();
            $club->name = $request->name;
            $club->c_autonoma = $request->c_Autonoma;
            $club->city = $request->city;
            $club->logo = $request->logo;
            $club->phone = $request->phone;
            $club->email = $request->email;
            $club->instagram = $request->instagram;
            $club->facebook = $request->facebook;
            $club->save();

            return "Club creado con éxito: " . $club;
        } catch (Exception $e) {
            return "No se ha podido crear el club: " . $e->getMessage();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $club = Club::findOrFail($id);
            return $club;
        } catch (Exception $e) {
            return "No se ha podido encontrar el club: " . $e->getMessage();
        }
    }


    /**
    * Show the form for editing the specified resource.
    */
    public function edit(Club $club)
    {
        //Aquí hace el return de la vista de edición
        // Inertia::render('Club/EditClub', [
        //     'club' => $club,
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        try {
            $club = Club::findOrFail($request->id);
            $club->name = $request->name;
            $club->c_autonoma = $request->c_Autonoma;
            $club->city = $request->city;
            $club->logo = $request->logo;
            $club->phone = $request->phone;
            $club->email = $request->email;
            $club->instagram = $request->instagram;
            $club->facebook = $request->facebook;
            $club->save();

            return "Club actualizado con éxito: ". $club;
        } catch (Exception $e) {
            return "No se pudo editar el club:" . $e->getMessage();
        }
    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $club = Club::findOrFail($id);
            $club->delete();

            return "Club eliminado con éxito: " .  $club;
        } catch (Exception $e) {
            return "No se puedo eliminar el club: " . $e->getMessage();
        }
    }
}
