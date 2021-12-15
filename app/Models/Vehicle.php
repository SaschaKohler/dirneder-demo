<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $casts = [
        'inspection' => 'date:M \'y',
        'created_at' => 'date:d-m-Y',
    ];

    public function events()
    {
        return $this->belongsToMany(Event::class,'event_vehicle');
    }

}
