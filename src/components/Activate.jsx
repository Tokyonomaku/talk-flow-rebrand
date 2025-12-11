import { useState } from 'react';
import { isPremium } from '../utils/lessonTracking';

const ACCESS_CODE = 'PREMIUM2025';

export default function Activate({ onActivate }) {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const premium = isPremium();

  const handleActivate = () => {
    const trimmedCode = accessCode.trim();
    
    if (!trimmedCode) {
      setError('Please enter an access code');
      return;
    }

    // Case-insensitive check
    if (trimmedCode.toUpperCase() !== ACCESS_CODE.toUpperCase()) {
      setError('Invalid access code. Check your Gumroad purchase email.');
      return;
    }

    try {
      console.log('[Activate] Setting premium status to true');
      localStorage.setItem('isPremium', 'true');
      localStorage.setItem('activatedAt', new Date().toISOString());
      
      // Verify it was set correctly
      const verifyPremium = localStorage.getItem('isPremium');
      console.log('[Activate] Premium status set. Verification:', verifyPremium, '===', verifyPremium === 'true');
      
      setSuccess(true);
      setError('');
      onActivate?.();
      
      // Redirect to home after 2 seconds
      setTimeout(() => {
        console.log('[Activate] Redirecting to home page');
        window.location.href = '/';
      }, 2000);
    } catch (err) {
      console.error('[Activate] Error activating premium:', err);
      setError('Failed to activate premium. Please try again.');
    }
  };

  if (premium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Premium Activated
          </h1>
          <p className="text-gray-600 mb-6">
            You already have premium access to all 8 languages!
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Languages
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Activate Your Premium Access
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Enter the access code from your Gumroad purchase
        </p>

        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ✅ Premium Activated! All languages and lessons unlocked
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="mb-6">
          <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-2">
            Access Code
          </label>
          <input
            id="accessCode"
            type="text"
            value={accessCode}
            onChange={(e) => {
              setAccessCode(e.target.value);
              setError('');
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleActivate();
              }
            }}
            placeholder="PREMIUM2025"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-center text-lg font-semibold uppercase tracking-wider"
            disabled={success}
            autoFocus
          />
        </div>

        <button
          onClick={handleActivate}
          disabled={success}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            success
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
          }`}
        >
          {success ? 'Activated!' : 'Activate Premium'}
        </button>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            ← Back to Languages
          </a>
        </div>
      </div>
    </div>
  );
}
