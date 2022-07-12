import React, { createContext, useEffect, useState } from 'react';

interface IInitState {
  mode: string;
}

const initState = {
  mode: 'light',
};

const initStateD = {
  mode: 'dark',
};
export interface IThemeContext {
  themeState: IInitState;
  setMode: () => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(initStateD);
  useEffect(() => {
    const time = new Date().getHours();
    if ([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].includes(time)) {
      setTheme(initState);
    }
  }, []);
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
