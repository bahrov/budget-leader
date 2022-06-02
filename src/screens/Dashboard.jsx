import React, { memo } from 'react'
import Header from '../components/UI/Header'
import Charts from '../components/Charts'
import MainTool from '../components/MainTool'

const Dashboard = (props) => {
  return (
    <div className='w-screen h-screen dark:bg-slate-900'>
      <Header />
      <Charts/>
      <MainTool className='footer-element' />
    </div>
  )
}

export default memo (Dashboard)