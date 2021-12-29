<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EventToolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'event_id' => random_int(1,5),
            'tool_id' => random_int(1,27),
            'deviceUsePerEvent' => random_int(1,5),
        ];
    }
}
