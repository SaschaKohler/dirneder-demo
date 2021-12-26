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

       // $user->unreadNotifications->markAsRead();

        return redirect()->back();
//        ->with('message', [
//            'type' => 'success',
//            'text' => 'Nachricht gelesen!',
//        ]);

    }
    public function markAllAsRead()
    {

        $user = User::findOrFail(Auth::id());

        $user->unreadNotifications->markAsRead();

        return redirect()->back();
//        ->with('message', [
//            'type' => 'success',
//            'text' => 'Nachrichten gelesen!',
//        ]);

    }
}
