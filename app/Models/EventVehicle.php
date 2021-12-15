<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventVehicle extends Model
{
    use HasFactory;

    protected $table = 'event_vehicle';

    protected $guarded = ['id'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }
}
