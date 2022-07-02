import React, { memo, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Dialog, DialogActions, DialogTitle, DialogContent, TextField } from '@mui/material'
import CustomButton from './UI/CustomButton'
import { ModeContext } from '../contexts/mode-context'
import { useAuth } from '../contexts/auth-context'

const LogInModal = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { mode } = useContext(ModeContext)
  const navigate = useNavigate()
  const inputStyle = { WebkitBoxShadow: `${mode === 'dark' ? '0 0 0 1000px rgb(49 46 129) inset' : '0 0 0 1000px white inset'}` };
  const { signIn } = useAuth()

  const handleSubmit = () => {
    if (email.trim() && password) {
      signIn(email, password).then(res => console.log(res)).then(response => navigate('/dashboard'))
    }
  }


  return (
    <Dialog open={props.open} onClose={props.onClose} PaperProps={{ className: mode === 'dark' ? 'dark-menu' : '' }}>
      <DialogTitle className={`${mode === 'dark' ? 'text-white' : 'text-slate-600'}`}>Log in</DialogTitle>
      <DialogContent>
        <TextField
          className='mt-6 w-full'
          label='Email'
          type='email'
          value={email}
          onChange={event => setEmail(event.target.value)}
          InputProps={{
            className: `${mode === 'dark' ? 'text-white' : 'text-slate-600'}`,
            style: inputStyle
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
            className: `${mode === 'dark' ? 'text-white' : 'text-slate-600'}`,
            style: inputStyle
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
      </DialogContent>
      <DialogActions>
        <CustomButton className='max-h-8' onClick={props.onClose}>CANCEL</CustomButton>
        <CustomButton className='max-h-8' filled onClick={handleSubmit} >LOG IN</CustomButton>
      </DialogActions>
    </Dialog>
  )
}

LogInModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default memo(LogInModal)