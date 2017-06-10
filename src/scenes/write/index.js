import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func
}

function Write(props) {
  const { content } = props
  const onChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <textarea className="text-area" placeholder="begin writing" onChange={onChange} value={content} />
  )
}

Write.propTypes = propTypes

export default Write
