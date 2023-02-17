<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ResourceUser extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap='administrator';

    public function toArray($request)
    {
        return  [
            'id'=>$this->resource->id,
            'ime i prezime'=>$this->resource->name,
            'email'=>$this->resource->email,
            'pol'=>$this->resource->pol,
            
            

        ];
    }
}
