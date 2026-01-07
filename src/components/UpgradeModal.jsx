import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { getFreeLanguages } from '../utils/lessonTracking';
import { getAllLanguages } from '../data/languages';
import { logEvent } from '../utils/eventLog';
import { gaEvent } from '../utils/analytics';

export default function UpgradeModal({ isOpen, onClose, onLanguageChanged }) {
  // Toggle this only if your purchase flow truly offers it.
  const OFFER_MONEY_BACK_GUARANTEE = false;
  const [isOpeningCheckout, setIsOpeningCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // 'monthly' | 'annual' | null

  const freeLanguages = getFreeLanguages();
  const languages = getAllLanguages();
  const freeLanguageNames = freeLanguages
    .map(id => languages.find(lang => lang.id === id)?.name)
    .filter(Boolean);
  const remainingForeignCount = Math.max(0, 9 - freeLanguages.length);

  if (!isOpen) return null;

  const startCheckout = (plan) => {
    if (isOpeningCheckout) return;
    setSelectedPlan(plan);
    setIsOpeningCheckout(true);
    try {
      logEvent('upgrade_clicked', { from_where: plan === 'monthly' ? 'upgrade_modal_monthly' : 'upgrade_modal_annual' });
      gaEvent('upgrade_clicked', {
        from_page: 'upgrade_modal',
        price: plan === 'monthly' ? '20' : '150',
      });
      gaEvent('begin_checkout', {
        currency: 'USD',
        value: plan === 'monthly' ? 20 : 150,
      });
    } finally {
      // Keep UI responsive if overlay doesn't open for some reason.
      window.setTimeout(() => setIsOpeningCheckout(false), 1200);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 relative">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Unlock All Foreign Languages</h2>
          <p className="text-gray-700 font-medium">Choose your plan:</p>
          <p className="text-gray-600 mt-2">
            {freeLanguageNames.length > 0
              ? `You're currently learning ${freeLanguageNames.join(' & ')} for free.`
              : 'You’re currently on the free plan.'
            }{' '}
            English education (ESL & Native Speakers) is 100% free, always. Premium unlocks {remainingForeignCount} more foreign languages and lessons 11–26.
          </p>
        </div>

        {/* Pricing Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Monthly */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly</h3>
            <div className="mb-3">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">$20</span>
                <span className="text-gray-600 font-semibold">/month</span>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✓ Unlock {remainingForeignCount} more foreign languages</li>
              <li>✓ 260 lessons</li>
              <li>✓ Cancel anytime</li>
            </ul>
            <a
              href="https://winterfuyu.gumroad.com/l/gmijuf"
              data-gumroad-overlay-checkout="true"
              className={`gumroad-button w-full py-3 px-4 rounded-lg font-semibold transition-colors border ${
                isOpeningCheckout
                  ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
              }`}
              aria-disabled={isOpeningCheckout}
              onClick={(e) => {
                if (isOpeningCheckout) {
                  e.preventDefault();
                  return;
                }
                startCheckout('monthly');
              }}
            >
              <span className="inline-flex items-center justify-center gap-2">
                {isOpeningCheckout && selectedPlan === 'monthly' && <Loader2 className="w-5 h-5 animate-spin" />}
                {isOpeningCheckout && selectedPlan === 'monthly' ? 'Opening...' : 'Start Monthly'}
              </span>
            </a>
          </div>

          {/* Annual (featured) */}
          <div className="relative bg-white rounded-lg border-2 border-blue-300 shadow-lg p-5 md:scale-[1.03]">
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
              <li>✓ Unlock {remainingForeignCount} more foreign languages</li>
              <li>✓ 260 lessons</li>
              <li>✓ Save $90 vs monthly</li>
              <li>✓ Best value</li>
            </ul>
            <a
              href="https://winterfuyu.gumroad.com/l/iecvpk"
              data-gumroad-overlay-checkout="true"
              className={`gumroad-button w-full py-3 px-4 rounded-lg font-semibold transition-colors shadow-md ${
                isOpeningCheckout
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              aria-disabled={isOpeningCheckout}
              onClick={(e) => {
                if (isOpeningCheckout) {
                  e.preventDefault();
                  return;
                }
                startCheckout('annual');
              }}
            >
              <span className="inline-flex items-center justify-center gap-2">
                {isOpeningCheckout && selectedPlan === 'annual' && <Loader2 className="w-5 h-5 animate-spin" />}
                {isOpeningCheckout && selectedPlan === 'annual' ? 'Opening...' : 'Get Annual - Best Deal'}
              </span>
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-600">
          Both plans include all 9 foreign languages and all lessons. English tracks are always free.
        </p>

        {OFFER_MONEY_BACK_GUARANTEE && (
          <p className="mt-3 text-center text-sm text-gray-600">
            30-day money back guarantee
          </p>
        )}
      </div>
    </div>
  );
}
