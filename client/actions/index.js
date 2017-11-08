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

/* async action creators */
export const getShoesThunk = () =>
  dispatch =>
    axios.get(`${API_URL}/shoes`)
      .then(res => {
        console.log('got shoes from db')
        dispatch(getShoes(res.data))
      })
      .catch(error => console.log(error))
