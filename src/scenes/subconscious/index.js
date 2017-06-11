import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../components/Button'

const propTypes = {}

function SubConscious(props) {
  const { wordCount, spokenText, content, getSentimentAnalysis, sentiment } = props
  const wordCountClassName = cx('word-count-btn', {
    'completed-words': wordCount >= 100
  })

  const analyzeContent = () => {
    if (wordCount < 100) return;
    getSentimentAnalysis(content)
  }

  return (
    <div className="subconscious">
      <Button className={wordCountClassName} onClick={analyzeContent}>
        {wordCount}/100 words
        { sentiment.loading ? 'Loading!' : null}
      </Button>
    </div>
  )
}

SubConscious.propTypes = propTypes

export default SubConscious
