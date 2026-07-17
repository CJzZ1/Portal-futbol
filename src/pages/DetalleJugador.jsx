import { useParams, Link } from 'react-router-dom';

export default function DetalleJugador() {
  const { id } = useParams();

  // Diccionario simulado para mostrar datos específicos según el ID seleccionado en la URL
  const infoJugadores = {
    1: { nombre: "Lionel Messi", posicion: "Extremo Derecho", ritmo: 85, tiro: 93, pase: 92, regate: 95, defensa: 35, fisico: 65, descripcion: "El genio argentino destaca por su visión de juego milimétrica, regate en espacios reducidos y una definición quirúrgica de cara al arco." },
    2: { nombre: "Cristiano Ronaldo", posicion: "Delantero Centro", ritmo: 88, tiro: 92, pase: 80, regate: 83, defensa: 40, fisico: 85, descripcion: "Un rematador letal con una potencia física inigualable, excelente juego aéreo y un posicionamiento ofensivo perfecto en el área rival." },
    3: { nombre: "Kevin De Bruyne", posicion: "Mediocampista", ritmo: 72, tiro: 86, pase: 94, regate: 87, defensa: 65, fisico: 78, descripcion: "El motor del mediocampo. Capaz de romper líneas con asistencias perfectas y desatascar partidos con disparos potentes de media distancia." },
    4: { font: "Moisés Caicedo", nombre: "Moisés Caicedo", posicion: "Pivote", ritmo: 78, tiro: 68, pase: 82, regate: 79, defensa: 85, fisico: 84, descripcion: "Despliegue físico incansable en la contención. Excelente capacidad de recuperación, anticipación táctica y salida limpia del balón." }
  };

  // Buscamos el jugador; si no existe, damos valores por defecto
  const jugador = infoJugadores[id] || {
    nombre: "Futbolista Desconocido",
    posicion: "N/A",
    ritmo: 50, tiro: 50, pase: 50, regate: 50, defensa: 50, fisico: 50,
    descripcion: "Ficha técnica no disponible o ID fuera del rango de la plantilla."
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center justify-center">
      <div className="bg-slate-900 border border-emerald-500 rounded-2xl p-8 max-w-xl w-full shadow-2xl shadow-emerald-950/20">
        
        {/* Encabezado Base de Joseph Adaptado */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">📊 Análisis Detallado</h2>
          <p className="text-slate-400 text-sm">Vista del perfil táctico y estadísticas individuales para el ID: <span className="text-emerald-400 font-bold">#{id}</span></p>
        </div>

        <hr className="border-slate-800 mb-6" />

        {/* Datos Principales de la Ficha */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-black text-emerald-400">{jugador.nombre}</h3>
          <p className="text-slate-300 font-medium text-sm">{jugador.posicion}</p>
        </div>

        {/* Descripción de Rendimiento */}
        <p className="text-slate-300 text-sm leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800 text-center mb-6">
          {jugador.descripcion}
        </p>

        {/* Requisito de Diseño de Interfaz: Cuadrícula Responsiva con Atributos */}
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-left">Atributos Clave</h4>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { label: "🏃‍♂️ Ritmo", valor: jugador.ritmo },
            { label: "🎯 Tiro", valor: jugador.tiro },
            { label: "⚽ Pase", valor: jugador.pase },
            { label: "⚡ Regate", valor: jugador.regate },
            { label: "🛡️ Defensa", valor: jugador.defensa },
            { label: "💪 Físico", valor: jugador.fisico }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
              <span className="text-slate-400 text-sm">{stat.label}</span>
              <span className="font-bold text-emerald-400">{stat.valor}</span>
            </div>
          ))}
        </div>

        {/* Botón de Retorno para navegación fluida */}
        <div className="text-center">
          <Link 
            to="/jugadores" 
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-900/30 inline-block w-full sm:w-auto"
          >
            ← Volver al Catálogo
          </Link>
        </div>

      </div>
    </div>
  );
}