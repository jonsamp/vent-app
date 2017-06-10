import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onClick: PropTypes.func
}

function Button(props) {
  return <button {...props}>{props.children}</button>
}

Button.propTypes = propTypes

export default Button
