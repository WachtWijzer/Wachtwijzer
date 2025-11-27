import logoIcon from 'figma:asset/fa360469e0d3f976ef719725f5ed6f78ebad25cb.png';
import { useLanguage } from '../contexts/LanguageContext';
import { SpeakButton } from './SpeakButton';

interface HomeProps {
  onStart: () => void;
}

export function Home({ onStart }: HomeProps) {
  const { t } = useLanguage();
  
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-between px-6 py-12"
      style={{
        background: 'linear-gradient(to bottom, #F2EFE9 0%, rgba(180, 217, 200, 0.45) 30%, #A68776 70%, #BF7878 100%)'
      }}
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="max-w-md w-full text-center space-y-6">
          {/* Logo - Icon + Text */}
          <div className="flex flex-row items-center justify-center animate-in fade-in duration-700 -mt-12">
            <img 
              src={logoIcon} 
              alt="WachtWijzer logo" 
              className="h-40 w-auto"
              style={{ 
                imageRendering: '-webkit-optimize-contrast',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            />
          </div>

          {/* Description */}
          <div className="space-y-4 animate-in fade-in duration-700 delay-100">
            <p className="text-gray-600 leading-relaxed text-center" style={{ fontSize: '18px', fontFamily: 'Kalam, cursive' }}>
              {t('home.description')}
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in duration-700 delay-200 mt-18">
            <button 
              onClick={onStart}
              className="w-full bg-gradient-to-r from-[#B4D9C8] to-[#468C78] hover:from-[#B4D9C8] hover:to-[#3a7461] text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-white/40 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] relative group"
              style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Kalam, cursive' }}
            >
              {t('home.title')}
              <div 
                className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
                <SpeakButton text={t('home.title')} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer text at bottom */}
      <div className="flex flex-col items-center gap-2 animate-in fade-in duration-700 delay-300 pb-0">
        <p className="text-gray-700 text-center" style={{ fontSize: '14px', fontFamily: 'Kalam, cursive' }}>
          {t('home.anonymous')}
        </p>
        {/* Mint green heart with ombre */}
        <svg width="20" height="18" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#B4D9C8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#468C78', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#heartGradient)"/>
        </svg>
      </div>
    </div>
  );
}
