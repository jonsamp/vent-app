import { createAction } from 'redux-actions'

export const startListening = createAction('speech/START_LISTENING')
export const stopListening = createAction('speech/STOP_LISTENING')
export const setSpeechRecognition = createAction('speech/SET_SPEECH_RECOGNITION')
