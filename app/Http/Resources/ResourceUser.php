<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ResourceOdeljenje;


class ResourceUser extends JsonResource
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
            'name'=>$this->resource->name,
            'email'=>$this->resource->email,
            'pol'=>$this->resource->pol,
            'admin'=>$this->resource->admin,
            'odeljenje'=> new ResourceOdeljenje($this->resource->odeljenje)

            

        ];
    }
}
