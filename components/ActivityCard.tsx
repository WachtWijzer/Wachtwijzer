import { useState } from 'react';
import { Button } from './ui/button';
import type { Activity } from '../data/activities';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeakButton } from './SpeakButton';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t, language } = useLanguage();

  // Helper function to get localized text
  const getLocalizedText = (text: string | { nl: string; en: string }): string => {
    if (typeof text === 'string') return text;
    return text[language];
  };

  // Icon mapping function using inline SVG
  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    
    const svgProps = {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
      className: "w-6 h-6"
    };

    switch (iconName) {
      case 'Coffee':
        return (
          <svg {...svgProps}>
            <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
            <line x1="6" x2="6" y1="2" y2="4"/>
            <line x1="10" x2="10" y1="2" y2="4"/>
            <line x1="14" x2="14" y1="2" y2="4"/>
          </svg>
        );
      case 'HomeIcon':
        return (
          <svg {...svgProps}>
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        );
      case 'Wrench':
        return (
          <svg {...svgProps}>
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        );
      case 'Dumbbell':
        return (
          <svg {...svgProps}>
            <path d="m6.5 6.5 11 11"/>
            <path d="m21 21-1-1"/>
            <path d="m3 3 1 1"/>
            <path d="m18 22 4-4"/>
            <path d="m2 6 4-4"/>
            <path d="m3 10 7-7"/>
            <path d="m14 21 7-7"/>
          </svg>
        );
      case 'Music':
        return (
          <svg {...svgProps}>
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
        );
      case 'Mic':
        return (
          <svg {...svgProps}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" x2="12" y1="19" y2="22"/>
          </svg>
        );
      case 'Users':
        return (
          <svg {...svgProps}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        );
      case 'Heart':
        return (
          <svg {...svgProps}>
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border-2 border-white/50 overflow-hidden hover:shadow-lg transition-all">
      {/* Main Content */}
      <div className="p-6">
        {/* Header with Logo */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-gray-800">{getLocalizedText(activity.title)}</h3>
              <SpeakButton text={getLocalizedText(activity.title)} />
            </div>
            {activity.organizationName && (
              <p className="text-gray-400 text-sm mb-1">{getLocalizedText(activity.organizationName)}</p>
            )}
            {activity.location && (
              <p className="text-gray-500 text-sm">{getLocalizedText(activity.location)}</p>
            )}
          </div>
          <div className="ml-4 flex flex-col items-end gap-2">
            {activity.logo ? (
              <img 
                src={activity.logo} 
                alt={`${getLocalizedText(activity.organizationName || activity.title)} logo`}
                className="w-20 h-20 object-contain rounded-lg"
              />
            ) : activity.iconName ? (
              <div className="text-gray-400">
                {getIcon(activity.iconName)}
              </div>
            ) : null}
          </div>
        </div>

        {/* Description */}
        <div className="flex items-start gap-2 mb-4">
          <p className="text-gray-700 flex-1">{getLocalizedText(activity.description)}</p>
          <SpeakButton text={getLocalizedText(activity.description)} className="flex-shrink-0" />
        </div>

        {/* Quote */}
        {activity.quote && (
          <div className="bg-gradient-to-r from-[#B4D9C8]/30 to-[#A68776]/20 border-l-4 border-[#468C78] p-4 mb-4 rounded-r-xl">
            <div className="flex gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#468C78] flex-shrink-0">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
              </svg>
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <p className="text-gray-700 italic mb-1 flex-1">"{getLocalizedText(activity.quote.text)}"</p>
                  <SpeakButton text={`${getLocalizedText(activity.quote.text)}. ${activity.quote.author}`} className="flex-shrink-0" />
                </div>
                <p className="text-gray-600">— {activity.quote.author}</p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Info */}
        <div className="space-y-2 mb-4">
          {activity.days && (
            <div className="flex items-start gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{getLocalizedText(activity.days)}</span>
            </div>
          )}
          {activity.address && (
            <div className="flex items-start gap-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{activity.address}</span>
            </div>
          )}
        </div>

        {/* Expand Button */}
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-gray-600 hover:text-gray-800 hover:bg-white/50 rounded-xl"
        >
          {isExpanded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                <path d="m18 15-6-6-6 6"/>
              </svg>
              {t('results.lessInfo')}
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                <path d="m6 9 6 6 6-6"/>
              </svg>
              {t('results.moreInfo')}
            </>
          )}
        </Button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100 pt-4 space-y-4">
          {activity.detailedInfo && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-gray-800">{t('results.about')}</h4>
                <SpeakButton text={`${t('results.about')}. ${getLocalizedText(activity.detailedInfo)}`} />
              </div>
              <p className="text-gray-700">{getLocalizedText(activity.detailedInfo)}</p>
            </div>
          )}

          {activity.requirements && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-gray-800">{t('results.requirements')}</h4>
                <SpeakButton text={`${t('results.requirements')} ${getLocalizedText(activity.requirements)}`} />
              </div>
              <p className="text-gray-700">{getLocalizedText(activity.requirements)}</p>
            </div>
          )}

          {/* Contact Info */}
          {(activity.phone || activity.email || activity.website) && (
            <div>
              <h4 className="text-gray-800 mb-3">{t('results.contact')}</h4>
              <div className="space-y-2">
                {activity.phone && (
                  <div className="flex items-center gap-2">
                    <a 
                      href={`tel:${activity.phone}`}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors flex-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      <span>{activity.phone}</span>
                    </a>
                    <SpeakButton text={`${t('results.phone')} ${activity.phone}`} />
                  </div>
                )}
                {activity.email && (
                  <div className="flex items-center gap-2">
                    <a 
                      href={`mailto:${activity.email}`}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors flex-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      <span>{activity.email}</span>
                    </a>
                    <SpeakButton text={`${t('results.email')} ${activity.email}`} />
                  </div>
                )}
                {activity.website && (
                  <a 
                    href={activity.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-gray-700 hover:text-gray-900 underline"
                  >
                    {t('results.visitWebsite')}
                  </a>
                )}
              </div>
            </div>
          )}

          {activity.ageRange && (
            <div className="bg-[#B4D9C8]/30 rounded-lg p-3 border border-[#468C78]/30 flex items-center gap-2">
              <p className="text-gray-700 flex-1">
                <span>{t('results.age')} </span>
                <span>{getLocalizedText(activity.ageRange)}</span>
              </p>
              <SpeakButton text={`${t('results.age')} ${getLocalizedText(activity.ageRange)}`} className="flex-shrink-0" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
