<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::apiResource('gestionNewsIsta', NewsController::class);
Route::apiResource('gestionTagIsta', TagController::class);
