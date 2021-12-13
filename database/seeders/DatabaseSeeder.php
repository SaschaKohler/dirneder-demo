<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Employee;
use App\Models\EmployeeCategory;
use App\Models\Event;
use App\Models\EventEmployee;
use App\Models\EventUser;
use App\Models\User;
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
        User::factory(1)->create();
        EmployeeCategory::factory(3)->create();
//        Employee::factory(5)->create();
        Customer::factory(8)->create();
        Event::factory(5)->create();
        EventUser::factory(5)->create();
    }
}
