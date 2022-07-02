import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/UI/Header'

const Home = (props) => {
  const navigate = useNavigate()
  const openStatistics = () => {
    navigate('/dashboard/statistics')
  }

  return (
    <main className={`${props.className ? props.className : ''} w-screen h-screen dark:bg-slate-900 center-all`}>
      <Header onStatisticsClicked={openStatistics}/>
      <h2 className='text-gray-400 m-0 max-h-min shrink'>Home page</h2>
    </main>
  )
}

export default Home