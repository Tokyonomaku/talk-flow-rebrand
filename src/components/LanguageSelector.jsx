import { Lock } from 'lucide-react';
import { getAllLanguages } from '../data/languages';
import { isLanguageAccessible, getFreeLanguages, isPremium, isFreeEnglishTrack } from '../utils/lessonTracking';

export default function LanguageSelector({ onSelectLanguage, onLockedLanguageClick }) {
  const languages = getAllLanguages();
  const freeLanguages = getFreeLanguages();
  const premium = isPremium();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Language Learning App
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Choose a language to start learning
        </p>

        <div className="mb-6 text-center">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">English education (ESL & Native Speakers) is 100% free, always.</span> Premium unlocks 9 other languages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((language) => {
            const alwaysFree = isFreeEnglishTrack(language.id);
            const isAccessible = isLanguageAccessible(language.id);
            const isFree = freeLanguages.includes(language.id) && !premium;
            const isLocked = !isAccessible && !alwaysFree;

            return (
              <button
                key={language.id}
                onClick={() => {
                  if (isLocked) {
                    onLockedLanguageClick?.();
                  } else {
                    onSelectLanguage(language);
                  }
                }}
                aria-disabled={isLocked}
                className={`bg-white rounded-lg shadow-md p-6 text-left relative transition-all ${
                  isLocked
                    ? 'opacity-60'
                    : 'hover:shadow-lg hover:scale-105'
                } ${isFree ? 'border-2 border-green-400' : ''}`}
              >
                {/* Badges */}
                <div className="absolute top-4 right-4">
                  {alwaysFree ? (
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      100% Free
                    </span>
                  ) : isFree ? (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      FREE
                    </span>
                  ) : isLocked ? (
                    <span className="bg-gray-400 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Premium
                    </span>
                  ) : null}
                </div>

                <div className="text-4xl mb-2">{language.flag}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1 pr-16">
                  {language.name}
                </h2>
                {language.badge && (
                  <p className="text-xs font-semibold text-indigo-700 bg-indigo-50 inline-block px-2 py-1 rounded-full mb-2">
                    {language.badge}
                  </p>
                )}
                <p className="text-gray-600">
                  {language.lessons.length} lessons available
                </p>
                {!premium && !alwaysFree && (
                  <p className="text-xs text-gray-500 mt-1">
                    10 free lessons • 11–26 Premium
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

