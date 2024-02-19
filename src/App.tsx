import React from 'react';
import './App.css';
import PokemonStats from './components/PokemonStats';
import PokemonGrid from './components/PokemonGrid';

function App() {
  return (
    <div className="App">
      <PokemonStats />
      <PokemonGrid />
    </div>
  );
}

export default App;
