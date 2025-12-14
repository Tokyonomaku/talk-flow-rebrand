import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { getFreeLanguages } from '../utils/lessonTracking';
import { getAllLanguages } from '../data/languages';

export default function UpgradeModal({ isOpen, onClose, onLanguageChanged }) {
  // Toggle this only if your purchase flow truly offers it.
  const OFFER_MONEY_BACK_GUARANTEE = false;
  const [isOpeningCheckout, setIsOpeningCheckout] = useState(false);

  const freeLanguages = getFreeLanguages();
  const languages = getAllLanguages();
  const freeLanguageNames = freeLanguages
    .map(id => languages.find(lang => lang.id === id)?.name)
    .filter(Boolean);

  if (!isOpen) return null;

  const handleUpgrade = () => {
    if (isOpeningCheckout) return;
    setIsOpeningCheckout(true);
    try {
      // Open Gumroad payment page
      window.open('https://winterfuyu.gumroad.com/l/iecvpk?wanted=true', '_blank');
    } finally {
      // If checkout opens in a new tab, keep UI responsive in this tab.
      window.setTimeout(() => setIsOpeningCheckout(false), 1200);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Unlock 128 More Lessons
          </h2>
          <p className="text-gray-700 font-medium">
            Get instant access to premium content across all 11 languages
          </p>
          <p className="text-gray-600 mt-2">
            {freeLanguageNames.length > 0
              ? `You're currently learning ${freeLanguageNames.join(' & ')} for free.`
              : 'You’re currently on the free plan.'
            }{' '}
            Upgrade to unlock lessons 11–26 in every language.
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">
              $150<span className="text-xl text-gray-600">/year</span>
            </div>
            <p className="text-sm text-gray-600">One-time payment • Unlimited access</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What you get:
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                16 advanced lessons per language (128 total)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                Songs, proverbs, texting slang
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                Cultural context & real-world phrases
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                All future content updates
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                One-time payment of $150/year
              </span>
            </li>
          </ul>
        </div>

        {/* Button */}
        <button
          onClick={handleUpgrade}
          disabled={isOpeningCheckout}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg ${
            isOpeningCheckout
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <span className="inline-flex items-center justify-center gap-2">
            {isOpeningCheckout && <Loader2 className="w-5 h-5 animate-spin" />}
            {isOpeningCheckout ? 'Opening checkout...' : 'Upgrade Now - $150/year'}
          </span>
        </button>

        {OFFER_MONEY_BACK_GUARANTEE && (
          <p className="mt-3 text-center text-sm text-gray-600">
            30-day money back guarantee
          </p>
        )}
      </div>
    </div>
  );
}
