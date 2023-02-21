<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SedisteController;
use App\Http\Controllers\OdeljenjeController;
use App\Http\Controllers\EvidencijaController;
use App\Http\Controllers\OdeljenjeUserControler;
use App\Http\Controllers\UserEvidencijaControler;
use App\Http\Controllers\API\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();


});
Route::get('zaposleni/join', [UserController::class, 'join']);
Route::resource('odeljenje', OdeljenjeController::class)->only(['show', 'index']);
Route::resource('sediste', SedisteController::class)->only(['show', 'index']);
Route::resource('zaposleni', UserController::class)->only(['show', 'index', 'destroy']);


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return auth()->user();
    });

    Route::get('zaposleni/{id}/evidencije', [UserEvidencijaControler::class, 'index'])->name('user.evidencije.index');
    Route::get('odeljenje/{id}/zaposleni', [OdeljenjeUserControler::class, 'index'])->name('odeljenje.user.index');
    Route::resource('evidencija', EvidencijaController::class)->only(['show', 'index','update', 'store']);


    Route::post('/logout', [AuthController::class, 'logout']);
});


