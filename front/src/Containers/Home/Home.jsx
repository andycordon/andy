//Ici on recupere tout les jeux de société pour commencer
import { useState, useEffect } from 'react';
import Game from '../../Components/Game/Game'
import './Home.css'


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
    <>
    <h1>MES JEUX DE SOCIETE</h1>
      <div className="homes">
        {games.map((game) => {
          return (
            <a href='Affiche la fiche du jeu sur lequel je clique'>
            <div className='home'>
                <h2 className='home-title'>{game.name}</h2>
                <img className='home-pic' src={game.pic} alt="Illustration du jeu de société"/>
            </div>
            </a>
          );
        })}
      </div>
      <Game />
    </>
  );
}

export default App;
