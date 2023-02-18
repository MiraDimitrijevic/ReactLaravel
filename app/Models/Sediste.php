<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sediste extends Model
{

    protected $fillable = [
        'grad',
        'adresa',
      
    ];

    public function odeljenjes(){
        return $this->hasMany(Odeljenje::class);
    }


    use HasFactory;
}
