import React ,{useState}from 'react'
import { NewExpenseForm } from './NewExpenseForm'
import  classes from './NewExpense.css';
import "./NewExpense.css"
export const NewExpense = (props) => {
     
    const[isEditing,setIsEditing] = useState(false);

     const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
     }

     const startEditingHandler = () => {
        setIsEditing(true);
     }

     const stopEditingHandler =() =>{
        setIsEditing(false);
     }
     
    
    

  return (
    <div className="expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <NewExpenseForm  onsaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler}/>}
    </div>
  )
}
