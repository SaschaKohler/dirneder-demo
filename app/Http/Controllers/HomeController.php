<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index()
    {
        if(Auth::check() && Auth::user()->role === 1) {
            $data = Event::query()
                ->with('customer')
                ->with('employees')
                ->get();
            return Inertia::render('home', [
                'events' => $data
            ]);
        } else {

            $data = Event::query()->whereHas('employees', function($query) {
                $query->where('user_id','=', Auth::id());
            })
                ->with('customer')
                ->with('employees')
                ->get();
            return Inertia::render('employer', [
                'events' => $data
            ]);
        }

    }
}
