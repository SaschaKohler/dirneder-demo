<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Employee;
use App\Models\Event;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
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
                $query->where('type', 'LIKE', '%' . $value . '%');
            })
            ->with('customer')
            ->with('employees')
            ->with('vehicles')
            ->paginate($request->page_size ?? 10);
        return Inertia::render('event/index', [
            'items' => $data,
            'customers' => Customer::all(),
            'employees' => User::all(),
            'vehicles' => Vehicle::all(),
            'count' => Event::count(),
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
            'employees' => 'required|array|min:1',
            'vehicles' => 'required|array|min:1',
        ]);


        $event = Event::create($data);
        $event->employees()->sync($request->employees);
        $event->vehicles()->sync($request->vehicles);
        $event->save();


        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz erstellt!',
        ]);
    }

    public function update(Event $event, Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string',
            'color' => 'nullable',
            'start' => 'required',
            'end' => 'required',
            'type' => 'required|string',
            'customer_id' => 'required|integer',
            'notes' => 'nullable',
            'employees' => 'required|array|min:1',
            'vehicles' => 'required|array|min:1',
        ]);

        $employees = $request->employees;
        $vehicles = $request->vehicles;
//        $plannedDate = Carbon::createFromFormat('Y-m-d H:i:s', $data['planned'])->format('d-m-Y');
//        $currentEventId = $event;
//        $currentEventId->toArray()['id'];
//
//        $warning = false;
//
//        foreach ($vehicles as $vehicle) {
//
//            $event = Event::whereHas('vehicles', function ($query) use ($vehicle) {
//                return $query->where('vehicle_id', '=', $vehicle);
//            })->where('id', '<>', $currentEventId)->get()->toArray();
//
//            if ($event) {
//                $vehicle = Vehicle::find($vehicle)->toArray();
//                // $vehicle_array = array();
//                $eventPlanned = Carbon::createFromFormat('Y-m-d H:i ', $event[0]['planned'])->format('d-m-Y');
//                if ($plannedDate == $eventPlanned) {
//                    $warning = true;
//                    $vehicle_array[] = $vehicle;
//
//                }
//            }
//        }
//
//        if ($warning) {
//
//
//            return redirect()->back()->with('message', [
//                'type' => 'error',
//                'text' => $vehicle_array . 'in verwendung '
//            ]);
//        }


//
//        foreach ($employees as $employer){
//
//            $event = Event::whereHas('employees' , function($query) use ($employer) {
//                return $query->where('user_id' , '=' , $employer );
//            })->get()->toArray();
//
//            $employerInUse = User::find($employer)->toArray();
//
//            $eventStart = Carbon::createFromFormat('Y-m-d H:i:s',$event[0]['start'] )->format('d-m-Y');
//            if(($startDate >= $eventStart) || ($startDate <= $endDate)){
//                return redirect()->back()->with('message', [
//                    'type' => 'error',
//                    'text' =>  $employerInUse['name'] . ' bereits für '. $eventStart .' gebucht',
//                ]);
//            }
//        }


        if (!is_array($employees[0])) {
            $event->employees()->sync($request->employees);
            $event->save();
        }
        if (!is_array($vehicles[0])) {
            $event->vehicles()->sync($request->vehicles);
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

    public function exportCSV()
    {
        $data = Event::all();

        $handle = fopen('export.csv', 'w');

        foreach ($data as $row) {
            fputcsv($handle, $row->toArray(), ';');
        }

        fclose($handle);
    }
}
