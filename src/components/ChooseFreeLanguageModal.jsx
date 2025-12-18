import { useEffect, useState } from 'react';
import { getAllLanguages } from '../data/languages';
import { getFreeLanguages, isFreeEnglishTrack } from '../utils/lessonTracking';

export default function ChooseFreeLanguageModal({ isOpen, onSelectLanguages }) {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const languages = getAllLanguages();
  const englishTracks = languages.filter((l) => isFreeEnglishTrack(l.id));
  const foreignLanguages = languages.filter((l) => !isFreeEnglishTrack(l.id));

  useEffect(() => {
    if (!isOpen) return;
    // Prefill with any existing foreign-language selections (migration-friendly).
    setSelectedLanguages(getFreeLanguages());
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLanguageClick = (languageId) => {
    setSelectedLanguages(prev => {
      if (prev.includes(languageId)) {
        // Deselect if already selected
        return prev.filter(id => id !== languageId);
      } else if (prev.length < 2) {
        // Add if less than 2 selected
        return [...prev, languageId];
      }
      // Already have 2 selected, don't add more
      return prev;
    });
  };

  const handleContinue = () => {
    if (selectedLanguages.length === 2) {
      onSelectLanguages(selectedLanguages);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <div className="language-selector">
          {/* English section (always free) */}
          <div className="english-section mb-8">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-gray-900">
                English Education (Always Free) ✓
              </h3>
              <p className="text-gray-600">
                Both English tracks are 100% free for everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {englishTracks.map((language) => (
                <div
                  key={language.id}
                  className="bg-white rounded-lg shadow-md p-6 text-left relative border-2 border-blue-200"
                >
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      100% Free
                    </span>
                  </div>
                  <div className="text-4xl mb-2">{language.flag}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1 pr-16">
                    {language.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language.lessons.length} lessons • Always unlocked
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Foreign language selection */}
          <div className="foreign-languages-section">
            <div className="mb-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Choose Your 2 Free Languages ({selectedLanguages.length}/2 selected)
              </h2>
              <p className="text-gray-600">
                Pick 2 languages to learn for free (10 lessons each)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {foreignLanguages.map((language) => {
                const isSelected = selectedLanguages.includes(language.id);
                return (
                  <button
                    key={language.id}
                    onClick={() => handleLanguageClick(language.id)}
                    disabled={!isSelected && selectedLanguages.length >= 2}
                    className={`rounded-lg shadow-md p-6 transition-all text-left border-2 relative ${
                      isSelected
                        ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-500 scale-105 shadow-lg'
                        : selectedLanguages.length >= 2
                        ? 'bg-gray-100 border-gray-300 opacity-50 cursor-not-allowed'
                        : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-400 hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                    )}
                    <div className="text-4xl mb-2 text-center">{language.flag}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                      {language.name}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      10 free lessons • 11–26 Premium
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center">
              <button
                disabled={selectedLanguages.length !== 2}
                onClick={handleContinue}
                className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all ${
                  selectedLanguages.length === 2
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue with {selectedLanguages.length}/2 Languages
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
