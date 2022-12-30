//Ici on recupere tout les jeux de société pour commencer

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGamesFromApi = async () => {
      const response = await fetch("http://localhost:3000/games");
      const games = await response.json();
      setGames(games);
    };

    getGamesFromApi();
  }, []);

  return (
    <div className="games">
      <h1>COUCOU depuis app.jsx</h1>
      {games.map((game) => {
        return (
          <div key={games.name}>
            <h2>{game.name}</h2>
            <p>{game.desc}</p>
            <iframe src={game.video} frameborder="0" allowfullscreen></iframe>
            <img src={game.pic} alt="Illustration du jeu de société"/>

          </div>
        );
      })}
    </div>
  );
}

export default App;
