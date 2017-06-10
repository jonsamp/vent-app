import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Button from '../../components/Button'

const propTypes = {}

function SubConscious(props) {
  const wordCountClassName = cx('word-count-btn', {
    'completed-words': props.wordCount >= 100
  })
  return (
    <div className="subconscious">
      <Button className={wordCountClassName}>
        {props.wordCount}/100 words
      </Button>
    </div>
  )
}

SubConscious.propTypes = propTypes

export default SubConscious
