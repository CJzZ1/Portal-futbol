import { Link } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Fondo decorativo táctico de cancha difuminado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_60%)] pointer-events-none"></div>

      {/* Código Base de Joseph Adaptado y Expandido */}
      <div className="text-center py-12 max-w-2xl z-10 mb-6">
        <h1 className="text-4xl font-bold text-green-400 mb-4">🏟️ Football Hub</h1>
        <p className="text-xl text-gray-300 mb-4">Bienvenido al Portal de Fútbol y Análisis Táctico.</p>
        
        <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
          Una plataforma avanzada diseñada para la gestión de plantillas, evaluación de métricas de rendimiento individual y procesamiento de alineaciones estratégicas en tiempo real.
        </p>

        <div className="mt-8">
          <Link 
            to="/jugadores" 
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-green-900/40 inline-block text-xs uppercase tracking-wider"
          >
            Explorar Plantilla Táctica →
          </Link>
        </div>
      </div>

      {/* Grid de Información Extra y Características */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full z-10 mt-4">
        <div className="bg-gray-900/60 backdrop-blur border border-gray-800 p-5 rounded-xl text-left">
          <div className="text-xl mb-2">📊</div>
          <h3 className="text-md font-bold text-white mb-1">Métricas Avanzadas</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Monitoreo detallado de ritmo, pase, tiro y capacidades físicas de cada jugador de la plantilla.</p>
        </div>
        <div className="bg-gray-900/60 backdrop-blur border border-gray-800 p-5 rounded-xl text-left">
          <div className="text-xl mb-2">⚡</div>
          <h3 className="text-md font-bold text-white mb-1">Interfaz Dinámica</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Navegación fluida e instantánea optimizada mediante React Router y estilos estilizados con Tailwind CSS.</p>
        </div>
        <div className="bg-gray-900/60 backdrop-blur border border-gray-800 p-5 rounded-xl text-left">
          <div className="text-xl mb-2">📁</div>
          <h3 className="text-md font-bold text-white mb-1">Modularización Total</h3>
          <p className="text-gray-400 text-xs leading-relaxed">Estructura limpia basada en componentes reutilizables aislados, garantizando un código mantenible.</p>
        </div>
      </div>

      {/* Inyección del Reproductor Flotante */}
      <AudioPlayer />
    </div>
  );
}