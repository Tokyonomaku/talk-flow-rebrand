import { getAllLanguages } from '../data/languages';

export default function ChooseFreeLanguageModal({ isOpen, onSelectLanguage }) {
  if (!isOpen) return null;

  const languages = getAllLanguages();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your Free Language
          </h2>
          <p className="text-gray-600">
            Pick one language to learn for free with all 10 lessons unlocked!
          </p>
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => onSelectLanguage(language.id)}
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
