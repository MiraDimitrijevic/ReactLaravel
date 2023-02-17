<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvidencijasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evidencijas', function (Blueprint $table) {
            $table->id();
            $table->date('datum');
            $table->time('vremeOd');
            $table->time('vremeDo');
            $table->foreignId('zaposleni_id');
            $table->foreignId('user_id');
            $table->unique(['datum','zaposleni_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evidencijas');
    }
}
