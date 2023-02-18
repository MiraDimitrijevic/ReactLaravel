<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ResourceSediste extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap='sediste';
    public function toArray($request)
    {
        return [
            'id'=>$this->resource->id,
            'grad'=>$this->resource->grad,
        
            'adresa'=>$this->resource->adresa
            

        ];    }
}
