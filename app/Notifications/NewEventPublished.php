<?php

namespace App\Notifications;

use App\Models\Event;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;

class NewEventPublished extends Notification
{
    use Queueable;

    protected $event;
    protected $user;
    protected $recur;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Event $event, User $user)
    {
        $this->event = $event;
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('neuer Auftrag für Dich: ' . $this->event->name)
            ->line('Hey ' . $this->user->name . ' Neuer Auftrag am ' . $this->event->start)
            ->line('Kunde : ' . $this->event->customer->lastName)
            ->line('Addresse : ' . $this->event->customer->street . ' / '
                . $this->event->customer->PLZ . ' ' . $this->event->customer->city)
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {

        switch ($this->event->recurrence) {
            case 0 :
                $this->recur = 'keine';
                break;
            case 1 :
                $this->recur = 'täglich';
                break;
            case 2 :
                $this->recur = 'wöchentlich';
                break;
            case 3 :
                $this->recur = '14 tägig';
                break;
            case 4 :
                $this->recur = 'monatlich';
                break;
            case 5 :
                $this->recur = 'alle 3 Monate';
                break;
            case 6 :
                $this->recur = 'halbjährlich';
                break;
            default:
                $this->recur = 'keine';
        }

        return [
            'subject' => 'Update',
            'customer' => $this->event->customer->lastName,
            'newEvent' => Carbon::parse($this->event->start)->format('d.M y'),
            'type' => $this->event->type,
            'address' => $this->event->customer->street . ' / '
                . $this->event->customer->PLZ . ' ' . $this->event->customer->city,
            'recurrence' => $this->recur
        ];
    }
}
