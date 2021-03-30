import React from "react";
import "./App.css";
import Logo from './Logo';
import BestPokemon from './BestPokemon'
import CaughtPokemon from './CaughtPokemon';
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";




const App = () => {
  
  const logOnClick =()=> {
    
  }

  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div className="App">
      <Logo handleClick={logOnClick} appName="Lisha's Pokedex" />
      <BestPokemon favourite="Squirtle" abilities={abilities} />
      <CaughtPokemon count={10} date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector/>
      <PokemonCity/>
      
    </div>
  );
};

export default App;

