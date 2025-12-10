import { X } from 'lucide-react';
import { getFreeLanguages } from '../utils/lessonTracking';
import { getAllLanguages } from '../data/languages';

export default function UpgradeModal({ isOpen, onClose, onLanguageChanged }) {
  const freeLanguages = getFreeLanguages();
  const languages = getAllLanguages();
  const freeLanguageNames = freeLanguages
    .map(id => languages.find(lang => lang.id === id)?.name)
    .filter(Boolean);

  if (!isOpen) return null;

  const handleUpgrade = () => {
    // Open Gumroad payment page
    window.open('https://winterfuyu.gumroad.com/l/iecvpk?wanted=true', '_blank');
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
            Unlock All 8 Languages
          </h2>
          <p className="text-gray-600">
            {freeLanguageNames.length > 0 
              ? `You're currently learning ${freeLanguageNames.join(' & ')} for free. Upgrade to access all 8 languages!`
              : 'Upgrade to access all 8 languages!'
            }
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
                All 8 languages unlocked
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                80 lessons (10 per language)
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
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
        >
          Upgrade for $150/year
        </button>
      </div>
    </div>
  );
}
