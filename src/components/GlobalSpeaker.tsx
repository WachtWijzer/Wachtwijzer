import { Volume2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GlobalSpeakerProps {
  currentView: string;
  getPageContent: () => string;
}

export function GlobalSpeaker({ getPageContent }: GlobalSpeakerProps) {
  const { speak, stopSpeaking } = useLanguage();

  const handleSpeak = () => {
    stopSpeaking(); // Stop any current speech
    const content = getPageContent();
    if (content) {
      speak(content);
    }
  };

  return (
    <button
      onClick={handleSpeak}
      className="bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-md rounded-md px-3 py-2 hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
      aria-label="Lees pagina voor"
      title="Lees pagina voor"
    >
      <Volume2 className="w-5 h-5 text-gray-700" />
    </button>
  );
}
