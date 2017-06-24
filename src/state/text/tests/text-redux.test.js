import text from '../reducers'
import * as actions from '../actions'

const textInitialState = {
  content: '',
  wordCount: 0
}

describe('text redux', () => {
  describe('actions', () => {
    const expectedActions = [
      'setTextContent'
    ]

    expectedActions.forEach((action) => {
      it(`${action} should create action with text namespace`, () => {
        expect(actions[action]().type).toMatch(/text\/.*/)
      })
    })
  })

  describe('Reducers', () => {
    it('setTextContent should update the content and the word count', () => {
      const action = actions.setTextContent({
        content: 'there is only one thing we say to death: not today'
      })
      const newState = text(textInitialState, action)

      expect(newState.content).toEqual('there is only one thing we say to death: not today')
      expect(newState.wordCount).toEqual(11)
    })
  })
})
