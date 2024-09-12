import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../content/GlobalState";

const IncomeExpenses = () => {
  const { Transactions } = useContext(GlobalContext);

  const amounts = Transactions.map((transaction) => transaction.amount);

  const income = amounts.filter((incomesAmount) => incomesAmount > 0).reduce((prevIncomeAmount,presentIncomeAmout)=>(prevIncomeAmount+=presentIncomeAmout),0).toFixed(2)


const expenses=(amounts.filter(expense=> expense<0).reduce((prevExpenseAmount,presentExpenseAmount)=>(prevExpenseAmount+=presentExpenseAmount),0)* -1).toFixed(2)
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>

      <div>
        <h4>Expense</h4>
        <p className="money minus" id="money-minus">
          -${expenses}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
