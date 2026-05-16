<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'siakad' => [
        'url' => env('SIAKAD_URL', 'https://siakad.test'),
        'key' => env('SIAKAD_KEY'),
    ],

    'pddikti' => [
        'url' => env('PDDIKTI_URL', 'http://localhost:8082/ws'),
        'username' => env('PDDIKTI_USERNAME'),
        'password' => env('PDDIKTI_PASSWORD'),
    ],

    'resend' => [
        'key' => env('RESEND_API_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'google' => [
        'client_id' => env('GOOGLE_CLIENT_ID', 'mock-client-id'),
        'client_secret' => env('GOOGLE_CLIENT_SECRET', 'mock-secret'),
        'redirect' => env('GOOGLE_REDIRECT_URI', 'http://localhost:8000/login/sso/callback'),
    ],

];
