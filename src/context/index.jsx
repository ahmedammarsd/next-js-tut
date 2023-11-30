"use client";
import { createContext, useContext, useState } from "react";

// STEP 1 === CREATE CONTEXT
const AppContext = createContext();

// STEP 2 === FUNCTION CONTANE THE CHILDREAN AND VALUE -- PROVIDER
export function AppWrapper({ children }) {
  const [stateTestContext, setStateTestContext] = useState(
    "Context Work Good in Next JS"
  );

  return (
    <AppContext.Provider
      value={{
        stateTestContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// STEP CREATE FUNCTION TO USE CONTEXT
export function useAppContext() {
  return useContext(AppContext);
}
