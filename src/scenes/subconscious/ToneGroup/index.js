import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
  tones: PropTypes.array,
  label: PropTypes.string,
  extraLabelWidth: PropTypes.bool,
  getSentenceMostEmotion: PropTypes.func
}

function ToneGroup(props) {
  const { tones, label, extraLabelWidth, getSentenceMostEmotion, sentenceAnalysis = false } = props

  const getPercent = (value) => {
    return ((value).toFixed(2) * 100) + '%'
  }

  const toneElements = tones.map((tone) => {
    const toneClassName = cx('bar', 'overlay', tone.tone_id)
    const labelClassName = cx('tone-title', {
      'extra-label-width': extraLabelWidth
    })

    return (
      <div className="tone" key={tone.tone_name + tone.tone_id}>
        <div className={labelClassName}>
          <p>{tone.tone_name.toLowerCase()} ({Math.round(tone.score * 100)}%)</p>
        </div>
        <div className="overlayed-bars">
          <div className={toneClassName} style={{ width: `${getPercent(tone.score)}`}} />
          <div className="bar underlay" />
          {
            sentenceAnalysis && getSentenceMostEmotion(tone.tone_id)[0] ?
              <p className="setence-emotion">
                "{getSentenceMostEmotion(tone.tone_id)[0].text}"
              </p> :
              null
          }
        </div>
      </div>
    )
  })

  return (
    <div className="tone-group">
      <h3>{label}</h3>
      {toneElements}
    </div>
  )
}

ToneGroup.propTypes = propTypes

export default ToneGroup
