<?php

namespace App\Integrations;

use App\Integrations\Siakad\NecoSiakadAdapter;
use App\Integrations\Pddikti\NeoFeederAdapter;
use Illuminate\Support\Manager;

class IntegrationManager extends Manager
{
    public function getDefaultDriver()
    {
        return config('app.integration.default', 'siakad');
    }

    public function createSiakadDriver()
    {
        return new NecoSiakadAdapter();
    }

    public function createPddiktiDriver()
    {
        return new NeoFeederAdapter();
    }
}
