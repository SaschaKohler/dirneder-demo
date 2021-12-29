<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Tool;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EmployeeController extends Controller
{

    protected $user;

    public function __construct(User $user)
    {

    }


    public function index(Request $request)
    {
        $data = Event::query()->whereHas('employees', function ($query) {
            $query->where('user_id', '=', Auth::id());
        })
            ->with('customer')
            ->with('employees')
            ->with('vehicles')
            ->get();

        $user = User::find(Auth::id());
        $notifications = $user->unreadNotifications;
        return Inertia::render('employer/index', [
            'events' => $data,
            'notifications' => $notifications
        ]);
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        $notifications = $user->unreadNotifications;

        return Inertia::render('employer/edit', [
            'user' => $user,
            'notifications' => $notifications
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
            ->with('tools')
            ->paginate($request->page_size ?? 10);

        $user = User::find(Auth::id());
        $notifications = $user->unreadNotifications;

        return Inertia::render('employer/events', [
            'items' => $data,
            'notifications' => $notifications,
            'tools' => Tool::all(),
        ]);
    }

    public function eventUpdate(Request $request, Event $event)
    {
        $data = $this->validate($request, [

            'startTime' => 'required|date_format:H:i',
            'endTime' => 'required|date_format:H:i',

        ]);

        $workingHours = Carbon::parse($request['endTime'])->diff(Carbon::parse($request['startTime']))->format('%H:%i');
        $diff = Carbon::parse($request['endTime'])->diffInHours(Carbon::parse($request['startTime']));

        // check for 12hours day and subtract 30 min break!
        if ($diff >= 12) {
            $event->workingHours = Carbon::parse($workingHours)->subMinutes(30)->format('H:i');

        } else {
            $event->workingHours = $workingHours;
        }
        $toolsSync = array();
        foreach($request->tools as $tool)
            {
//                $event->tools()->attach($tool['id'],['deviceUsePerEvent' => $tool['deviceUsePerEvent']]);
//                $toolId[] = $tool['id'];
//                $toolPivots[] = $tool['deviceUsePerEvent'];
                $toolsSync[$tool['id']] = ['deviceUsePerEvent' => $tool['deviceUsePerEvent']];
            }

        $event->tools()->sync($toolsSync);
        $event->save();

        $event->update($data);


        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Arbeitszeit ' . $workingHours . ' erfasst',
        ]);
    }


}
