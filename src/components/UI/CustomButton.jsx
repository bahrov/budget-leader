import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { ModeContext } from '../../contexts/mode-context'

const CustomButton = (props) => {
  const { mode } = useContext(ModeContext)

  return (
    <Button onClick={props.onClick} className={`${props.className} ${props.filled ? mode === 'dark' ? 'dark-money-manipulation-btn' : 'money-manipulation-btn' : mode === 'dark' ? 'dark-money-manipulation-btn-empty' : 'money-manipulation-btn-empty' } `}>
      <p className={`text-slate-600 ${props.filled || mode === 'dark' ? 'text-white' : ''}`}>{props.children}</p>
    </Button>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  filled: PropTypes.bool,
  className: PropTypes.string
}

export default CustomButton