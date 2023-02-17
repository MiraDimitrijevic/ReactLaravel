<?php

namespace App\Http\Controllers;

use App\Models\Zaposleni;
use Illuminate\Http\Request;
use App\Http\Resources\ResourceZaposleni;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;



class ZaposleniController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ['zaposleni' => ResourceZaposleni::collection(Zaposleni::get())];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'imePrezime' => 'required|string|max:50',
            'email' => 'required|string|max:40|email|unique:zaposlenis',
            'password' => 'required|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/|string|min:8',
            'pol'=>'required|in:m,z',
            'odeljenje_id'=>'required'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());

            $zaposleni = Zaposleni::create([
                'imePrezime' => $request->imePrezime,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'pol'=>$request->pol,
                'odeljenje_id'=>$request->odeljenje_id
            ]);

        return response()->json(['Uspesno ste uneli novog zaposlenog', new ResourceZaposleni($zaposleni)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Zaposleni  $zaposleni
     * @return \Illuminate\Http\Response
     */
    public function show(Zaposleni $zaposleni)
    {
        return new ResourceZaposleni($zaposleni);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Zaposleni  $zaposleni
     * @return \Illuminate\Http\Response
     */
    public function edit(Zaposleni $zaposleni)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Zaposleni  $zaposleni
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Zaposleni $zaposleni)
    {
        $validator = Validator::make($request->all(), [
            'imePrezime' => 'required|string|max:50',
            'email' => 'required|string|max:40|email|unique:zaposlenis',
            'password' => 'required|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/|string|min:8',
            'pol'=>'required|in:m,z',
            'odeljenje_id'=>'required'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());

            $zaposleni->imePrezime = $request->imePrezime;
            $zaposleni->email = $request->email;
            $zaposleni->password = $request->password;
            $zaposleni->pol = $request->pol;
        
            $zaposleni->odeljenje_id = $request->odeljenje_id;
        
            $zaposleni->save();

        return response()->json(['Uspesno ste izmeni podatke o zaposlenom', new ResourceZaposleni($zaposleni)]);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Zaposleni  $zaposleni
     * @return \Illuminate\Http\Response
     */
    public function destroy(Zaposleni $zaposleni)
    {
        $zaposleni->delete();
        return response()->json('Zaposleni je uspešno obrisan');

    }
}
