<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Zaposleni extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'imePrezime',
        'email',
        'password',
        'pol',
        'odeljenje_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
       
    ];

    public function odeljenje(){
        return $this->belongsTo(Odeljenje::class, 'odeljenje_id');
    }

    public function evidencijas(){
        return $this->hasMany(Evidencija::class);
    }
}
