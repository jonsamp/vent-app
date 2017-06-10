import { handleActions } from 'redux-actions'
import * as actions from './actions'

const text = handleActions({
  [actions.setTextContent]: (state, { payload }) => {
    const { content } = payload
    const wordCount = content.trim() ? content.trim().split(' ').length : 0
    return {
      content,
      wordCount
    }
  }
}, {
  content: '',
  wordCount: 0
})

export default text
