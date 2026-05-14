<?php

namespace App\Http\Controllers;

use App\Models\IkuEvidence;
use App\Services\PddiktiBridgeService;
use Illuminate\Http\Request;

class PddiktiController extends Controller
{
    protected $bridge;

    public function __construct(PddiktiBridgeService $bridge)
    {
        $this->bridge = $bridge;
    }

    public function syncEvidence(IkuEvidence $evidence)
    {
        if ($evidence->status !== 'verified') {
            return back()->with('error', 'Hanya data terverifikasi yang bisa disinkronkan ke PDDIKTI.');
        }

        $payload = $this->bridge->mapEvidenceToPddikti($evidence);
        $result = $this->bridge->syncToNeoFeeder($payload);

        if ($result['status'] === 'success') {
            $evidence->update([
                'is_pddikti_synced' => true,
                'pddikti_sync_ref' => $result['pddikti_ref_id']
            ]);

            return back()->with('success', 'Data berhasil dikirim ke PDDIKTI Neo Feeder. ID Ref: ' . $result['pddikti_ref_id']);
        }

        return back()->with('error', 'Gagal menyinkronkan data ke PDDIKTI.');
    }

    public function bulkSync()
    {
        $evidences = IkuEvidence::where('status', 'verified')
            ->where('is_pddikti_synced', false)
            ->get();

        $count = 0;
        foreach ($evidences as $evidence) {
            $payload = $this->bridge->mapEvidenceToPddikti($evidence);
            $result = $this->bridge->syncToNeoFeeder($payload);
            
            if ($result['status'] === 'success') {
                $evidence->update([
                    'is_pddikti_synced' => true,
                    'pddikti_sync_ref' => $result['pddikti_ref_id']
                ]);
                $count++;
            }
        }

        return back()->with('success', "$count data berhasil disinkronkan ke PDDIKTI.");
    }
}
