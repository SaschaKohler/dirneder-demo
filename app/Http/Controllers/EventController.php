<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Employee;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Illuminate\Support\Carbon;


class EventController extends Controller
{

    public function index(Request $request)
    {
        $data = Event::when($request->sort_by, function ($query, $value) {
            $query->orderBy($value, request('order_by', 'asc'));
        })
            ->when(!isset($request->sort_by), function ($query) {
                $query->latest();
            })
            ->when($request->search, function ($query, $value) {
                $query->where('name', 'LIKE', '%' . $value . '%');
            })
            ->with('customer')
            ->with('employees')
            ->paginate($request->page_size ?? 10);
        return Inertia::render('event/index', [
            'items' => $data,
            'customers' => Customer::all(),
            'employees' => Employee::all()
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string',
            'color' => 'required',
            'start' => 'required',
            'end' => 'required',
            'type' => 'required|string',
            'customer_id' => 'required|integer',
            'notes' => 'nullable',
            'employees' => 'required'
        ]);

        Event::create($data);
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz erstellt!',
        ]);
    }

    public function update(Event $event, Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string',
            'start' => 'required',
            'end' => 'required',
            'type' => 'required|string',
            'customer_id' => 'required|integer',
            'notes' => 'nullable',
            'employees' => 'required|array|min:1',
            //  'employees.*' => 'numeric'
        ]);

        $employees = $request->employees;

        if (!is_array($employees[0])) {
            $event->employees()->sync($request->employees);
            $event->save();
        }

        $event->update($data);

        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz geändert!',
        ]);
    }

    public function destroy(Event $event)
    {
        $event->delete();
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz gelöscht!',
        ]);
    }
}
