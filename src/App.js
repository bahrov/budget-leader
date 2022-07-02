import React, { useState } from 'react'
import './App.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { ModeContext } from './contexts/mode-context'
import Router from './Router/Router'
import { AuthProvider } from './contexts/auth-context'
import { DbProvider } from './contexts/db-context'

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
          <DbProvider>
            <div className={mode}>
              <Router />
            </div>
          </DbProvider>
        </AuthProvider>
      </ModeContext.Provider>
    </StyledEngineProvider>
  );
}

export default App
