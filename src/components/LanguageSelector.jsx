import { useEffect, useMemo, useState } from 'react';
import { Lock } from 'lucide-react';
import { getAllLanguages } from '../data/languages';
import { isLanguageAccessible, getFreeLanguages, isPremium, isFreeEnglishTrack, setFreeLanguages } from '../utils/lessonTracking';

export default function LanguageSelector({ onSelectLanguage, onLockedLanguageClick }) {
  // --- New onboarding selector flow (only when user hasn't picked free foreign languages yet) ---
  const FOREIGN_LANGUAGE_IDS = useMemo(
    () => ([
      'spanish',
      'french',
      'german',
      'korean',
      'portuguese',
      'japanese',
      'chinese',
      'russian',
      'arabic',
    ]),
    []
  );

  const [step, setStep] = useState(1); // 1, 2, or 3
  const [primaryLanguage, setPrimaryLanguage] = useState(null); // id
  const [bonusLanguage, setBonusLanguage] = useState(null); // id | null

  const languages = getAllLanguages();
  const premium = isPremium();
  const freeLanguages = getFreeLanguages();

  const englishTracks = useMemo(() => languages.filter((l) => isFreeEnglishTrack(l.id)), [languages]);
  const foreignLanguages = useMemo(
    () => languages.filter((l) => FOREIGN_LANGUAGE_IDS.includes(l.id)),
    [languages, FOREIGN_LANGUAGE_IDS]
  );

  const selectedForeign = useMemo(
    () => foreignLanguages.filter((l) => freeLanguages.includes(l.id)),
    [foreignLanguages, freeLanguages]
  );

  const lockedForeign = useMemo(
    () => foreignLanguages.filter((l) => !isLanguageAccessible(l.id)),
    [foreignLanguages]
  );

  const primaryLanguageObj = useMemo(
    () => foreignLanguages.find((l) => l.id === primaryLanguage) || null,
    [foreignLanguages, primaryLanguage]
  );
  const bonusLanguageObj = useMemo(
    () => foreignLanguages.find((l) => l.id === bonusLanguage) || null,
    [foreignLanguages, bonusLanguage]
  );

  const remainingLanguages = useMemo(
    () => foreignLanguages.filter((l) => l.id !== primaryLanguage),
    [foreignLanguages, primaryLanguage]
  );

  const shouldShowOnboarding =
    !premium &&
    freeLanguages.length === 0 &&
    (window.location.pathname === '/select' || window.location.pathname === '/choose-languages');

  useEffect(() => {
    if (!shouldShowOnboarding) return;
    // Reset if user hits back / revisits the selector with no stored selection
    setStep(1);
    setPrimaryLanguage(null);
    setBonusLanguage(null);
  }, [shouldShowOnboarding]);

  const selectPrimaryLanguage = (langId) => {
    setPrimaryLanguage(langId);
    // If they previously picked this as bonus (e.g. rapid taps), clear it
    setBonusLanguage((prev) => (prev === langId ? null : prev));
    setStep(2);
  };

  const selectBonusLanguage = (langId) => {
    setBonusLanguage(langId);
    setStep(3);
  };

  const skipBonusLanguage = () => {
    setBonusLanguage(null);
    setStep(3);
  };

  const goToDashboard = () => {
    const foreign = bonusLanguage ? [primaryLanguage, bonusLanguage] : [primaryLanguage];
    const userLanguages = {
      foreign,
      english: ['esl-english', 'english-native'], // Always included
    };

    // Save to the new requested key
    localStorage.setItem('selectedLanguages', JSON.stringify(userLanguages));
    // Keep the existing app gating logic in sync
    setFreeLanguages(foreign);

    // Navigate to dashboard/first lesson
    window.location.href = '/dashboard';
  };

  if (shouldShowOnboarding) {
    const cardBase =
      'language-card clickable w-full text-left bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-6">
        <style>{`
          @keyframes selectorFadeUp {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .selector-step-1, .selector-step-2, .selector-step-3 {
            animation: selectorFadeUp 220ms ease-out;
          }
        `}</style>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/70 border border-white rounded-full px-4 py-2 text-sm font-semibold text-gray-700">
              Step {step} of 3
            </div>
          </div>

          {step === 1 && (
            <div className="selector-step-1">
              <div className="header text-center mb-6">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  Which language do you want to learn?
                </h1>
                <p className="text-gray-700 mt-2">Pick one to get started</p>
              </div>

              <div className="language-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {foreignLanguages.map((lang) => (
                  <button
                    key={lang.id}
                    type="button"
                    className={`${cardBase} p-5 min-h-[88px]`}
                    onClick={() => selectPrimaryLanguage(lang.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flag text-4xl leading-none" aria-hidden="true">{lang.flag}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{lang.name}</h3>
                        <p className="text-sm text-gray-600">{lang.lessons.length} lessons</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <p className="hint text-center text-gray-600 mt-6">
                You'll get to pick a bonus language next
              </p>
            </div>
          )}

          {step === 2 && primaryLanguageObj && (
            <div className="selector-step-2">
              <div className="selected-display bg-white/70 border border-white rounded-2xl p-4 sm:p-5 mb-6 flex items-center gap-4">
                <div className="checkmark w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-extrabold">
                  ✓
                </div>
                <div className="selected-language flex items-center gap-3">
                  <span className="flag text-3xl" aria-hidden="true">{primaryLanguageObj.flag}</span>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900 leading-tight">{primaryLanguageObj.name}</h2>
                    <p className="text-sm text-gray-600">Selected as your primary language</p>
                  </div>
                </div>
              </div>

              <div className="bonus-section text-center mb-6">
                <span className="badge-bonus inline-flex items-center justify-center bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                  Bonus
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-3">
                  Pick One More Language Free
                </h2>
                <p className="text-gray-700 mt-1">Choose your second language:</p>
              </div>

              <div className="language-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {remainingLanguages.map((lang) => (
                  <button
                    key={lang.id}
                    type="button"
                    className={`${cardBase} p-5 min-h-[88px]`}
                    onClick={() => selectBonusLanguage(lang.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="flag text-4xl leading-none" aria-hidden="true">{lang.flag}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{lang.name}</h3>
                        <p className="text-sm text-gray-600">{lang.lessons.length} lessons</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="skip-link text-blue-700 hover:text-blue-800 font-semibold underline underline-offset-4"
                  onClick={skipBonusLanguage}
                >
                  Skip - Just {primaryLanguageObj.name} for now
                </button>
              </div>
            </div>
          )}

          {step === 3 && primaryLanguageObj && (
            <div className="selector-step-3">
              <div className="success-header text-center mb-6">
                <span className="emoji text-4xl" aria-hidden="true">🎉</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                  You're All Set!
                </h1>
              </div>

              <div className="your-languages bg-white/70 border border-white rounded-2xl p-5 sm:p-6 mb-6">
                <h2 className="text-xl font-extrabold text-gray-900 mb-4">Your Free Languages:</h2>

                <div className="selected-list space-y-3">
                  <div className="language-summary flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4">
                    <span className="flag text-3xl" aria-hidden="true">{primaryLanguageObj.flag}</span>
                    <div className="info flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{primaryLanguageObj.name}</h3>
                      <p className="text-gray-600">10 free lessons</p>
                    </div>
                  </div>

                  {bonusLanguageObj && (
                    <div className="language-summary flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4">
                      <span className="flag text-3xl" aria-hidden="true">{bonusLanguageObj.flag}</span>
                      <div className="info flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{bonusLanguageObj.name}</h3>
                        <p className="text-gray-600">10 free lessons</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="english-included bg-white/70 border border-white rounded-2xl p-5 sm:p-6 mb-6">
                <div className="badge-free inline-flex items-center justify-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                  Always Free
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mt-3">Plus: Free English Education</h3>
                <p className="text-gray-700 mt-1">Both English tracks included at no cost:</p>

                <div className="english-list mt-4 space-y-2">
                  <div className="english-item flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-3">
                    <span className="flag text-2xl" aria-hidden="true">🇺🇸</span>
                    <span className="text-gray-800 font-semibold">ESL English (10 lessons)</span>
                  </div>
                  <div className="english-item flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-3">
                    <span className="flag text-2xl" aria-hidden="true">🇺🇸</span>
                    <span className="text-gray-800 font-semibold">English Essentials (10 lessons)</span>
                  </div>
                </div>
              </div>

              <div className="total text-center mb-6">
                <p className="total-value text-gray-800 text-lg">
                  Total:{' '}
                  <strong>
                    {bonusLanguageObj ? '4 languages, 40 lessons' : '3 languages, 30 lessons'}
                  </strong>
                </p>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn-start-huge w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-lg px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all min-h-[56px]"
                  onClick={goToDashboard}
                >
                  Start Learning Now →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Language Learning App
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Choose a language to start learning
        </p>

        {/* English always-free section */}
        <div className="bg-white/60 rounded-xl p-6 mb-8 border border-blue-100">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900">
              English (Always Free)
            </h3>
            <p className="text-gray-700 text-sm">
              Both English tracks are 100% free for everyone — no selection needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {englishTracks.map((language) => (
              <button
                key={language.id}
                onClick={() => onSelectLanguage(language)}
                className="bg-white rounded-lg shadow-md p-6 text-left relative transition-all hover:shadow-lg hover:scale-[1.01]"
              >
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    100% Free
                  </span>
                </div>
                <div className="text-4xl mb-2">{language.flag}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-1 pr-16">
                  {language.name}
                </h2>
                <p className="text-gray-600">
                  {language.lessons.length} lessons • Always unlocked
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected / accessible foreign languages */}
        {!premium && (
          <div className="bg-white/60 rounded-xl p-6 mb-8 border border-green-100">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Your Selected Languages ({freeLanguages.length}/2 selected)
              </h3>
              <p className="text-gray-700 text-sm">
                Picked languages have 10 free lessons each (lessons 11–26 require Premium).
              </p>
            </div>

            {selectedForeign.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedForeign.map((language) => (
                  <button
                    key={language.id}
                    onClick={() => onSelectLanguage(language)}
                    className="bg-white rounded-lg shadow-md p-6 text-left relative transition-all hover:shadow-lg hover:scale-105 border-2 border-green-400"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        FREE
                      </span>
                    </div>
                    <div className="text-4xl mb-2">{language.flag}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1 pr-16">
                      {language.name}
                    </h2>
                    <p className="text-gray-600">
                      {language.lessons.length} lessons available
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      10 free lessons • 11–26 Premium
                    </p>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-gray-700">
                You haven’t chosen your free foreign languages yet.
              </p>
            )}
          </div>
        )}

        {/* Foreign languages grid (premium: all accessible; free: locked languages shown for upsell) */}
        <div className="bg-white/60 rounded-xl p-6 border border-gray-100">
          <div className="mb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {premium ? 'Foreign Languages (Premium)' : 'Want More Languages?'}
              </h3>
              <p className="text-gray-700 text-sm">
                {premium
                  ? 'Premium unlocks all 9 foreign languages and all lessons.'
                  : 'Upgrade to unlock 7 more foreign languages (English is always free).'}
              </p>
            </div>
            {!premium && (
              <button
                onClick={() => onLockedLanguageClick?.()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-fit"
              >
                Upgrade - $150/year
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(premium ? foreignLanguages : lockedForeign).map((language) => {
              const isAccessible = isLanguageAccessible(language.id);
              const isLocked = !isAccessible;
              return (
                <button
                  key={language.id}
                  onClick={() => {
                    if (isLocked) onLockedLanguageClick?.();
                    else onSelectLanguage(language);
                  }}
                  aria-disabled={isLocked}
                  className={`bg-white rounded-lg shadow-md p-6 text-left relative transition-all ${
                    isLocked ? 'opacity-60' : 'hover:shadow-lg hover:scale-105'
                  }`}
                >
                  <div className="absolute top-4 right-4">
                    {isLocked ? (
                      <span className="bg-gray-400 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        Premium
                      </span>
                    ) : (
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Premium
                      </span>
                    )}
                  </div>
                  <div className="text-4xl mb-2">{language.flag}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1 pr-16">
                    {language.name}
                  </h2>
                  <p className="text-gray-600">
                    {language.lessons.length} lessons available
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

