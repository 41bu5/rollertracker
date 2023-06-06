<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(StandardExerciseSeeder::class);
        $this->call(RoutineSeeder::class);
        //Aquí encajo a pelo registros de relaciones entre Rutina y Ejercicio para las rutinas que he creado
        DB::table('standard_exercise_routine')->insert([
            ['routine_id' => 1, 'standard_exercise_id' => 1, 'repeticiones' => 2],
            ['routine_id' => 1, 'standard_exercise_id' => 2, 'repeticiones' => 4],
            ['routine_id' => 2, 'standard_exercise_id' => 3, 'repeticiones' => 3],
            ['routine_id' => 3, 'standard_exercise_id' => 2, 'repeticiones' => 2],
            ['routine_id' => 3, 'standard_exercise_id' => 1, 'repeticiones' => 5],
            ['routine_id' => 3, 'standard_exercise_id' => 4, 'repeticiones' => 2],
            ['routine_id' => 3, 'standard_exercise_id' => 5, 'repeticiones' => 6],
        ]);
        $this->call(DerbyExerciseSeeder::class);
        $this->call(ClubSeeder::class);       
    }
}
