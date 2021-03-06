import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import nav from './nav/reducers'
import text from './text/reducers'
import sentiment from './sentiment/reducers'

export default combineReducers({
  router: routerReducer,
  nav,
  text,
  sentiment
})
