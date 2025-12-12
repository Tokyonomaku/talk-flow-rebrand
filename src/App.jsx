// Force rebuild 2
import { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import LessonList from './components/LessonList';
import LessonView from './components/LessonView';
import UpgradeModal from './components/UpgradeModal';
import PremiumLessonModal from './components/PremiumLessonModal';
import ChooseFreeLanguageModal from './components/ChooseFreeLanguageModal';
import Activate from './components/Activate';
import { getAllLanguages } from './data/languages';
import { isPremium, hasFreeLanguage, setFreeLanguages, isLanguageAccessible, getFreeLanguages, isLessonAccessible } from './utils/lessonTracking';

function App() {
  const [currentView, setCurrentView] = useState('language-selector');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showPremiumLessonModal, setShowPremiumLessonModal] = useState(false);
  const [showFreeLanguageModal, setShowFreeLanguageModal] = useState(false);
  const [premiumStatus, setPremiumStatus] = useState(false);
  const [freeLanguages, setFreeLanguagesState] = useState([]);
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const [selectedLessonForUpgrade, setSelectedLessonForUpgrade] = useState(null);

  // Handle routing
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Check if user needs to select free language on mount
  useEffect(() => {
    // Don't show modals on activate page
    if (currentRoute === '/activate') return;

    const checkInitialState = () => {
      const premium = isPremium();
      const hasFree = hasFreeLanguage();
      
      setPremiumStatus(premium);
      
      if (!premium && !hasFree) {
        // First time user - show free language selection modal
        setShowFreeLanguageModal(true);
      } else if (!premium) {
        // Free user with languages selected
        const freeLangs = getFreeLanguages();
        setFreeLanguagesState(freeLangs);
      }
    };

    checkInitialState();
    
    // Listen for storage changes
    const handleStorageChange = () => {
      setPremiumStatus(isPremium());
      const freeLangs = getFreeLanguages();
      setFreeLanguagesState(freeLangs);
    };

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [currentRoute]);

  const handleSelectFreeLanguages = (languageIds) => {
    if (languageIds && languageIds.length === 2) {
      setFreeLanguages(languageIds);
      setFreeLanguagesState(languageIds);
      setShowFreeLanguageModal(false);
      // Ensure we're showing the language selector after selection
      setCurrentView('language-selector');
    }
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
    // CRITICAL: Check premium status directly
    const premiumStatus = localStorage.getItem('isPremium') === 'true';
    const lessonNum = typeof lesson.id === 'string' ? parseInt(lesson.id, 10) : Number(lesson.id);
    const isAccessible = premiumStatus || lessonNum <= 10;
    
    console.log(`[handleSelectLesson] Lesson ${lesson.id}: premium=${premiumStatus}, lessonNum=${lessonNum}, isAccessible=${isAccessible}`);
    
    // Check if lesson is accessible
    if (!isAccessible) {
      console.log(`[handleSelectLesson] BLOCKING access to lesson ${lesson.id} - showing upgrade modal`);
      setSelectedLessonForUpgrade(lesson.id);
      setShowPremiumLessonModal(true);
      return;
    }
    
    console.log(`[handleSelectLesson] ALLOWING access to lesson ${lesson.id}`);
    setSelectedLesson(lesson);
    setCurrentView('lesson-view');
  };

  const handleLockedLessonClick = (lessonId) => {
    if (lessonId) {
      setSelectedLessonForUpgrade(lessonId);
    }
    setShowPremiumLessonModal(true);
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
    const freeLangs = getFreeLanguages();
    setFreeLanguagesState(freeLangs);
    setPremiumStatus(isPremium());
  };

  const handlePremiumActivate = () => {
    setPremiumStatus(true);
    // Update route to home
    window.history.pushState({}, '', '/');
    setCurrentRoute('/');
  };

  // Show activate page if on /activate route
  if (currentRoute === '/activate') {
    return <Activate onActivate={handlePremiumActivate} />;
  }

  // Get free language names for display
  const languages = getAllLanguages();
  const freeLanguageNames = freeLanguages
    .map(id => languages.find(lang => lang.id === id)?.name)
    .filter(Boolean);

  // Ensure currentView is always valid
  const validView = currentView || 'language-selector';

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
            ) : freeLanguageNames.length > 0 ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-semibold">
                  Learning <strong>{freeLanguageNames.join(' & ')}</strong> for free
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                // Navigate "home" and show language selector view
                window.history.pushState({}, '', '/');
                setCurrentRoute('/');
                setSelectedLanguage(null);
                setSelectedLesson(null);
                setCurrentView('language-selector');
              }}
              className="text-gray-600 hover:text-gray-700 font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Languages
            </button>
            {!premiumStatus && (
              <>
                <button
                  onClick={() => {
                    setShowPremiumLessonModal(true);
                    setSelectedLessonForUpgrade(11);
                  }}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  Upgrade to Premium
                </button>
                <a
                  href="/activate"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', '/activate');
                    setCurrentRoute('/activate');
                  }}
                  className="text-gray-600 hover:text-gray-700 font-semibold text-sm transition-colors whitespace-nowrap"
                >
                  Activate Premium
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {validView === 'language-selector' && (
        <LanguageSelector 
          onSelectLanguage={handleSelectLanguage}
          onLockedLanguageClick={handleLockedLanguageClick}
        />
      )}
      {validView === 'lesson-list' && selectedLanguage && (
        <LessonList
          language={selectedLanguage}
          onBack={handleBackToLanguages}
          onSelectLesson={handleSelectLesson}
          onLockedLessonClick={handleLockedLessonClick}
        />
      )}
      {validView === 'lesson-view' && selectedLesson && selectedLanguage && (
        <LessonView
          lesson={selectedLesson}
          language={selectedLanguage}
          onBack={handleBackToLessons}
          onUpgradeClick={() => handleLockedLessonClick(11)}
        />
      )}

      <ChooseFreeLanguageModal 
        isOpen={showFreeLanguageModal} 
        onSelectLanguages={handleSelectFreeLanguages}
      />
      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => setShowUpgradeModal(false)}
        onLanguageChanged={handleLanguageChanged}
      />
      <PremiumLessonModal 
        isOpen={showPremiumLessonModal} 
        onClose={() => {
          setShowPremiumLessonModal(false);
          setSelectedLessonForUpgrade(null);
        }}
        languageName={selectedLanguage?.name}
        lessonNumber={selectedLessonForUpgrade}
      />
    </div>
  );
}

export default App;

