<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function index(Request $request)
    {

        $data = Customer::when($request->sort_by, function ($query, $value) {
            $query->orderBy($value, request('order_by', 'asc'));
        })
            ->when(!isset($request->sort_by), function ($query) {
                $query->latest();
            })
            ->when($request->search, function ($query, $value) {
                $query->where('firstName', 'LIKE', '%' . $value . '%')
                    ->orWhere('lastName', 'LIKE', '%' . $value . '%');
            })
            ->paginate($request->page_size ?? 10);
        return Inertia::render('customer/index', [
            'items' => $data,
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'street' => 'required|string',
            'city' => 'required|string',
            'PLZ' => 'required|numeric',
            'email' => 'required|email',
            'phone1' => 'required|string',
            'phone2' => 'nullable|string',
            'notes' => 'required|string'
        ]);
        Customer::create($data);
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Datensatz angelegt!',
        ]);
    }

    public function update(Customer $customer, Request $request)
    {
        $data = $this->validate($request, [
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'street' => 'required|string',
            'city' => 'required|string',
            'PLZ' => 'required|string',
            'email' => 'required|email',
            'phone1' => 'required|string',
            'phone2' => 'required|string',
            'notes' => 'required|string'
        ]);
        $customer->update($data);
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Success edit customer!',
        ]);
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
        return redirect()->back()->with('message', [
            'type' => 'success',
            'text' => 'Success delete customer!',
        ]);
    }
}
