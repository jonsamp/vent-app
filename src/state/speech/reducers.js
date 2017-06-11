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
  [actions.setSpeechRecognition]: (state, { payload }) => {
    const { speechRecognition } = payload
    return {
      ...state,
      speechRecognition: {
        ...state.speechRecognition,
        ...speechRecognition
      }
    }
  }
}, {
  listening: false,
  speechRecognition: {
    finalTranscript: '',
    interimTranscript: ''
  }
})

export default speech
