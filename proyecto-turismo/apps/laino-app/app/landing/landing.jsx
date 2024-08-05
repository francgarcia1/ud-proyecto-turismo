"use client";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; 

const Landing = () => {
  const { state, dispatch } = useContext(AppContext);

  console.log(state, "estado que llegaria");
  const handleAction = () => {
    dispatch({ type: "action1", payload: "pendejo" });
  };

  return (
    <div>
      <div>Landing {state.selectedAction}</div>
      <button onClick={handleAction}>Cambiar Estado</button>
    </div>
  );
};

export default Landing;
