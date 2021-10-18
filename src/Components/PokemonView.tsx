import React from 'react'
import { Card } from 'antd'
import { remove, TPokemon } from '../redux/ducks/pokemon'
import styled from 'styled-components'
import { FaRegTrashAlt } from  'react-icons/fa'
import { getColorByVariant, Variant } from './Buttons'
import { useDispatch } from 'react-redux'

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
  index?: number
  canBeRemoved?: boolean
}

const PokemonView = (props: TProps) => {
  const { index, pokemon, canBeRemoved = false } = props

  const dispatch = useDispatch()

  const onClickRemove = () => {
    if (index !== undefined) dispatch(remove(index))
  }

  return (
    <Container>
      <Card
        title={pokemon.name.toUpperCase()}
        extra={canBeRemoved && <IconButton onClick={onClickRemove}><FaRegTrashAlt /></IconButton>}
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