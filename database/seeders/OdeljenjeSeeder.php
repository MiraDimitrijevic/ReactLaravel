<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Odeljenje;


class OdeljenjeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Odeljenje::truncate();
        Odeljenje::create(
            ['naziv'=>'Administracija',
            'opis'=>'Odeljenje za unos evidencija',
            'sediste_id'=>1
              
            ]
          
          

        );
        Odeljenje::create(
          
            ['naziv'=>'Finansije',
            'opis'=>'Odeljenje za obradu finansija',
            'sediste_id'=>2
              
            ]
          
          

        );
        Odeljenje::create(
         
            ['naziv'=>'Marketing',
            'opis'=>'Odeljenje za odnose sa javnošću i reklame',
            'sediste_id'=>2
              
            ]
          

        );
    }
}
