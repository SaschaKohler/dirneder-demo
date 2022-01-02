<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleController extends Controller
{
    public function index(Request $request)
    {
        $data = Vehicle ::when($request->sort_by, function ($query, $value) {
            $query->orderBy($value, request('order_by', 'asc'));
        })
            ->when(!isset($request->sort_by), function ($query) {
                $query->latest('updated_at');
            })
            ->when($request->search, function ($query, $value) {
                $query->where('type', 'LIKE', '%' . $value . '%')
                    ->orWhere('branding','LIKE','%' .$value . '%');
            })
            ->paginate($request->page_size ?? 10);
        return Inertia::render('vehicle/index', [
            'items' => $data,
            'count' => Vehicle::count(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required',
            'category_id' => 'required'
        ]);

        Vehicle ::create($data);
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz erstellt!',
        ]);
    }

    public function update(Vehicle $vehicle, Request $request)
    {
        $data = $this->validate($request, [
            'owner' => 'required|string',
            'type' => 'required',
            'branding' => 'required',
            'permit' => 'required',
            'insurance_type' => 'required',
            'license_plate' => 'required',
            'inspection' => 'required',
            'insurance_company' => 'required',
            'insurance_manager' => 'required',
        ]);


        $vehicle->update($data);

        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz geändert!',
        ]);
    }

    public function destroy(Vehicle $user)
    {
        $user->delete();
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz gelöscht!',
        ]);
    }
}
