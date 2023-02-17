<?php

namespace App\Http\Controllers;

use App\Models\Odeljenje;
use Illuminate\Http\Request;
use App\Http\Resources\ResourceOdeljenje;



class OdeljenjeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ['odeljenja' => ResourceOdeljenje::collection(Odeljenje::get())];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Odeljenje  $odeljenje
     * @return \Illuminate\Http\Response
     */
    public function show(Odeljenje $odeljenje)
    {
        return new ResourceOdeljenje($odeljenje);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Odeljenje  $odeljenje
     * @return \Illuminate\Http\Response
     */
    public function edit(Odeljenje $odeljenje)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Odeljenje  $odeljenje
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Odeljenje $odeljenje)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Odeljenje  $odeljenje
     * @return \Illuminate\Http\Response
     */
    public function destroy(Odeljenje $odeljenje)
    {
        //
    }
}
