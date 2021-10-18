const INCREMENT = 'increment'
const DECREMENT = 'decrement'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

export type TState = {
  count: number
}

type TAction = ReturnType<typeof increment>
  | ReturnType<typeof decrement>

const initialState: TState = {
  count: 0
}

const reducer = (state: TState = initialState, action: TAction) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1}
    case DECREMENT:
      return { ...state, count: state.count - 1}
    default:
      return state
  }
}

export default reducer