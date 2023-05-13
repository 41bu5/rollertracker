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
        StandardExercise::factory(19)->create();
    }
}
