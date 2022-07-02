import React, { memo, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, MenuItem, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { HiOutlineMoon,
  HiOutlineSun,
  HiOutlineChartPie,
  HiOutlineDesktopComputer,
  HiOutlineInformationCircle,
  HiAdjustments,
  HiOutlineHeart,
  HiOutlineUserCircle,
  HiOutlineUserAdd
} from "react-icons/hi"
import { ModeContext } from '../../contexts/mode-context'
import { AuthContext } from '../../contexts/auth-context'
import { useAuth } from '../../contexts/auth-context'
import SignUpModal from '../SignUpModal'
import LogInModal from '../LogInModal'
import Warning from './Warning'
import CustomButton from './CustomButton'

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [modal, setModal] = useState('')
  const [warning, setWarning] = useState({title: '', message: ''})
  const [agree, setAgree] = useState(false)
  const { mode, setMode } = useContext(ModeContext)
  const { currentUser } = useContext(AuthContext)
  const location = useLocation()
  const open = Boolean(anchorEl)
  const { signOutHandler } = useAuth()
  const navigate = useNavigate()
  const screenWidth = document.body.clientWidth

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

  useEffect(() => {
    if (modal === 'logOut' && agree) {
      setModal('')
      setAgree(false)
      signOutHandler()
      setAnchorEl()
      navigate('/')
    }
  }, [modal, agree, signOutHandler,setAgree, setModal, navigate])

  const logOutHandler = () => {
    setModal('logOut')
    setWarning({title: 'Attention', message: 'Do you really want to log out?'})
  }

  return (
    <React.Fragment>
      <header
        className={`bg-indigo-300 dark:bg-indigo-900 text-fuchsia-900 dark:text-white max-w-full h-16 flex justify-between items-center ${mode === 'dark' ? 'dark-menu-border-bottom' : ''} header`}>
        <Link to='/'><h1 className='dark:text-white font-sans text-3xl m-0 flex-1 hover:drop-shadow-md hover:text-neutral-800 dark:hover:text-gray-400 cursor-pointer no-underline pl-3'>BUDGET LEADER</h1></Link>
        { screenWidth <= 999 &&
          <nav>
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
                className: `min-w-20 w-full sm-w-fit ${mode === 'dark' ? 'dark-menu' : ''}`
              }}
            >
              <MenuItem onClick={() => {
                modeToggle()
                setAnchorEl()
                }}
              >
                {mode === 'light' && <span><HiOutlineMoon className='mr-5'/>Dark mode</span>}
                {mode === 'dark' && <span><HiOutlineSun className='mr-5'/>Light mode</span>}
              </MenuItem>
              {location.pathname !== '/dashboard' && currentUser &&
                <Link to='/dashboard'>
                  <MenuItem className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    <span><HiOutlineDesktopComputer  className='mr-5'/>Dashboard</span>
                  </MenuItem>
                </Link>
              }
              {currentUser && screenWidth <= 999 &&
                <MenuItem
                  className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                  onClick={() => {
                    props.onStatisticsClicked()
                    setAnchorEl()
                  }}
                >
                  <span><HiOutlineChartPie className='mr-5'/>Statistics</span>
                </MenuItem>
              }
              {location.pathname !== '/about' &&
                <Link to='/about'>
                  <MenuItem className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    <span><HiOutlineInformationCircle className='mr-5'/>About</span>
                  </MenuItem>
                </Link>
              }
              {location.pathname !== '/settings' && currentUser && 
                <Link to='/settings'>
                  <MenuItem className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    <span><HiAdjustments className='mr-5'/>Settings</span>
                  </MenuItem>
                </Link>
              }
              {location.pathname !== '/support' &&
                <Link to='/support'>
                  <MenuItem className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    <span><HiOutlineHeart className='mr-5' />Support us</span>
                  </MenuItem>
                </Link>
              }
              {!currentUser &&
                  <MenuItem onClick={() => openModalHandler('signUp')} className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                    <span><HiOutlineUserAdd className='mr-5'/>Sign up</span>
                  </MenuItem>
              }
              {!currentUser &&
                <MenuItem onClick={() => openModalHandler('signIn')} className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                  <span><HiOutlineUserCircle className='mr-5' />Sign in</span>
                </MenuItem>
              }
              {currentUser &&
                <MenuItem onClick={logOutHandler} className={`no-underline ${mode === 'dark' ? 'text-white' : 'text-black'}`}>
                  <span><HiOutlineUserCircle className='mr-5' />Log out</span>
                </MenuItem>
              }
            </Menu>
          </nav>
        }
        {screenWidth >= 1000 &&
          <nav className='flex items-center'>
            <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
              <div
                className={`${mode === 'light' ? 'icon-button' : 'icon-button-dark'}`}
                onClick={() => {
                  modeToggle()
                  setAnchorEl()
                }}
              >
                {mode === 'light' ? <HiOutlineMoon /> : <HiOutlineSun className='mr-5'/>}
              </div>
            </Tooltip>
            {location.pathname !== '/dashboard' && currentUser &&
              <Tooltip title='Dashboard'>
                <Link to='/dashboard'>
                  <div className={`${mode === 'light' ? 'icon-button' : 'icon-button-dark'}`}>
                    <HiOutlineDesktopComputer  className='mr-5'/>
                  </div>
                </Link>
              </Tooltip>
            }
            {location.pathname !== '/about' &&
              <Tooltip title='About us'>
                <Link to='/about'>
                  <div className={`${mode === 'light' ? 'icon-button' : 'icon-button-dark'}`}>
                    <HiOutlineInformationCircle className='mr-5'/>
                  </div>
                </Link>
              </Tooltip>
            }
            {location.pathname !== '/settings' && currentUser &&
              <Tooltip title='Settings'>
                <Link to='/settings'>
                  <div className={`${mode === 'light' ? 'icon-button' : 'icon-button-dark'}`}>
                    <HiAdjustments className='mr-5'/>
                  </div>
                </Link>
              </Tooltip>
              }
              {location.pathname !== '/support' &&
                <Tooltip title='Support us'>
                  <Link to='/support'>
                    <div className={`${mode === 'light' ? 'icon-button' : 'icon-button-dark'}`}>
                      <HiOutlineHeart className='mr-5' />
                    </div>
                  </Link>
                </Tooltip>
              }
              {!currentUser &&
                <Tooltip title='Sign up'>
                  <div className={`${mode === 'light' ? 'icon-button' : 'icon-button-dark'}`} onClick={() => openModalHandler('signUp')}>
                    <HiOutlineUserAdd className='mr-5'/>
                  </div>
                </Tooltip>
              }
              {!currentUser &&
                <Tooltip title='Sign in'>
                  <div className={`${mode === 'light' ? 'icon-button' : 'icon-button-dark'}`} onClick={() => openModalHandler('signIn')} >
                    <HiOutlineUserCircle className='mr-5' />
                  </div>
                </Tooltip>
              }
              {currentUser &&
                <Tooltip title='Log out'>
                  <div className={`${mode === 'light' ? 'icon-button' : 'icon-button-dark'}`} onClick={logOutHandler} >
                    <HiOutlineUserCircle className='mr-5' />
                  </div>
                </Tooltip>
              }
          </nav>
        }
      </header>
      <SignUpModal open={Boolean(modal === 'signUp')} onClose={() => setModal('')} />
      <LogInModal open={Boolean(modal === 'signIn')} onClose={() => setModal('')} />
      {warning.title &&
        <Warning
          open={Boolean(warning.title)}
          title={warning.title}
          onClose={() => setWarning({title: '', message: ''})}
          onAgree={() => {
            setAgree(true)
            setWarning({title: '', message: ''})
          }
          }
        >
          {warning.message}
        </Warning>
      }
    </React.Fragment>
    
  )
}

Header.propTypes = {
  onStatisticsClicked: PropTypes.func.isRequired
}

export default memo(Header)
