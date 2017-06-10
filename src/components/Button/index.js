import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool
}

function Button(props) {
  const className = cx('Button', props.className, {
    'active': props.active
  })
  return <button {...props} className={className}>{props.children}</button>
}

Button.propTypes = propTypes

export default Button
