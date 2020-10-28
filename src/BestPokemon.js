import React from 'react'

const BestPokemon = (props) => {
  return (
      <div>
        <p>My favourite pokemon is Santa Claus. </p>
        <p>Abilities:</p>
        <ul>{props.abilities.map((a, i) => <li key={i}>{a}</li>)}</ul>
      </div>
  )
}

export default BestPokemon