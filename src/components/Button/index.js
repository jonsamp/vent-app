import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { omit } from 'lodash'

const propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool
}

function Button(props) {
  const className = cx('Button', props.className, {
    'active': props.active
  })
  const propsToTransfer = omit(props, 'active')
  
  return <button {...propsToTransfer} className={className}>{props.children}</button>
}

Button.propTypes = propTypes

export default Button
