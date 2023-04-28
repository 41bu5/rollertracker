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
        $adminUser = User::create([
            'name' => 'Alba',
            'email' => 'albus@rollertracker.es',
            'email_verified_at' => now(),
            'password' => Hash::make('password')
        ]);

        $adminUser->assignRole('admin');
        User::factory(19)->create()->assignRole('user');
    }
}
