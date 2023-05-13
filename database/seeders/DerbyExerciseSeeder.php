<?php

namespace Database\Seeders;

use App\Models\DerbyExercise;
use Illuminate\Database\Seeder;

class DerbyExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DerbyExercise::factory(19)->create();
    }
}
