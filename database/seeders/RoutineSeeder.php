<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Routine;

class RoutineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Routine::create([
            'user_id' => '1',
            'title' => 'HiiT 10 minutos',
            'description' => 'Ola beso',
            'created_at' => date_create('2021-03-15'),
            'modified_at' => date_create('2022-12-04'),
        ]);
        
        Routine::create([
            'user_id' => '1',
            'title' => 'Otra rutina oleee',
            'description' => 'Ola beso',
            'created_at' => date_create('2022-03-15'),
            'modified_at' => date_create('2023-06-06'),
        ]);

        Routine::create([
            'user_id' => '1',
            'title' => 'Calentamiento trankilito',
            'description' => 'AAaa',
            'created_at' => date_create('2023-03-15'),
            'modified_at' => date_create('2023-04-04'),
        ]);
    }
}
