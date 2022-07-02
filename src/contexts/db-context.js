import React, { useContext, useState, useEffect, useCallback } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore/lite'
import { db } from '../firebase'
import { getIconUtilityClass } from '@mui/material'

export const DbContext = React.createContext()

export function useDb () {
  return useContext(DbContext)
}

export function DbProvider ({ children }) {
  const [generalExpenseCategories, setGeneralExpenseCategories] = useState()
  const [generalIncomeCategories, setGeneralIncomeCategories] = useState()
  const [icons, setIcons] = useState()

  const getGeneralExpenseCategories = useCallback(async function () {
    try {
      const expensesCol = collection(db, 'expense-categories')
      const expenseCategoriesSnapshot = await getDocs(expensesCol)
      const expensesList = expenseCategoriesSnapshot.docs.map(doc => doc.data())
      return setGeneralExpenseCategories(expensesList)
    } catch(error) {
      console.error(error)
    }
  }, [])

  const getGeneralIncomeCategories = useCallback(async function () {
    try {
      const incomeCol = collection(db, 'income-categories')
      const incomeCategoriesSnapshot = await getDocs(incomeCol)
      const incomeList = incomeCategoriesSnapshot.docs.map(doc => doc.data())
      return setGeneralIncomeCategories(incomeList)
    } catch(error) {
      console.error(error)
    }
  }, [])

  const getIcons = useCallback(async function () {
    try {
      const iconCol = collection(db, 'icons')
      const iconsSnapshot = await getDocs(iconCol)
      const iconList = iconsSnapshot.docs.map(doc => doc.data())
      return setIcons(iconList)
    } catch(error) {
      console.error(error)
    }
  }, [])

  const createNewExpenseCategory = async function (name) {
    try {
      const docRef = await addDoc(collection(db, 'expense-categories'), {
        name
      });
      getGeneralExpenseCategories()
      console.log("Document written with ID: ", docRef.id)
    } catch(error) {
      console.error(error)
    }
  }


  useEffect(() => {
    if (!generalExpenseCategories) {
      getGeneralExpenseCategories()
    }
    if (!generalIncomeCategories) {
      getGeneralIncomeCategories()
    }
    if (!icons) {
      getIcons()
    }
  }, [generalExpenseCategories, generalIncomeCategories, getGeneralExpenseCategories, getGeneralIncomeCategories])

  const value = {
    generalExpenseCategories,
    getGeneralExpenseCategories,
    generalIncomeCategories,
    getGeneralIncomeCategories,
    createNewExpenseCategory,
    icons,
    getIcons
  }

  return (
    <DbContext.Provider value={value}>
      {children}
    </DbContext.Provider>
  )
}