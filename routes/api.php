<?php

use App\Http\Controllers\Loto6Controller;
use App\Http\Controllers\Loto7Controller;
use App\Http\Controllers\MinilotoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/hoge', function (Request $request) {
    return response()->json(
        [
            'hoge' => 'Hello from Laravel'
        ]
    );
});

Route::get('loto6', [Loto6Controller::class, 'index']);

Route::get('loto7', [Loto7Controller::class, 'index']);

Route::get('miniloto', [MinilotoController::class, 'index']);
