<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Employee;
use App\Models\EmployeeCategory;
use App\Models\Event;
use App\Models\EventEmployee;
use App\Models\EventUser;
use App\Models\EventVehicle;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(14)->create();
        EmployeeCategory::factory(3)->create();
        Customer::factory(8)->create();
        Event::factory(5)->create();
        EventUser::factory(5)->create();
        Vehicle::factory(16)->create();
        EventVehicle::factory(8)->create();
    }
}
