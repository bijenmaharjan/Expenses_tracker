import React, { useContext } from "react";
import { GlobalContext } from "../content/GlobalState";


const Balance = () => {
  const {Transactions}=useContext(GlobalContext)

  const amounts=Transactions.map(transaction=> transaction.amount)
// Reduce adds the total elements of an array.
  const total=amounts.reduce((prev,presentValue)=>(prev += presentValue),0).toFixed((2)) //fixed rounds a decimal in 2 digits eg:2.32 



  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="Balance">${total}</h1>
    </div>
  );
};

export default Balance;
