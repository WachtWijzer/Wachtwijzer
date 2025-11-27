import { Button } from './ui/button';
import { ActivityCard } from './ActivityCard';
import { activities } from '../data/activities';
import type { Category } from '../App';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeakButton } from './SpeakButton';

interface ResultsProps {
  category: Category;
  onBack: () => void;
  onHome: () => void;
}

export function Results({ category, onBack, onHome }: ResultsProps) {
  const { t } = useLanguage();

  // Filter activities based on category
  const filteredActivities = activities.filter((activity) =>
    activity.categories.includes(category)
  );

  // Get category info
  const categoryInfo = {
    rust: {
      label: t('decision.rust'),
      description: t('results.rustIntro'),
      primaryColor: '#468C78',
      bgGradient: 'from-[#468C78]/20 via-[#B4D9C8]/20 to-white',
      borderColor: 'border-[#468C78]',
      badge: 'bg-[#468C78]/10 text-[#468C78] border-[#468C78]'
    },
    actief: {
      label: t('decision.actief'),
      description: t('results.actiefIntro'),
      primaryColor: '#BF7878',
      bgGradient: 'from-[#BF7878]/20 via-[#BF7878]/10 to-white',
      borderColor: 'border-[#BF7878]',
      badge: 'bg-[#BF7878]/10 text-[#BF7878] border-[#BF7878]'
    },
    creatief: {
      label: t('decision.creatief'),
      description: t('results.creatiefIntro'),
      primaryColor: '#A68776',
      bgGradient: 'from-[#A68776]/20 via-[#A68776]/10 to-white',
      borderColor: 'border-[#A68776]',
      badge: 'bg-[#A68776]/10 text-[#A68776] border-[#A68776]'
    },
    praten: {
      label: t('decision.praten'),
      description: t('results.pratenIntro'),
      primaryColor: '#B4D9C8',
      bgGradient: 'from-[#B4D9C8]/20 via-[#B4D9C8]/10 to-white',
      borderColor: 'border-[#B4D9C8]',
      badge: 'bg-[#B4D9C8]/10 text-[#468C78] border-[#468C78]'
    }
  };

  const scheme = categoryInfo[category];
  const categoryLabel = scheme.label;
  const categoryDesc = scheme.description;

  return (
    <div className={`min-h-screen bg-gradient-to-b ${scheme.bgGradient} px-6 py-8`}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="-ml-2 text-gray-600 hover:bg-white/50 text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            {t('common.back')}
          </Button>
          <Button
            variant="ghost"
            onClick={onHome}
            className="-mr-2 text-gray-600 hover:bg-white/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </Button>
        </div>

        {/* Title Section */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-md border-2 ${scheme.borderColor}`}>
          <div className="flex flex-col items-center justify-center gap-2 mb-2">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-gray-800 text-center">{t('results.title')}</h2>
              <SpeakButton text={t('results.title')} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <div className="flex items-center justify-center gap-2">
              <p className="text-gray-600 text-lg text-center">
                {categoryDesc}
              </p>
              <SpeakButton text={categoryDesc} className="flex-shrink-0" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className={`inline-flex items-center justify-center gap-2 ${scheme.badge} px-4 py-2 rounded-full border-2`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              <span className="text-center">{categoryLabel}</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-md">
              <p className="text-gray-600 mb-4">
                {t('results.noResults')}
              </p>
              <Button onClick={onBack} className="bg-[#468C78] hover:bg-[#3a7262] text-white">
                {t('common.back')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
