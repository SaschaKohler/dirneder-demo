<?php

namespace Database\Factories;

use App\Models\EventEmployee;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventEmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EventEmployee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'event_id' => random_int(1,10),
            'employee_id' => random_int(1,5)
        ];
    }
}
