import React from 'react';
import GameCard from './GameCardComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-nav">
        <h1 className="Logo">NBA Scores</h1>
        
        <ul className="">
          <li>
            <a href="#">Scores</a>
          </li>
          <li>
            <a href="#">Leaders</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <GameCard />
    </div>
  );
}

export default App;
