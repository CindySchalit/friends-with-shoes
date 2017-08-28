import { GET_SHOES } from '../actions'

const initialShoesState = {
  shoes: [
    {
      id: 1,
      shoeBrand: 'Plos Feet',
      shoeName: 'Assymetric Saurus Raurus',
      gender: `Men's`,
      size: 12,
      color: 'Black',
      image: 'https://pixabay.com/en/chucks-converse-shoes-footwear-153310/',
    },
    {
      id: 2,
      shoeBrand: 'Pili Pilis Flippie Floppies',
      shoeName: 'The Plos Morning Shuffler',
      gender: `Women's`,
      size: 7.5,
      color: 'White',
      image: 'https://pixabay.com/en/running-shoe-shoe-asics-321199/',
    },
    {
      id: 3,
      shoeBrand: 'Feels Like Wadze',
      shoeName: 'Verrrrrr Nice',
      gender: `Women's`,
      size: 9,
      color: 'Brown',
      image: 'https://pixabay.com/en/shoes-desert-only-stranger-1743929/',
    }
  ],
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
