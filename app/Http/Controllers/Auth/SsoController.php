<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\AcademicProfile;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SsoController extends Controller
{
    /**
     * Redirect the user to the SSO Provider.
     */
    public function redirect()
    {
        // For the MVP/Prototype, we will use Google as the SSO Provider.
        // In the future, this can be changed to 'cas', 'saml2', or a custom provider.
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from the SSO Provider.
     */
    public function callback()
    {
        try {
            $ssoUser = Socialite::driver('google')->user();

            // Find or create the user based on email.
            // In a real campus SSO, we might match by NIM/NIDN returned in the SSO payload.
            $user = User::firstOrCreate(
                ['email' => $ssoUser->getEmail()],
                [
                    'name' => $ssoUser->getName(),
                    'password' => bcrypt(str()->random(24)), // Generate random password
                    'avatar' => $ssoUser->getAvatar(),
                    'role' => 'mahasiswa', // Default role
                ]
            );

            // Assign default role if not exists
            if (!$user->hasRole('mahasiswa') && !$user->hasAnyRole(['superadmin', 'admin_kampus', 'dosen', 'industri'])) {
                $user->assignRole('mahasiswa');
            }

            // Create empty academic profile if it doesn't exist
            if (!$user->academicProfile) {
                $user->academicProfile()->create([
                    'nim_nidn' => null, // Can be updated later or pulled from SSO payload
                ]);
            }

            // Log the user in
            Auth::login($user, true);

            return redirect()->route('network.index');

        } catch (\Exception $e) {
            return redirect()->route('login')->withErrors(['email' => 'SSO Login failed: ' . $e->getMessage()]);
        }
    }
}
