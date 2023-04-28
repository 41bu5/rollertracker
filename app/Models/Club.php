<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'c_autonoma',
        'city',
        'logo',
        'phone',
        'email',
        'instagram',
        'facebook'
    ];
}
