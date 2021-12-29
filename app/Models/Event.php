<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Event extends Model
{
    use HasFactory;

    protected $table = 'events';

    protected $guarded = ['id'];

    protected $casts = [
        'startTime' => 'datetime: H:i',
        'endTime' => 'datetime: H:i',
    ];

    public function scopeWorkingHoursSum($query, $value)
    {
        $query->whereHas('employees', function ($query) use ($value) {
            $query->where('users.name', 'Like', '%' . $value . '%');
        });

    }

    public function events()
    {
        return $this->hasMany(Event::class,'event_id','id');
    }

    public function event()
    {
        return $this->belongsTo(Event::class,'event_id');
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function employees()
    {
        return $this->belongsToMany(User::class, 'event_user')->withTimestamps();
    }

    public function vehicles()
    {
        return $this->belongsToMany(Vehicle::class, 'event_vehicle')->withTimestamps();
    }

    public function tools()
    {
        return $this->belongsToMany(Tool::class, 'event_tool')
            ->withTimestamps()->withPivot('deviceUsePerEvent');
    }


}
