<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    public function index(Request $request)
    {
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


}
