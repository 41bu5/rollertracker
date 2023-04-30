<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Auth\RegisteredUserController;
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
        $controller = new RegisteredUserController();
        $controller->create();
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
        $user = User::find($id);
        return $user;
    }

     /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        // Inertia::render('User/Edit', [
        //     'user' => $user,
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $user = User::find($request->id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    }
}
