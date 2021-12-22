<?php

namespace Database\Factories;

use App\Models\EventVehicle;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventVehicleFactory extends Factory
{
    protected $model = EventVehicle::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'event_id' => random_int(1,5),
            'vehicle_id' => random_int(3,12)
        ];
    }
}
