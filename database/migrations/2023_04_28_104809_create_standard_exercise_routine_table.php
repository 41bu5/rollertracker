<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('standard_exercise_routine', function (Blueprint $table) {
            $table->id();
            $table->foreignId('routine_id')
                ->nullable()
                ->constrained('routines')
                ->cascadeOnUpdate()
                ->nullOnDelete();

            $table->foreignId('standard_exercise_id')
                ->nullable()
                ->constrained('standard_exercises')
                ->cascadeOnUpdate()
                ->nullOnDelete();
                
            $table->integer('repeticiones');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exercise_routine');
    }
};
