import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import pokemonReducer, { TState as TPokemonState } from './ducks/pokemon'
import { watcherSaga } from './sagas/rootSaga'

export type TRootReducer = {
  pokemon: TPokemonState
}

const reducer = combineReducers({
  pokemon: pokemonReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store