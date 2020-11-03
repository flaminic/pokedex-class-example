import React from 'react'
import Logo from './Logo'
import BestPokemon from './BestPokemon'
import CaughtPokemon from './CaughtPokemon'
import PokemonMovesSelector from './PokemonMovesSelector'
import PokemonCity from './PokemonCity'

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const logWhenClicked = () => {
    console.log("Button was clicked!");
  }
  return (
      <div>
        {/* <Logo handleClick={logWhenClicked} appName="Pokedex"/> */}
        <PokemonMovesSelector/>
        <BestPokemon abilities={abilities}/>
        <CaughtPokemon date={new Date().toLocaleDateString()}/>
        <PokemonCity />
      </div>
  );
};
export default App;