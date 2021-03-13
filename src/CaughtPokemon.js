import React from 'react'

const CaughtPokemon = (props) => {
  return (
    <div>
      <p>Caught {props.count} Pokemon on {props.date}</p>
    </div>
  );
}

export default CaughtPokemon

