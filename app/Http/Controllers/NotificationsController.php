<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;

class NotificationsController extends Controller
{
    public function markAsRead(Request $request)
    {

        $notification = DatabaseNotification::findOrFail($request['id']);

        $notification->markAsRead();

        return redirect()->back();     // we don't need a message 'cause of the vuetify badge + counter

    }
    public function markAllAsRead()
    {

        $user = User::findOrFail(Auth::id());

        $user->unreadNotifications->markAsRead();   // batch mark !

        return redirect()->back();   // we don't need a message 'cause of the vuetify badge + counter

    }
}
