<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicles', function (Blueprint $table) {

            $table->id();
            $table->string("owner")->default("Dirneder KG");
            $table->enum('type',['PKW','Traktor','Mähdrescher','Pritsche','Anhänger','Pickup']);
            $table->string('branding');
            $table->date('permit');
            $table->enum('insurance_type',['Vollkasko','Teilkasko','-'])->default('-');
            $table->string('license_plate');
            $table->date('inspection')->nullable();
            $table->string('insurance_company');
            $table->string('insurance_manager');
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
        Schema::dropIfExists('vehicles_tables');
    }
}
