import { useState } from 'react';
import type { Category } from '../App';
import brainIllustration from 'figma:asset/d28e55fe0c67e741b3a028577e684e8a98423c86.png';
import { SpeakButton } from './SpeakButton';
import { useLanguage } from '../contexts/LanguageContext';

interface QuestionFlowProps {
  onCategorySelected: (category: Category) => void;
  onSkip: () => void;
  onBack: () => void;
}

interface Answer {
  id: string;
  labelKey: string;
  emoji: string;
  categories: Category[];
}

interface Question {
  id: number;
  questionKey: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    id: 1,
    questionKey: 'questionFlow.q1',
    answers: [
      { id: 'blij', labelKey: 'questionFlow.q1.blij', emoji: '😊', categories: ['actief', 'creatief'] },
      { id: 'rustig', labelKey: 'questionFlow.q1.rustig', emoji: '😌', categories: ['rust', 'creatief'] },
      { id: 'gestrest', labelKey: 'questionFlow.q1.gestrest', emoji: '😰', categories: ['rust', 'praten'] },
      { id: 'verdrietig', labelKey: 'questionFlow.q1.verdrietig', emoji: '😔', categories: ['praten', 'creatief'] },
      { id: 'boos', labelKey: 'questionFlow.q1.boos', emoji: '😤', categories: ['actief', 'praten'] },
      { id: 'neutraal', labelKey: 'questionFlow.q1.neutraal', emoji: '😐', categories: ['actief', 'creatief', 'rust'] },
    ],
  },
  {
    id: 2,
    questionKey: 'questionFlow.q2',
    answers: [
      { id: 'rust', labelKey: 'questionFlow.q2.rust', emoji: '🧘', categories: ['rust'] },
      { id: 'energie', labelKey: 'questionFlow.q2.energie', emoji: '⚡', categories: ['actief'] },
      { id: 'creativiteit', labelKey: 'questionFlow.q2.creativiteit', emoji: '🎨', categories: ['creatief'] },
      { id: 'luisterend_oor', labelKey: 'questionFlow.q2.luisterend_oor', emoji: '💬', categories: ['praten'] },
      { id: 'afleiding', labelKey: 'questionFlow.q2.afleiding', emoji: '🎯', categories: ['actief', 'creatief'] },
    ],
  },
  {
    id: 3,
    questionKey: 'questionFlow.q3',
    answers: [
      { id: 'alleen', labelKey: 'questionFlow.q3.alleen', emoji: '🧘‍♀️', categories: ['rust', 'creatief'] },
      { id: 'anderen', labelKey: 'questionFlow.q3.anderen', emoji: '👥', categories: ['actief', 'praten'] },
      { id: 'maakt_niet_uit', labelKey: 'questionFlow.q3.maakt_niet_uit', emoji: '🤷', categories: ['actief', 'creatief', 'rust', 'praten'] },
    ],
  },
  {
    id: 4,
    questionKey: 'questionFlow.q4',
    answers: [
      { id: 'muziek', labelKey: 'questionFlow.q4.muziek', emoji: '🎵', categories: ['rust', 'creatief'] },
      { id: 'sporten', labelKey: 'questionFlow.q4.sporten', emoji: '⚽', categories: ['actief'] },
      { id: 'praten', labelKey: 'questionFlow.q4.praten', emoji: '🗣️', categories: ['praten'] },
      { id: 'buiten', labelKey: 'questionFlow.q4.buiten', emoji: '🌳', categories: ['actief', 'rust'] },
      { id: 'maken', labelKey: 'questionFlow.q4.maken', emoji: '✏️', categories: ['creatief'] },
    ],
  },
];

// Color scheme for answer buttons - rotating through the palette
const answerColors = [
  'bg-gradient-to-r from-[#B4D9C8] to-[#B4D9C8]/80 hover:from-[#B4D9C8]/90 hover:to-[#B4D9C8]/70 border-[#B4D9C8]',
  'bg-gradient-to-r from-[#BF7878] to-[#BF7878]/80 hover:from-[#BF7878]/90 hover:to-[#BF7878]/70 border-[#BF7878]',
  'bg-gradient-to-r from-[#A68776] to-[#A68776]/80 hover:from-[#A68776]/90 hover:to-[#A68776]/70 border-[#A68776]',
  'bg-gradient-to-r from-[#468C78] to-[#468C78]/80 hover:from-[#468C78]/90 hover:to-[#468C78]/70 border-[#468C78]',
  'bg-gradient-to-r from-[#F2EFE9] to-[#F2EFE9]/80 hover:from-[#F2EFE9]/90 hover:to-[#F2EFE9]/70 border-[#A68776]',
  'bg-gradient-to-r from-[#B4D9C8] to-[#B4D9C8]/80 hover:from-[#B4D9C8]/90 hover:to-[#B4D9C8]/70 border-[#B4D9C8]',
];

// Background gradients for each answer color
const backgroundGradients = [
  'from-white via-[#B4D9C8]/15 to-[#B4D9C8]/25', // Licht groen
  'from-white via-[#BF7878]/15 to-[#BF7878]/25', // Roze
  'from-white via-[#A68776]/15 to-[#A68776]/25', // Taupe
  'from-white via-[#468C78]/15 to-[#468C78]/25', // Donker groen
  'from-white via-[#F2EFE9]/40 to-[#F2EFE9]/60', // Beige
  'from-white via-[#B4D9C8]/15 to-[#B4D9C8]/25', // Licht groen
];

export function QuestionFlow({ onCategorySelected, onSkip, onBack }: QuestionFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const handleAnswer = (answerId: string, index: number) => {
    setSelectedIndex(index);
    
    // Wait a moment to show the color change
    setTimeout(() => {
      const newAnswers = [...answers, answerId];
      setAnswers(newAnswers);

      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setSelectedIndex(null);
        setHoveredIndex(null);
      } else {
        // Calculate best category based on all answers
        const categoryScores: Record<Category, number> = {
          rust: 0,
          actief: 0,
          creatief: 0,
          praten: 0,
        };

        questions.forEach((question, index) => {
          const answer = question.answers.find((a) => a.id === newAnswers[index]);
          if (answer) {
            answer.categories.forEach((cat) => {
              categoryScores[cat] += 1;
            });
          }
        });

        // Find category with highest score
        const bestCategory = (Object.keys(categoryScores) as Category[]).reduce((a, b) =>
          categoryScores[a] > categoryScores[b] ? a : b
        );

        onCategorySelected(bestCategory);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      onBack();
    }
  };

  const currentQuestion = questions[currentStep];
  
  // Determine which background gradient to use
  const activeGradient = selectedIndex !== null 
    ? backgroundGradients[selectedIndex]
    : hoveredIndex !== null 
      ? backgroundGradients[hoveredIndex]
      : 'from-white via-white to-gray-50';

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-b ${activeGradient} transition-all duration-500`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          <span>{t('common.back')}</span>
        </button>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </button>
      </div>

      {/* Progress indicator */}
      <div className="px-6 py-4">
        <div className="flex gap-2 justify-center">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'w-8 bg-[#468C78]'
                  : index < currentStep
                  ? 'w-2 bg-[#B4D9C8]'
                  : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center py-6">
        <img
          src={brainIllustration}
          alt="Brein illustratie"
          className="w-48 h-48 object-contain"
        />
      </div>

      {/* Question and Answers */}
      <div className="flex-1 px-6 pb-24">
        <div key={currentStep} className="animate-fade-in">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-2">
              <h2 className="text-center text-gray-600" style={{ fontSize: '28px' }}>
                {t(currentQuestion.questionKey)}
              </h2>
              <SpeakButton text={t(currentQuestion.questionKey)} />
            </div>
          </div>

          <div className="space-y-3 max-w-lg mx-auto">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={answer.id}
                onClick={() => handleAnswer(answer.id, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full p-4 rounded-2xl ${answerColors[index]} transition-all duration-200 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] relative group`}
              >
                <span className="text-2xl">{answer.emoji}</span>
                <span className="text-gray-600">{t(answer.labelKey)}</span>
                <div 
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => e.stopPropagation()}
                >
                  <SpeakButton text={t(answer.labelKey)} size="sm" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skip button - fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
        <button
          onClick={onSkip}
          className="w-full max-w-lg mx-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#F2EFE9] to-[#B4D9C8]/50 shadow-lg hover:shadow-xl border-2 border-[#468C78]/30 text-gray-700 hover:text-gray-900 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polygon points="5 4 15 12 5 20 5 4"/>
            <line x1="19" x2="19" y1="5" y2="19"/>
          </svg>
          <span>{t('questionFlow.skip')}</span>
        </button>
      </div>
    </div>
  );
}
