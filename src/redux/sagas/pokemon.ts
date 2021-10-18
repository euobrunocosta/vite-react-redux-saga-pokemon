import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { setRandom, TAction, TPokemon } from '../ducks/pokemon'

const requestPokemon = (id: number) => (
  axios.request({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${id}`

  })
)

const generateRandomPokemonId = () => {
  const min = 0;
  const max = 250;
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function* getRandomPokemon(action: TAction): Generator<any, any, any> {
  const randomPokemonId = generateRandomPokemonId()
  try {
    const { data } = yield call(requestPokemon, randomPokemonId)
    const types = data.types.map((type: { type: { name: string } }) => type.type.name)
    const pokemon: TPokemon = {
      name: data.name,
      sprites: {
        back: data.sprites.back_default,
        front: data.sprites.front_default
      },
      types
    }
    yield put(setRandom(pokemon))
  } catch (error) {
    console.log(error)
  }
}