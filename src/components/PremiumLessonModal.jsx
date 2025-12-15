import { useState } from 'react';
import { X, Lock, Loader2 } from 'lucide-react';
import { getFreeLanguages } from '../utils/lessonTracking';
import { getAllLanguages } from '../data/languages';
import { logEvent } from '../utils/eventLog';

export default function PremiumLessonModal({ isOpen, onClose, languageName, lessonNumber }) {
  const [isRedirectingToCheckout, setIsRedirectingToCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // 'monthly' | 'annual' | null
  const freeLanguages = getFreeLanguages();
  const languages = getAllLanguages();
  const freeLanguageNames = freeLanguages
    .map(id => languages.find(lang => lang.id === id)?.name)
    .filter(Boolean);

  if (!isOpen) return null;

  const startCheckout = (plan) => {
    if (isRedirectingToCheckout) return;
    setSelectedPlan(plan);
    setIsRedirectingToCheckout(true);
    logEvent('upgrade_clicked', { from_where: plan === 'monthly' ? 'premium_lesson_modal_monthly' : 'premium_lesson_modal_annual' });
    window.location.href =
      plan === 'monthly'
        ? 'https://winterfuyu.gumroad.com/l/gmijuf'
        : 'https://winterfuyu.gumroad.com/l/iecvpk';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 relative">
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
            Unlock All 11 Languages
          </h2>
          <p className="text-gray-600">Choose your plan:</p>
          <p className="text-gray-600 mt-2 text-sm">Premium unlocks all languages and lessons.</p>
        </div>

        {/* Pricing Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Monthly */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5 text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly</h3>
            <div className="mb-3">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">$20</span>
                <span className="text-gray-600 font-semibold">/month</span>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ All 11 languages</li>
              <li>✓ 260 lessons</li>
              <li>✓ Cancel anytime</li>
            </ul>
            <button
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors border ${
                isRedirectingToCheckout
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
              }`}
              disabled={isRedirectingToCheckout}
              onClick={() => startCheckout('monthly')}
            >
              <span className="inline-flex items-center justify-center gap-2">
                {isRedirectingToCheckout && selectedPlan === 'monthly' && <Loader2 className="w-5 h-5 animate-spin" />}
                {isRedirectingToCheckout && selectedPlan === 'monthly' ? 'Opening...' : 'Start Monthly'}
              </span>
            </button>
          </div>

          {/* Annual (featured) */}
          <div className="relative bg-white rounded-lg border-2 border-blue-300 shadow-lg p-5 md:scale-[1.03] text-left">
            <div className="absolute -top-3 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-extrabold shadow">
              SAVE $90
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Annual</h3>
            <div className="mb-1">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">$150</span>
                <span className="text-gray-600 font-semibold">/year</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-blue-700 mb-3">Just $12.50/month</div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ All 11 languages</li>
              <li>✓ 260 lessons</li>
              <li>✓ Save $90 vs monthly</li>
              <li>✓ Best value</li>
            </ul>
            <button
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors shadow-md ${
                isRedirectingToCheckout
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              disabled={isRedirectingToCheckout}
              onClick={() => startCheckout('annual')}
            >
              <span className="inline-flex items-center justify-center gap-2">
                {isRedirectingToCheckout && selectedPlan === 'annual' && <Loader2 className="w-5 h-5 animate-spin" />}
                {isRedirectingToCheckout && selectedPlan === 'annual' ? 'Opening...' : 'Get Annual - Best Deal'}
              </span>
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center">
          Both plans include all languages and lessons. Cancel monthly anytime.
        </p>
      </div>
    </div>
  );
}
