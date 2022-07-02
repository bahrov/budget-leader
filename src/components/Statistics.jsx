import React from 'react'
import PropTypes from 'prop-types'
import CustomButton from './UI/CustomButton'

const Statistics = (props) => {
  return (
    <section className='w-full h-screen dark:bg-slate-900 center-all flex-col'>
      <h2 className='text-gray-400 m-0 max-h-min shrink'>Statistics</h2>
      <CustomButton filled onClick={props.back} className='px-10'>back</CustomButton>
    </section>
  )
}

Statistics.propTypes = {
  back: PropTypes.func.isRequired
}

export default Statistics