import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import { ModeContext } from '../contexts/mode-context'

const Charts = (props) => {
  const {mode, setMode} = useContext(ModeContext)

  return ( 
    <section className={`${props.className ? props.className : ''} h-screen center-all`}>
      <p className='text-gray-400 m-0 max-h-min shrink'>Please, provide data to see charts</p>
    </section>
  )
}

Charts.propTypes = {
  className: PropTypes.string
}

export default memo(Charts)