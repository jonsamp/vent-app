import sentiment from '../reducers'
import * as actions from '../actions'

const sentimentInitialState = {
  analysis: {},
  loading: false,
  error: null,
  modalOpen: false
}

describe('sentiment redux', () => {
  describe('actions', () => {
    const expectedActions = [
      'setAnalysis',
      'toggleSubsonsciousModal'
    ]

    expectedActions.forEach((action) => {
      it(`${action} should create action with sentiment namespace`, () => {
        expect(actions[action]().type).toMatch(/sentiment\/.*/)
      })
    })
  })

  describe('Reducers', () => {
    it('setAnalysis should update the analysis', () => {
      const action = actions.setAnalysis({
        feelingOne: 'joy'
      })
      const newState = sentiment(sentimentInitialState, action)

      expect(newState.feelingOne).toEqual('joy')
    })

    it('toggleSubsonsciousModal should toggle the modal property', () => {
      const action = actions.toggleSubsonsciousModal()
      const newState = sentiment(sentimentInitialState, action)

      expect(newState.modalOpen).toEqual(true)
    })
  })
})
