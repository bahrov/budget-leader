import React, { memo, useState, useEffect } from 'react'
import Header from '../components/UI/Header'
import Charts from '../components/Charts'
import MainTool from '../components/MainTool'
import Statistics from '../components/Statistics'

const Dashboard = (props) => {
  const url = window.location.href
  const [tab, setTab] = useState('main')
  const screenWidth = document.body.clientWidth

  useEffect(() => {
    if (url.includes('statistics')) {
      setTab('statistics')
    }
  }, [url])
  

  return (
    <section className='flex'>
      <Header onStatisticsClicked={() => setTab('statistics')} />
      <main className={`w-screen h-screen dark:bg-slate-900 ${screenWidth <= 999 ? tab !== 'main' ? 'd-none': '' : 'w-2/3'}`}>
        <Charts/>
        <MainTool className={`footer-element ${screenWidth >= 1000 ? 'max-w-2-3' : ''}`} />
      </main>
      <menu className={`pl-0 my-0 w-full max-w-screen ${screenWidth <= 999 ? tab !== 'statistics' ? 'd-none' : '' : 'w-1/3'}`}>
        <Statistics
          back={() => {
            setTab('main')
            if (url.includes('statistics')) {
              const link = url.slice(0, -11)
              window.history.pushState('', '', link)
            }
          }}
        />
      </menu>
    </section>
    
  )
}

export default memo (Dashboard)