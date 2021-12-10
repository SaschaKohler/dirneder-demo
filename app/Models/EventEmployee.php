<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventEmployee extends Model
{
    use HasFactory;

    protected $table = 'event_employee';

    protected $guarded = ['id'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
