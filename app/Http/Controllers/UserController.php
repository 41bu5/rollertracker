<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Auth\RegisteredUserController;
use Exception;

// use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function create()
    {
        //Aquí hace el return de la vista de creación
        // Inertia::render('User/CreateUser');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    
        $controller = new RegisteredUserController();
        $controller->store($request);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $user = User::findOrFail($id);
            return $user;
        } catch (Exception $e) {
            return "No se ha podido encontrar el usuario: " . $e->getMessage();
        }
    }

     /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //Aquí hace el return de la vista de edición
        // Inertia::render('User/EditUser', [
        //     'user' => $user,
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        try  {
            $user = User::find($request->id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->save();  

            return "Usuario actualizado con éxito: " . $user;
        } catch (Exception $e) {
            return "No se ha podido actualizar el usuario: " . $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            return "Usuario eliminado con éxito: " .  $user;
        } catch (Exception $e) {
            return "No se puedo eliminar el usuario: " . $e->getMessage();
        }
    }
}
