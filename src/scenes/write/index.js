import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func
}

function Write(props) {
  const { content, setTextContent } = props
  const textAreaClassName = cx('text-area', {
    'dark-theme': props.theme === 'dark',
    'light-theme': props.theme === 'light',
  })
  const onChange = (e) => {
    setTextContent(e.target.value)
  }

  return (
    <textarea className={textAreaClassName} placeholder="spontaneous, anonymous, reflection" onChange={onChange} value={content} />
  )
}

Write.propTypes = propTypes

export default Write
