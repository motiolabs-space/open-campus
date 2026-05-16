<?php

namespace App\Integrations\Contracts;

interface CampusIntegrationInterface
{
    /**
     * Get the name of the integration provider.
     */
    public function getName(): string;

    /**
     * Test the connection to the provider.
     */
    public function testConnection(): bool;

    /**
     * Synchronize data from the provider to OSCN.
     */
    public function syncIncoming(bool $dryRun = true): array;

    /**
     * Synchronize data from OSCN to the provider.
     */
    public function syncOutgoing($data): bool;
}
