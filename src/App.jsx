// Force rebuild 2
import { useState, useEffect } from 'react';
import LanguageSelector from './components/LanguageSelector';
import LessonList from './components/LessonList';
import LessonView from './components/LessonView';
import UpgradeModal from './components/UpgradeModal';
import PremiumLessonModal from './components/PremiumLessonModal';
import ChooseFreeLanguageModal from './components/ChooseFreeLanguageModal';
import Activate from './components/Activate';
import Stats from './components/Stats';
import LandingPage from './components/LandingPage';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Contact from './components/Contact';
import { getAllLanguages } from './data/languages';
import { isPremium, hasFreeLanguage, setFreeLanguages, isLanguageAccessible, getFreeLanguages, isLessonAccessible } from './utils/lessonTracking';
import { logEvent } from './utils/eventLog';

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

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
  };

  useEffect(() => {
    const knownRoutes = new Set([
      '/',
      '/select',
      '/choose-languages',
      '/activate',
      '/stats',
      '/privacy',
      '/terms',
      '/contact',
    ]);

    if (!knownRoutes.has(currentRoute)) {
      window.history.replaceState({}, '', '/');
      setCurrentRoute('/');
    }
  }, [currentRoute]);

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
    // Don't show modals on non-app routes
    const nonAppRoutes = new Set(['/', '/activate', '/stats', '/privacy', '/terms', '/contact']);
    if (nonAppRoutes.has(currentRoute)) return;

    const checkInitialState = () => {
      const premium = isPremium();
      const hasFree = hasFreeLanguage();
      const wantsUpgrade = new URLSearchParams(window.location.search).get('upgrade') === '1';
      
      setPremiumStatus(premium);

      // If the user explicitly requested upgrade (e.g. from the landing page),
      // show the upgrade modal first. After closing, we'll fall back to free selection.
      if (!premium && wantsUpgrade) {
        setShowUpgradeModal(true);
        setShowFreeLanguageModal(false);
        const freeLangs = getFreeLanguages();
        setFreeLanguagesState(freeLangs);
        return;
      }

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
      logEvent('languages_selected', { lang1: languageIds[0], lang2: languageIds[1] });
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
    logEvent('upgrade_clicked', { from_where: 'locked_language' });
    setShowUpgradeModal(true);
  };

  const handleSelectLesson = (lesson) => {
    const languageId = selectedLanguage?.id;
    const accessible = isLessonAccessible(languageId, lesson.id);

    console.log(`[handleSelectLesson] Lesson ${lesson.id}: language=${languageId}, accessible=${accessible}`);

    if (!accessible) {
      console.log(`[handleSelectLesson] BLOCKING access to lesson ${lesson.id} - showing upgrade modal`);
      setSelectedLessonForUpgrade(lesson.id);
      setShowPremiumLessonModal(true);
      return;
    }

    console.log(`[handleSelectLesson] ALLOWING access to lesson ${lesson.id}`);
    logEvent('lesson_opened', { language: languageId, lesson_number: lesson.id });
    setSelectedLesson(lesson);
    setCurrentView('lesson-view');
  };

  const handleLockedLessonClick = (lessonId, fromWhere = 'locked_lesson') => {
    logEvent('upgrade_clicked', { from_where: fromWhere });
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
    // After activation, take user to language picker
    navigate('/select');
    setCurrentView('language-selector');
  };

  // Show activate page if on /activate route
  if (currentRoute === '/activate') {
    return <Activate onActivate={handlePremiumActivate} />;
  }

  if (currentRoute === '/privacy') {
    return <Privacy onBackHome={() => navigate('/')} />;
  }
  if (currentRoute === '/terms') {
    return <Terms onBackHome={() => navigate('/')} />;
  }
  if (currentRoute === '/contact') {
    return <Contact onBackHome={() => navigate('/')} />;
  }

  // Simple stats page
  if (currentRoute === '/stats') {
    return (
      <Stats
        onBack={() => {
          navigate('/select');
          setCurrentView('language-selector');
        }}
      />
    );
  }

  // Landing page at root
  if (currentRoute === '/') {
    return (
      <LandingPage
        onNavigate={navigate}
        onTryFree={() => {
          navigate('/select');
          setCurrentView('language-selector');
          setSelectedLanguage(null);
          setSelectedLesson(null);
        }}
      />
    );
  }

  // Language selector (app entry)
  const isSelectRoute = currentRoute === '/select' || currentRoute === '/choose-languages';

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
                  Free foreign languages: <strong>{freeLanguageNames.join(' & ')}</strong>
                </span>
                <span className="text-gray-500 text-sm hidden sm:inline">
                  (English is always free)
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                // Go to language selector route
                navigate('/select');
                setSelectedLanguage(null);
                setSelectedLesson(null);
                setCurrentView('language-selector');
              }}
              className="text-gray-600 hover:text-gray-700 font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Languages
            </button>
            <button
              onClick={() => {
                navigate('/stats');
              }}
              className="text-gray-600 hover:text-gray-700 font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Stats
            </button>
            {!premiumStatus && (
              <>
                <button
                  onClick={() => {
                    handleLockedLessonClick(11, 'topbar_upgrade');
                  }}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                >
                  Upgrade
                </button>
                <a
                  href="/activate"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/activate');
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
          onUpgradeClick={() => handleLockedLessonClick(11, 'lesson_complete_prompt')}
        />
      )}

      <ChooseFreeLanguageModal 
        isOpen={showFreeLanguageModal} 
        onSelectLanguages={handleSelectFreeLanguages}
      />
      <UpgradeModal 
        isOpen={showUpgradeModal} 
        onClose={() => {
          setShowUpgradeModal(false);
          // If they came here via ?upgrade=1 and haven't selected free languages yet,
          // guide them into the free selection flow after closing.
          try {
            const url = new URL(window.location.href);
            if (url.searchParams.get('upgrade') === '1') {
              url.searchParams.delete('upgrade');
              window.history.replaceState({}, '', url.pathname + url.search);
            }
          } catch (_) {
            // ignore
          }
          if (!isPremium() && !hasFreeLanguage()) {
            setShowFreeLanguageModal(true);
          }
        }}
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

