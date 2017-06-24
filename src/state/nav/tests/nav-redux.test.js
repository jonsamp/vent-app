import text from '../reducers'
import * as actions from '../actions'

const navInitialState = {
  backgroundUrl: '',
  theme: ''
}

describe('text redux', () => {
  describe('actions', () => {
    const expectedActions = [
      'backgroundSelected',
      'themeSelected'
    ]

    expectedActions.forEach((action) => {
      it(`${action} should create action with nav namespace`, () => {
        expect(actions[action]().type).toMatch(/nav\/.*/)
      })
    })
  })

  describe('Reducers', () => {
    it('backgroundSelected should update the background url', () => {
      const action = actions.backgroundSelected({
        backgroundUrl: 'https://example.com/test.jpg'
      })
      const newState = text(navInitialState, action)

      expect(newState.backgroundUrl).toEqual('https://example.com/test.jpg')
    })

    it('themeSelected should update the theme', () => {
      const action = actions.themeSelected({
        theme: 'dark'
      })
      const newState = text(navInitialState, action)

      expect(newState.theme).toEqual('dark')
    })
  })
})
