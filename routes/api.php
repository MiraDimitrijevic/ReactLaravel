<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ZaposleniController;
use App\Http\Controllers\OdeljenjeController;
use App\Http\Controllers\EvidencijaController;
use App\Http\Controllers\OdeljenjeZaposleniControler;
use App\Http\Controllers\ZaposleniEvidencijaControler;
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
Route::resource('odeljenje', OdeljenjeController::class)->only(['show', 'index']);
Route::resource('administrator', UserController::class)->only(['show', 'index']);
Route::get('odeljenje/{id}/zaposleni', [OdeljenjeZaposleniControler::class, 'index'])->name('odeljenje.zaposleni.index');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });
    Route::get('zaposleni/{id}/evidencije', [ZaposleniEvidencijaControler::class, 'index'])->name('zaposleni.evidencije.index');

    Route::resource('evidencija', EvidencijaController::class)->only(['show', 'index','update', 'store']);
    Route::resource('zaposleni', ZaposleniController::class)->only(['show', 'index', 'update', 'store', 'destroy']);
  

    Route::post('/logout', [AuthController::class, 'logout']);
});


