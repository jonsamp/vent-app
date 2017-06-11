import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../components/Button'
import Placeholder from '../../images/placeholder.svg'
import SpeechArea from '../../components/SpeechArea'

const propTypes = {}

function Talk(props) {

  const { stopListening, startListening, listening, setTextContent, setTranscriptContent, content, spokenText } = props

  const toggleListening = () => {
    if (listening) {
      return stopListening()
    }

    return startListening()
  }

  const listeningButtonClassName = cx('start-listening', {
    'currently-listening': listening
  })

  return (
    <div className="displayFlexCenter">
      <Button active className={listeningButtonClassName} onClick={toggleListening}>
        {listening ? 'listening...' : 'start venting'}
      </Button>
      {listening || content ?
        <SpeechArea {...props} /> :
        <img src={Placeholder} alt="" style={{ maxWidth: '40rem', width: '100%'}} />
      }

    </div>
  )
}

Talk.propTypes = propTypes

export default Talk
