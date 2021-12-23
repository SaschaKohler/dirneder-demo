<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkingHoursController extends Controller
{

    public function index(Request $request)
    {
        $data = Event::when($request->search, function ($query, $value) {
            $query->whereHas('employees', function ($query) use ($value) {
                $query->where('users.name', 'Like', '%' . $value . '%');
            })
                ->orWhereHas('customer', function ($query) use ($value) {
                    $query->where('lastName', 'LIKE', '%' . $value . '%');
                })
                ->orWhereHas('vehicles', function ($query) use ($value) {
                    $query->where('branding', 'LIKE', '%' . $value . '%');
                });
        })
            ->with('employees')
            ->with('vehicles')
            ->with('customer')
            ->paginate($request->page_size ?? 10);

        $sum = Event::when($request->search, function ($query, $value) {
            $query->whereHas('employees', function ($query) use ($value) {
                $query->where('users.name', 'Like', '%' . $value . '%');
            })
                ->orWhereHas('vehicles', function ($query) use ($value) {
                    $query->where('branding', 'LIKE', '%' . $value . '%');
                });
        })
            ->with('employees')
            ->with('vehicles')
            ->sum('workingHours');


        return Inertia::render('workingHours/index', [
            'events' => $data,
            'count' => Event::count(),
            'sumOfHours' => $sum

        ]);
    }


}
