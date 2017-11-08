import { GET_SHOES } from '../actions'

const initialShoesState = {
  shoes: [],
}

const shoesReducer = (state=initialShoesState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_SHOES:
      newState.shoes = action.shoes
      break;

    default:
      return state
  }

  return newState
}

export default shoesReducer
