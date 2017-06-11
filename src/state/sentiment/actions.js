import { createAction } from 'redux-actions'
import request from 'superagent'

export const setAnalysis = createAction('sentiment/SET_ANALYSIS')

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
      })
  }
}
