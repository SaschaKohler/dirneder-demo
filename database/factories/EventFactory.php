<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Event;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $start = $this->faker->dateTimeBetween('now','+1 day');
        $end = $this->faker->dateTimeBetween($start,'+2 day');
        $colors =  ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'];
        $type = ['Baumpflege','Zaunbau','Funadment','Transport','Sonstiges'];
        return [
            'name' => $this->faker->jobTitle,
            'start' => $start,
            'end' => $end,
            'color'=>  $colors[array_rand($colors)],
            'type' => $type[array_rand($type)],
            'customer_id' => random_int(1,5)
        ];
    }
}
