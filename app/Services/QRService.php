<?php

namespace App\Services;

use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QRService
{
    /**
     * Generates a QR code for a student profile.
     */
    public function generateStudentQR($userId)
    {
        $url = route('talents.show', $userId);
        
        return QrCode::size(300)
            ->color(0, 100, 210) // Primary Blue
            ->margin(2)
            ->format('png')
            ->generate($url);
    }

    /**
     * Generates an event attendance QR code.
     */
    public function generateEventQR($eventId)
    {
        $data = json_encode([
            'type' => 'event_attendance',
            'event_id' => $eventId,
            'timestamp' => now()->toDateTimeString()
        ]);

        return QrCode::size(300)->generate($data);
    }
}
