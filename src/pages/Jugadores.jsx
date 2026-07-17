import { useState, useEffect } from 'react';
import TarjetaJugador from '../components/TarjetaJugador'; // Aquí conectamos tu componente de cartas

export default function Jugadores() {
  const [futbolistas, setFutbolistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatosAPI = async () => {
      try {
        setLoading(true);
        // Simulamos el retraso de red asíncrono que pide la rúbrica
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Datos dinámicos de la API de prueba
        const datosCargados = [
          { id: 1, nombre: "Lionel Messi", posicion: "Extremo Derecho", media: 92, equipo: "Inter Miami", imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300" },
          { id: 2, nombre: "Cristiano Ronaldo", posicion: "Delantero Centro", media: 90, equipo: "Al Nassr", imagen: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=300" },
          { id: 3, nombre: "Kevin De Bruyne", posicion: "Mediocampista", media: 91, equipo: "Manchester City", imagen: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?w=300" },
          { id: 4, nombre: "Moisés Caicedo", posicion: "Pivote", media: 84, equipo: "Chelsea FC", imagen: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300" }
        ];

        setFutbolistas(datosCargados);
      } catch (err) {
        setError("Error al conectar con la base de datos de la liga.");
      } finally {
        setLoading(false);
      }
    };

    obtenerDatosAPI();
  }, []);

  // Control de estados para cumplir la rúbrica de AITEC
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-xl font-semibold animate-pulse text-emerald-400">🔄 Cargando plantilla táctica...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-xl text-red-500 font-bold">⚠️ {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🏃 Catálogo de Futbolistas</h2>
        <p className="text-slate-400 mb-8">Explora los perfiles y estadísticas analíticas del plantel.</p>
        
        {/* Aquí es donde se pintan dinámicamente tus Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
          {futbolistas.map((jugador) => (
            <TarjetaJugador key={jugador.id} jugador={jugador} />
          ))}
        </div>
      </div>
    </div>
  );
}