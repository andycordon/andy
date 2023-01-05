//Ici on recupere tout les jeux de société pour commencer
import { useState, useEffect } from 'react';
import Game from '../../Components/Game/Game'


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
      <Game />
    </>
  );
}

export default App;
