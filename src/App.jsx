import { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import LessonList from './components/LessonList';
import LessonView from './components/LessonView';

function App() {
  const [currentView, setCurrentView] = useState('language-selector');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
    setCurrentView('lesson-list');
  };

  const handleSelectLesson = (lesson) => {
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

  return (
    <div className="App">
      {currentView === 'language-selector' && (
        <LanguageSelector onSelectLanguage={handleSelectLanguage} />
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
    </div>
  );
}

export default App;

