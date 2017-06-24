import { createAction } from 'redux-actions'
import request from 'superagent'

export const setAnalysis = createAction('sentiment/SET_ANALYSIS')
export const toggleSubsonsciousModal = createAction('sentiment/TOGGLE_SUBCONSCIOUS_MODAL')

export function getSentimentAnalysis({ content }) {
  return (dispatch) => {
    dispatch(setAnalysis({ loading: true }))
    request(`/tone/${content}`)
      .end((error, response) => {
        if (error) {
          console.log('SERVER ERROR: ', error)
        }
        
        dispatch(setAnalysis({
          analysis: response.body,
          error: error,
          loading: false
        }))
        dispatch(toggleSubsonsciousModal())
      })
  }
}
