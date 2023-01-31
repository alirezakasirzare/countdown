import React from "react";
import type { IThemeContext } from "../models/theme";

const ThemeContext = React.createContext<IThemeContext>({
  theme: "light",
  isDark: false,
  toggleTheme: Function,
});

const ThemeContextProvider = ThemeContext.Provider;
export { ThemeContextProvider };
export default ThemeContext;
