"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

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

export function useAppContext() {
  return useContext(AppContext);
}
