import { useEffect, useMemo, useState } from 'react';
import { Lock } from 'lucide-react';
import { getAllLanguages } from '../data/languages';
import { isLanguageAccessible, getFreeLanguages, isPremium, isFreeEnglishTrack, setFreeLanguages } from '../utils/lessonTracking';
import { gaEvent } from '../utils/analytics';
import StreakCard from './StreakCard';

export default function LanguageSelector({ onSelectLanguage, onLockedLanguageClick, streakData, streakMeta }) {
  // --- New onboarding selector flow (only when user hasn't picked free foreign languages yet) ---
  const FOREIGN_LANGUAGE_IDS = useMemo(
    () => ([
      'spanish',
      'french',
      'german',
      'dutch',
      'hindi',
      'italian',
      'korean',
      'portuguese',
      'japanese',
      'chinese',
      'russian',
      'arabic',
    ]),
    []
  );

  const [selectedOnboarding, setSelectedOnboarding] = useState([]); // foreign language ids (max 2)

  const languages = getAllLanguages();
  const premium = isPremium();
  const freeLanguages = getFreeLanguages();

  const englishTracks = useMemo(() => languages.filter((l) => isFreeEnglishTrack(l.id)), [languages]);
  const foreignLanguages = useMemo(
    () => languages.filter((l) => FOREIGN_LANGUAGE_IDS.includes(l.id)),
    [languages, FOREIGN_LANGUAGE_IDS]
  );

  const lockedForeign = useMemo(
    () => foreignLanguages.filter((l) => !isLanguageAccessible(l.id)),
    [foreignLanguages]
  );

  const shouldShowOnboarding =
    !premium &&
    freeLanguages.length === 0 &&
    (window.location.pathname === '/app' || window.location.pathname === '/select' || window.location.pathname === '/choose-languages');

  // GA4: language selector page view
  useEffect(() => {
    if (
      window.location.pathname !== '/app' &&
      window.location.pathname !== '/select' &&
      window.location.pathname !== '/choose-languages'
    ) return;
    gaEvent('page_view', {
      page_title: 'Language Selector',
      page_location: window.location.href,
    });
  }, []);

  // On first touch to /app (or /select), preselect language intent if provided (e.g. from / Spanish landing CTA).
  useEffect(() => {
    if (!shouldShowOnboarding) return;
    try {
      const params = new URLSearchParams(window.location.search);
      const lang = params.get('language');
      if (lang && FOREIGN_LANGUAGE_IDS.includes(lang)) {
        setSelectedOnboarding([lang]);
        return;
      }
    } catch (_) {
      // ignore
    }
    // Default: no preselection
    setSelectedOnboarding([]);
  }, [shouldShowOnboarding, FOREIGN_LANGUAGE_IDS]);

  const toggleOnboardingLanguage = (langId) => {
    setSelectedOnboarding((prev) => {
      if (prev.includes(langId)) return prev.filter((id) => id !== langId);
      if (prev.length >= 2) return prev; // max 2
      return [...prev, langId];
    });
  };

  const goToDashboard = () => {
    const foreign = selectedOnboarding.slice(0, 2);
    if (foreign.length < 2) return;

    const userLanguages = {
      foreign,
      english: ['esl-english', 'english-native'], // Always included
    };

    // GA4: languages selected (free onboarding)
    gaEvent('languages_selected', {
      language1: foreign[0],
      language2: foreign[1],
    });

    // Backward compatibility: some older flows expect this key
    localStorage.setItem('selectedLanguages', JSON.stringify(userLanguages));
    // Keep the existing app gating logic in sync
    setFreeLanguages(foreign);

    // Navigate to dashboard/first lesson
    window.location.href = '/dashboard';
  };

  if (shouldShowOnboarding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-end">
            <a
              href="/activate"
              className="text-sm font-semibold text-gray-700 hover:text-gray-900 underline underline-offset-4"
            >
              Sign in
            </a>
          </div>

          <div className="text-center mt-2 mb-6">
            <h1 className="text-[32px] leading-tight font-extrabold text-gray-900">
              Pick Your 2 Free Languages
            </h1>
            <p className="text-[11px] min-[360px]:text-[12px] min-[420px]:text-[16px] tracking-[-0.02em] text-gray-600 mt-2 whitespace-nowrap">
              20 lessons per language. No credit card. Actually free.
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Pick 2 to start learning ({selectedOnboarding.length}/2)
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <StreakCard variant="badge" streakData={streakData} streakMeta={streakMeta} />
          </div>

          <div className="language-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {foreignLanguages.map((lang) => {
              const isSelected = selectedOnboarding.includes(lang.id);
              const isAtLimit = !isSelected && selectedOnboarding.length >= 2;

              return (
                <div
                  key={lang.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleOnboardingLanguage(lang.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') toggleOnboardingLanguage(lang.id);
                  }}
                  className={`bg-white rounded-2xl border shadow-sm p-5 min-h-[104px] transition-all cursor-pointer ${
                    isSelected
                      ? 'border-blue-600 shadow-md'
                      : 'border-gray-200 hover:shadow-md'
                  } ${isAtLimit ? 'opacity-60' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="flag text-4xl leading-none" aria-hidden="true">{lang.flag}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900">{lang.name}</h3>
                      <p className="text-sm text-gray-600">{lang.lessons.length} lessons</p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleOnboardingLanguage(lang.id);
                      }}
                      disabled={isAtLimit}
                      className={`shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      } ${isAtLimit ? 'cursor-not-allowed' : ''}`}
                    >
                      {isSelected ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              );
            })}

            {/* English cards: visible for context, included automatically */}
            {englishTracks.map((lang) => (
              <div
                key={lang.id}
                className="bg-white/70 rounded-2xl border border-white shadow-sm p-5 min-h-[104px]"
              >
                <div className="flex items-center gap-4">
                  <span className="flag text-4xl leading-none" aria-hidden="true">{lang.flag}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 truncate">{lang.name}</h3>
                    <p className="text-sm text-gray-600">{lang.lessons.length} lessons</p>
                  </div>
                  <button
                    type="button"
                    disabled
                    className="shrink-0 px-4 py-2 rounded-xl text-sm font-bold bg-green-100 text-green-800"
                    aria-disabled="true"
                    title="Included automatically"
                  >
                    Included
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={goToDashboard}
              disabled={selectedOnboarding.length !== 2}
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-lg min-h-[56px] shadow-md transition-all ${
                selectedOnboarding.length === 2
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start Learning →
            </button>
            <div className="text-sm text-gray-600 mt-6">
              ✓ Free forever&nbsp;&nbsp;&nbsp;&nbsp;✓ No ads&nbsp;&nbsp;&nbsp;&nbsp;✓ No energy systems
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-6">
          <StreakCard variant="badge" streakData={streakData} streakMeta={streakMeta} />
        </div>
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

            {foreignLanguages.filter((l) => freeLanguages.includes(l.id)).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foreignLanguages.filter((l) => freeLanguages.includes(l.id)).map((language) => (
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

