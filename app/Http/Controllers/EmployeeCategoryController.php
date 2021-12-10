<?php

namespace App\Http\Controllers;

use App\Models\EmployeeCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmployeeCategoryController extends Controller
{
    public function index(Request $request)
    {

        $data = EmployeeCategory::when($request->sort_by, function ($query, $value) {
            $query->orderBy($value, request('order_by', 'asc'));
        })
            ->when(!isset($request->sort_by), function ($query) {
                $query->latest();
            })
            ->when($request->search, function ($query, $value) {
                $query->where('title', 'LIKE', '%' . $value . '%');
            })
            ->paginate($request->page_size ?? 10);
        return Inertia::render('employeeCategory/index', [
            'items' => $data,
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'title' => 'required|string',
            'hoursPerWeek' => 'required|numeric',
            'cashPerHour' => 'required|numeric',
            'factor' => 'required|numeric',
            ]);
        EmployeeCategory::create($data);
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz angelegt!',
        ]);
    }

    public function update(EmployeeCategory $employeeCategory, Request $request)
    {
        $data = $this->validate($request, [
            'title' => 'required|string',
            'hoursPerWeek' => 'required|numeric',
            'cashPerHour' => 'required|numeric',
            'factor' => 'required|numeric',
        ]);
        $employeeCategory->update($data);
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz geändert',
        ]);
    }

    public function destroy(EmployeeCategory $employeeCategory)
    {
        $employeeCategory->delete();
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz gelöscht!',
        ]);
    }
}
