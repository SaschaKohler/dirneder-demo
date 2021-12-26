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
        return [
            'Kunde' => $this->event->customer->lastName,
            'neuer Termin' => Carbon::parse($this->event->start)->format('d.M y'),
            'Leistung' => $this->event->type,
            'Addresse' => $this->event->customer->street . ' / '
                . $this->event->customer->PLZ . ' ' . $this->event->customer->city
        ];
    }
}
