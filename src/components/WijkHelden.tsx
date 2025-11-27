import { Button } from './ui/button';
import { wijkHelden } from '../data/wijkHelden';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeakButton } from './SpeakButton';
import timPhoto from 'figma:asset/2739c1c6d429fc36addaf7449f06ae75e7e73228.png';
import thijsPhoto from 'figma:asset/c26d2edaecdf53bf5fb17ec812abf1780a13aff6.png';
import mirjamPhoto from 'figma:asset/bf9c9589720ccbec4f48a59004191a07ad8465dd.png';
import johnPhoto from 'figma:asset/24dbfeac7dc9891270f8f77f6fa264af19781fcc.png';

interface WijkHeldenProps {
  onBack: () => void;
}

// Map photo imports to held IDs
const photoMap: Record<string, string> = {
  '1': timPhoto,
  '2': thijsPhoto,
  '3': mirjamPhoto,
  '4': johnPhoto,
};

export function WijkHelden({ onBack }: WijkHeldenProps) {
  const { t, language } = useLanguage();
  
  // Helper function to get localized text
  const getLocalizedText = (text: string | { nl: string; en: string }): string => {
    if (typeof text === 'string') return text;
    return text[language];
  };
  
  return (
    <div className="min-h-screen px-6 py-8 bg-gradient-to-b from-[#F2EFE9] via-[#F2EFE9]/80 to-[#468C78]/20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="-ml-2 text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            {t('common.back')}
          </Button>
        </div>

        {/* Title Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-md border-2 border-white/50">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="text-gray-800">{t('wijkhelden.title')}</h2>
            <SpeakButton text={t('wijkhelden.title')} />
          </div>
        </div>

        {/* Heroes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wijkHelden.map((held) => (
            <div
              key={held.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border-2 border-white/50 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-6">
                {/* Photo/Avatar Placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#B4D9C8] to-[#468C78] rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  {photoMap[held.id] ? (
                    <img 
                      src={photoMap[held.id]} 
                      alt={held.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white font-medium text-xl">{held.name.charAt(0)}</span>
                  )}
                </div>

                {/* Name & Role */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-800">{held.name}</h3>
                    <SpeakButton text={held.name} />
                  </div>
                  <p className="text-gray-600">{getLocalizedText(held.role)}</p>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-[#B4D9C8]/30 to-[#A68776]/20 border-l-4 border-[#468C78] p-3 mb-4 rounded-r-xl">
                  <div className="flex items-start gap-2">
                    <p className="text-gray-700 italic text-sm">"{getLocalizedText(held.quote)}"</p>
                    <SpeakButton text={getLocalizedText(held.quote)} className="flex-shrink-0" size="sm" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 text-sm">{getLocalizedText(held.description)}</p>

                {/* Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{getLocalizedText(held.location)}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-400">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{getLocalizedText(held.availability)}</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-[#B4D9C8]/20 rounded-lg p-4 border border-[#468C78]/30">
                  <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#468C78]">
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                    </svg>
                    <p className="text-gray-700 text-sm">{getLocalizedText(held.contact)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Help */}
        <div className="mt-8 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/50">
          <p className="text-gray-600">
            {t('wijkhelden.footer')}
          </p>
        </div>
      </div>
    </div>
  );
}
