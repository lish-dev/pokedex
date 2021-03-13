import React from "react";
import "./App.css";
import Logo from './Logo';
import BestPokemon from './BestPokemon'
import CaughtPokemon from './CaughtPokemon';

const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div className="App">
      <Logo appName="Lisha's Pokedex" />
      <BestPokemon favourite="Squirtle" abilities={abilities} />
      <CaughtPokemon count={10} date={new Date().toLocaleDateString()} />
    </div>
  );
};

export default App;

