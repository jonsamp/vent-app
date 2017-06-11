import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpeechRecognition from '../SpeechRecognition'
import Placeholder from '../../images/placeholder.svg'

const propTypes = {
  content: PropTypes.string
}

class SpeechArea extends Component {

  componentWillReceiveProps(nextProps) {
    const { listening } = this.props
    this.props.setTranscriptContent(nextProps.transcript)
    if (!listening && nextProps.listening) {
      nextProps.startRecognition()
    }

    if (!nextProps.listening) {
      nextProps.stopRecognition()
    }
  }

  render() {
    const { transcript, browserSupportsSpeechRecognition, setTranscriptContent, content, listening, startRecognition, stopRecognition } = this.props

    return (
      <p className="text-area speech-area">
        {content}
      </p>
    )
  }
}

SpeechArea.propTypes = propTypes

export default SpeechRecognition(SpeechArea)
