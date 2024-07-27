import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || null
  );
  const toggle = () => {
    setDark(!dark);
  };
  useEffect(() => {
    localStorage.setItem("darkMode", dark);
  }, [dark]);
  return (
    <DarkModeContext.Provider value={{ dark, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
