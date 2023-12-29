import { ReactNode, useReducer } from 'react';
import themeReducer from '../reducers/themeReducer';
import { ThemeContext, ThemeContextProps } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { isDarkMode: false });

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const value: ThemeContextProps = {
    isDarkMode: state.isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
