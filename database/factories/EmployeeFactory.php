<?php

namespace Database\Factories;

use App\Models\Employee;
use App\Models\EmployeeCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->companyEmail,
            'category_id' => EmployeeCategory::factory(),
            'address' => $this->faker->address
        ];
    }
}
