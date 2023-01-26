import React, { MouseEventHandler, ReactElement, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  toggleTheme?: MouseEventHandler<HTMLButtonElement>;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
});

type ThemeProviderProps = {
  children: ReactElement;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const color = theme === 'light' ? '#032640' : '#D1CCB9';
  const backgroundColor = theme === 'light' ? '#F7F5F0' : '#2C3531';

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
