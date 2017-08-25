import { createStore, combineReducers, applyMiddleware } from 'redux'

import shoesReducer from './reducers/shoes'

export default createStore(shoesReducer)
