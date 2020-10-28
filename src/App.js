import React from 'react'
import Logo from './Logo'
import BestPokemon from './BestPokemon'
import CaughtPokemon from './CaughtPokemon'

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const logWhenClicked = () => {
    console.log("Button was clicked!");
  }
  return (
      <div>
        <Logo handleClick={logWhenClicked} appName="Pokedex"/>
        <BestPokemon abilities={abilities}/>
        <CaughtPokemon date={new Date().toLocaleDateString()}/>
      </div>
  );
};
export default App;