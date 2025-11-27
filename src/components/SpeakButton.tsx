import { useLanguage } from '../contexts/LanguageContext';

interface SpeakButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

export function SpeakButton({ text, className = '', size = 'sm' }: SpeakButtonProps) {
  const { speak } = useLanguage();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    speak(text);
  };

  const sizeClasses = {
    sm: 'p-1.5',
    default: 'p-2',
    lg: 'p-3'
  };

  return (
    <div
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-700 transition-colors cursor-pointer ${sizeClasses[size]} ${className}`}
      role="button"
      tabIndex={0}
      aria-label="Lees voor"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as any);
        }
      }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      </svg>
    </div>
  );
}
