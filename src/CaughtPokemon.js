import React, {useState} from 'react'

const CaughtPokemon = () => {

   const [caught, setCaught]=useState([]);
   const [pokemonNameInput, setPokemonNameInput]=useState("");
   const date = new Date().toLocaleDateString()

    const catchPokemon = () => {
      if (pokemonNameInput  !== "") {
        setCaught(caught.concat(pokemonNameInput))
        setPokemonNameInput("")
      }
    }

    const handleInputChange = (event) => {
      setPokemonNameInput(event.target.value)
    }

    return (
      <>
        <input 
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
        />
        <button onClick={catchPokemon}> Catch Pokemon </button>
        <p>Caught {caught.length} Pokemon on {date}</p>
        <ul>
          {caught.map((pokemon, i) => {        
            <li key={`pokemon-${i}`}>
              {pokemon}
            </li>
          }

          )}
        </ul>
       </>
      
    )
  }

  export default CaughtPokemon