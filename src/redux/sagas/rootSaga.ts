import { takeLatest } from 'redux-saga/effects'
import { Actions } from '../ducks/pokemon'
import { getRandomPokemon } from './pokemon'

export function* watcherSaga() {
  yield takeLatest(Actions.PICK_RANDOM, getRandomPokemon)
}