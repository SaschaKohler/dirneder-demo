<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\EmployeeCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $data = User::when($request->sort_by, function ($query, $value) {
            $query->orderBy($value, request('order_by', 'asc'));
        })
            ->when(!isset($request->sort_by), function ($query) {
                $query->latest();
            })
            ->when($request->search, function ($query, $value) {
                $query->where('name', 'LIKE', '%' . $value . '%');
            })
            ->with('category')
            ->paginate($request->page_size ?? 10);
        return Inertia::render('user/index', [
            'items' => $data,
            'categories' => EmployeeCategory::all()
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required',
            'category_id' => 'required'
        ]);

        User::create($data);
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz erstellt!',
        ]);
    }

    public function update(User $user, Request $request)
    {
        $data = $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required',
            'category_id' => 'required',
            'isActive' => 'required',
            'role' => 'required'
        ]);


        $user->update($data);

        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz geändert!',
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz gelöscht!',
        ]);
    }
}
