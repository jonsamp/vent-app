import { createAction } from 'redux-actions'

export const setAnalysis = createAction('sentiment/SET_ANALYSIS')
export const increment = createAction('INCREMENT')
export const decrement = createAction('counter/DECREMENT')

export function getSentimentAnalysis() {
  const text = 'Between them and the beasts behind me there was little choice, but at least there was a doubt as to the reception these grotesque parodies on humanity would accord me, while there was none as to the fate which awaited me beneath the grinning fangs of my fierce pursuers. And so I raced on toward the trees intending to pass beneath that which held the man-things and take refuge in another farther on; but the wolf-dogs were very close behind me—so close that I had despaired of escaping them, when one of the creatures in the tree above swung down'

  return (dispatch) => {
    fetch(`https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=${text}`, { credentials: 'include' })
      .then(response => response.json())
      .then(json => dispatch(setAnalysis({ analysis: json })))
      .catch(error => console.log(error))
  }
}
