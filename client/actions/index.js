/* action types */
const GET_SHOES = 'GET_SHOES'

/* action creators */
const getShoes = shoes => {
  return {
    type: GET_SHOES,
    shoes
  }
}
