import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en';

interface Translations {
  nl: {
    [key: string]: string;
  };
  en: {
    [key: string]: string;
  };
}

const translations: Translations = {
  nl: {
    // Home
    'home.title': 'Ontdek wat bij je past',
    'home.description': 'Wachten kan zwaar zijn. WachtWijzer helpt je activiteiten in Rotterdam Hoogvliet te vinden die bij jouw gevoel passen.',
    'home.getStarted': 'Start hier',
    'home.anonymous': 'Hulp is dichterbij dan je denkt!',
    
    // Decision Tree
    'decision.title': 'Wat zou je helpen?',
    'decision.rust': 'Rust & overzicht',
    'decision.rustDesc': 'Tot rust komen en overzicht krijgen',
    'decision.actief': 'Actief bezig',
    'decision.actiefDesc': 'Bewegen, sporten of met je handen werken',
    'decision.creatief': 'Creatieve uitlaatklep',
    'decision.creatiefDesc': 'Iets maken of jezelf uiten',
    'decision.praten': 'Even praten',
    'decision.pratenDesc': 'Met iemand kunnen praten',
    'decision.wijkhelden': 'Wijk Helden',
    'decision.wijkheldenDesc': 'Direct contact met mensen uit de wijk',
    
    // Results
    'results.title': 'Dit past bij jou',
    'results.rustIntro': 'Activiteiten om tot rust te komen en overzicht te krijgen',
    'results.actiefIntro': 'Bewegen, sporten en je energie kwijtraken',
    'results.creatiefIntro': 'Iets maken en jezelf creatief uiten',
    'results.pratenIntro': 'Met iemand praten die naar je luistert',
    'results.moreInfo': 'Meer info & contact',
    'results.lessInfo': 'Minder info',
    'results.about': 'Over deze activiteit',
    'results.requirements': 'Wat heb je nodig?',
    'results.contact': 'Contact',
    'results.age': 'Leeftijd:',
    'results.visitWebsite': 'Bezoek website',
    'results.footer': 'Zie je iets wat bij je past? Neem gerust contact op',
    'results.noActivities': 'Er zijn momenteel geen activiteiten in deze categorie. Probeer een andere categorie of kom later terug.',
    'results.phone': 'Telefoonnummer:',
    'results.email': 'Email:',
    
    // Category descriptions
    'category.rust': 'Rust & overzicht',
    'category.rustDesc': 'Activiteiten om tot rust te komen en overzicht te krijgen',
    'category.actief': 'Actief bezig',
    'category.actiefDesc': 'Bewegen, sporten en met je handen werken',
    'category.creatief': 'Creatieve uitlaatklep',
    'category.creatiefDesc': 'Iets maken en jezelf uiten',
    'category.praten': 'Even praten',
    'category.pratenDesc': 'Met iemand kunnen praten',
    
    // Wijk Helden
    'wijkhelden.title': 'Wijk Helden',
    'wijkhelden.description': 'Deze mensen uit de wijk zijn er voor je. Laagdrempelig en zonder gedoe.',
    'wijkhelden.footer': 'Deze mensen kennen de wijk en willen je graag helpen',
    
    // Question Flow
    'questionFlow.skip': 'Sla vragen over',
    'questionFlow.q1': 'Hoe voel je je vandaag?',
    'questionFlow.q1.blij': 'Blij & energiek',
    'questionFlow.q1.rustig': 'Rustig & relaxed',
    'questionFlow.q1.gestrest': 'Gestrest of druk',
    'questionFlow.q1.verdrietig': 'Een beetje down',
    'questionFlow.q1.boos': 'Boos of gefrustreerd',
    'questionFlow.q1.neutraal': 'Gewoon oké',
    'questionFlow.q2': 'Wat heb je nu het meeste nodig?',
    'questionFlow.q2.rust': 'Rust en overzicht',
    'questionFlow.q2.energie': 'Energie kwijt',
    'questionFlow.q2.creativiteit': 'Iets maken of creëren',
    'questionFlow.q2.luisterend_oor': 'Een luisterend oor',
    'questionFlow.q2.afleiding': 'Gewoon afleiding',
    'questionFlow.q3': 'Wil je liever iets doen...',
    'questionFlow.q3.alleen': 'Alleen',
    'questionFlow.q3.anderen': 'Met anderen',
    'questionFlow.q3.maakt_niet_uit': 'Maakt me niet uit',
    'questionFlow.q4': 'Wat helpt jou meestal als je je zo voelt?',
    'questionFlow.q4.muziek': 'Muziek luisteren',
    'questionFlow.q4.sporten': 'Bewegen of sporten',
    'questionFlow.q4.praten': 'Erover praten',
    'questionFlow.q4.buiten': 'Naar buiten gaan',
    'questionFlow.q4.maken': 'Iets maken of tekenen',
    
    // Common
    'common.back': 'Terug',
    'common.home': 'Home',
  },
  en: {
    // Home
    'home.title': 'Discover what fits you',
    'home.description': 'Waiting can be tough. WachtWijzer helps you find activities in Rotterdam Hoogvliet that match your feelings.',
    'home.getStarted': 'Get Started',
    'home.anonymous': 'Help is closer than you think!',
    
    // Decision Tree
    'decision.title': 'What would help you?',
    'decision.rust': 'Peace & overview',
    'decision.rustDesc': 'Find peace and get overview',
    'decision.actief': 'Active',
    'decision.actiefDesc': 'Move, exercise or work with your hands',
    'decision.creatief': 'Creative outlet',
    'decision.creatiefDesc': 'Make something or express yourself',
    'decision.praten': 'Talk',
    'decision.pratenDesc': 'Talk to someone',
    'decision.wijkhelden': 'Neighborhood Heroes',
    'decision.wijkheldenDesc': 'Direct contact with people from the neighborhood',
    
    // Results
    'results.title': 'This fits you',
    'results.rustIntro': 'Activities to find peace and get overview',
    'results.actiefIntro': 'Move, exercise and work with your hands',
    'results.creatiefIntro': 'Make something and express yourself',
    'results.pratenIntro': 'Talk to someone who listens',
    'results.moreInfo': 'More info & contact',
    'results.lessInfo': 'Less info',
    'results.about': 'About this activity',
    'results.requirements': 'What do you need?',
    'results.contact': 'Contact',
    'results.age': 'Age:',
    'results.visitWebsite': 'Visit website',
    'results.footer': 'See something that fits? Feel free to contact',
    'results.noActivities': 'There are currently no activities in this category. Try another category or come back later.',
    'results.phone': 'Phone number:',
    'results.email': 'Email:',
    
    // Category descriptions
    'category.rust': 'Peace & overview',
    'category.rustDesc': 'Activities to find peace and get overview',
    'category.actief': 'Active',
    'category.actiefDesc': 'Move, exercise and work with your hands',
    'category.creatief': 'Creative outlet',
    'category.creatiefDesc': 'Make something and express yourself',
    'category.praten': 'Talk',
    'category.pratenDesc': 'Talk to someone',
    
    // Wijk Helden
    'wijkhelden.title': 'Neighborhood Heroes',
    'wijkhelden.description': 'These people from the neighborhood are here for you. Accessible and without hassle.',
    'wijkhelden.footer': 'These people know the neighborhood and want to help you',
    
    // Question Flow
    'questionFlow.skip': 'Skip questions',
    'questionFlow.q1': 'How are you feeling today?',
    'questionFlow.q1.blij': 'Happy & energetic',
    'questionFlow.q1.rustig': 'Calm & relaxed',
    'questionFlow.q1.gestrest': 'Stressed or busy',
    'questionFlow.q1.verdrietig': 'A bit down',
    'questionFlow.q1.boos': 'Angry or frustrated',
    'questionFlow.q1.neutraal': 'Just okay',
    'questionFlow.q2': 'What do you need most right now?',
    'questionFlow.q2.rust': 'Peace and overview',
    'questionFlow.q2.energie': 'Release energy',
    'questionFlow.q2.creativiteit': 'Make or create something',
    'questionFlow.q2.luisterend_oor': 'A listening ear',
    'questionFlow.q2.afleiding': 'Just distraction',
    'questionFlow.q3': 'Would you rather do something...',
    'questionFlow.q3.alleen': 'Alone',
    'questionFlow.q3.anderen': 'With others',
    'questionFlow.q3.maakt_niet_uit': "Doesn't matter to me",
    'questionFlow.q4': 'What usually helps when you feel this way?',
    'questionFlow.q4.muziek': 'Listen to music',
    'questionFlow.q4.sporten': 'Move or exercise',
    'questionFlow.q4.praten': 'Talk about it',
    'questionFlow.q4.buiten': 'Go outside',
    'questionFlow.q4.maken': 'Make or draw something',
    
    // Common
    'common.back': 'Back',
    'common.home': 'Home',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  speak: (text: string) => void;
  stopSpeaking: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const speak = (text: string) => {
    // Check if browser supports Speech Synthesis
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'nl' ? 'nl-NL' : 'en-US';
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1;
      
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis not supported in this browser');
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, speak, stopSpeaking }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
