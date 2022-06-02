import React, { memo, useContext } from 'react'
import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CustomButton from './UI/CustomButton'
import { ModeContext } from '../contexts/mode-context'


const MainTool = (props) => {
  const {mode, setMode} = useContext(ModeContext)

  return (
    <div className={`${props.className ? props.className : ''} h-24 w-full flex justify-between items-center`}>
     <CustomButton className={`w-20 h-20 ml-5 mb-3`}>
       <RemoveIcon className='text-white text-5xl'/>
      </CustomButton>

      <div className='text-fuchsia-900 dark:text-white text-4xl hover:drop-shadow-md hover:text-neutral-800 dark:hover:text-gray-400 cursor-pointer underline text-center mb-4'>
        <h3 className='m-0'>0,00</h3>
        <h4 className='m-0 mt-1'>BALANCE</h4>
      </div>

      <CustomButton className={`w-20 h-20 mr-5 mb-3`}>
        <AddIcon className='text-white text-5xl'/>
      </CustomButton>
    </div>
  )
}

MainTool.propTypes = {
  className: PropTypes.string
}

export default memo (MainTool)