import { useState } from 'react';
import { getAllLanguages } from '../data/languages';

export default function ChooseFreeLanguageModal({ isOpen, onSelectLanguages }) {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const languages = getAllLanguages();

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
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your 2 Free Languages
          </h2>
          <p className="text-gray-600">
            Select 2 languages to learn for free with all lessons unlocked!
          </p>
          {selectedLanguages.length > 0 && (
            <p className="text-blue-600 font-semibold mt-2">
              {selectedLanguages.length} of 2 languages selected
            </p>
          )}
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {languages.map((language) => {
            const isSelected = selectedLanguages.includes(language.id);
            return (
              <button
                key={language.id}
                onClick={() => handleLanguageClick(language.id)}
                disabled={!isSelected && selectedLanguages.length >= 2}
                className={`rounded-lg shadow-md p-6 transition-all text-left border-2 ${
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
                  {language.lessons.length} lessons
                </p>
              </button>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            disabled={selectedLanguages.length !== 2}
            className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all ${
              selectedLanguages.length === 2
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue with 2 Languages
          </button>
        </div>
      </div>
    </div>
  );
}
