import { useState } from 'react';

import { Game } from './pages/Game';
import { Home } from './pages/Home';

import './styles/App.css';

export function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  function handleGameStart() {
    setIsGameStarted(true);
  }

  return (
    <div className="App">
      {isGameStarted ? <Game /> : <Home startGame={handleGameStart} />}
    </div>
  );
}
