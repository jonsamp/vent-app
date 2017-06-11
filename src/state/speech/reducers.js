import { handleActions } from 'redux-actions'
import * as actions from './actions'

const speech = handleActions({
  [actions.startListening]: (state) => {
    return {
      ...state,
      listening: true
    }
  },
  [actions.stopListening]: (state) => {
    return {
      ...state,
      listening: false
    }
  },
  [actions.setTranscriptContent]: (state, { payload }) => {
    const { spokenText } = payload
    const wordCount = spokenText.trim() ? spokenText.trim().split(' ').length : 0
    return {
      ...state,
      spokenText,
      wordCount
    }
  }
}, {
  listening: false,
  spokenText: '',
  wordCount: 0
})

export default speech
