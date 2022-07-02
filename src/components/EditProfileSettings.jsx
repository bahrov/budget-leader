import React from 'react'
import PropTypes from 'prop-types'
import CustomButton from './UI/CustomButton'

const EditProfileSettings = (props) => {
  return (
    <section>
      <h2 className='text-gray-400 m-0 max-h-min shrink'>Edit Profile Settings</h2>
      <CustomButton filled onClick={props.back} className='w-full'>back</CustomButton>
    </section>
  )
}

EditProfileSettings.propTypes = {
  back: PropTypes.func.isRequired
}

export default EditProfileSettings