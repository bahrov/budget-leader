import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineUserCircle } from "react-icons/hi"
import { ModeContext } from '../contexts/mode-context'
import Header from '../components/UI/Header'
import CustomButton from '../components/UI/CustomButton'
import ExpenseCategoriesSettings from '../components/ExpenseCategoriesSettings'
import IncomeCategoriesSettings from '../components/IncomeCategoriesSettings'
import EditProfileSettings from '../components/EditProfileSettings'
import AccountSettings from '../components/AccountSettings'

const Settings = (props) => {
  const [tab, setTab] = useState('menu')
  const navigate = useNavigate()
  const openStatistics = () => {
    navigate('/dashboard/statistics')
  }
  const {mode} = useContext(ModeContext)
  const screenWidth = document.body.clientWidth

  return (
    <section className={`${props.className ? props.className : ''} w-screen h-screen-header dark:bg-slate-900 center-all`}>
      <Header onStatisticsClicked={openStatistics}/>
      <menu className={`px-10 ${screenWidth <= 999 ? tab !== 'menu' ? 'd-none' : '' : 'w-1/3'}`}>
        <CustomButton filled className='w-full mb-6' onClick={() => setTab('EditProfileSettings')}>
          Edit profile
        </CustomButton>
        <CustomButton filled className='w-full mb-6' onClick={() => setTab('AccountSettings')}>Accounts</CustomButton>
        <CustomButton filled className='w-full mb-6' onClick={() => setTab('ExpenseCategoriesSettings')}>Expense categories</CustomButton>
        <CustomButton filled className='w-full' onClick={() => setTab('IncomeCategoriesSettings')}>Income categories</CustomButton>
      </menu>
      <main className={`${screenWidth >= 1000 ? 'flex-1 pr-10 pl-10 items-start h-full text-white' : 'text-white'}`}>
        {tab === 'menu' && screenWidth >= 1000 && <div className='text-center'>Please, select a category</div>}
        {tab === 'ExpenseCategoriesSettings' && <ExpenseCategoriesSettings back={() => setTab('menu')}/>}
        {tab === 'IncomeCategoriesSettings' && <IncomeCategoriesSettings back={() => setTab('menu')}/>}
        {tab === 'EditProfileSettings' && <EditProfileSettings back={() => setTab('menu')}/>}
        {tab === 'AccountSettings' && <AccountSettings back={() => setTab('menu')}/>}
      </main>
    </section>
  )
}

export default Settings