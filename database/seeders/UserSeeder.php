<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@rollertracker.es',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'is_admin' => true,
        ])->assignRole('admin');

        User::create([
            'name' => 'Estándar',
            'email' => 'standard@rollertracker.es',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'is_admin' => false,
        ])->assignRole('standard');

        User::factory(19)->create()->each(
            function($user) {
                $user->assignRole('standard');
            }
        );
    }
}
