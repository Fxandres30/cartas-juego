'use client';

const games = [
  {
    id: 1,
    title: 'Combinación 3 Cifras',
    image: '/juegos/juego1.jpg',
    link: '/juegos/adivina-la-carta', // Este va al juego correcto
  },
  {
    id: 2,
    title: 'Desafío Numérico',
    image: '/juegos/juego2.jpg',
    link: '/juegos/desafio-numerico',
  },
  {
    id: 3,
    title: 'Código Misterioso',
    image: '/juegos/juego3.jpg',
    link: '/juegos/codigo-misterioso',
  },
];

const GamesSection = () => {
  return (
    <section className="games-section">
      <h2>Juegos Disponibles</h2>
      <div className="games-grid">
        {games.map((game) => (
          <div className="game-card" key={game.id}>
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <a href={game.link} className="play-button">Ingresar</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesSection;
