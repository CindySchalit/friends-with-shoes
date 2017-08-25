/* action types */
export const GET_SHOES = 'GET_SHOES'

/* action creators */
const getShoes = shoes => {
  return {
    type: GET_SHOES,
    shoes
  }
}

export const boundGetShoes = shoes => dispatch(getShoes(shoes))
