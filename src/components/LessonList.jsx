import { ArrowLeft, Check } from 'lucide-react';
import { getCompletedLessonsForLanguage, isLessonCompleted } from '../utils/lessonTracking';

export default function LessonList({ language, onBack, onSelectLesson }) {
  const completedCount = getCompletedLessonsForLanguage(language.id);
  const totalLessons = language.lessons.length;
  const progressPercentage = (completedCount / totalLessons) * 100;

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
        
        {/* Progress Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-700 font-semibold">
              Lessons completed: {completedCount}/{totalLessons}
            </p>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-green-500 h-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          Select a lesson to begin
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {language.lessons.map((lesson) => {
            const lessonCompleted = isLessonCompleted(language.id, lesson.id);
            return (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson)}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:scale-105 text-left relative"
              >
                {/* Completion Checkmark */}
                {lessonCompleted && (
                  <div className="absolute top-4 right-4">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                )}
                <h2 className="text-xl font-bold text-gray-900 mb-2 pr-8">
                  {lesson.title}
                </h2>
                <p className="text-gray-600">
                  {lesson.words.length} words
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

