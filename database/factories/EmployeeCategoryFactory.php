<?php

namespace Database\Factories;

use App\Models\EmployeeCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeCategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EmployeeCategory::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [

            'title' => $this->faker->jobTitle(),
            'hoursPerWeek' => $this->faker->numberBetween(38,42),
            'cashPerHour' => $this->faker->randomFloat(2,9.5,17.5),
            'factor' => 0.7
        ];
    }
}
