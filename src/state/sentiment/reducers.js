import { handleActions } from 'redux-actions'
import * as actions from './actions'

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
}, {
  analysis: {},
  loading: false,
  error: null,
  modalOpen: false
})

export default sentiment
