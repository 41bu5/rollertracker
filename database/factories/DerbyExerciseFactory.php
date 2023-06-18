<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DerbyExercise>
 */
class DerbyExerciseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Ejercicio derby',
            'description' => fake()->text(),
            'category' => 'Individual',
            'difficulty' => 'Intermedio',
        ];
    }
}
