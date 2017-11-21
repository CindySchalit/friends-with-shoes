import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

/* action types */
export const GET_SHOES = 'GET_SHOES'
export const FIND_SHOE = 'FIND_SHOE'

/* action creators */
const getShoes = shoes => {
  return {
    type: GET_SHOES,
    shoes
  }
}

const findShoe = matchingShoe => {
  return {
    type: FIND_SHOE,
    matchingShoe
  }
}

/* async action creators */
export const getShoesThunk = () =>
  dispatch =>
    axios.get(`${API_URL}/shoes`)
      .then(res => {
        console.log('got shoes from db')
        dispatch(getShoes(res.data))
      })
      .catch(error => console.log(error))

export const findShoeThunk = shoe =>
  dispatch =>
    axios.post(`${API_URL}/shoes/find`, shoe)
      .then(res => {
        dispatch(findShoe(res.data))
      })
      .catch(error => console.log(error))
