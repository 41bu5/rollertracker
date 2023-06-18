<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Club;
use Exception;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Log;

class ClubController extends Controller
{
    /**
     * Display a listing of the resource for the guest view.
     */
    public function indexGuest()
    {
        $clubs = Club::all();
        return Inertia::render('Club/ClubPage', [
            'clubs' => $clubs,
        ]);
    }

    /**
     * Display a listing of the resource for the administrator view.
     */
    public function indexAdmin() {
        $clubs = Club::all();
        return Inertia::render('Admin/Club/ClubPanel', [
            'clubs' => $clubs,
        ]);
    }

    /**
     * Display a listing of the resource in a string response.
     */
    public function indexApi() {
        $clubs = Club::all();
        return mb_convert_encoding(str_replace('\/', '/', str_replace('\/\/', '//', $clubs)), "UTF-8");
    }

    /**
     * Return the view for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Club/CreateClub');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $club = new Club();
            $club->name = $request->input('name');
            $club->c_autonoma = $request->input('c_autonoma');
            $club->zona = $request->input('zona');
            // $logoName = time().'.'.$request->file('logo')->extension();
            // $request->file('logo')->move(storage_path('app/public/images/club_logos'), $logoName);
            // $club->logo = URL::to('/') . '/club-logos/' . $logoName;
            $club->logo = 'holi';
            $club->web = $request->input('web') ? $request->input('web') : null;
            $club->email = $request->input('email') ? $request->input('email') : null;
            $club->instagram = $request->input('instagram') ? $request->input('instagram') : null;
            $club->facebook = $request->input('facebook') ? $request->input('instagram') : null;
            $club->save();

            return 'Club creado con éxito ' . $club;
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
     * Display the specified resource in JSON format.
     */
    public function showApi($id) {
        try {
            $club = Club::findOrFail($id);
            return mb_convert_encoding(str_replace('\/', '/', str_replace('\/\/', '//', $club)), "UTF-8");
        } catch (Exception $e) {
            return "No se ha podido encontrar el club: " . $e->getMessage();
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        try {
            $club = Club::findOrFail($request->id);
            $club->name = $request->name;
            $club->c_autonoma = $request->c_autonoma;
            $club->zona = $request->zona;
            // $logoName = $request->file('logo') ?  $this->updateLogo($request->file('logo')) : $club->logo;
            $logoName = $club->logo;
            $club->logo = $logoName;
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

    public function updateLogo($logoData) {
        $logoName = time().'.'.$logoData->extension();
        $logoData->move(public_path('club-logos'), $logoName);
        return URL::to('/').$logoName;
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
