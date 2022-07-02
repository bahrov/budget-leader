import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material'
import CustomButton from './CustomButton'
import { ModeContext } from '../../contexts/mode-context'

const Warning = (props) => {
  const {mode} = useContext(ModeContext)

  return (
    <Dialog open={props.open} onClose={props.onClose} PaperProps={{ className: mode === 'dark' ? 'dark-menu' : '' }}>
      <DialogTitle className={`${mode === 'dark' ? 'text-white' : 'text-slate-600'}`}>{props.title}</DialogTitle>
      <DialogContent>
        <p className={`${mode === 'dark' ? 'text-white' : 'text-slate-600'}`}>{props.children}</p>
      </DialogContent>
      <DialogActions>
        <CustomButton className='max-h-8' onClick={props.onClose}>CANCEL</CustomButton>
        <CustomButton className='max-h-8' filled onClick={props.onAgree} >OK</CustomButton>
      </DialogActions>
    </Dialog>
  )
}

Warning.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAgree: PropTypes.func.isRequired,
  title: PropTypes.any,
  children: PropTypes.any 
}

export default memo(Warning)