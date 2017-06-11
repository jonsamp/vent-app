import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'
import Placeholder from '../../images/placeholder.svg'

const propTypes = {
  content: PropTypes.string
}

class SpeechArea extends Component {

  componentWillReceiveProps(nextProps) {
    this.props.setTranscriptContent(nextProps.transcript)
  }

  render() {
    const { transcript, browserSupportsSpeechRecognition, setTranscriptContent, spokenText } = this.props

    return (
      <p className="text-area">
        {spokenText}
      </p>
    )
  }
}

SpeechArea.propTypes = propTypes

export default SpeechRecognition(SpeechArea)
