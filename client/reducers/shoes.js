import { GET_SHOES, FIND_SHOE } from '../actions'

const initialShoesState = {
  shoes: [],
  matchingShoe: {}
}

const shoesReducer = (state=initialShoesState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_SHOES:
      newState.shoes = action.shoes
      break;

    case FIND_SHOE:
      newState.matchingShoe = action.matchingShoe
      break;

    default:
      return state
  }

  return newState
}

export default shoesReducer
