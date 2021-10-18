import { useDispatch, useSelector } from 'react-redux'
import Buttons from './Components/Buttons'
import { TRootReducer } from './redux/configureStore'
import styled from 'styled-components'
import PokemonView from './Components/PokemonView'
import { useEffect } from 'react'
import { pickRandom } from './redux/ducks/pokemon'
import Saved from './Components/Saved'
import { Divider } from 'antd'

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
`

const Row = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

function App() {
  const radomPokemon = useSelector((state: TRootReducer) => (state.pokemon.random))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(pickRandom())
  }, [dispatch])

  return (
    <Container>
      <Row>
        <div>
          <PokemonView pokemon={radomPokemon} />
        </div>
        <div>
          <Buttons />
        </div>
      </Row>
      <Divider orientation="left">Captured Pokemons</Divider>
      <Row>
        <Saved />
      </Row>
    </Container>
  )
}

export default App
