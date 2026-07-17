import React, { useState, useEffect } from "react";

const DATOS_FUTBOLISTAS_MOCK = [
  { id: 1, nombre: "Lionel Messi", posicion: "Extremo Derecho", media: 92, equipo: "Inter Miami", imagen: "messi.jpg.jpeg" },
  { id: 2, nombre: "Cristiano Ronaldo", posicion: "Delantero Centro", media: 90, equipo: "Al Nassr", imagen: "ronaldo.jpg.jpeg" },
  { id: 3, nombre: "Kevin De Bruyne", posicion: "Centrocampista", media: 91, equipo: "Manchester City", imagen: "kevin.jpg.jpeg" },
  { id: 4, nombre: "Moisés Caicedo", posicion: "Pivote", media: 84, equipo: "Chelsea FC", imagen: "moises.jpg.jpeg" }
];

export default function Jugadores() {
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const consumirApiSimulada = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const simularError = false;
        if (simularError) {
          throw new Error("Error 500: No se pudo conectar con el servidor de deportes.");
        }

        setJugadores(DATOS_FUTBOLISTAS_MOCK);
        setError(null);
      } catch (err) {
        setError(err.message);
      } {
        setLoading(false);
      }
    };

    consumirApiSimulada();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
        <p className="text-lg font-semibold">Cargando alineación...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
        <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg max-w-md text-center">
          <h2 className="text-xl font-bold mb-2">⚠️ Error de Conexión</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-green-400 tracking-wider uppercase">
          Catálogo de Jugadores
        </h1>
        <p className="text-gray-400 text-sm mt-1">Datos y recursos cargados de forma asíncrona</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {jugadores.map((jugador) => (
          <div
            key={jugador.id}
            className="bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-lg hover:border-green-500 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-700 border-2 border-gray-600 flex items-center justify-center">
              <img
                src={`/${jugador.imagen}`}
                alt={jugador.nombre}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://cdn-icons-png.flaticon.com/512/2102/2102647.png";
                }}
              />
            </div>

            <h2 className="text-xl font-bold text-white">{jugador.nombre}</h2>
            <p className="text-green-400 font-semibold text-sm mb-1">{jugador.posicion}</p>
            <p className="text-gray-400 text-xs mb-3">{jugador.equipo}</p>

            <div className="bg-gray-900 px-4 py-1.5 rounded-full border border-gray-700">
              <span className="text-gray-400 text-xs font-bold mr-1">MEDIA:</span>
              <span className="text-yellow-400 font-black">{jugador.media}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}