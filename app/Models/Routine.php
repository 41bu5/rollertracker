<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Routine extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'id_usuario',
        'title',
        'description',
        'created_at',
        'modified_at',
    ];
}
