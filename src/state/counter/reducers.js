import { handleActions } from 'redux-actions'
import * as actions from './actions'

const counter = handleActions({
  [actions.increment]: (state, { payload }) => {
    return {
      ...state,
      count: state.count + 1,
    }
  },
  [actions.decrement]: (state, { payload }) => {
    return {
      ...state,
      count: state.count - 1,
    }
  }
}, {
  count: 0
})

export default counter
