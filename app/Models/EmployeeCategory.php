<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class EmployeeCategory extends Model
{
    use HasFactory;

    protected $guarded = ['id'];




    public function employees()
    {
        return $this->hasMany(User::class);
    }

}
