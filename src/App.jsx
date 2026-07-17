import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Lo dejamos importado, no pasa nada
import Home from './pages/Home';
import Jugadores from './pages/Jugadores';
import DetalleJugador from './pages/DetalleJugador';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans">
        {/* Dejamos el Navbar comentado o removido por ahora */}

        <main className="flex-grow container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jugadores" element={<Jugadores />} />
            <Route path="/jugador/:id" element={<DetalleJugador />} />
          </Routes>
        </main>

        {/* Quitamos temporalmente el Footer aquí para romper el bucle */}
      </div>
    </BrowserRouter>
  );
}

export default App;