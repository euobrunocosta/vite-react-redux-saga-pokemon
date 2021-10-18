import React from 'react'
import { useSelector } from 'react-redux'
import { TRootReducer } from '../redux/configureStore'
import styled from 'styled-components'
import PokemonView from './PokemonView'

const Container = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`

const Saved = () => {
  const savedPokemons = useSelector((state: TRootReducer) => (state.pokemon.saved))

  return (
    <Container>
      {savedPokemons.map((pokemon, index) => (
        <PokemonView
          key={`${pokemon.name}${index}`}
          index={index}
          pokemon={pokemon}
          canBeRemoved
        />
      ))}
    </Container>
  )
}

export default Saved