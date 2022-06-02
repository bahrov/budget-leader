import React from 'react'
import Header from '../components/UI/Header'

const Support = (props) => {
  return (
    <main className={`${props.className ? props.className : ''} w-screen h-screen dark:bg-slate-900 center-all`}>
      <Header/>
      <h2 className='text-gray-400 m-0 max-h-min shrink'>Support page</h2>
    </main>
  )
}

export default Support