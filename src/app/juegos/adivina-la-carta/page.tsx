'use client';

import { useState } from 'react';

const cartas = [
  { id: 1, nombre: '1', imagen: '/cartas/carta1.jpg' },
  { id: 2, nombre: '2', imagen: '/cartas/carta2.jpg' },
  { id: 3, nombre: '3', imagen: '/cartas/carta3.jpg' },
];

export default function AdivinaLaCarta() {
  const [cartaSecreta, setCartaSecreta] = useState(
    cartas[Math.floor(Math.random() * cartas.length)]
  );
  const [resultado, setResultado] = useState<string | null>(null);
  const [cartaSeleccionadaId, setCartaSeleccionadaId] = useState<number | null>(null);
  const [reveladas, setReveladas] = useState<boolean>(false);

  const manejarClick = (carta: typeof cartas[0]) => {
    if (resultado) return; // ya jugó
    setCartaSeleccionadaId(carta.id);
    setReveladas(true);

    if (carta.id === cartaSecreta.id) {
      setResultado('🎉 ¡Correcto! Has adivinado la carta.');
    } else {
      setResultado(`❌ Fallaste. La carta era: ${cartaSecreta.nombre}`);
    }
  };

  const reiniciarJuego = () => {
    setCartaSecreta(cartas[Math.floor(Math.random() * cartas.length)]);
    setResultado(null);
    setCartaSeleccionadaId(null);
    setReveladas(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🎴 Adivina la Carta</h1>
      <p>Haz clic en una carta para adivinar cuál es la correcta.</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
        {cartas.map((carta) => {
          const mostrarCarta = reveladas || cartaSeleccionadaId === carta.id;
          return (
            <img
              key={carta.id}
              src={mostrarCarta ? carta.imagen : '/cartas/dorso.jpg'}
              alt={`Carta ${carta.nombre}`}
              style={{
                width: '150px',
                height: 'auto',
                cursor: resultado ? 'not-allowed' : 'pointer',
                border:
                  cartaSeleccionadaId === carta.id
                    ? '4px solid #007bff'
                    : '2px solid #ccc',
                borderRadius: '12px',
              }}
              onClick={() => manejarClick(carta)}
            />
          );
        })}
      </div>

      {resultado && (
        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontSize: '1.2rem' }}>{resultado}</p>
          <button
            onClick={reiniciarJuego}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '8px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            🔄 Jugar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}
