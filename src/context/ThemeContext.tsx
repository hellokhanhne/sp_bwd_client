import React, { createContext, useState } from 'react';

interface IInitState {
  mode: string;
}

const initState = {
  mode: 'light',
};

export interface IThemeContext {
  themeState: IInitState;
  setMode: () => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(initState);

  const setMode = () => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light',
    }));
  };

  const value: IThemeContext = {
    setMode,
    themeState: theme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
