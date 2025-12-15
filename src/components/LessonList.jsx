import { ArrowLeft, Check, Lock } from 'lucide-react';
import { getCompletedLessonsForLanguage, isLessonCompleted, isLessonAccessible, isPremium, isPremiumLesson, isFreeEnglishTrack } from '../utils/lessonTracking';

export default function LessonList({ language, onBack, onSelectLesson, onLockedLessonClick }) {
  const completedCount = getCompletedLessonsForLanguage(language.id);
  const totalLessons = language.lessons.length;
  const alwaysFreeEnglish = isFreeEnglishTrack(language.id);
  
  // Get premium status directly and log it
  const premiumRaw = localStorage.getItem('isPremium');
  const premium = premiumRaw === 'true';
  
  // Debug logging
  console.log('=== LESSON LIST DEBUG ===');
  console.log('Premium status:', premium);
  console.log('Premium raw value:', premiumRaw, '| Type:', typeof premiumRaw);
  console.log('Total lessons:', totalLessons);
  console.log('Language:', language.name);
  console.log('Lessons array length:', language.lessons.length);
  console.log('Free users: lessons 1-10 unlocked, 11-26 locked');
  console.log('Premium users: all lessons unlocked');
  
  // Calculate unlocked vs locked lessons
  const unlockedLessons = premium || alwaysFreeEnglish ? totalLessons : Math.min(10, totalLessons);
  const lockedLessons = totalLessons - unlockedLessons;
  const progressPercentage = (completedCount / unlockedLessons) * 100;

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
        
        {/* Upgrade Banner */}
        {!premium && lockedLessons > 0 && (
          <div className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1">
                <p className="font-semibold text-lg mb-1">
                  🔒 {unlockedLessons} of {totalLessons} lessons unlocked. Upgrade to Premium (Monthly $20/mo or Annual $150/yr)
                </p>
              </div>
              <button
                onClick={() => {
                  console.log('[Upgrade Banner] Clicked - opening upgrade modal');
                  onLockedLessonClick && onLockedLessonClick(11);
                }}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap shadow-md"
              >
                View plans
              </button>
            </div>
          </div>
        )}
        
        {/* Progress Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-700 font-semibold">
              {premium ? (
                <>Lessons completed: {completedCount}/{totalLessons}</>
              ) : (
                <>{unlockedLessons} of {totalLessons} lessons unlocked</>
              )}
            </p>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
            {/* Unlocked progress */}
            <div
              className="bg-green-500 h-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
            {/* Locked section */}
            {!premium && lockedLessons > 0 && (
              <div
                className="bg-gray-400 h-full absolute top-0 right-0"
                style={{ width: `${(lockedLessons / totalLessons) * 100}%` }}
                title={`${lockedLessons} locked lessons`}
              />
            )}
          </div>
          {!premium && lockedLessons > 0 && (
            <p className="text-sm text-gray-600 mt-1">
              {completedCount} completed • {unlockedLessons - completedCount} available • {lockedLessons} locked
            </p>
          )}
        </div>

        <p className="text-gray-600 mb-8">
          {premium || alwaysFreeEnglish || totalLessons <= 10
            ? 'Select a lesson to begin'
            : 'Select a lesson to begin (lessons 11-26 require Premium)'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {language.lessons.map((lesson, index) => {
            const lessonCompleted = isLessonCompleted(language.id, lesson.id);
            const isAccessible = isLessonAccessible(language.id, lesson.id);
            const isLocked = !isAccessible;
            
            // Debug log for all lessons
            console.log(`[LessonList] Lesson ${lesson.id} (index ${index}): accessible=${isAccessible}, locked=${isLocked}, premium=${premium}`);
            
            // CRITICAL: Double-check locking logic
            const lessonNum = typeof lesson.id === 'string' ? parseInt(lesson.id, 10) : Number(lesson.id);
            const shouldBeLocked = !premium && !alwaysFreeEnglish && lessonNum > 10;
            
            if (isLocked !== shouldBeLocked) {
              console.error(`[LessonList] MISMATCH! Lesson ${lesson.id}: isLocked=${isLocked}, shouldBeLocked=${shouldBeLocked}`);
            }
            
            return (
              <button
                key={lesson.id}
                onClick={() => {
                  console.log(`[LessonList] Lesson ${lesson.id} clicked. isLocked=${isLocked}, premium=${premium}`);
                  
                  // CRITICAL: Double-check locking before allowing access
                  const lessonNum = typeof lesson.id === 'string' ? parseInt(lesson.id, 10) : Number(lesson.id);
                  const isActuallyLocked = !premium && !alwaysFreeEnglish && lessonNum > 10;
                  
                  if (isLocked || isActuallyLocked) {
                    console.log(`[LessonList] BLOCKING lesson ${lesson.id} - showing upgrade modal`);
                    onLockedLessonClick(lesson.id);
                  } else {
                    console.log(`[LessonList] ALLOWING lesson ${lesson.id}`);
                    onSelectLesson(lesson);
                  }
                }}
                className={`rounded-lg shadow-md p-6 transition-all text-left relative ${
                  isLocked 
                    ? 'bg-gray-100 opacity-75 cursor-pointer hover:shadow-lg hover:opacity-85 border-2 border-gray-300' 
                    : 'bg-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {/* Lock Icon and Premium Badge for Premium Lessons */}
                {isLocked && (
                  <>
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-red-100 rounded-full p-2 border-2 border-red-300">
                        <Lock className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 z-10">
                      <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded shadow-md">
                        🔒 Premium
                      </span>
                    </div>
                  </>
                )}
                
                {/* Completion Checkmark */}
                {lessonCompleted && !isLocked && (
                  <div className="absolute top-4 right-4">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                )}
                
                <h2 className={`text-xl font-bold mb-2 pr-8 ${isLocked ? 'text-gray-500' : 'text-gray-900'}`}>
                  Lesson {lesson.id}: {lesson.title}
                </h2>
                <p className={`text-sm ${isLocked ? 'text-gray-400' : 'text-gray-600'}`}>
                  {lesson.words?.length || 0} words
                  {isPremiumLesson(lesson.id) && (
                    <span className="ml-2 text-gray-500">• Advanced content</span>
                  )}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

