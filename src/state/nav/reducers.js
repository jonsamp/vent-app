import { handleActions } from 'redux-actions'
import * as actions from './actions'

const defaultState = {
  backgroundUrl: 'tonal',
  theme: 'light'
}

const nav = handleActions({
  [actions.backgroundSelected]: (state, { payload: { backgroundUrl } }) => {
    return {
      ...state,
      backgroundUrl
    }
  },
  [actions.themeSelected]: (state, { payload: { theme } }) => {
    return {
      ...state,
      theme
    }
  }
}, defaultState)

export default nav
