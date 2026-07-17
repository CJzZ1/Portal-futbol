import { useState, useEffect } from 'react';

// 1. Set de datos dinámicos de prueba (Simulación de API externa)
const DATOS_FUTBOLISTAS_MOCK = [
  { id: 1, nombre: "Lionel Messi", posicion: "Delantero", dorsal: 10, equipo: "Inter Miami", stats: { ritmo: 85, tiro: 92, pase: 91 } },
  { id: 2, nombre: "Cristiano Ronaldo", posicion: "Delantero", dorsal: 7, equipo: "Al Nassr", stats: { ritmo: 81, tiro: 93, pase: 78 } },
  { id: 3, nombre: "Kevin De Bruyne", posicion: "Centrocampista", dorsal: 17, equipo: "Manchester City", stats: { ritmo: 74, tiro: 86, pase: 94 } },
  { id: 4, nombre: "Jude Bellingham", posicion: "Centrocampista", dorsal: 5, equipo: "Real Madrid", stats: { ritmo: 80, tiro: 85, pase: 83 } },
  { id: 5, nombre: "Kylian Mbappé", posicion: "Delantero", dorsal: 9, equipo: "Real Madrid", stats: { ritmo: 97, tiro: 90, pase: 80 } }
];

export default function Jugadores() {
  // 2. Estados obligatorios por rúbrica para el rol de Integrante 2
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. useEffect para simular el consumo asíncrono
  useEffect(() => {
    const consumirApiFutbol = async () => {
      try {
        setLoading(true);
        // Simulación perfecta de retraso de red (1.5 segundos)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Carga exitosa de los datos en el estado
        setJugadores(DATOS_FUTBOLISTAS_MOCK);
        setError(null);
      } catch (err) {
        setError("Error al conectar con el servidor de deportes.");
      } finally {
        setLoading(false);
      }
    };

    consumirApiFutbol();
  }, []);

  // 4. Renders condicionales según el estado actual de la petición
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-white">
        {/* Spinner animado con Tailwind */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-4"></div>
        <p className="text-xl font-semibold">Cargando jugadores...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-red-500 font-bold text-xl">
        ❌ {error}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
        Catálogo de Jugadores
      </h1>

      {/* Cuadrícula responsiva (CSS Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jugadores.map((jugador) => (
          <div key={jugador.id} className="bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-md hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-bold">{jugador.nombre}</h2>
            <p className="text-gray-400">{jugador.posicion} - Dorsal {jugador.dorsal}</p>
            <p className="text-sm text-blue-300 mt-1">{jugador.equipo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}