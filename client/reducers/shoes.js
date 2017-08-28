import { GET_SHOES } from '../actions'

const initialShoesState = {
  shoes: [
    {
      shoeBrand: 'Plos Feet',
      shoeName: 'Assymetric Saurus Raurus',
      gender: `Men's`,
      size: 12,
      color: 'Black',
      image: 'https://pixabay.com/en/chucks-converse-shoes-footwear-153310/',
    }
    // {
    //   shoeBrand: 'Pili Pilis Flippie Floppies',
    //   shoeName: ,
    //   gender: ,
    //   size: ,
    //   color: ,
    //   image: ,
    // },
    // {
    //   shoeBrand: 'Feels Like Wadze',
    //   shoeName: ,
    //   gender: ,
    //   size: ,
    //   color: ,
    //   image: ,
    // }
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
