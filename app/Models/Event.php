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

    ];

//    public function getCreatedAtAttribute($value)
//    {
//        return Carbon::parse($value)->format('d M y');
//    }


    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function employees()
    {
        return $this->belongsToMany(User::class,'event_user');
    }
}
