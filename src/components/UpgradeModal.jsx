import { useState } from 'react';
import { X } from 'lucide-react';
import { getAllLanguages } from '../data/languages';
import { getFreeLanguage, setFreeLanguage } from '../utils/lessonTracking';

export default function UpgradeModal({ isOpen, onClose, onLanguageChanged }) {
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);
  const freeLanguage = getFreeLanguage();
  const languages = getAllLanguages();
  const freeLanguageName = languages.find(lang => lang.id === freeLanguage)?.name || 'your language';

  if (!isOpen) return null;

  const handleUpgrade = () => {
    // For now, just close the modal
    // In production, this would redirect to payment processing
    onClose();
  };

  const handleSwitchLanguage = (languageId) => {
    setFreeLanguage(languageId);
    setShowLanguagePicker(false);
    onLanguageChanged?.();
    onClose();
  };

  if (showLanguagePicker) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => setShowLanguagePicker(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Switch Free Language
            </h2>
            <p className="text-gray-600">
              Choose a different language to learn for free
            </p>
          </div>

          {/* Language Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.map((language) => (
              <button
                key={language.id}
                onClick={() => handleSwitchLanguage(language.id)}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 text-left border-2 border-blue-200 hover:border-blue-400"
              >
                <div className="text-4xl mb-2 text-center">{language.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                  {language.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {language.lessons.length} lessons
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
            You're currently learning <strong>{freeLanguageName}</strong> for free. Upgrade to access all 8 languages!
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-1">
              $100<span className="text-xl text-gray-600">/year</span>
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
                80 total lessons
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                480+ street slang phrases
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 font-bold">✓</span>
              <span className="text-gray-700">
                Unlimited access forever
              </span>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleUpgrade}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Upgrade for $100/year
          </button>
          <button
            onClick={() => setShowLanguagePicker(true)}
            className="w-full bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Switch Free Language
          </button>
        </div>
      </div>
    </div>
  );
}
