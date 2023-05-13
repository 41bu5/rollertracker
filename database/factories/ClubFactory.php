<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Club>
 */
class ClubFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Club',
            'c_autonoma' => 'Asturias',
            'city' => 'Oviedo',
            'logo' => 'https://picsum.photos/200',
            'phone' => null,
            'email' => null,
            'instagram' => 'www.instagram.com/spk2d',
            'facebook' => null
        ];
    }
}
