import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSentimentAnalysis } from '../../helpers/api'
import Button from '../../components/Button'

const propTypes = {}

function SubConscious(props) {
  const { wordCount, spokenText, content } = props
  const wordCountClassName = cx('word-count-btn', {
    'completed-words': wordCount >= 100
  })

  const analyzeContent = () => {
    if (wordCount < 100) return;

    console.log(content);
    getSentimentAnalysis(content)
  }

  return (
    <div className="subconscious">
      <Button className={wordCountClassName} onClick={analyzeContent}>
        {wordCount}/100 words
      </Button>
    </div>
  )
}

SubConscious.propTypes = propTypes

export default SubConscious
