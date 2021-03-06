<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Event;
use App\Models\User;
use App\Models\Vehicle;
use App\Notifications\NewEventPublished;
use Illuminate\Http\Request;
use Inertia\Inertia;


class EventController extends Controller
{

    protected function notify(Request $request,Event $event)
    {
        // next we send messages via databank to each employee
        // here we have to check whether $request->employees comes as an array of array or just as an array of id's
        // when something changed we get only an array of the id's of each employess -> first foreach
        // if nothing is updated at the team it comes as an array of each employee  -> second foreach (indexing id)

        $employees = $request->employees;

        if (!is_array($employees[0])) {

            foreach ($employees as $employer) {

                $user = User::find($employer);

                $user->notify(new NewEventPublished($event, $user));

            }
        } else {
            foreach ($employees as $employer) {

                $user = User::find($employer['id']);

                $user->notify(new NewEventPublished($event, $user));

            }
        }
    }

    public function index(Request $request)
    {
        $data = Event::when($request->sort_by, function ($query, $value) {
            $query->orderBy($value, request('order_by', 'asc'));
        })
            ->when(!isset($request->sort_by), function ($query) {
                $query->latest('updated_at');
            })
            ->when($request->search, function ($query, $value) {
                $query->where('type', 'LIKE', '%' . $value . '%')
                    ->orWhere('name', 'LIKE', '%' . $value . '%')
                    ->orWhereHas('employees', function ($query) use ($value){
                        $query->where('users.name','LIKE','%' . $value . '%' );
                    })
                    ->orWhereHas('customer', function ($query) use ($value){
                        $query->where('customers.lastName','LIKE','%' .$value . '%');
                    });
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
            'end' => 'nullable',
            'type' => 'required|string',
            'customer_id' => 'required|integer',
            'recurrence' => 'required',
            'notes' => 'nullable',
            'employees' => 'required|array|min:1',
            'vehicles' => 'required|array|min:1',
        ]);

        $event = Event::create($data);

        $vehicleIds = array();
        $employeeIds =array();

        // <v-select>  returns whole object in order to reference working days maybe
        foreach ($request->employees as $employee) {
            $employeeIds[] = $employee['id'];
        }

        foreach ($request->vehicles as $vehicle) {
            $vehicleIds[] = $vehicle['id'];
        }

        $event->end = $data['start'];
        $event->employees()->sync($employeeIds);
        $event->vehicles()->sync($vehicleIds);
        $event->save();

        $this->notify($request,$event);

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
            'end' => 'nullable',
            'type' => 'required|string',
            'customer_id' => 'required|integer',
            'notes' => 'nullable',
            'recurrence' => 'nullable',
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

        if (!is_array($employees[0])) {

            $event->employees()->sync($request->employees);
            $event->save();
        }

        if (!is_array($vehicles[0])) {
            $event->vehicles()->sync($request->vehicles);
            $event->save();
        }

        $event->end = $request['start'];   // put end of event same as start !

        $event->update($data);

        $this->notify($request,$event);

        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz ge??ndert!',
        ]);
    }

    public function destroy(Event $event)
    {
        $event->delete();
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz gel??scht!',
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
