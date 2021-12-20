<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class EmployeeCategory extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('H:i, d M Y');
    }


    public function employees()
    {
        return $this->hasMany(User::class);
    }

}
