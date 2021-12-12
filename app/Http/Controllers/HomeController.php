<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $data = Event::query()
            ->with('customer')
            ->with('employees')
            ->get();
        return Inertia::render('home',[
            'events' => $data
        ]);
    }
}
