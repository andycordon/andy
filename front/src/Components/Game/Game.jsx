import React from 'react';
import { useState, useEffect } from 'react';
import './Game.css';
import { useParams } from "react-router-dom";

function App() {
  const [game, setGames] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getGamesFromApi = async () => {
      const gameIdNumber = Number(id);

      const response = await fetch("http://localhost:3000/games/" + gameIdNumber);
      const foundGame = await response.json();
      setGames(foundGame);
    };

    getGamesFromApi();
  }, []);

  return (
    <div className="games">
      <div className='game'>
        <div className='bloc-1'>
          <img className='game-pic' src={game.pic} alt="Illustration du jeu de société" />
        </div>
        <div className='bloc-2'>
          <h1 className='game-title'>{game.name}</h1>
          <p className='game-sub'>{game.sub}</p>
          <div className='game-cond'>
            <div className='cond'>
              <i className="fa-regular fa-user"></i>
              <p className='game-players'>: {game.players}</p>
            </div>
            <div className='cond'>
              <i className="fa-solid fa-hourglass"></i>
              <p className='game-time'>: {game.time}'</p>
            </div>
            <div className='cond'>
              <i className="fa-solid fa-arrow-turn-up"></i>
              <p className='game-age'>: {game.age}</p>
            </div>
          </div>
        </div>
        <div className='bloc-3'>
          <p className='game-desc'>{game.desc}</p>
        </div>
        <div className='bloc-4'>
          <iframe className="game-video" src={game.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;