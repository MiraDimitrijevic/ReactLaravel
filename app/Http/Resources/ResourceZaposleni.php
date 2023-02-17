<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ResourceOdeljenje;


class ResourceZaposleni extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap='zaposleni';

    public function toArray($request)
    {
        return  [
            'id'=>$this->resource->id,
            'ime i prezime'=>$this->resource->imePrezime,
            'email'=>$this->resource->email,
            'pol'=>$this->resource->pol,
            'odeljenje_id'=> new ResourceOdeljenje($this->resource->odeljenje)
            
            

        ];
    }
}
