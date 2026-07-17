import React, { useState, useEffect } from "react";

// 1. Datos dinámicos actualizados con imágenes de la carpeta public
const DATOS_FUTBOLISTAS_MOCK = [
  { id: 1, nombre: "Lionel Messi", posicion: "Extremo Derecho", media: 92, equipo: "Inter Miami", imagen: "/messi.jpg" },
  { id: 2, nombre: "Cristiano Ronaldo", posicion: "Delantero Centro", media: 90, equipo: "Al Nassr", imagen: "/ronaldo.jpg" },
  { id: 3, nombre: "Kevin De Bruyne", posicion: "Centrocampista", media: 91, equipo: "Manchester City", imagen: "/kevin.jpg" },
  { id: 4, nombre: "Moisés Caicedo", posicion: "Pivote", media: 84, equipo: "Chelsea FC", imagen: "/moises.jpg" }
];

export default function Jugadores() {
  // 2. Estados para el control del ciclo de vida de la petición
  const [jugadores, setJugadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Simulación asíncrona de consumo de API (Mocking)
  useEffect(() => {
    const obtenerJugadores = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Cambia a 'true' para probar el renderizado de la interfaz de error
          const simularError = false;

          if (simularError) {
            reject("Error 500: No se pudo conectar con el servidor de deportes.");
          } else {
            resolve(DATOS_FUTBOLISTAS_MOCK);
          }
        }, 1500); // 1.5 segundos de retraso de red
      });
    };

    obtenerJugadores()
      .then((datos) => {
        setJugadores(datos);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 4. RENDERIZADO CONDICIONAL

  // Estado de Carga (Spinner)
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
        <p className="text-lg font-semibold">Cargando alineación...</p>
      </div>
    );
  }

  // Estado de Error
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

  // Estado de Éxito (Renderizado dinámico de tarjetas)
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-green-400 tracking-wider uppercase">
          Catálogo de Jugadores
        </h1>
        <p className="text-gray-400 text-sm mt-1">Datos actualizados dinámicamente</p>
      </header>

      {/* Cuadrícula Responsiva (CSS Grid lista para meter los componentes visuales) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {jugadores.map((jugador) => (
          <div
            key={jugador.id}
            className="bg-gray-800 rounded-xl p-4 border border-gray-700 shadow-lg hover:border-green-500 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-700 border-2 border-gray-600">
              <img
                src={jugador.imagen}
                alt={jugador.nombre}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150"; // Imagen de respaldo por si falta algún archivo
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