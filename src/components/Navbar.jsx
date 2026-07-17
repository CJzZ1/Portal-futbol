import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-white py-4 px-6 flex justify-between items-center">
      {/* Sección del Logo Oficial Adaptada */}
      <div className="text-xl font-bold text-green-400 tracking-wider">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img 
            src="/hub.png" 
            alt="Logo oficial Football Hub" 
            className="w-8 h-8 object-contain" 
          />
          <span>DREAM SQUAD</span>
        </Link>
      </div>
      
      {/* Enlaces de Navegación Originales de Joseph */}
      <div className="flex gap-6">
        <Link to="/" className="hover:text-green-400 transition-colors">Inicio</Link>
        <Link to="/jugadores" className="hover:text-green-400 transition-colors">Ver Jugadores</Link>
      </div>
    </nav>
  );
}