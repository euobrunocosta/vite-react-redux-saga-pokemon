export enum Actions {
  PICK_RANDOM = 'pickRandom',
  SET_POKEMON = 'setPokemon',
  SAVE = 'save'
}

export const pickRandom = () => ({
  type: Actions.PICK_RANDOM
})

export const setRandom = (pokemon: TPokemon) => ({
  type: Actions.SET_POKEMON,
  payload: { pokemon }
})

export const save = (pokemon: TPokemon) => ({
  type: Actions.SAVE,
  payload: { pokemon }
})

export type TPokemon = {
  name: string
  types: string[]
  sprites?: {
    back: string
    front: string
  }
}

export type TAction = ReturnType<typeof pickRandom>
  | ReturnType<typeof setRandom>
  | ReturnType<typeof save>

export type TState = {
  random: TPokemon,
  saved: TPokemon[]
}

const initialState: TState = {
  random: {
    name: '',
    types: [],
    sprites: {
      back: '',
      front: ''
    }
  },
  saved: []
}

const reducer = (state: TState = initialState, action: any): TState => {
  switch (action.type) {
    case Actions.SAVE:
      return {
        ...state,
        saved: [...state.saved, action.payload.pokemon as TPokemon]
      }
      
    case Actions.SET_POKEMON:
      return {
        ...state,
        random: action.payload.pokemon
      }

    default: 
      return state
  }
}

export default reducer