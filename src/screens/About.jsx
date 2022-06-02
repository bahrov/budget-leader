import React from 'react'
import Header from '../components/UI/Header'

const About = (props) => {
  return (
    <main className={`${props.className ? props.className : ''} center-all w-screen h-screen dark:bg-slate-900`}>
      <Header />
      <h2 className='text-gray-400 m-0 max-h-min shrink'>About page</h2>
    </main>
  )
}

export default About