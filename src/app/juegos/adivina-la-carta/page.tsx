'use client';

import { useState } from 'react';
import '@/app/estilos/AdivinaLaCarta.css'; // ✅ CSS separado

const cartas = [
  { id: 1, nombre: 'primer', imagen: '/cartas/carta1.jpg' },
  { id: 2, nombre: 'segunda', imagen: '/cartas/carta2.jpg' },
  { id: 3, nombre: 'tercera', imagen: '/cartas/carta3.jpg' },
];

export default function AdivinaLaCarta() {
  const [cartaSecreta, setCartaSecreta] = useState(
    cartas[Math.floor(Math.random() * cartas.length)]
  );
  const [resultado, setResultado] = useState<string | null>(null);
  const [cartaSeleccionadaId, setCartaSeleccionadaId] = useState<number | null>(null);
  const [reveladas, setReveladas] = useState<boolean>(false);

  const manejarClick = (carta: typeof cartas[0]) => {
    if (resultado) return;
    setCartaSeleccionadaId(carta.id);
    setReveladas(true);

    if (carta.id === cartaSecreta.id) {
      setResultado('🎉 ¡Correcto! Has adivinado la carta.');
    } else {
      setResultado(`❌ Fallaste. Era la ${cartaSecreta.nombre} carta.`);
    }
  };

  const reiniciarJuego = () => {
    setCartaSecreta(cartas[Math.floor(Math.random() * cartas.length)]);
    setResultado(null);
    setCartaSeleccionadaId(null);
    setReveladas(false);
  };

  return (
    <div className="juego">
      <h1>🎴 Adivina la Carta</h1>
      <p>Haz clic en una carta para adivinar cuál es la correcta.</p>

      <div className="contenedor-cartas">
        {cartas.map((carta) => {
          const mostrarCarta = reveladas || cartaSeleccionadaId === carta.id;
          return (
            <img
              key={carta.id}
              src={mostrarCarta ? carta.imagen : '/cartas/dorso.jpg'}
              alt={`Carta ${carta.nombre}`}
              className={`carta ${cartaSeleccionadaId === carta.id ? 'cartaSeleccionada' : ''}`}
              onClick={() => manejarClick(carta)}
            />
          );
        })}
      </div>

      {resultado && (
        <div className="resultado">
          <p>{resultado}</p>
          <button onClick={reiniciarJuego}>🔄 Jugar de nuevo</button>
        </div>
      )}
    </div>
  );
}
