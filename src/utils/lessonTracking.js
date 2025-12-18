const STORAGE_KEY = 'completedLessons';
const USER_LANGUAGES_KEY = 'userLanguages';

const ENGLISH_TRACK_IDS = ['esl-english', 'english-native'];
const FOREIGN_LANGUAGE_IDS = [
  'spanish',
  'french',
  'german',
  'korean',
  'portuguese',
  'japanese',
  'chinese',
  'russian',
  'arabic',
];

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
 * English education tracks that are always free for everyone.
 * These tracks should never show paywalls, locks, or premium prompts.
 * @param {string} languageId
 * @returns {boolean}
 */
export function isFreeEnglishTrack(languageId) {
  return ENGLISH_TRACK_IDS.includes(languageId);
}

function normalizeForeignSelection(ids) {
  const arr = Array.isArray(ids) ? ids : [];
  // Deduplicate while preserving order
  const deduped = Array.from(new Set(arr));
  return deduped.filter((id) => FOREIGN_LANGUAGE_IDS.includes(id)).slice(0, 2);
}

/**
 * Get the user's language selections.
 * - `english` is always included (and never counts toward limits)
 * - `foreign` is the user's 2 selected foreign languages (free users) unless premium.
 * @returns {{ foreign: string[], english: string[] }}
 */
export function getUserLanguages() {
  try {
    const stored = localStorage.getItem(USER_LANGUAGES_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const foreign = normalizeForeignSelection(parsed?.foreign);
      return { foreign, english: [...ENGLISH_TRACK_IDS] };
    }

    // Backward compatibility: previously stored "freeLanguages" could include English tracks.
    const legacy = (() => {
      const raw = localStorage.getItem('freeLanguages');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
      const oldLang = localStorage.getItem('freeLanguage');
      return oldLang ? [oldLang] : [];
    })();

    return { foreign: normalizeForeignSelection(legacy), english: [...ENGLISH_TRACK_IDS] };
  } catch (error) {
    console.error('Error reading user languages:', error);
    return { foreign: [], english: [...ENGLISH_TRACK_IDS] };
  }
}

/**
 * Get the user's selected free foreign languages (array of 2 language IDs).
 * NOTE: English tracks are always free and are NOT returned here.
 * @returns {string[]} Array of foreign language IDs (max 2)
 */
export function getFreeLanguages() {
  return getUserLanguages().foreign;
}

/**
 * Get the user's free language selection (backward compatibility - returns first free FOREIGN language)
 * @returns {string|null} Language ID or null if not set
 */
export function getFreeLanguage() {
  const languages = getFreeLanguages();
  return languages.length > 0 ? languages[0] : null;
}

/**
 * Set the user's selected free FOREIGN languages (array of 2 language IDs).
 * English tracks are always available and stored implicitly.
 * @param {string[]} languageIds - Array of foreign language IDs to set as free (max 2)
 */
export function setFreeLanguages(languageIds) {
  try {
    const foreign = normalizeForeignSelection(languageIds);
    const payload = { foreign, english: [...ENGLISH_TRACK_IDS] };
    localStorage.setItem(USER_LANGUAGES_KEY, JSON.stringify(payload));

    // Backward compatibility for older code paths / analytics:
    localStorage.setItem('freeLanguages', JSON.stringify(foreign));
    if (foreign.length > 0) {
      localStorage.setItem('freeLanguage', foreign[0]);
    } else {
      localStorage.removeItem('freeLanguage');
    }
  } catch (error) {
    console.error('Error saving user languages:', error);
  }
}

/**
 * Set the user's free language selection (backward compatibility - sets as first free FOREIGN language)
 * @param {string} languageId - Foreign language ID to set as free
 */
export function setFreeLanguage(languageId) {
  setFreeLanguages([languageId]);
}

/**
 * Check if user has selected their 2 free foreign languages.
 * @returns {boolean} True if exactly 2 foreign languages are selected
 */
export function hasFreeLanguage() {
  return getFreeLanguages().length === 2;
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

