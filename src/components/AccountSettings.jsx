import React from 'react'
import PropTypes from 'prop-types'
import CustomButton from './UI/CustomButton'

const AccountSettings = (props) => {
  return (
    <section>
      <h2 className='text-gray-400 m-0 max-h-min shrink'>Accounts Settings</h2>
      <CustomButton filled onClick={props.back} className='w-full'>back</CustomButton>
    </section>
  )
}

AccountSettings.propTypes = {
  back: PropTypes.func.isRequired
}

export default AccountSettings