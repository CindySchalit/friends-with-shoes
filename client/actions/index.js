/* action types */
export const GET_SHOES = 'GET_SHOES'

/* action creators */
export const getShoes = shoes => {
  return {
    type: GET_SHOES,
    shoes
  }
}
