import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import CustomButton from './UI/CustomButton'
import { useDb } from '../contexts/db-context'
import { ModeContext } from '../contexts/mode-context'
import { MdOutlineLocalGroceryStore, MdOutlineDirectionsCar } from "react-icons/md"
import { Icon } from '@mui/material'
// import { Icon } from '@material-ui/core'

const ExpenseCategoriesSettings = (props) => {
  const { generalExpenseCategories, createNewExpenseCategory } = useDb()

  const {mode} = useContext(ModeContext)
  const screenWidth = document.body.clientWidth

  return (
    <section className=''>
      <h2 className='text-gray-400 m-0 pt-10 max-h-min shrink text-center'>Expense Categories</h2>
        <p className='text-gray-400 m-0 pt-10 max-h-min shrink text-center'>Available expense categories</p>
      <table className='text-grey-800 dark:text-white'>
        <tbody>
          {generalExpenseCategories && generalExpenseCategories.map(category => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td><i style={{ color: `${category.color}` }} className={category.icon}></i></td>
            </tr>
          ))}
        </tbody>
      </table>

      {screenWidth < 1000 && <CustomButton filled onClick={props.back} className='w-full'>back</CustomButton>}
    </section>
  )
}

ExpenseCategoriesSettings.propTypes = {
  back: PropTypes.func.isRequired
}

export default ExpenseCategoriesSettings