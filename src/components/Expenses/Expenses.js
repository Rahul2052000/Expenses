import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { Card } from "../UI/Card";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpensesList } from "./ExpensesList";
import { Chart } from "../Chart/Chart";
import { ExpensesChart } from "./ExpensesChart";
export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterchangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      {/* <ExpenseFilter/> */}
      <Card className="expenses">
       
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterchangeHandler}
        />
        <ExpensesChart  expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        
        
      </Card>
    </div>
  );
};
