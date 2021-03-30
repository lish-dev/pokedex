import React, { useState } from "react";

const CaughtPokemon = (props) => {
 // const name = ["mixture", " of", "names"];
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState([]);

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value)
    console.log(event.target.value)
  }
    

  function incrementCount() {
    if(pokemonNameInput) {
    setCaught(caught.concat(pokemonNameInput))
    };
  };

  return (
    <div>
      <p>
        Caught {caught.length} {props.count} Pokemon on {props.date}
      </p>
      <input type="text" value={pokemonNameInput} onChange={handleInputChange}/>
  
      <button onClick={incrementCount}> Click This</button>
      <ul>
      {caught.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
