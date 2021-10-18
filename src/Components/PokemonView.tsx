import React from 'react'
import { Card } from 'antd'
import { TPokemon } from 'redux/ducks/pokemon'
import styled from 'styled-components'
import { FaRegTrashAlt } from  'react-icons/fa'
import { getColorByVariant, Variant } from './Buttons'

const Container = styled.div`
  width: 250px;
`

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  svg {
    color: ${getColorByVariant(Variant.REMOVE)};
    width: 25px;
    height: 25px;
  }
`

type TProps = {
  pokemon: TPokemon
  canBeRemoved?: boolean
}

const PokemonView = (props: TProps) => {
  const { pokemon, canBeRemoved = false } = props

  return (
    <Container>
      <Card
        title={pokemon.name.toUpperCase()}
        extra={canBeRemoved && <IconButton><FaRegTrashAlt /></IconButton>}
      >
        <p>
          <img src={pokemon.sprites?.front} alt={`${pokemon.name} Front`} />
          <img src={pokemon.sprites?.back} alt={`${pokemon.name} Back`} />
        </p>
        <p>
          <strong>Types: </strong>
          {pokemon.types.map((type, index) => (
            <span key={type}>{`${type}${index < (pokemon.types.length - 1) ? ', ' : ''}`}</span>
          ))}
        </p>
      </Card>
    </Container>
  )
}

export default PokemonView