import { handleActions } from 'redux-actions'
import * as actions from './actions'

const nav = handleActions({
  [actions.selectTalk]: (state, { payload }) => {
    return {
      talk: true,
      write: false
    }
  },
  [actions.selectWrite]: (state, { payload }) => {
    return {
      talk: false,
      write: true
    }
  }
}, {
  talk: false,
  write: true
})

export default nav
