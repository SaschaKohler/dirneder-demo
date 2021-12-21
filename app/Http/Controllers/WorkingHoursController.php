<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkingHoursController extends Controller
{
    public function index()
    {
        $data = Event::with('employees')->paginate($request->page_size ?? 10);


        return Inertia::render('workingHours/index', [
            'events' => $data,
        ]);
    }


}
