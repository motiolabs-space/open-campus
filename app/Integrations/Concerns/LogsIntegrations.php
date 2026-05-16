<?php

namespace App\Integrations\Concerns;

use App\Models\IntegrationLog;

trait LogsIntegrations
{
    protected function startLog($direction, $type)
    {
        return IntegrationLog::create([
            'driver' => $this->getName(),
            'direction' => $direction,
            'type' => $type,
            'status' => 'running',
            'started_at' => now(),
        ]);
    }

    protected function finishLog(IntegrationLog $log, $status, $stats = [], $message = null)
    {
        $log->update([
            'status' => $status,
            'stats' => $stats,
            'message' => $message,
            'finished_at' => now(),
        ]);
    }
}
