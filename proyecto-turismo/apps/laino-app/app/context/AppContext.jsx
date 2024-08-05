"use client";
import { createContext, useReducer } from "react";
import { reducer } from "../reducer/reducerGeneral";
const AppContext = createContext();

const initialState = {
  credencials: true,
};
export { AppContext };

export function AppWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
