<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventTool extends Model
{
    use HasFactory;

    protected $table = 'event_tool';

    protected $guarded = ['id'];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function tool()
    {
        return $this->belongsTo(Tool::class);
    }
}
