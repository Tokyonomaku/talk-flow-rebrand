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

/**
 * Check if user has premium subscription
 * @returns {boolean} True if user is premium
 */
export function isPremium() {
  try {
    const premium = localStorage.getItem('isPremium');
    return premium === 'true';
  } catch (error) {
    console.error('Error reading premium status:', error);
    return false;
  }
}

/**
 * Get the user's free language selection
 * @returns {string|null} Language ID or null if not set
 */
export function getFreeLanguage() {
  try {
    return localStorage.getItem('freeLanguage');
  } catch (error) {
    console.error('Error reading free language:', error);
    return null;
  }
}

/**
 * Set the user's free language selection
 * @param {string} languageId - Language ID to set as free
 */
export function setFreeLanguage(languageId) {
  try {
    localStorage.setItem('freeLanguage', languageId);
  } catch (error) {
    console.error('Error saving free language:', error);
  }
}

/**
 * Check if user has selected a free language
 * @returns {boolean} True if free language is set
 */
export function hasFreeLanguage() {
  return getFreeLanguage() !== null;
}

/**
 * Check if a language is accessible (free language or premium)
 * @param {string} languageId - Language ID to check
 * @returns {boolean} True if language is accessible
 */
export function isLanguageAccessible(languageId) {
  if (isPremium()) {
    return true; // Premium users have access to all languages
  }
  const freeLanguage = getFreeLanguage();
  return freeLanguage === languageId;
}

/**
 * Check if user can start a new lesson (always true now - all lessons in free language are available)
 * @returns {boolean} True if user can start a lesson
 */
export function canStartLesson() {
  // All lessons in the free language are available
  // This function is kept for compatibility but always returns true
  return true;
}

/**
 * Get remaining free lessons (deprecated - kept for compatibility)
 * @returns {number} Always returns Infinity since all lessons in free language are available
 */
export function getRemainingFreeLessons() {
  // All 10 lessons in free language are available
  return Infinity;
}

