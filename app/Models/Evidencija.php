<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evidencija extends Model
{



    protected $fillable = [
        'datum',
        'vremeOd',
        'vremeDo',
        'zaposleni_id',
        'user_id',
      
    ];

    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    } 
    public function zaposleni(){
        return $this->belongsTo(Zaposleni::class, 'zaposleni_id');
    }
}
