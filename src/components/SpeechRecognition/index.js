import React, { Component } from 'react'
import { debounce } from 'core-decorators'

export default function SpeechRecognition(WrappedComponent) {
  return class SpeechRecognitionContainer extends Component {
    constructor(props) {
      super(props)

      this.state = {
        recognition: null
      }
    }

    componentWillMount() {
      const { setSpeechRecognition } = this.props
      const root = typeof window !== 'undefined' ? window : this
      const BrowserSpeechRecognition = root.SpeechRecognition ||
                                       root.webkitSpeechRecognition ||
                                       root.mozSpeechRecognition ||
                                       root.msSpeechRecognition ||
                                       root.oSpeechRecognition
      if (BrowserSpeechRecognition) {
        setSpeechRecognition({ browserSupportsSpeechRecognition: true })
        const recognition = new BrowserSpeechRecognition()
        recognition.continuous = true
        recognition.interimResults = true
        recognition.onresult = this.updateTranscript.bind(this)
        recognition.onend = this.stopRecognition.bind(this)
        recognition.start()
        this.setState({ recognition })
      } else {
        setSpeechRecognition({ browserSupportsSpeechRecognition: false })
      }
    }

    componentWillUnmount() {
      if (this.state.recognition) {
        this.state.recognition.abort()
      }
    }

    startRecognition = () => {
      if (this.state.recognition) {
        console.log('start!');
        this.state.recognition.start()
      }
    }

    stopRecognition = () => {
      const { stopListening } = this.props
      if (this.state.recognition) {
        stopListening()
        this.state.recognition.abort()
      }
    }

    updateTranscript(event) {
      const { setSpeechRecognition, setTextContent } = this.props
      const { finalTranscript, interimTranscript } = this.getNewTranscript(event)

      setTextContent(finalTranscript.concat(interimTranscript))

      setSpeechRecognition({ finalTranscript, interimTranscript })
    }

    getNewTranscript(event) {
      const { speechRecognition } = this.props
      let finalTranscript = speechRecognition.finalTranscript
      let interimTranscript = ''
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript = this.concatTranscripts(finalTranscript, event.results[i][0].transcript)
        } else {
          interimTranscript = this.concatTranscripts(interimTranscript, event.results[i][0].transcript)
        }
      }
      return { finalTranscript, interimTranscript }
    }

    concatTranscripts(...transcriptParts) {
      return transcriptParts.map(t => t.trim()).join(' ').trim()
    }

    render() {
      const { speechRecognition } = this.props
      const transcript = this.concatTranscripts(speechRecognition.finalTranscript, speechRecognition.interimTranscript)

      return (
        <WrappedComponent
          transcript={transcript}
          stopRecognition={this.stopRecognition}
          startRecognition={this.startRecognition}
          {...this.state}
          {...this.props} />
      )
    }
  }
}
