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
            $table->date('start');
            $table->date('end')->nullable();
            $table->time('startTime')->default(Carbon::parse('07:00')->format('H:I'));
            $table->time('endTime')->nullable()->default(Carbon::parse('07:00')->format('H:I'));
            $table->time('workingHours')->nullable()->default(null);
            $table->string('color');
            $table->string('type');
            $table->unsignedInteger('recurrence')->default(0);
            $table->foreignId('event_id')->nullable()->references('id')
                ->on('events')->onDelete('cascade');
            $table->foreignId('customer_id')->references('id')
                ->on('customers')->onDelete('cascade');
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
