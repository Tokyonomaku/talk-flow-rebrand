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
    const isPremiumUser = premium === 'true';
    console.log('[isPremium] Premium status:', isPremiumUser, '| Raw localStorage value:', premium, '| Type:', typeof premium);
    return isPremiumUser;
  } catch (error) {
    console.error('[isPremium] Error reading premium status:', error);
    return false;
  }
}

/**
 * Get the user's free languages selection (array of 2 language IDs)
 * @returns {string[]} Array of language IDs (max 2)
 */
export function getFreeLanguages() {
  try {
    const stored = localStorage.getItem('freeLanguages');
    if (stored) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    }
    // Fallback to old single language format for migration
    const oldLang = localStorage.getItem('freeLanguage');
    if (oldLang) {
      return [oldLang];
    }
    return [];
  } catch (error) {
    console.error('Error reading free languages:', error);
    return [];
  }
}

/**
 * Get the user's free language selection (backward compatibility - returns first free language)
 * @returns {string|null} Language ID or null if not set
 */
export function getFreeLanguage() {
  const languages = getFreeLanguages();
  return languages.length > 0 ? languages[0] : null;
}

/**
 * Set the user's free languages selection (array of 2 language IDs)
 * @param {string[]} languageIds - Array of language IDs to set as free (max 2)
 */
export function setFreeLanguages(languageIds) {
  try {
    const languages = Array.isArray(languageIds) ? languageIds.slice(0, 2) : [];
    localStorage.setItem('freeLanguages', JSON.stringify(languages));
    // Also update old format for backward compatibility
    if (languages.length > 0) {
      localStorage.setItem('freeLanguage', languages[0]);
    }
  } catch (error) {
    console.error('Error saving free languages:', error);
  }
}

/**
 * Set the user's free language selection (backward compatibility - sets as first free language)
 * @param {string} languageId - Language ID to set as free
 */
export function setFreeLanguage(languageId) {
  setFreeLanguages([languageId]);
}

/**
 * Check if user has selected free languages
 * @returns {boolean} True if at least one free language is set
 */
export function hasFreeLanguage() {
  return getFreeLanguages().length > 0;
}

/**
 * English education tracks that are always free for everyone.
 * These tracks should never show paywalls, locks, or premium prompts.
 * @param {string} languageId
 * @returns {boolean}
 */
export function isFreeEnglishTrack(languageId) {
  return languageId === 'esl-english' || languageId === 'english-native';
}

/**
 * Check if a language is accessible (free language or premium)
 * @param {string} languageId - Language ID to check
 * @returns {boolean} True if language is accessible
 */
export function isLanguageAccessible(languageId) {
  // English education is always free (social good positioning)
  if (isFreeEnglishTrack(languageId)) {
    return true;
  }
  if (isPremium()) {
    return true; // Premium users have access to all languages
  }
  const freeLanguages = getFreeLanguages();
  return freeLanguages.includes(languageId);
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

/**
 * Check if a lesson is accessible (free users get lessons 1-10, premium gets all)
 * @param {string} languageId - Language ID to check
 * @param {number} lessonId - Lesson ID to check
 * @returns {boolean} True if lesson is accessible
 */
export function isLessonAccessible(languageId, lessonId) {
  // English education tracks are always free — all lessons unlocked.
  if (isFreeEnglishTrack(languageId)) {
    return true;
  }

  // Get premium status directly from localStorage
  const premiumStatus = localStorage.getItem('isPremium') === 'true';
  console.log(`[isLessonAccessible] Premium status: ${premiumStatus}, Lesson ID: ${lessonId}, Language: ${languageId}`);
  
  // Premium users have access to all lessons
  if (premiumStatus) {
    console.log(`[isLessonAccessible] Premium user - lesson ${lessonId} is accessible`);
    return true;
  }
  
  // Check if language is accessible (free language)
  if (!isLanguageAccessible(languageId)) {
    console.log(`[isLessonAccessible] Language ${languageId} not accessible - lesson ${lessonId} locked`);
    return false;
  }
  
  // Free users get lessons 1-10 ONLY, premium lessons are 11-26
  // Ensure lessonId is treated as a number for comparison
  const lessonNum = typeof lessonId === 'string' ? parseInt(lessonId, 10) : Number(lessonId);
  const isAccessible = lessonNum <= 10;
  
  console.log(`[isLessonAccessible] Free user - lesson ${lessonNum} accessible: ${isAccessible} (must be <= 10)`);
  
  return isAccessible;
}

/**
 * Check if a lesson is premium (lessons 11-26)
 * @param {number} lessonId - Lesson ID to check
 * @returns {boolean} True if lesson is premium
 */
export function isPremiumLesson(lessonId) {
  // Ensure lessonId is treated as a number for comparison
  const lessonNum = typeof lessonId === 'string' ? parseInt(lessonId, 10) : lessonId;
  return lessonNum > 10;
}

