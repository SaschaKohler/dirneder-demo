<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Employee extends Model
{
    use HasFactory;

    protected $guarded = ['id'];


    public function events()
    {
        return $this->belongsToMany(Event::class,'event_user');
    }

    public function category()
    {
        return $this->belongsTo(EmployeeCategory::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
