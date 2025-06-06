<?php

use App\Http\Controllers\MediaController;
use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::post("/signout", [UserController::class, "logout"]);
    Route::get("/media", [MediaController::class, "getMedia"]);
    Route::post("/media", [MediaController::class, "upload"]);
});

Route::post("/signin", [UserController::class, "login"]);
Route::post("/signup", [UserController::class, "create"]);
