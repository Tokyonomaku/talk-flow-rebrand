import { useState } from 'react';
import { isPremium } from '../utils/lessonTracking';

export default function Redeem({ onActivate }) {
  const [licenseKey, setLicenseKey] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const premium = isPremium();

  const validateLicenseKey = (key) => {
    // Format: XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX
    // 4 groups of 8 alphanumeric characters separated by hyphens
    const licenseKeyPattern = /^[A-Z0-9]{8}-[A-Z0-9]{8}-[A-Z0-9]{8}-[A-Z0-9]{8}$/i;
    return licenseKeyPattern.test(key.trim());
  };

  const handleActivate = () => {
    const trimmedKey = licenseKey.trim();
    
    if (!trimmedKey) {
      setError('Please enter a license key');
      return;
    }

    // Validate license key format
    if (!validateLicenseKey(trimmedKey)) {
      setError('Invalid license key format. Expected: XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX');
      return;
    }

    try {
      localStorage.setItem('isPremium', 'true');
      localStorage.setItem('licenseKey', trimmedKey);
      setSuccess(true);
      setError('');
      onActivate?.();
      
      // Redirect to home after 1 second
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (err) {
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
          Activate Premium
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Enter your license key to unlock all 8 languages
        </p>

        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            Premium activated successfully! Redirecting...
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="mb-6">
          <label htmlFor="licenseKey" className="block text-sm font-medium text-gray-700 mb-2">
            License Key
          </label>
          <input
            id="licenseKey"
            type="text"
            value={licenseKey}
            onChange={(e) => {
              setLicenseKey(e.target.value);
              setError('');
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleActivate();
              }
            }}
            placeholder="XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-mono text-sm"
            disabled={success}
            maxLength={35}
          />
          <p className="mt-2 text-xs text-gray-500">
            Format: 8 characters - 8 characters - 8 characters - 8 characters
          </p>
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
