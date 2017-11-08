import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'

import shoesReducer from './reducers/shoes'

export const history = createHistory()

export default createStore(
  shoesReducer,
  undefined,
  compose(
     applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        createLogger({ collapsed: true })
      ),
     window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
