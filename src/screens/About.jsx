import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/UI/Header'

const About = (props) => {
  const navigate = useNavigate()
  const openStatistics = () => {
    navigate('/dashboard/statistics')
  }
  return (
    <main className={`${props.className ? props.className : ''} center-all w-screen h-screen dark:bg-slate-900`}>
      <Header onStatisticsClicked={openStatistics}/>
      <h2 className='text-gray-400 m-0 max-h-min shrink'>About page</h2>
    </main>
  )
}

export default About