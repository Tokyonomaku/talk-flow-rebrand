const QUIZ_RESULTS_KEY = 'quizResults';

function shuffleArray(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildQuestionPool(lesson, languageName) {
  const words = Array.isArray(lesson?.words) ? lesson.words : [];
  const slang = Array.isArray(lesson?.streetSlang) ? lesson.streetSlang : [];
  const combined = [...words, ...slang].filter((item) => item?.word && item?.translation);

  const questions = [];
  const wordsWithSpaces = combined.filter((item) => item.word.includes(' '));

  for (const item of combined) {
    questions.push({
      type: 'translation-es-en',
      prompt: `What does "${item.word}" mean?`,
      correctAnswer: item.translation,
      source: item,
    });
    questions.push({
      type: 'translation-en-es',
      prompt: `How do you say "${item.translation}" in ${languageName}?`,
      correctAnswer: item.word,
      source: item,
    });
  }

  for (const item of wordsWithSpaces) {
    const parts = item.word.split(' ');
    if (parts.length < 2) continue;
    const missing = parts[parts.length - 1];
    const blanked = `${parts.slice(0, -1).join(' ')} ___`;
    questions.push({
      type: 'fill-blank',
      prompt: `Complete: ${blanked}`,
      correctAnswer: missing,
      source: item,
    });
  }

  return questions;
}

function buildOptions(question, allItems, preferWord) {
  const pool = allItems
    .map((item) => (preferWord ? item.word : item.translation))
    .filter(Boolean);

  const uniquePool = Array.from(new Set(pool)).filter((value) => value !== question.correctAnswer);
  const distractors = shuffleArray(uniquePool).slice(0, 3);
  const options = shuffleArray([question.correctAnswer, ...distractors]);

  // Ensure 4 options even if pool is small.
  while (options.length < 4 && uniquePool.length > 0) {
    const next = uniquePool[Math.floor(Math.random() * uniquePool.length)];
    if (!options.includes(next)) options.push(next);
  }

  return shuffleArray(options);
}

export function generateQuizQuestions(lesson, languageName, count = 5) {
  const allItems = [
    ...(lesson?.words || []),
    ...(lesson?.streetSlang || []),
  ].filter((item) => item?.word && item?.translation);

  const pool = buildQuestionPool(lesson, languageName);
  const shuffled = shuffleArray(pool);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return selected.map((question) => {
    const preferWord = question.type === 'translation-en-es' || question.type === 'fill-blank';
    return {
      ...question,
      options: buildOptions(question, allItems, preferWord),
    };
  });
}

export function saveQuizResult(result) {
  try {
    const stored = localStorage.getItem(QUIZ_RESULTS_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    const next = Array.isArray(parsed) ? parsed : [];
    next.push(result);
    localStorage.setItem(QUIZ_RESULTS_KEY, JSON.stringify(next));
  } catch (error) {
    console.error('Error saving quiz result:', error);
  }
}

export function getQuizResults() {
  try {
    const stored = localStorage.getItem(QUIZ_RESULTS_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error reading quiz results:', error);
    return [];
  }
}

export function getQuizStats() {
  const results = getQuizResults();
  if (results.length === 0) {
    return { total: 0, averageScore: 0 };
  }
  const totalScore = results.reduce((sum, r) => sum + (Number(r?.score) || 0), 0);
  return {
    total: results.length,
    averageScore: Math.round((totalScore / (results.length * 5)) * 100),
  };
}

