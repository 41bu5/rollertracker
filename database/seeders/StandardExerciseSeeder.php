<?php

namespace Database\Seeders;

use App\Models\StandardExercise;
use Illuminate\Database\Seeder;

class StandardExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // StandardExercise::factory(19)->create();

        StandardExercise::create([
            'name' => 'Ejercicio 1',
            'description' => 'Ejercicio',
            'image' => 'https://picsum.photos/200/300',
            'category' => 'Pierna',
            'difficulty' => 'Principiante',
        ]);

        StandardExercise::create([
            'name' => 'Ejercicio 2',
            'description' => 'Ejercicio',
            'image' => null,
            'category' => 'Pierna',
            'difficulty' => 'Principiante',
        ]);

        StandardExercise::create([
            'name' => 'Ejercicio 3',
            'description' => 'Ejercicio',
            'image' => null,
            'category' => 'Brazo',
            'difficulty' => 'Intermedia',
        ]);
        
        StandardExercise::create([
            'name' => 'Ejercicio 4',
            'description' => 'Ejercicio',
            'image' => null,
            'category' => 'Brazo',
            'difficulty' => 'Infierno',
        ]);
        
        StandardExercise::create([
            'name' => 'Ejercicio 5',
            'description' => 'Ejercicio',
            'image' => null,
            'category' => 'Core',
            'difficulty' => 'Infierno',
        ]);
        
        StandardExercise::create([
            'name' => 'Ejercicio 6',
            'description' => 'Ejercicio',
            'image' => null,
            'category' => 'Core',
            'difficulty' => 'Principiante',
        ]);
        
        StandardExercise::create([
            'name' => 'Ejercicio 7',
            'description' => 'Ejercicio',
            'image' => null,
            'category' => 'Core',
            'difficulty' => 'Intermedia',
        ]);
    }
}
