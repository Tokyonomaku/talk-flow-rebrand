const STORAGE_KEY = 'completedLessons';

/**
 * Get all completed lessons from localStorage
 * @returns {Array} Array of completed lesson objects
 */
export function getCompletedLessons() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading completed lessons:', error);
    return [];
  }
}

/**
 * Check if a lesson is already completed
 * @param {string} language - Language ID (e.g., 'spanish', 'french')
 * @param {string} lessonId - Lesson ID (e.g., '1', '2')
 * @returns {boolean} True if lesson is already completed
 */
export function isLessonCompleted(language, lessonId) {
  const completed = getCompletedLessons();
  return completed.some(
    (lesson) => lesson.language === language && lesson.lessonId === String(lessonId)
  );
}

/**
 * Mark a lesson as complete
 * @param {string} language - Language ID
 * @param {string} lessonId - Lesson ID
 * @returns {boolean} True if successfully saved, false if duplicate
 */
export function markLessonComplete(language, lessonId) {
  // Prevent duplicate completions
  if (isLessonCompleted(language, lessonId)) {
    return false;
  }

  try {
    const completed = getCompletedLessons();
    const newCompletion = {
      language: language,
      lessonId: String(lessonId),
      completedAt: Date.now()
    };

    completed.push(newCompletion);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    return true;
  } catch (error) {
    console.error('Error saving completed lesson:', error);
    return false;
  }
}

/**
 * Get count of completed lessons
 * @returns {number} Total number of completed lessons
 */
export function getCompletedLessonsCount() {
  return getCompletedLessons().length;
}

/**
 * Get count of completed lessons for a specific language
 * @param {string} language - Language ID (e.g., 'spanish', 'french')
 * @returns {number} Number of completed lessons for the language
 */
export function getCompletedLessonsForLanguage(language) {
  const completed = getCompletedLessons();
  return completed.filter(
    (lesson) => lesson.language === language
  ).length;
}

