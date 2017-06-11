import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { get } from 'lodash'
import Button from '../../components/Button'
import Spinner from '../../components/Spinner'
import ToneGroup from './ToneGroup'
import ToneOrb from './ToneOrb'

// DEV
import mockSentiment from './mockSentiment'

const propTypes = {
  wordCount: PropTypes.number,
  content: PropTypes.string,
  getSentimentAnalysis: PropTypes.func,
  toggleSubsonsciousModal: PropTypes.func
}

function SubConscious(props) {
  const { wordCount, content, getSentimentAnalysis, toggleSubsonsciousModal, sentiment } = props

  // DEV: put sentiment back in props when finished
  // const sentiment = {
  //   analysis: mockSentiment
  // }

  const wordCountClassName = cx('word-count-btn', {
    'completed-words': wordCount >= 100
  })
  const subconsciousClassName = cx('subconscious', {
    'opened': sentiment.modalOpen
  })

  const analyzeContent = () => {
    if (wordCount < 100) return;
    getSentimentAnalysis(content)
  }

  const emotionalTones = get(sentiment, 'analysis.document_tone.tone_categories[0].tones')
  const languageTones = get(sentiment, 'analysis.document_tone.tone_categories[1].tones')
  const socialTones = get(sentiment, 'analysis.document_tone.tone_categories[2].tones')

  const mostFeltTone = () => {
    if (emotionalTones) {
      const sortedTones = emotionalTones.slice().sort((a, b) => {
        return b.score - a.score
      })
      return sortedTones[0].tone_name.toLowerCase()
    }
  }

  return (
    <div className={subconsciousClassName}>
      <Button className={wordCountClassName} onClick={analyzeContent}>
        { sentiment.loading ?
          <Spinner size="1rem" /> :
          <div>{wordCount}/100 words{wordCount >= 100 ? ': explore your subconscious' : null} </div>
         }
      </Button>
      { get(sentiment, 'analysis.document_tone') ?
        <div>
          <section className="your-subsonscious">
            <div className="displayFlexHorizontal">
              <h1>your subconscious</h1>
              <Button onClick={toggleSubsonsciousModal}>collapse</Button>
            </div>
          </section>
          <div className="summary">
            <ToneOrb tones={emotionalTones} />
            <h2>you're feeling {mostFeltTone()}</h2>
          </div>
          <ToneGroup
            tones={emotionalTones}
            label="Emotional Tones"
          />
          <ToneGroup
            tones={languageTones}
            label="Language Tones"
          />
          <ToneGroup
            tones={socialTones}
            label="Social Tones"
            extraLabelWidth
          />
        </div> :
        null
      }
    </div>
  )
}

SubConscious.propTypes = propTypes

export default SubConscious
