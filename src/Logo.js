import React from 'react'

const Logo = (props) => {
    return (
      <div>
        <header className="App-header">
          <h1>Welcome to {props.appName}</h1>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
            alt="drawing of pokemon"
          />
        </header>
      </div>
    );
}

export default Logo;
