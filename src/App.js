import React, { useContext, useState } from 'react'
import './App.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { ModeContext } from './contexts/mode-context'
import Router from './Router/Router'
import { AuthProvider } from './contexts/auth-context'

function App() {
  const localMode = localStorage.getItem('mode')
  const [mode, setMode] = useState(localMode)
  const value = {mode, setMode}

  if (!localMode) {
    localStorage.setItem('mode', 'light')
  }
  return (
    <StyledEngineProvider injectFirst>
      <ModeContext.Provider value={value}>
        <AuthProvider>
          <div className={mode}>
            <Router />
          </div>
        </AuthProvider>
      </ModeContext.Provider>
    </StyledEngineProvider>
  );
}

export default App
