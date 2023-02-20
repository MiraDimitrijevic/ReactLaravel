<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Evidencija;
use App\Http\Resources\ResourceEvidencija;



class UserEvidencijaControler extends Controller
{
    public function index($user_id) {
        $evidencije=Evidencija::get()->where('zaposleni_id', $user_id);
        if(is_null($evidencije)) return response()->json("Za zaposlenog ne postoji nijedna evidencija",404);
        else         return ['evidencije' => ResourceEvidencija::collection(Evidencija::get()->where('zaposleni_id', $user_id))];
  
           }
}
