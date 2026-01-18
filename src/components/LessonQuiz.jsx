import { useEffect, useMemo, useState } from 'react';
import { generateQuizQuestions, saveQuizResult } from '../utils/quizTracking';

const scoreMessages = {
  5: '🏆 Perfect! You mastered this lesson!',
  4: "🎉 Great job! You're learning fast!",
  3: '👍 Good work! Review the tricky ones.',
  2: "📚 Keep practicing! You'll get there.",
  1: "💪 Don't give up! Try reviewing the lesson again.",
  0: "💪 Don't give up! Try reviewing the lesson again.",
};

export default function LessonQuiz({ lesson, language, onExit, onContinue }) {
  const [questions, setQuestions] = useState(() => generateQuizQuestions(lesson, language.name));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState('quiz');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setQuestions(generateQuizQuestions(lesson, language.name));
    setCurrentIndex(0);
    setAnswers([]);
    setSelected(null);
    setMode('quiz');
    setSaved(false);
  }, [lesson?.id, language?.id, language?.name]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const score = useMemo(() => {
    return answers.reduce((sum, answer, idx) => {
      if (answer === questions[idx]?.correctAnswer) return sum + 1;
      return sum;
    }, 0);
  }, [answers, questions]);

  useEffect(() => {
    if (mode !== 'results' || saved) return;
    const result = {
      user_id: 'local-user',
      lesson_id: String(lesson?.id ?? ''),
      language_id: language?.id,
      score,
      completed_at: new Date().toISOString(),
      questions_asked: questions.map((q) => ({
        prompt: q.prompt,
        options: q.options,
        correctAnswer: q.correctAnswer,
        type: q.type,
      })),
      answers_given: answers,
    };
    saveQuizResult(result);
    setSaved(true);
  }, [mode, saved, score, questions, answers, lesson?.id, language?.id]);

  const handleNext = () => {
    if (!selected) return;
    const nextAnswers = [...answers, selected];
    setAnswers(nextAnswers);
    setSelected(null);

    if (currentIndex + 1 >= totalQuestions) {
      setMode('results');
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleRetry = () => {
    const nextQuestions = generateQuizQuestions(lesson, language.name);
    setQuestions(nextQuestions);
    setCurrentIndex(0);
    setAnswers([]);
    setSelected(null);
    setMode('quiz');
    setSaved(false);
  };

  const missed = answers
    .map((answer, idx) => ({
      question: questions[idx],
      answer,
      isCorrect: answer === questions[idx]?.correctAnswer,
    }))
    .filter((entry) => !entry.isCorrect);

  if (totalQuestions === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Quiz Unavailable</h2>
        <p className="text-gray-700 mb-6">
          This lesson doesn't have enough phrases to generate a quiz yet.
        </p>
        <button
          onClick={onExit}
          className="px-4 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
        >
          Back to Lessons
        </button>
      </div>
    );
  }

  if (mode === 'results') {
    const message = scoreMessages[score] || scoreMessages[0];
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz Results</h2>
        <div className="text-lg text-gray-800 mb-2">
          You scored: <span className="font-bold">{score}</span> / {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
        </div>
        <p className="text-gray-700 mb-6">{message}</p>

        {missed.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Review Missed Questions</h3>
            <div className="space-y-3">
              {missed.map((entry, idx) => (
                <div key={`${entry.question?.prompt}-${idx}`} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <p className="text-gray-800 font-semibold">{entry.question?.prompt}</p>
                  <p className="text-sm text-gray-600">
                    Correct answer: <span className="font-semibold">{entry.question?.correctAnswer}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleRetry}
            className="px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Retry Quiz
          </button>
          <button
            onClick={onContinue}
            className="px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
          >
            Continue to Next Lesson →
          </button>
          <button
            onClick={onExit}
            className="px-4 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
          >
            Back to Lessons
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(((currentIndex + 1) / totalQuestions) * 100)}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">{currentQuestion?.prompt}</h2>
      <div className="space-y-3 mb-6">
        {currentQuestion?.options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
              selected === option
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleNext}
          disabled={!selected}
          className={`px-4 py-3 rounded-lg font-semibold transition-colors ${
            selected
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentIndex + 1 >= totalQuestions ? 'Finish Quiz' : 'Next Question →'}
        </button>
        <button
          onClick={onExit}
          className="px-4 py-3 rounded-lg bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
        >
          Exit Quiz
        </button>
      </div>
    </div>
  );
}

