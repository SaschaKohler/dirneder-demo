<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Event;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

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
        $start = $this->faker->dateTime();
        $end = $this->faker->dateTimeBetween($start,'+2 day');

        $type = array(
                'Baumpflege' => 'green darken-2'  ,
                'Gartenpflege' => 'green'  ,
                'Transport' => 'blue lighten2',
                'Zaunbau' => 'brown ligthen-2',
                'pers. Termin' => 'red lighten-1',
                'Winterdienst' => 'grey lighten-2',
                'Sonstiges' => 'orange lighten-2'
        );
        $k = array_rand($type);
        $v = $type[$k];

        return [
            'name' => $this->faker->jobTitle,
            'start' => Carbon::now(),
            'end' => Carbon::now(),
            'color'=>  $v,
            'type' => $k,
            'recurrence' => 0,
            'customer_id' => random_int(1,5),
            'event_id' => null
        ];
    }
}
