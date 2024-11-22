import { createContext, useContext } from "react";

// Create the Context
const AppContext = createContext();

// Create a Provider component
const AppProvider = ({ children }) => {
  const value = "Saurabh"; // Context value

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for consuming the context
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
