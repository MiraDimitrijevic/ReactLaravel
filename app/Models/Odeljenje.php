<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Odeljenje extends Model
{



    protected $fillable = [
        'naziv',
        'opis',
      
    ];
    use HasFactory;

    public function users(){
        return $this->hasMany(User::class);
    }

    public function zaposlenis(){
        return $this->hasMany(Zaposleni::class);
    }
}
