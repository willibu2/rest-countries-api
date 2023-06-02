import React, { useContext, useState } from 'react';

const colorContext = React.createContext();

export const ColorContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const themeChangeHandler = () => {
    setTheme((prevValue) => {
      return !prevValue;
    });
  };

  const data = {
    theme,
    themeChangeHandler,
  };

  return <colorContext.Provider value={data}>{children}</colorContext.Provider>;
};

export const useColorContext = () => useContext(colorContext);
