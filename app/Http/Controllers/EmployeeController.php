<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index(Request $request)
    {
        $data = Event::query()->whereHas('employees', function ($query) {
            $query->where('user_id', '=', Auth::id());
        })
            ->with('customer')
            ->with('employees')
            ->with('vehicles')
            ->get();
        return Inertia::render('employer/index', [
            'events' => $data
        ]);
    }

    public function edit($id)
    {
        return Inertia::render('employer/edit', [
            'user' => User::findOrFail($id)
        ]);


    }

    public function update(Request $request, $id)
    {

        $user = User::find($id);

        $data = $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            'phone1' => 'required|string',
            'phone2' => 'sometimes|nullable',
            'address' => 'required|string',
            'password' => 'sometimes|nullable',
            'mon' => 'nullable',
            'tue' => 'nullable',
            'wed' => 'nullable',
            'thu' => 'nullable',
            'fri' => 'nullable',
        ]);
        $user->update($data);

        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz geändert!',
        ]);
    }

    public function events(Request $request)
    {
        $data = Event::query()->whereHas('employees', function ($query) {
            $query->where('user_id', '=', Auth::id());
        })
            ->when($request->sort_by, function ($query, $value) {
                $query->orderBy($value, request('order_by', 'asc'));
            })
            ->when(!isset($request->sort_by), function ($query) {
                $query->latest();
            })
            ->when($request->search, function ($query, $value) {
                $query->where('type', 'LIKE', '%' . $value . '%');
            })
            ->with('customer')
            ->with('employees')
            ->with('vehicles')
            ->paginate($request->page_size ?? 10);
        return Inertia::render('employer/events', [
            'items' => $data
        ]);
    }

    public function eventUpdate(Request $request, Event $event)
    {
        $data = $this->validate($request, [

            'startTime' => 'required|date_format:H:i',
            'endTime' => 'required|date_format:H:i',

        ]);

        $event->update($data);

        $workingHours = Carbon::parse($request['endTime'])->diff(Carbon::parse($request['startTime']))->format('%H:%I');

        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Arbeitszeit ' .$workingHours. ' erfasst',
        ]);
    }


}
