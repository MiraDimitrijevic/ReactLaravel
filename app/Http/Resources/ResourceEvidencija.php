<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ResourceZaposleni;
use App\Http\Resources\ResourceUser;

class ResourceEvidencija extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public static $wrap='evidencija';

    public function toArray($request)
    {
        return [
            'datum'=>$this->resource->datum,
            'vremeOd'=>$this->resource->vremeOd,
            'vremeDo'=>$this->resource->vremeDo,
            
            'evidentirao/la'=> new ResourceUser($this->resource->user),
            'zaposleni'=> new ResourceZaposleni($this->resource->zaposleni)
            

        ];
    }
}
