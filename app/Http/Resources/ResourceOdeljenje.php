<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ResourceSediste;


class ResourceOdeljenje extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap='odeljenje';

    public function toArray($request)
    {
        return [
            'id'=>$this->resource->id,
            'naziv'=>$this->resource->naziv,
        
            'opis'=>$this->resource->opis,
            'sediste'=> new ResourceSediste($this->resource->sediste),


        ];
    }
}
