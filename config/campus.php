<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Campus Network Configuration
    |--------------------------------------------------------------------------
    |
    | This configuration dictates how the application behaves in terms of
    | multi-tenancy. If 'mode' is set to 'single', the app will act
    | as an exclusive platform for one campus. If 'network', it acts
    | as an aggregator for multiple campuses.
    |
    */

    'mode' => env('CAMPUS_NETWORK_MODE', 'single'),

    'support_email' => env('CAMPUS_SUPPORT_EMAIL', 'support@campus.ac.id'),

];
