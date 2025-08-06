'use client'
import { useState } from 'react'

const cartas = [
  { id: 1, nombre: 'A', imagen: '/cartas/carta1.jpg' },
  { id: 2, nombre: 'B', imagen: '/cartas/carta2.jpg' },
  { id: 3, nombre: 'C', imagen: '/cartas/carta3.jpg' }
]

export default function AdivinaCarta() {
  const [mensaje, setMensaje] = useState('')
  const cartaCorrecta = 2 // por ejemplo, la carta con id 2 es la correcta

  const manejarClick = (id: number) => {
    if (id === cartaCorrecta) {
      setMensaje('🎉 ¡Correcto! Has adivinado la carta.')
    } else {
      setMensaje('❌ Ups... ¡Intenta otra vez!')
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>🃏 Adivina la Carta</h1>
      <p>Selecciona una carta:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {cartas.map(carta => (
          <img
            key={carta.id}
            src="/cartas/dorso.jpg"
            alt="Carta"
            style={{ width: '100px', cursor: 'pointer' }}
            onClick={() => manejarClick(carta.id)}
          />
        ))}
      </div>
      {mensaje && <p style={{ marginTop: '20px', fontSize: '18px' }}>{mensaje}</p>}
    </div>
  )
}
