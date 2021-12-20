<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Schema;

class CreateEventTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {

            $table->id();
            $table->string('name');
            $table->date('start')->default(Carbon::now());
            $table->date('end')->default(Carbon::tomorrow());
            $table->time('startTime')->default(Carbon::now());
            $table->time('endTime')->nullable()->default(null);
            $table->string('color');
            $table->string('type');
            $table->foreignId('customer_id');
            $table->text('notes')->nullable();
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
        Schema::dropIfExists('customer');
    }
}
