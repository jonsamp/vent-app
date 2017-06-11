import { handleActions } from 'redux-actions'
import * as actions from './actions'

const sentiment = handleActions({
  [actions.setAnalysis]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    }
  }
}, {
  analysis: {},
  loading: false,
  error: null
})

export default sentiment
