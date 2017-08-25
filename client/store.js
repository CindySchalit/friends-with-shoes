import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'

import shoesReducer from './reducers/shoes'

const store = createStore(
  shoesReducer,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
)

export default store
