import { handleActions } from 'redux-actions'
import * as actions from './actions'

const defaultState = {
  analysis: {},
  loading: false,
  error: null,
  modalOpen: false
}

const sentiment = handleActions({
  [actions.setAnalysis]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    }
  },
  [actions.toggleSubsonsciousModal]: (state) => {
    return {
      ...state,
      modalOpen: !state.modalOpen
    }
  }
}, defaultState)

export default sentiment
