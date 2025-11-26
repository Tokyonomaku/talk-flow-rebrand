import { ArrowLeft } from 'lucide-react';

export default function LessonList({ language, onBack, onSelectLesson }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Languages</span>
        </button>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {language.flag} {language.name}
        </h1>
        <p className="text-gray-600 mb-8">
          Select a lesson to begin
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {language.lessons.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 text-left"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {lesson.title}
              </h2>
              <p className="text-gray-600">
                {lesson.words.length} words
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

