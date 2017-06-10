import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter/reducers'
import sentiment from './sentiment/reducers'

export default combineReducers({
  router: routerReducer,
  counter,
  sentiment
})
