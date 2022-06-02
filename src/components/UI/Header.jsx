import React, { memo, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ModeContext } from '../../contexts/mode-context'
import SignUpModal from '../SignUpModal'
import { AuthContext } from '../../contexts/auth-context'

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [modal, setModal] = useState('')
  const {mode, setMode} = useContext(ModeContext)
  const {currentUser} = useContext(AuthContext)
  const location = useLocation()
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    if (!anchorEl) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  }

  const modeToggle = () => {
    const currentMode = localStorage.getItem('mode')
    if (currentMode === 'dark') {
      localStorage.setItem('mode', 'light')
      setMode('light')
    } else {
      localStorage.setItem('mode', 'dark')
      setMode('dark')
    }
  }

  const openModalHandler = (name) => {
    setModal(name)
  }

  return (
    <React.Fragment>
      <header
        className={`bg-indigo-300 dark:bg-indigo-900 text-fuchsia-900 dark:text-white max-w-full h-16 flex justify-between items-center ${mode === 'dark' ? 'dark-menu-border-bottom' : ''} header`}>
        <Link to='/'><h1 className='dark:text-white font-sans text-3xl m-0 flex-1 hover:drop-shadow-md hover:text-neutral-800 dark:hover:text-gray-400 cursor-pointer no-underline pl-3'>BUDGET LEADER</h1></Link>
        <MenuIcon
          id='burger-menu'
          className='p-3 mr-3 text-fuchsia-900 dark:text-white w-8 h-8 hover:drop-shadow-md hover:text-neutral-800 dark:hover:text-gray-400 cursor-pointer'
          onClick={handleClick}
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClick}
          PaperProps={{ 
            className: `w-full sm-w-fit ${mode === 'dark' ? 'dark-menu' : ''}`
          }}
        >
          <MenuItem onClick={modeToggle}>
            Dark mode
          </MenuItem>
          {location.pathname !== '/dashboard' &&
            <Link to='/dashboard'>
              <MenuItem className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                Dashboard
              </MenuItem>
            </Link>
          }
          {location.pathname !== '/about' && <Link to='/about'>
            <MenuItem className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
              About
            </MenuItem>
          </Link>
          }
          {location.pathname !== '/settings' && <Link to='/settings'>
              <MenuItem className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                Settings
              </MenuItem>
            </Link>
          }
          {location.pathname !== '/support' && <Link to='/support'>
              <MenuItem className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                Support us
              </MenuItem>
            </Link>
          }
          {!currentUser &&
              <MenuItem onClick={() => openModalHandler('signUp')} className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                Sign up
              </MenuItem>
          }
          {!currentUser &&
            <MenuItem onClick={() => openModalHandler('signIn')} className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Sign in
            </MenuItem>
          }
          {currentUser &&
            <MenuItem onClick={() => openModalHandler('logOut')} className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
              Log out
            </MenuItem>
          }
        </Menu>
      </header>
      <SignUpModal open={Boolean(modal === 'signUp')} onClose={() => setModal('')} />
    </React.Fragment>
    
  )
}

export default memo(Header)
