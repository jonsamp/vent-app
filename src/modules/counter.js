export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const SET_ANALYSIS = 'counter/SET_ANALYSIS'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  analysis: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case SET_ANALYSIS:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing,
        analysis: action.payload.analysis
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED,
    })

    const text = 'Between them and the beasts behind me there was little choice, but at least there was a doubt as to the reception these grotesque parodies on humanity would accord me, while there was none as to the fate which awaited me beneath the grinning fangs of my fierce pursuers. And so I raced on toward the trees intending to pass beneath that which held the man-things and take refuge in another farther on; but the wolf-dogs were very close behind me—so close that I had despaired of escaping them, when one of the creatures in the tree above swung down'

    return fetch(`https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=${text}`, { credentials: 'include' })
        .then(response => response.json())
        .then(json => {
          console.log(json)
          dispatch({
            type: SET_ANALYSIS,
            payload: {
              analysis: json
            }
          })
        })
        .catch(error => console.log(error))
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}
