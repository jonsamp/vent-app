import request from 'superagent'

export function getSentimentAnalysis() {
  // const headers = new Headers()
  // headers.append('Authorization', 'Basic ' + btoa('04a5b38f-0cc0-4516-b0cc-badfd8e658c4:zwnMUpdTIL8j'))

  const text = "Between them and the beasts behind me there was little choice, but at least there was a doubt as to the reception these grotesque parodies on humanity would accord me, while there was none as to the fate which awaited me beneath the grinning fangs of my fierce pursuers. And so I raced on toward the trees intending to pass beneath that which held the man-things and take refuge in another farther on; but the wolf-dogs were very close behind me—so close that I had despaired of escaping them, when one of the creatures in the tree above swung down"

  request(`/tone/${text}`)
    .end((err, res) => console.log(err, res))
}
