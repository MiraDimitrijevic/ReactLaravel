<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\ResourceUser;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ['zaposleni' => ResourceUser::collection(User::get())];
     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($user_id)
    {
        $user=User::find($user_id);
        
        if(is_null($user)){
        
        return response()->json('Data not found', 404);}
        
        return response()->json(new ResourceUser($user));
        
        
    
}
public function join(int $idi){
    $zaposleni = User::join('odeljenjes', 'odeljenjes.id', '=', 'users.odeljenje_id')
    ->where('users.id','!=', $idi)
    ->get(['users.id','users.name','users.email','users.pol','odeljenjes.naziv']);
    return response()->json($zaposleni);
}
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }
    public function getById($id)
    {
        $user = User::findOrFail($id);

        return new ResourceUser($user);
 
    }

    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $user_id)
    {
        $user=User::find($user_id);
        if(is_null($user)){
            return response()->json('Zaposleni sa ovim idjem ne postoji', 404);      }
            
        $user->delete();

        return response()->json(['success'=>true]);
        
        
    }
}
