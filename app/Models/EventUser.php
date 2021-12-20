<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventUser extends Model
{
    use HasFactory;

    protected $table = 'event_user';

    protected $guarded = ['id'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
