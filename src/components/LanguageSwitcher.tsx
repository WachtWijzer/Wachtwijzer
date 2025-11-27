import { GlobalSpeaker } from './GlobalSpeaker';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSwitcherProps {
  getPageContent: () => string;
  currentView: string;
}

export function LanguageSwitcher({ getPageContent, currentView }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'nl' ? 'en' : 'nl');
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <GlobalSpeaker currentView={currentView} getPageContent={getPageContent} />
      <button
        onClick={toggleLanguage}
        className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-md rounded-md px-3 py-2 hover:bg-white/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
        aria-label="Wissel taal"
      >
        <span 
          className={`text-sm font-medium transition-all ${
            language === 'nl' ? 'text-[#468C78] scale-110' : 'text-gray-400'
          }`}
        >
          NL
        </span>
        <span className="text-gray-300">|</span>
        <span 
          className={`text-sm font-medium transition-all ${
            language === 'en' ? 'text-[#468C78] scale-110' : 'text-gray-400'
          }`}
        >
          EN
        </span>
      </button>
    </div>
  );
}
