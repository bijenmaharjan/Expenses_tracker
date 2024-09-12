import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import "./App.css";
import AddTranscation from "./components/AddTranscation";
import { GlobalProvider } from "./content/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTranscation />
      </div>
    </GlobalProvider>
  );
};

export default App;
