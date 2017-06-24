import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import Write from '../write'
import SubConscious from '../subconscious'
import { backgroundSelected, themeSelected } from '../../state/nav/actions'
import { setTextContent } from '../../state/text/actions'
import { getSentimentAnalysis, toggleSubsonsciousModal } from '../../state/sentiment/actions'

const mapStateToProps = (state) => {
  return {
    backgroundUrl: state.nav.backgroundUrl,
    theme: state.nav.theme,
    content: state.text.content,
    wordCount: state.text.wordCount,
    listening: state.speech.listening,
    spokenText: state.speech.spokenText,
    sentiment: state.sentiment,
    speechRecognition: state.speech.speechRecognition
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBackgroundSelected: backgroundUrl => dispatch(backgroundSelected({ backgroundUrl })),
    onThemeSelected: theme => dispatch(themeSelected({ theme })),
    setTextContent: content => dispatch(setTextContent({ content })),
    getSentimentAnalysis: content => dispatch(getSentimentAnalysis({ content })),
    toggleSubsonsciousModal: () => dispatch(toggleSubsonsciousModal()),
  }
}

const propTypes = {
  backgroundUrl: PropTypes.string,
  theme: PropTypes.string,
  wordCount: PropTypes.number,
  onThemeSelected: PropTypes.func,
  onBackgroundSelected: PropTypes.func
}

const App = (props) => {
    const appClassName = cx('app', props.backgroundUrl)

    const setTheme = (e) => {
      props.onThemeSelected(e.target.name)
    }

    const setBackground = (e) => {
      props.onBackgroundSelected(e.target.name)
    }

    const renderThemeButtons = ['dark', 'light'].map((theme) => {
      const themeClassName = cx('theme-btn', theme, {
        'active': theme === props.theme
      })

      return (
        <button
          className={themeClassName}
          onClick={setTheme}
          name={theme}
          >
        </button>
      )
    })

    const renderBackgroundButtons = ['tonal', 'winter'].map((background) => {
      const buttonClassName = cx('background-btn', background, {
        'active': background === props.backgroundUrl
      })

      return (
        <button
          className={buttonClassName}
          onClick={setBackground}
          name={background}
          >
        </button>
      )
    })

    return (
      <div className={appClassName}>
        <header className="nav displayFlexHorizontal">
          <h2>vent</h2>
          <div>
            {renderThemeButtons}
            {renderBackgroundButtons}
          </div>
        </header>

        <main>
          <Write {...props} />
          <SubConscious {...props} wordCount={props.wordCount} />
        </main>
      </div>
    )
}

App.propTypes = propTypes

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
