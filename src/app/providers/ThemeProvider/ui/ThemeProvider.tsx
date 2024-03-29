import { FC, useState, useMemo, ReactNode } from "react";
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
  Theme,
} from "app/providers/ThemeProvider/lib/ThemeContext";
// преобразование к значению темы в объект Theme потому что нужно приведение типа Theme в ThemeContext
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

  interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
