<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StandardExercise>
 */
class StandardExerciseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'Ejercicio estándar',
            'description' => fake()->text(),
            'image' => 'https://picsum.photos/200/300',
            'category' => 'Pierna',
            'difficulty' => 'Principiante',
        ];
    }
}
