import { GET_SHOES } from '../actions'

const initialShoesState = {
  allShoes: ['shoe1', 'shoe2', 'shoe3'],
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
