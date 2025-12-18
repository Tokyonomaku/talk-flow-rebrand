import { Lock } from 'lucide-react';
import { getAllLanguages } from '../data/languages';
import { isLanguageAccessible, getFreeLanguages, isPremium, isFreeEnglishTrack } from '../utils/lessonTracking';

export default function LanguageSelector({ onSelectLanguage, onLockedLanguageClick }) {
  const languages = getAllLanguages();
  const freeLanguages = getFreeLanguages();
  const premium = isPremium();
  const englishTracks = languages.filter((l) => isFreeEnglishTrack(l.id));
  const foreignLanguages = languages.filter((l) => !isFreeEnglishTrack(l.id));
  const selectedForeign = foreignLanguages.filter((l) => freeLanguages.includes(l.id));
  const lockedForeign = foreignLanguages.filter((l) => !isLanguageAccessible(l.id));

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

