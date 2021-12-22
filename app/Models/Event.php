<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Event extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $casts = [
        'startTime' => 'datetime: H:i',
        'endTime' => 'datetime: H:i'

    ];

    public function scopeWorkingHoursSum($query,$value)
    {
        $query->whereHas('employees', function ($query) use ($value) {
            $query->where('users.name', 'Like', '%' . $value . '%');
        });

    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function employees()
    {
        return $this->belongsToMany(User::class,'event_user')->withTimestamps();
    }

    public function vehicles()
    {
        return $this->belongsToMany(Vehicle::class,'event_vehicle')->withTimestamps();
    }

}
