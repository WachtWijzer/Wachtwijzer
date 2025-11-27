import { useState } from 'react';
import { Home } from './components/Home';
import { DecisionTree } from './components/DecisionTree';
import { Results } from './components/Results';
import { WijkHelden } from './components/WijkHelden';
import { QuestionFlow } from './components/QuestionFlow';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export type Category = 'rust' | 'actief' | 'creatief' | 'praten';
export type View = 'home' | 'questionFlow' | 'decisionTree' | 'results' | 'wijkhelden';

function AppContent() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const { t } = useLanguage();

  const handleStartQuestionFlow = () => {
    setCurrentView('questionFlow');
  };

  const handleStartDecisionTree = () => {
    setCurrentView('decisionTree');
  };

  const handleCategorySelected = (category: Category) => {
    setSelectedCategory(category);
    setCurrentView('results');
  };

  const handleWijkHeldenSelected = () => {
    setCurrentView('wijkhelden');
  };

  const handleBackToDecisionTree = () => {
    setCurrentView('decisionTree');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCategory(null);
  };

  // Function to get page content for text-to-speech
  const getPageContent = (): string => {
    switch (currentView) {
      case 'home':
        return `${t('home.description')}. ${t('home.title')}. ${t('home.anonymous')}`;
      
      case 'decisionTree':
        return `${t('decision.title')}. ${t('decision.rust')}: ${t('decision.rustDesc')}. ${t('decision.actief')}: ${t('decision.actiefDesc')}. ${t('decision.creatief')}: ${t('decision.creatiefDesc')}. ${t('decision.praten')}: ${t('decision.pratenDesc')}. ${t('decision.wijkhelden')}: ${t('decision.wijkheldenDesc')}.`;
      
      case 'results':
        if (selectedCategory) {
          const intro = t(`results.${selectedCategory}Intro`);
          const title = t(`category.${selectedCategory}`);
          return `${t('results.title')}. ${title}: ${intro}. ${t('results.footer')}.`;
        }
        return '';
      
      case 'wijkhelden':
        return `${t('wijkhelden.title')}. ${t('wijkhelden.description')}. ${t('wijkhelden.footer')}.`;
      
      case 'questionFlow':
        return `${t('decision.title')}`;
      
      default:
        return '';
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom, #F2EFE9 0%, #F2EFE9 40%, #A68776 70%, #BF7878 100%)'
      }}
    >
      <LanguageSwitcher currentView={currentView} getPageContent={getPageContent} />
      
      {currentView === 'home' && (
        <Home onStart={handleStartQuestionFlow} />
      )}

      {currentView === 'questionFlow' && (
        <QuestionFlow 
          onCategorySelected={handleCategorySelected}
          onSkip={handleStartDecisionTree}
          onBack={handleBackToHome}
        />
      )}

      {currentView === 'decisionTree' && (
        <DecisionTree 
          onCategorySelected={handleCategorySelected}
          onWijkHeldenSelected={handleWijkHeldenSelected}
          onBack={handleBackToHome}
        />
      )}

      {currentView === 'results' && selectedCategory && (
        <Results 
          category={selectedCategory}
          onBack={handleBackToDecisionTree}
          onHome={handleBackToHome}
        />
      )}

      {currentView === 'wijkhelden' && (
        <WijkHelden onBack={handleBackToDecisionTree} />
      )}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
