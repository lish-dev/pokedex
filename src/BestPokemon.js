import React from 'react'

const BestPokemon = (props) => {  
  return (
    <div>
      <p>My Favourite Pokemon is {props.favourite}</p>
      <ul className="ul">
        {props.abilities.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
    </div>
  );
}

export default BestPokemon
