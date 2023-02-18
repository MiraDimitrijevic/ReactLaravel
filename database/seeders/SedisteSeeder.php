<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Sediste;



class SedisteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Sediste::truncate();
       Sediste:: create(
        ['grad'=>'Beograd',
        'adresa'=>'Jurija Gagarina 32a',

       ]
       ); 
        Sediste:: create(
       
       ['grad'=>'Novi Sad',
       'adresa'=>'Jevrejska 99b',

      ]
       ); 
       
       Sediste:: create(
       
      ['grad'=>'Beograd',
      'adresa'=>'Bulevar kralja Aleksandra 38b',

     ]
       );
    }
}
