<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Auth\RegisteredUserController;
use Exception;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return Inertia::render('Admin/User/UserPanel',[
            'users' => $users,
        ]);
    }

    /**
     * Display a listing of the resource for the administrator view.
     */
    public function indexAdmin()
    {
        $users = User::all();
        return Inertia::render('Admin/User/UserPanel',[
            'users' => $users,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/User/CreateUser');
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
