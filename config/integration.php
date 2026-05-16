<?php

return [
    'default' => env('CAMPUS_INTEGRATION_DRIVER', 'siakad'),
    
    'drivers' => [
        'siakad' => [
            'adapter' => \App\Integrations\Siakad\NecoSiakadAdapter::class,
        ],
        'pddikti' => [
            'adapter' => \App\Integrations\Pddikti\NeoFeederAdapter::class,
        ],
    ],
];
