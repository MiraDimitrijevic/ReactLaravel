<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class OdeljenjeUserControler extends Controller
{
    public function index($odeljenje_id) {
        $users=User::get()->where('odeljenje_id', $odeljenje_id);
        if(is_null($users)) return response()->json("Odeljenje nema nijednog zaposlenog",404);
        else  return response()->json($users);
           }
}
