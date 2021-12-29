<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'firstName' => $this->faker->firstName,
            'lastName' => $this->faker->lastName,
            'branding' => $this->faker->company,
            'street' => $this->faker->streetName,
            'city' => $this->faker->city,
            'PLZ' => $this->faker->postcode,
            'email' => $this->faker->email,
            'phone1' => $this->faker->phoneNumber,
            'phone2' => $this->faker->phoneNumber,
            'notes' => $this->faker->paragraph(1)
        ];
    }
}
