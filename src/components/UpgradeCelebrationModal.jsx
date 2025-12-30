import { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { logEvent } from '../utils/eventLog';
import { gaEvent } from '../utils/analytics';

export default function UpgradeCelebrationModal({
  isOpen,
  onClose,
  languageName,
  extraLessonsCount,
}) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setAnimateIn(false);
      return;
    }
    const t = window.setTimeout(() => setAnimateIn(true), 10);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  const extraLessonsLabel = useMemo(() => {
    const n = typeof extraLessonsCount === 'number' ? extraLessonsCount : 16;
    if (n <= 0) return null;
    return `${n} more ${languageName} lessons (songs, slang, advanced topics)`;
  }, [extraLessonsCount, languageName]);

  if (!isOpen) return null;

  const goMonthly = () => {
    logEvent('upgrade_clicked', { from_where: 'celebration_modal_monthly' });
    gaEvent('upgrade_clicked', { from_page: 'celebration_modal', price: '20' });
    gaEvent('begin_checkout', { currency: 'USD', value: 20 });
    window.location.href = 'https://winterfuyu.gumroad.com/l/gmijuf';
  };

  const goAnnual = () => {
    logEvent('upgrade_clicked', { from_where: 'celebration_modal_annual' });
    gaEvent('upgrade_clicked', { from_page: 'celebration_modal', price: '150' });
    gaEvent('begin_checkout', { currency: 'USD', value: 150 });
    window.location.href = 'https://winterfuyu.gumroad.com/l/iecvpk';
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50">
      <div
        className={`w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-200 relative transition-all duration-200 ${
          animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Upgrade celebration modal"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          {/* Celebration header */}
          <div className="text-center mb-6">
            <div className="text-6xl mb-2">🎉</div>
            <h2 className="text-3xl font-extrabold text-gray-900">Congratulations!</h2>
            <p className="mt-2 text-gray-700 text-lg">
              You just completed all 10 free lessons in <span className="font-extrabold">{languageName}</span>!
            </p>
          </div>

          {/* Progress summary */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-extrabold text-gray-900">10</div>
              <div className="text-sm font-semibold text-gray-600">Lessons Completed</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-extrabold text-gray-900">50+</div>
              <div className="text-sm font-semibold text-gray-600">Phrases Learned</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-extrabold text-gray-900">1</div>
              <div className="text-sm font-semibold text-gray-600">Language Started</div>
            </div>
          </div>

          {/* What next */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-extrabold text-gray-900">Ready to Keep Learning?</h3>
            <p className="mt-2 text-gray-700">
              You&apos;ve mastered the basics. Now unlock advanced conversations.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6">
            <h4 className="text-lg font-extrabold text-gray-900 mb-3">Upgrade to Premium and Get:</h4>
            <ul className="space-y-2 text-gray-800 font-semibold">
              {extraLessonsLabel ? (
                <li>✓ {extraLessonsLabel}</li>
              ) : (
                <li>✓ New advanced {languageName} lessons as we release them</li>
              )}
              <li>✓ All 9 foreign languages unlocked</li>
              <li>✓ 260 total lessons across 11 languages</li>
              <li>✓ All future content and updates</li>
            </ul>
          </div>

          {/* Pricing options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="text-2xl font-extrabold text-gray-900">$20/month</div>
              <div className="text-sm font-semibold text-gray-600 mt-1">Cancel anytime</div>
              <button
                className="mt-4 w-full py-3 rounded-xl font-extrabold border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
                onClick={goMonthly}
              >
                Start Monthly
              </button>
            </div>

            <div className="relative bg-white rounded-2xl border-2 border-blue-300 shadow-lg p-5 md:scale-[1.02]">
              <div className="absolute -top-3 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-extrabold shadow">
                SAVE $90
              </div>
              <div className="text-2xl font-extrabold text-gray-900">$150/year</div>
              <div className="text-sm font-semibold text-blue-700 mt-1">Just $12.50/month</div>
              <button
                className="mt-4 w-full py-3 rounded-xl font-extrabold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md"
                onClick={goAnnual}
              >
                Get Annual - Best Deal
              </button>
            </div>
          </div>

          <button
            className="mt-6 w-full text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
            onClick={onClose}
          >
            Maybe later - I&apos;ll finish my other free language first
          </button>
        </div>
      </div>
    </div>
  );
}

