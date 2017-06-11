import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
  tones: PropTypes.array
}

function ToneOrb(props) {

  const { tones } = props

  const orbs = tones.map((tone, key) => {
    const orbClassName = cx('orb', tone.tone_id)

    const size = (tone.score).toFixed(2) * 9
    console.log(size);

    return <div
      key={key + tone.tone_id}
      className={orbClassName}
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
        }}
      />
  })

  return (
    <div className="orb-wrapper">
      {orbs}
    </div>
  )
}

ToneOrb.propTypes = propTypes

export default ToneOrb
