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
    return {
      ...state,
      spokenText
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
  spokenText: '',
  speechRecognition: {
    finalTranscript: '',
    interimTranscript: '',
    browserSupportsSpeechRecognition: false
  }
})

export default speech
