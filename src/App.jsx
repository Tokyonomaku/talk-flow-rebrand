// Force rebuild 2
import { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import LessonList from './components/LessonList';
import LessonView from './components/LessonView';
import UpgradeModal from './components/UpgradeModal';
import ChooseFreeLanguageModal from './components/ChooseFreeLanguageModal';
import { getAllLanguages } from './data/languages';
import { isPremium, hasFreeLanguage, setFreeLanguage, isLanguageAccessible } from './utils/lessonTracking';

function App() {
  const [currentView, setCurrentView] = useState('language-selector');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showFreeLanguageModal, setShowFreeLanguageModal] = useState(false);
  const [premiumStatus, setPremiumStatus] = useState(false);
  const [freeLanguage, setFreeLanguageState] = useState(null);

  // Check if user needs to select free language on mount
  useEffect(() => {
    const checkInitialState = () => {
      const premium = isPremium();
      const hasFree = hasFreeLanguage();
      
      setPremiumStatus(premium);
      
      if (!premium && !hasFree) {
        // First time user - show free language selection modal
        setShowFreeLanguageModal(true);
      } else if (!premium) {
        // Free user with language selected
        const freeLang = localStorage.getItem('freeLanguage');
        setFreeLanguageState(freeLang);
      }
    };

    checkInitialState();
    
    // Listen for storage changes
    const handleStorageChange = () => {
      setPremiumStatus(isPremium());
      const freeLang = localStorage.getItem('freeLanguage');
      setFreeLanguageState(freeLang);
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleSelectFreeLanguage = (languageId) => {
    setFreeLanguage(languageId);
    setFreeLanguageState(languageId);
    setShowFreeLanguageModal(false);
  };

  const handleSelectLanguage = (language) => {
    // Check if language is accessible
    if (!isLanguageAccessible(language.id)) {
      setShowUpgradeModal(true);
      return;
    }

    setSelectedLanguage(language);
    setCurrentView('lesson-list');
  };

  const handleLockedLanguageClick = () => {
    setShowUpgradeModal(true);
  };

  const handleSelectLesson = (lesson) => {
    // All lessons in accessible languages are available
    setSelectedLesson(lesson);
    setCurrentView('lesson-view');
  };

  const handleBackToLanguages = () => {
    setCurrentView('language-selector');
    setSelectedLanguage(null);
    setSelectedLesson(null);
  };

  const handleBackToLessons = () => {
    setCurrentView('lesson-list');
    setSelectedLesson(null);
  };

  const handleLanguageChanged = () => {
    // Refresh state after language change
    const freeLang = localStorage.getItem('freeLanguage');
    setFreeLanguageState(freeLang);
    setPremiumStatus(isPremium());
  };

  // Get free language name for display
  const languages = getAllLanguages();
  const freeLanguageName = freeLanguage 
    ? languages.find(lang => lang.id === freeLanguage)?.name 
    : null;

  return (
    <div className="App">
      {/* Status Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {premiumStatus ? (
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium Member
                </span>
              </div>
            ) : freeLanguageName ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-semibold">
                  Learning <strong>{freeLanguageName}</strong> for free
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {currentView === 'language-selector' && (
        <LanguageSelector 
          onSelectLanguage={handleSelectLanguage}
          onLockedLanguageClick={handleLockedLanguageClick}
        />
      )}
      {currentView === 'lesson-list' && selectedLanguage && (
        <LessonList
          language={selectedLanguage}
          onBack={handleBackToLanguages}
          onSelectLesson={handleSelectLesson}
        />
      )}
      {currentView === 'lesson-view' && selectedLesson && selectedLanguage && (
        <LessonView
          lesson={selectedLesson}
          language={selectedLanguage}
          onBack={handleBackToLessons}
        />
      )}

      <ChooseFreeLanguageModal 
        isOpen={showFreeLanguageModal} 
        onSelectLanguage={handleSelectFreeLanguage}
      />
      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => setShowUpgradeModal(false)}
        onLanguageChanged={handleLanguageChanged}
      />
    </div>
  );
}

export default App;

