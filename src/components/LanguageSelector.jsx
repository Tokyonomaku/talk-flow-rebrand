import { getAllLanguages } from '../data/languages';

export default function LanguageSelector({ onSelectLanguage }) {
  const languages = getAllLanguages();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Language Learning App
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Choose a language to start learning
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => onSelectLanguage(language)}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 text-left"
            >
              <div className="text-4xl mb-2">{language.flag}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {language.name}
              </h2>
              <p className="text-gray-600">
                {language.lessons.length} lessons available
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

