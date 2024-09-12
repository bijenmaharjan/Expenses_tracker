import React, { createContext, useReducer } from "react";

import AppReducer from './AppReducer'


//initial state

const initialState = {
  Transactions: [
    {
      id: 1,
      text: "flower",
      amount: -20,
    },
    {
      id: 2,
      text: "Salary",
      amount: 200,
    },
    {
      id: 3,
      text: "Book",
      amount: -20,
    },
    {
      id: 4,
      text: "Camera",
      amount: -20,
    },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

//Provider Components

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ Transactions: state.Transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
