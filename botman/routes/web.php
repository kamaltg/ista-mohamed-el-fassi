<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BotManController;

Route::match(['get', 'post'], '/botman', 'App\Http\Controllers\BotManController@handle');

Route::view('/', 'welcome');
