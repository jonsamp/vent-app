import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import Placeholder from '../../images/placeholder.svg'

const propTypes = {}

function Talk(props) {
  return (
    <div className="displayFlexCenter">
      <Button active className="start-listening">
        start venting
      </Button>
      <img src={Placeholder} alt="" />
    </div>
  )
}

Talk.propTypes = propTypes

export default Talk
