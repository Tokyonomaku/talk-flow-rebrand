import { useState } from 'react';
import { X, Lock, Loader2 } from 'lucide-react';
import { getFreeLanguages } from '../utils/lessonTracking';
import { getAllLanguages } from '../data/languages';

export default function PremiumLessonModal({ isOpen, onClose, languageName, lessonNumber }) {
  const [isRedirectingToCheckout, setIsRedirectingToCheckout] = useState(false);
  const freeLanguages = getFreeLanguages();
  const languages = getAllLanguages();
  const freeLanguageNames = freeLanguages
    .map(id => languages.find(lang => lang.id === id)?.name)
    .filter(Boolean);

  if (!isOpen) return null;

  const handleUpgrade = () => {
    if (isRedirectingToCheckout) return;
    setIsRedirectingToCheckout(true);
    console.log('[PremiumLessonModal] Upgrade button clicked - redirecting to Gumroad');
    // Redirect to Gumroad payment page
    window.location.href = 'https://winterfuyu.gumroad.com/l/iecvpk?wanted=true';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Lock Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-100 rounded-full p-4">
            <Lock className="w-8 h-8 text-gray-600" />
          </div>
        </div>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Unlock Advanced Lessons
          </h2>
          <p className="text-gray-600">
            Upgrade to Premium to unlock all 11 languages (and lessons 11–26 where available)
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">
              $150<span className="text-xl text-gray-600">/year</span>
            </div>
            <p className="text-sm text-gray-600">Unlimited access</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Premium Features:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                All 11 languages unlocked
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                208 total lessons (26 per language)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                Songs, slang, cultural content
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                All future updates
              </span>
            </li>
          </ul>
        </div>

        {/* Button */}
        <button
          onClick={handleUpgrade}
          disabled={isRedirectingToCheckout}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg ${
            isRedirectingToCheckout
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <span className="inline-flex items-center justify-center gap-2">
            {isRedirectingToCheckout && <Loader2 className="w-5 h-5 animate-spin" />}
            {isRedirectingToCheckout ? 'Opening checkout...' : 'Upgrade for $150/year'}
          </span>
        </button>
      </div>
    </div>
  );
}
