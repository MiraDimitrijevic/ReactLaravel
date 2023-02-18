<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Odeljenje extends Model
{



    protected $fillable = [
        'naziv',
        'opis',
        'sediste_id',
      
    ];
    use HasFactory;

    public function users(){
        return $this->hasMany(User::class);
    }

   

    
    public function sediste(){
        return $this->belongsTo(Sediste::class, 'sediste_id');
    } 
}
