import React, {useState} from 'react'

const CaughtPokemon = () => {

   const [caught, setCaught]=useState([]);
   const date = new Date().toLocaleDateString()

    const catchPokemon = () => {
      setCaught(caught.concat("PIKACHU"))
    }
    return (
      <>
        <button onClick={catchPokemon}> Catch Pikachu </button>
        <p>Caught {caught.length} Pokemon on {date}</p>
        <ul>
          {caught.map(pokemon => <li>{pokemon}</li>)}
        </ul>
       </>
      
    )
  }

  export default CaughtPokemon