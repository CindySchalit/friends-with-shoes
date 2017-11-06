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
      color: 'Blue',
      image: '../../public/blue-suede.jpg',
    },
    {
      id: 2,
      shoeBrand: 'Pili Pilis Flippie Floppies',
      shoeName: 'The Plos Morning Shuffler',
      gender: `Women's`,
      size: 7.5,
      color: 'Red',
      image: '../../public/red-docs.jpg',
    },
    {
      id: 3,
      shoeBrand: 'Feels Like Wadze',
      shoeName: 'Verrrrrr Nice',
      gender: `Women's`,
      size: 9,
      color: 'Black',
      image: '../../public/winter-boots-black-womens.jpg',
    },
    {
      id: 4,
      shoeBrand: 'Moomoo and Bobashi',
      shoeName: 'Little Shoes for Big Paws',
      gender: `Men's`,
      size: 5,
      color: 'Grey',
      image: '../../public/cats-shoes.jpg',
    },
    {
      id: 5,
      shoeBrand: 'Pili Pili Angeles',
      shoeName: `Never Walk Barefoot in L.A.`,
      gender: `Men's`,
      size: 8,
      color: 'Green',
      image: '../../public/green-baby.jpg',
    },
    {
      id: 6,
      shoeBrand: 'Puma',
      shoeName: 'FanTAStico',
      gender: `Women's`,
      size: 6,
      color: 'Red',
      image: '../../public/red-puma.jpg',
    },
    {
      id: 7,
      shoeBrand: 'Roggers',
      shoeName: 'Rogging it on oooooop',
      gender: `Men's`,
      size: 8,
      color: 'Grey',
      image: '../../public/adidas.jpg',
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
