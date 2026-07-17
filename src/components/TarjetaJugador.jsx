import { Link } from 'react-router-dom';

export default function TarjetaJugador({ jugador }) {
  const { id, nombre, posicion, media, equipo, imagen } = jugador;

  return (
    <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500 rounded-xl overflow-hidden shadow-lg transition-all transform hover:-translate-y-1 flex flex-col justify-between">
      <div className="p-5 flex flex-col items-center">
        {/* Imagen con fallback por si no carga */}
        <img 
          src={imagen || "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300"} 
          alt={nombre} 
          className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500 mb-4" 
        />
        <span className="bg-emerald-950 text-emerald-400 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
          {posicion}
        </span>
        <h3 className="text-lg font-bold text-white text-center line-clamp-1">{nombre}</h3>
        <p className="text-slate-400 text-sm mb-3">{equipo}</p>
        
        {/* Badge de Media / Rating */}
        <div className="bg-slate-950 px-3 py-1 rounded border border-slate-800">
          <span className="text-slate-400 text-xs uppercase font-semibold">Media: </span>
          <span className="text-yellow-400 font-bold">{media}</span>
        </div>
      </div>

      {/* Enlace dinámico usando React Router */}
      <div className="p-4 bg-slate-950 border-t border-slate-800 text-center">
        <Link 
          to={`/jugador/${id}`} 
          className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold inline-flex items-center gap-1 w-full justify-center py-1 hover:underline"
        >
          Análisis Táctico →
        </Link>
      </div>
    </div>
  );
}