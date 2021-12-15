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
            $data = Event::query()
                ->with('customer')
                ->with('employees')
                ->get();
            return Inertia::render('home', [
                'events' => $data
            ]);

    }
}
