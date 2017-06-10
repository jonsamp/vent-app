import { handleActions } from 'redux-actions'
import * as actions from './actions'

const sentiment = handleActions({
  [actions.setAnalysis]: (state, { payload }) => {
    const { analysis } = payload
    return {
      ...state,
      analysis
    }
  }
}, {
  analysis: {}
})

export default sentiment
