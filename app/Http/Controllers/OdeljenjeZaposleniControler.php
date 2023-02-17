<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Zaposleni;

class OdeljenjeZaposleniControler extends Controller
{
    public function index($odeljenje_id) {
        $zaposleni=Zaposleni::get()->where('odeljenje_id', $odeljenje_id);
        if(is_null($zaposleni)) return response()->json("Odeljenje nema nijednog zaposlenog",404);
        else  return response()->json($zaposleni);
           }
}
