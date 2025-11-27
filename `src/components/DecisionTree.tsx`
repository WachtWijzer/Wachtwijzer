import { Button } from './ui/button';
import type { Category } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeakButton } from './SpeakButton';

interface DecisionTreeProps {
  onCategorySelected: (category: Category) => void;
  onWijkHeldenSelected: () => void;
  onBack: () => void;
}

interface Option {
  id: Category | 'wijkhelden';
  labelKey: string;
  iconName: string;
  color: string;
  bgColor: string;
  descriptionKey: string;
}

const options: Option[] = [
  {
    id: 'rust',
    labelKey: 'decision.rust',
    iconName: 'Sparkles',
    color: 'text-white',
    bgColor: 'bg-gradient-to-br from-[#468C78] to-[#3a7262] hover:from-[#3a7262] hover:to-[#468C78] border-[#468C78]',
    descriptionKey: 'decision.rustDesc',
  },
  {
    id: 'actief',
    labelKey: 'decision.actief',
    iconName: 'Flame',
    color: 'text-white',
    bgColor: 'bg-gradient-to-br from-[#BF7878] to-[#a86565] hover:from-[#a86565] hover:to-[#BF7878] border-[#BF7878]',
    descriptionKey: 'decision.actiefDesc',
  },
  {
    id: 'creatief',
    labelKey: 'decision.creatief',
    iconName: 'Paintbrush',
    color: 'text-white',
    bgColor: 'bg-gradient-to-br from-[#A68776] to-[#8f7363] hover:from-[#8f7363] hover:to-[#A68776] border-[#A68776]',
    descriptionKey: 'decision.creatiefDesc',
  },
  {
    id: 'praten',
    labelKey: 'decision.praten',
    iconName: 'MessagesSquare',
    color: 'text-white',
    bgColor: 'bg-gradient-to-br from-[#B4D9C8] to-[#9dc4b3] hover:from-[#9dc4b3] hover:to-[#B4D9C8] border-[#B4D9C8]',
    descriptionKey: 'decision.pratenDesc',
  },
  {
    id: 'wijkhelden',
    labelKey: 'decision.wijkhelden',
    iconName: 'HeartHandshake',
    color: 'text-[#468C78]',
    bgColor: 'bg-[#F2EFE9] hover:bg-[#e8e5df] border-[#468C78]',
    descriptionKey: 'decision.wijkheldenDesc',
  }
];

export function DecisionTree({ onCategorySelected, onWijkHeldenSelected, onBack }: DecisionTreeProps) {
  const { t } = useLanguage();
  
  const handleOptionClick = (optionId: Category | 'wijkhelden') => {
    if (optionId === 'wijkhelden') {
      onWijkHeldenSelected();
    } else {
      onCategorySelected(optionId);
    }
  };

  const handleBack = () => {
    onBack();
  };

  const getIcon = (iconName: string, className: string) => {
    const svgProps = {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      className: className
    };

    switch (iconName) {
      case 'Sparkles':
        return (
          <svg {...svgProps}>
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
            <path d="M5 3v4"/>
            <path d="M19 17v4"/>
            <path d="M3 5h4"/>
            <path d="M17 19h4"/>
          </svg>
        );
      case 'Flame':
        return (
          <svg {...svgProps}>
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
          </svg>
        );
      case 'Paintbrush':
        return (
          <svg {...svgProps}>
            <path d="m14.622 17.897-10.68-2.913"/>
            <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0l4.018-4.018z"/>
            <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/>
          </svg>
        );
      case 'MessagesSquare':
        return (
          <svg {...svgProps}>
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
          </svg>
        );
      case 'HeartHandshake':
        return (
          <svg {...svgProps}>
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/>
            <path d="m18 15-2-2"/>
            <path d="m15 18-2-2"/>
          </svg>
        );
      default:
        return (
          <svg {...svgProps}>
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-b from-[#F2EFE9] via-[#B4D9C8]/30 to-[#B4D9C8]/50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="absolute top-6 left-6 text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-xl z-10 text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            {t('common.back')}
          </Button>
          <div className="flex items-center justify-center gap-2 mt-12">
            <h2 className="text-gray-600" style={{ fontSize: '36px' }}>{t('decision.title')}</h2>
            <SpeakButton text={t('decision.title')} />
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-5 mb-5">
          {options.slice(0, 4).map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`${option.bgColor} border-2 rounded-3xl p-6 transition-all shadow-sm relative flex flex-col items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] hover:shadow-md`}
            >
              <div className="absolute top-4 right-4">
                <SpeakButton text={t(option.labelKey)} />
              </div>
              <div className={`${option.color} flex justify-center`}>
                {getIcon(option.iconName, 'w-8 h-8')}
              </div>
              <h3 className={`${option.color} mb-0 text-center w-full`} style={{ fontSize: '26px' }}>{t(option.labelKey)}</h3>
            </button>
          ))}
        </div>

        {/* Wijk Helden */}
        <button
          onClick={() => handleOptionClick('wijkhelden')}
          className={`${options[4].bgColor} border-2 rounded-3xl p-6 transition-all w-full shadow-sm relative flex flex-col items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] hover:shadow-md`}
        >
          <div className="absolute top-4 right-4">
            <SpeakButton text={t(options[4].labelKey)} />
          </div>
          <div className={`${options[4].color} flex justify-center`}>
            {getIcon(options[4].iconName, 'w-8 h-8')}
          </div>
          <h3 className={`${options[4].color} mb-0 text-center w-full`} style={{ fontSize: '26px' }}>{t(options[4].labelKey)}</h3>
        </button>
      </div>
    </div>
  );
}
