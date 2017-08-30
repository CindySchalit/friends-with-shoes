import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

/* action types */
export const GET_SHOES = 'GET_SHOES'

/* action creators */
const getShoes = shoes => {
  return {
    type: GET_SHOES,
    shoes
  }
}

const boundGetShoes = shoes => dispatch(getShoes(shoes))

/* async action creators */
export const getShoesThunk = () =>
  dispatch =>
    axios.get(`${API_URL}/shoes`)
      .then(res => boundGetShoes(res.data))
      .catch(error => console.log(error))
