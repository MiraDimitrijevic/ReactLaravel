<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Evidencija;


class ZaposleniEvidencijaControler extends Controller
{
    public function index($zaposleni_id) {
        $evidencije=Evidencija::get()->where('zaposleni_id', $zaposleni_id);
        if(is_null($evidencije)) return response()->json("Za zaposlenog ne postoji nijedna evidencija",404);
        else  return response()->json($evidencije);
           }
}
