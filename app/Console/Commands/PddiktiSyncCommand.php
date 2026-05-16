<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\PddiktiBridgeService;
use App\Models\IkuReport;

class PddiktiSyncCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'oscn:pddikti-sync {--type=verify} {--report=all}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Synchronize IKU reports with PDDIKTI (Verify or Push)';

    /**
     * Execute the console command.
     */
    public function handle(PddiktiBridgeService $bridge)
    {
        $type = $this->option('type'); // verify or push
        $reportId = $this->option('report');

        $query = IkuReport::query();
        if ($reportId !== 'all') {
            $query->where('id', $reportId);
        } else {
            if ($type === 'push') {
                $query->where('is_reviewed', true)->where('status', 'verified');
            } else {
                $query->where('status', 'draft');
            }
        }

        $reports = $query->get();
        $this->info("Found " . $reports->count() . " reports to process.");

        $bar = $this->output->createProgressBar($reports->count());
        $bar->start();

        foreach ($reports as $report) {
            if ($type === 'push') {
                $bridge->pushToNeoFeeder($report);
            } else {
                $bridge->verifyAgainstPublicData($report);
            }
            $bar->advance();
        }

        $bar->finish();
        $this->newLine();
        $this->info("Sync process completed.");
    }
}
