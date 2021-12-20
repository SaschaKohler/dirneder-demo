<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone1')->default('-');
            $table->string('phone2')->nullable()->default('-');
            $table->string('address')->default('-');
            $table->boolean('mon')->nullable()->default(false);
            $table->boolean('tue')->nullable()->default(false);
            $table->boolean('wed')->nullable()->default(false);
            $table->boolean('thu')->nullable()->default(false);
            $table->boolean('fri')->nullable()->default(false);
            $table->foreignId('category_id')->nullable()->default(1);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->tinyInteger('role')->nullable()->default(0);
            $table->tinyInteger('isActive')->nullable()->default(1);
            $table->rememberToken()->nullable();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
