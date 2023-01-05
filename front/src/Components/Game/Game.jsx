import React from 'react'
import { useState, useEffect } from 'react';
import './Game.css'

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
        {games.map((game) => {
          return (
            <div className='game'>
              <div className='bloc-1'>
                <img className='game-pic' src={game.pic} alt="Illustration du jeu de société"/>
              </div>
              <div className='bloc-2'>
                <h1 className='game-title'>{game.name}</h1>
                <p className='game-sub'>{game.sub}</p>
                <div className='game-cond'>
                  <div className='cond'>
                    <i class="fa-regular fa-user"></i>
                    <p className='game-players'>: {game.players}</p>
                  </div>
                  <div className='cond'>
                    <i class="fa-solid fa-hourglass"></i>
                    <p className='game-time'>: {game.time}'</p>
                  </div>
                  <div className='cond'>
                    <i class="fa-solid fa-arrow-turn-up"></i>
                    <p className='game-age'>: {game.age}</p>
                  </div>                
                </div>
              </div>
              <div className='bloc-3'>
                <p className='game-desc'>{game.desc}</p>
              </div>
              <div className='bloc-4'>
                <iframe className='game-video' src={game.video} frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default App;