import { useState, useRef } from 'react';

export default function AudioPlayer() {
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (reproduciendo) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Error al reproducir:", err));
    }
    setReproduciendo(!reproduciendo);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/intro.mp3" loop />
      <button
        onClick={toggleAudio}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all transform hover:scale-105 ${
          reproduciendo 
            ? 'bg-green-600 text-white animate-pulse' 
            : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-green-500'
        }`}
      >
        {reproduciendo ? '⏸️ Pausar Soundtrack' : '🎵 Activar Música'}
      </button>
    </div>
  );
}