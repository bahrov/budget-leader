import React, { memo, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogActions, DialogTitle, DialogContent, TextField } from '@mui/material'
import CustomButton from './UI/CustomButton'
import { ModeContext } from '../contexts/mode-context'
import { useAuth, AuthContext } from '../contexts/auth-context'

const SignUpModal = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const {mode} = useContext(ModeContext)
  const {currentUser} =  useContext(AuthContext)

  const { signUp } = useAuth()

  const handleSubmit = () => {
    if (email.trim() && password && password === passwordConfirm) {
      signUp(email, password).then(res => console.log(res)).then(response => props.onClose())
    }
  }


  return (
    <Dialog open={props.open} onClose={props.onClose} PaperProps={{ className: mode === 'dark' ? 'dark-menu' : '' }}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <TextField
          className='mt-6 w-full'
          label='Email'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          InputProps={{
            className: `${mode === 'dark' ? 'text-white' : 'text-slate-600'}`
          }}
          sx={{
            fieldset: { borderColor: `${mode === 'dark' ? 'rgb(167 139 250)' : '#475569'}` }
          }}
          InputLabelProps={{
            className: `${mode === 'dark' ? 'text-white' : 'text-slate-600'}`
          }}
        />
        <TextField
          className='mt-6 w-full'
          label='Password'
          type='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          InputProps={{
            className: `${mode === 'dark' ? 'text-white' : 'text-slate-600'}`
          }}
          sx={{
            fieldset: {
              borderColor: `${mode === 'dark' ? 'rgb(167 139 250)' : '#475569'}`,
            },
          }}
          InputLabelProps={{
            className: `${mode === 'dark' ? 'text-white' : 'text-slate-600'}`
          }}
        />
        <TextField
          className='mt-6 w-full'
          label='Repeat your password'
          type='password'
          value={passwordConfirm}
          onChange={event => setPasswordConfirm(event.target.value)}
          inputProps={{
            className: `${mode === 'dark' ? 'text-white' : 'text-slate-600'}`
          }}
          sx={{
            fieldset: { borderColor: `${mode === 'dark' ? 'rgb(167 139 250)' : '#475569'}` }
          }}
          InputLabelProps={{
            className: `${mode === 'dark' ? 'text-white' : 'text-slate-600 input-label'}`
          }}
        />
      </DialogContent>
      <DialogActions>
        <CustomButton className='max-h-8' onClick={props.onClose}>CANCEL</CustomButton>
        <CustomButton className='max-h-8' filled onClick={handleSubmit} >SIGN UP</CustomButton>
      </DialogActions>
    </Dialog>
  )
}

SignUpModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default memo(SignUpModal)