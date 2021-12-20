<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\EmployeeCategoryController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VehicleController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('/');


require __DIR__ . '/auth.php';


Route::group(['middleware' => 'auth'], function () {

   Route::resource('employer', EmployeeController::class);


    Route::group(['middleware' => 'adminAuthenticated'], function () {

        Route::get('home', [HomeController::class, 'index'])->name('home');

        Route::resource('event', EventController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::resource('vehicle', VehicleController::class)->only(['index']);
        Route::resource('user', UserController::class)->only(['index', 'store', 'update', 'destroy']);
        Route::resource('employeeCategory', EmployeeCategoryController::class)->only(['index', 'store', 'update', 'destroy']);

        Route::resource('customer', CustomerController::class)->only(['index', 'store', 'update', 'destroy']);
    });
});


