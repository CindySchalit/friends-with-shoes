import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'

import shoesReducer from './reducers/shoes'

const reducer = combineReducers({
  shoesReducer,
  routing: routerReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
)

export default store
