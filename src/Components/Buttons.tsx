import { Row, Col, Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pickRandom, save } from '../redux/ducks/pokemon'
import { FiRefreshCcw } from 'react-icons/fi'
import { CgPokemon } from 'react-icons/cg'
import { TRootReducer } from '../redux/configureStore'
import styled from 'styled-components'

export enum Variant {
  REFRESH,
  SAVE,
  REMOVE
}

export const getColorByVariant = (variant: Variant) => {
  switch (variant) {
    case Variant.REFRESH:
      return '#fa8c16'
    case Variant.SAVE:
      return '#1890ff'
    case Variant.REMOVE:
      return '#f5222d'
    default:
      return '#8c8c8c'
  }
}

type TIconButtonProps = {
  variant: Variant
}

const IconButton = styled.button<TIconButtonProps>`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  svg {
    color: ${p => getColorByVariant(p.variant)};
    width: 100px;
    height: 100px;
  }
`

const Buttons = () => {

  const radomPokemon = useSelector((state: TRootReducer) => (state.pokemon.random))

  const dispatch = useDispatch()

  const onClickGetRandomPokemon = () => {
    dispatch(pickRandom())
  }

  const onClickSavePokemon = () => {
    dispatch(save(radomPokemon))
  }

  return (
    <>
      <IconButton variant={Variant.REFRESH} onClick={onClickGetRandomPokemon}>
        <FiRefreshCcw  size={100} />
      </IconButton>
      <IconButton variant={Variant.SAVE} onClick={onClickSavePokemon}>
        <CgPokemon />
      </IconButton>
    </>
  )
}

export default Buttons