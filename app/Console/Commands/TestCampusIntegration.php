<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class TestCampusIntegration extends Command
{
    protected $signature = 'campus:test-sync {driver=siakad}';
    protected $description = 'Test connection and sync for a specific campus integration driver';

    public function handle()
    {
        $driver = $this->argument('driver');
        $this->info("Testing Integration Driver: {$driver}");

        try {
            $integration = app('integration')->driver($driver);
            
            $this->comment("Provider: " . $integration->getName());

            if ($this->confirm("Do you want to test connection?")) {
                $status = $integration->testConnection();
                if ($status) {
                    $this->info("✅ Connection Successful!");
                } else {
                    $this->error("❌ Connection Failed. Check your .env config.");
                }
            }

            if ($this->confirm("Do you want to run a dry-run sync?")) {
                $stats = $integration->syncIncoming(true);
                $this->table(['Metric', 'Value'], [
                    ['Status', 'Dry Run Success'],
                    ['Stats', json_encode($stats)]
                ]);

                if ($this->confirm("Dry-run finished. Do you want to PERFORM REAL SYNC now?")) {
                    $this->warn("Performing real database modification...");
                    $stats = $integration->syncIncoming(false);
                    $this->table(['Metric', 'Value'], [
                        ['Status', 'REAL SYNC SUCCESS'],
                        ['Stats', json_encode($stats)]
                    ]);
                }
            }

        } catch (\Exception $e) {
            $this->error("Error: " . $e->getMessage());
        }
    }
}
