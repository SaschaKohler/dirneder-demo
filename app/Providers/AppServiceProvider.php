<?php

namespace App\Providers;

use App\Models\Event;
use App\Observers\RecurrenceObserver;
use DebugBar\DebugBar;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }
        Inertia::share('flash', function () {
            return [
                'message' => Session::get('message'),
            ];
        });

        Event::observe(RecurrenceObserver::class);   // Observer registerd for reccurence in Events!

    }
}
