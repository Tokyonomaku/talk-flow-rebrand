import { useState, useEffect } from 'react';
import { ArrowLeft, Volume2, Check } from 'lucide-react';
import { getCompletedLessonsForLanguage, markLessonComplete, isLessonCompleted, isPremium, isFreeEnglishTrack } from '../utils/lessonTracking';
import UpgradeCelebrationModal from './UpgradeCelebrationModal';

export default function LessonView({ lesson, language, onBack, onUpgradeClick }) {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [voices, setVoices] = useState([]);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);
  const premium = isPremium();
  const alwaysFreeEnglish = isFreeEnglishTrack(language.id);
  const lessonNum = typeof lesson.id === 'string' ? parseInt(lesson.id, 10) : Number(lesson.id);

  // Check if lesson is already completed on mount
  useEffect(() => {
    setIsCompleted(isLessonCompleted(language.id, lesson.id));
  }, [language.id, lesson.id]);

  // Load voices when component mounts
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Load voices immediately if available
    loadVoices();

    // Also attach onvoiceschanged (some browsers rely on this)
    const prevOnVoicesChanged = window.speechSynthesis.onvoiceschanged;
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Listen for voiceschanged event (voices load asynchronously)
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
      // Restore previous handler if we overwrote it
      if (window.speechSynthesis.onvoiceschanged === loadVoices) {
        window.speechSynthesis.onvoiceschanged = prevOnVoicesChanged;
      }
    };
  }, []);

  const handleMarkComplete = () => {
    const success = markLessonComplete(language.id, lesson.id);
    if (success) {
      setIsCompleted(true);

      // Celebration modal trigger:
      // When a free user completes their 10th lesson in one of their free foreign languages,
      // show a celebratory upgrade modal ONCE per language (tracked in localStorage).
      if (!premium && !alwaysFreeEnglish) {
        try {
          const completedCount = getCompletedLessonsForLanguage(language.id);
          if (completedCount === 10) {
            const completedLanguages = JSON.parse(
              localStorage.getItem('completedFreeLanguages') || '[]'
            );
            if (!Array.isArray(completedLanguages) || !completedLanguages.includes(language.id)) {
              const next = Array.isArray(completedLanguages) ? completedLanguages : [];
              next.push(language.id);
              localStorage.setItem('completedFreeLanguages', JSON.stringify(next));
              setShowCelebrationModal(true);
            }
          }
        } catch (e) {
          // Fail open: if storage is blocked, still show the modal once per session.
          setShowCelebrationModal(true);
        }
      }
    }
  };

  const speakText = (text, langCode, index) => {
    // Stop any currently playing audio
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    // Check if speech synthesis is available
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in your browser. Please try a modern browser like Chrome, Firefox, or Edge.');
      return;
    }

    // Language code mapping for speech synthesis
    const langMap = {
      'es': 'es-ES',
      'fr': 'fr-FR',
      'de': 'de-DE',
      'ko': 'ko-KR',
      'pt': 'pt-BR',
      'ja': 'ja-JP',
      'zh': 'zh-CN',
      'ru': 'ru-RU',
      'ar': 'ar-SA',
      'en': 'en-US'
    };
    
    const targetLang = langMap[langCode] || 'en-US';
    const langPrefix = targetLang.split('-')[0].toLowerCase();

    const isEnglishEducationTrack = language.id === 'esl-english' || language.id === 'english-native';

    const pickPreferredEnglishVoice = (availableVoices) => {
      if (!availableVoices || availableVoices.length === 0) return null;

      const preferredVoices = [
        'Samantha',           // macOS
        'Google US English',  // Chrome
        'Microsoft Zira',     // Windows
        'Karen',              // macOS (AU)
        'Alex',               // macOS
      ];

      // Try exact preferred matches first
      for (const preferred of preferredVoices) {
        const match = availableVoices.find(v =>
          typeof v?.name === 'string' &&
          v.name.includes(preferred) &&
          typeof v?.lang === 'string' &&
          v.lang.toLowerCase().startsWith('en')
        );
        if (match) return match;
      }

      // Fallback: any English voice that isn't default (often higher quality)
      const nonDefaultEnglish = availableVoices.find(v =>
        typeof v?.lang === 'string' &&
        v.lang.toLowerCase().startsWith('en') &&
        v.default === false
      );
      if (nonDefaultEnglish) return nonDefaultEnglish;

      // Last resort: any English voice
      return availableVoices.find(v =>
        typeof v?.lang === 'string' && v.lang.toLowerCase().startsWith('en')
      ) || null;
    };

    // Function to find voice for language
    const findVoice = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length === 0) return null;

      // English education tracks: use best available high-quality English voice
      if (isEnglishEducationTrack && targetLang.toLowerCase().startsWith('en')) {
        return pickPreferredEnglishVoice(availableVoices);
      }

      // Try exact match first
      let voice = availableVoices.find(v => v.lang.toLowerCase() === targetLang.toLowerCase());
      
      // Try language prefix match (e.g., 'ja' for 'ja-JP')
      if (!voice) {
        voice = availableVoices.find(v => {
          const voiceLang = v.lang.toLowerCase();
          return voiceLang.includes(langPrefix) || voiceLang.startsWith(langPrefix);
        });
      }
      
      return voice;
    };

    // Wait for voices to load if needed
    const attemptSpeak = () => {
      const voice = findVoice();
      
      // Show error if no voice available for non-English languages
      if (!voice && targetLang !== 'en-US') {
        setPlayingIndex(null);
        alert(`${language.name} audio requires language support. Please install ${language.name} language pack on your device.`);
        return;
      }

      setPlayingIndex(index);

      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = targetLang;
        // Improve clarity for ESL/English Essentials without affecting other languages
        utterance.rate = 0.9;
        utterance.pitch = isEnglishEducationTrack && targetLang.toLowerCase().startsWith('en') ? 1.1 : 1;
        utterance.volume = 1;

        // Assign specific voice if found
        if (voice) {
          utterance.voice = voice;
        }

        // (No console logging in production)

        utterance.onstart = () => {
          setPlayingIndex(index);
        };

        utterance.onend = () => {
          setPlayingIndex(null);
        };

        utterance.onerror = (error) => {
          console.error('Speech synthesis error:', error);
          setPlayingIndex(null);
          
          // Show error instead of falling back to English
          if (targetLang !== 'en-US') {
            alert(`Unable to play ${language.name} audio. Please ensure ${language.name} language support is installed on your device.`);
          } else {
            alert('Unable to play audio. Please check your browser settings or try a different browser.');
          }
        };

        try {
          window.speechSynthesis.speak(utterance);
        } catch (error) {
          console.error('Error speaking:', error);
          setPlayingIndex(null);
          alert('Error playing audio. Please try again.');
        }
      }, 50);
    };

    // Check if voices are loaded
    const currentVoices = window.speechSynthesis.getVoices();
    if (currentVoices.length === 0) {
      // Wait for voices to load
      const waitForVoices = () => {
        const newVoices = window.speechSynthesis.getVoices();
        if (newVoices.length > 0) {
          window.speechSynthesis.removeEventListener('voiceschanged', waitForVoices);
          attemptSpeak();
        }
      };
      window.speechSynthesis.addEventListener('voiceschanged', waitForVoices);
    } else {
      attemptSpeak();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <UpgradeCelebrationModal
          isOpen={showCelebrationModal}
          onClose={() => setShowCelebrationModal(false)}
          languageName={language.name}
          extraLessonsCount={Math.max(0, (language?.lessons?.length || 0) - 10)}
        />

        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Lessons</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
          <p className="text-gray-600 mt-2">Learn {language.name} vocabulary</p>
        </div>

        {/* Words Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson.words.map((wordItem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {wordItem.word}
                  </h3>
                  {wordItem.romanji && (
                    <p className="text-sm text-gray-500 mb-1">{wordItem.romanji}</p>
                  )}
                  <p className="text-lg text-gray-700 font-semibold">
                    {wordItem.translation}
                  </p>
                  {wordItem.pronunciation && (
                    <p className="text-sm text-gray-500 mt-1">
                      {wordItem.pronunciation}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => speakText(wordItem.word, language.code, index)}
                  className={`ml-4 p-3 rounded-full transition-all ${
                    playingIndex === index
                      ? 'bg-blue-500 text-white animate-pulse'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                  }`}
                  aria-label={`Pronounce ${wordItem.word}`}
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Street Slang Section */}
        {lesson.streetSlang && lesson.streetSlang.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Street Slang 💬</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson.streetSlang.map((slangItem, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-purple-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {slangItem.word}
                      </h3>
                      {slangItem.romanji && (
                        <p className="text-sm text-gray-500 mb-1">{slangItem.romanji}</p>
                      )}
                      <p className="text-lg text-gray-700 font-semibold">
                        {slangItem.translation}
                      </p>
                      {slangItem.pronunciation && (
                        <p className="text-sm text-gray-500 mt-1">
                          {slangItem.pronunciation}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => speakText(slangItem.word, language.code, `slang-${index}`)}
                      className={`ml-4 p-3 rounded-full transition-all ${
                        playingIndex === `slang-${index}`
                          ? 'bg-purple-500 text-white animate-pulse'
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200 hover:text-purple-800'
                      }`}
                      aria-label={`Pronounce ${slangItem.word}`}
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes / Context */}
        {lesson.culturalNotes && (
          <div className="mt-8">
            <details className="bg-white rounded-lg shadow-md border border-gray-200 p-5">
              <summary className="cursor-pointer select-none text-lg font-semibold text-gray-900">
                Notes & Context
              </summary>
              <div className="mt-3 text-gray-700 whitespace-pre-line leading-relaxed">
                {lesson.culturalNotes}
              </div>
            </details>
          </div>
        )}

        {/* Mark as Complete Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleMarkComplete}
            disabled={isCompleted}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              isCompleted
                ? 'bg-green-500 text-white cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
            }`}
          >
            <Check className="w-5 h-5" />
            {isCompleted ? 'Lesson Completed' : 'Mark as Complete'}
          </button>
        </div>

        {/* If they close the celebration modal, keep a gentle, non-blocking upgrade option */}
        {lessonNum === 10 && isCompleted && !premium && !alwaysFreeEnglish && !showCelebrationModal && (
          <div className="mt-8 bg-white/70 border border-blue-200 rounded-lg p-5 shadow-sm">
            <div className="text-center">
              <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                Nice work — you finished 10 lessons!
              </h3>
              <p className="text-gray-700 mb-4">
                Upgrade anytime to unlock advanced lessons and all foreign languages.
              </p>
              <button
                onClick={onUpgradeClick}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                View plans
              </button>
            </div>
          </div>
        )}

        {/* Completion Prompt for Free English Education Tracks */}
        {lessonNum === 10 && isCompleted && !premium && alwaysFreeEnglish && (
          <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-6 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                ✅ Great work — you finished Lesson 10!
              </h3>
              <p className="text-emerald-100 mb-0 text-lg">
                English education (ESL & Native Speakers) is 100% free, always.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
