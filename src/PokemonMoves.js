import React, {useState, useEffect} from "react";

function PokemonMoves(props) {
    const [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}`)
        .then(response => response.json())
        .then(pokemonData => {
            setPokemonData(pokemonData)
        })
    }, 
    [props.pokemonId]
    ) 


    return pokemonData != null 
    ? <div>
    <p>{pokemonData.name}'s moves:</p>
    <ul>
    {pokemonData.moves.map((move, index) => {
        return <li key={index}>{move.move.name}</li>;
    })}
    </ul>
    </div>
    : <p>NOTHING   </p>
    
}

export default PokemonMoves;
