import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  useEffect(() => {
    if (useDarkTheme) document.getElementById('rootHTML').classList.add('dark-theme');
    else document.getElementById('rootHTML').classList.remove('dark-theme');
  }, [useDarkTheme]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <ThemeContext.Provider value={{ useDarkTheme, setUseDarkTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
