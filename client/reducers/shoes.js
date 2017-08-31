import { GET_SHOES } from '../actions'

// const initialShoesState = {
//   shoes: [],
// }

const initialShoesState = {
  shoes: [
    {
      id: 1,
      shoeBrand: 'Plos Feet',
      shoeName: 'Assymetric Saurus Raurus',
      gender: `Men's`,
      size: 12,
      color: 'Black',
      image: '../../public/chucks.png',
    },
    {
      id: 2,
      shoeBrand: 'Pili Pilis Flippie Floppies',
      shoeName: 'The Plos Morning Shuffler',
      gender: `Women's`,
      size: 7.5,
      color: 'Grey',
      image: '../../public/adidas.jpg',
    },
    {
      id: 3,
      shoeBrand: 'Feels Like Wadze',
      shoeName: 'Verrrrrr Nice',
      gender: `Women's`,
      size: 9,
      color: 'Brown',
      image: '../../public/brown-boots.jpg',
    },
    {
      id: 4,
      shoeBrand: 'Moomoo and Bobashi',
      shoeName: 'Little Shoes for Big Paws',
      gender: `Boy Gatitos`,
      size: 5,
      color: 'Fuzzy',
      image: '../../public/moomooBashi.jpg',
    },
    {
      id: 5,
      shoeBrand: 'Pili Pili Angeles',
      shoeName: `Never Walk Barefoot in L.A.`,
      gender: `Men's`,
      size: 8,
      color: 'Gray',
      image: '../../public/beachShoe.jpg',
    }
  ]
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
