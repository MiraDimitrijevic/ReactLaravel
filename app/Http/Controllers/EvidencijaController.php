<?php

namespace App\Http\Controllers;

use App\Models\Evidencija;
use Illuminate\Http\Request;
use App\Http\Resources\ResourceEvidencija;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;



class EvidencijaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ['evidencije' => ResourceEvidencija::collection(Evidencija::get())];

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
            'datum'=>'required|date_format:Y-m-d|after_or_equal:now',
            'vremeOd'=>'date_format:H:i:s|required',
            'zaposleni_id'=>'required'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors());

        $evidencija = Evidencija::create([
            'datum' =>$request->datum,
            'vremeOd' =>$request->vremeOd,
            
            'zaposleni_id' => $request->zaposleni_id,
          
           'user_id' => Auth::user()->id,
        ]);

        return response()->json(['Uspesno ste evidentirali dolazak zaposlenog', new ResourceEvidencija($evidencija)]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Evidencija  $evidencija
     * @return \Illuminate\Http\Response
     */
    public function show(Evidencija $evidencija)
    {
        return new ResourceEvidencija($evidencija);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Evidencija  $evidencija
     * @return \Illuminate\Http\Response
     */
    public function edit(Evidencija $evidencija)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Evidencija  $evidencija
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Evidencija $evidencija)
    {
        {$validator = Validator::make($request->all(), [
            'vremeDo' => 'required|date_format:H:i:s',
        ]);
    
        if ($validator->fails())
            return response()->json($validator->errors());
    
        $evidencija->vremeDo = $request->vremeDo;
    
    
        $evidencija->save();
    
        return response()->json(['Uspesno ste evidentirali vreme odlaska zaposlenog.', new ResourceEvidencija($evidencija)]);
    }
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Evidencija  $evidencija
     * @return \Illuminate\Http\Response
     */
    public function destroy(Evidencija $evidencija)
    {
        //
    }
}
