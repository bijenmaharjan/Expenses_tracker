import React from "react";
import { GlobalContext } from "../content/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
const {Transactions}=useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {Transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
        
      </ul>
    </>
  );
};

export default TransactionList;
