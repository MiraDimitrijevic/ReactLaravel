<?php

namespace App\Http\Controllers;

use App\Models\Sediste;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ResourceSediste;


class SedisteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ['sedista' => ResourceSediste::collection(Sediste::get())];

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
     * @param  \App\Models\Sediste  $sediste
     * @return \Illuminate\Http\Response
     */
    public function show(Sediste $sediste)
    {
        return new ResourceSediste($sediste);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sediste  $sediste
     * @return \Illuminate\Http\Response
     */
    public function edit(Sediste $sediste)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sediste  $sediste
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sediste $sediste)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sediste  $sediste
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sediste $sediste)
    {
        //
    }
}
