import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
)

export default store
