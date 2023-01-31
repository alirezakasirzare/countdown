import { memo, useCallback, useEffect, useState } from "react";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import Body from "./components/Body";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import type { IThemeContext, TTheme } from "./models/theme";

function App() {
  // theme
  const toggleTheme = (prevTheme: TTheme): TTheme => {
    switch (prevTheme) {
      case "light":
        return "dark";

      case "dark":
        return "system";

      case "system":
        return "light";

      default:
        return "light";
    }
  };

  const [activeTheme, setActiveTheme] = useState<TTheme>("light");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const handleToggleTheme = (): void => {
    setActiveTheme((prevTheme: TTheme) => {
      const newTheme: TTheme = toggleTheme(prevTheme);
      return newTheme;
    });
  };
  const themeValue: IThemeContext = {
    theme: activeTheme,
    toggleTheme: handleToggleTheme,
    isDark: isDarkMode,
  };

  useEffect(() => {
    let rightActiveTheme: TTheme = "light";

    if (activeTheme === "system") {
      const systemIsDarkTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      rightActiveTheme = systemIsDarkTheme ? "dark" : "light";
    } else {
      rightActiveTheme = activeTheme;
    }

    setIsDarkMode(rightActiveTheme === "dark" ? true : false);
    document.body.className = rightActiveTheme;
  }, [activeTheme]);

  // count dowm
  const [count, setCount] = useState<number>(15);
  const handleDecrease = useCallback(() => {
    setCount(prev => prev - 1);
  }, [setCount]);

  return (
    <>
      <GlobalStyles isDark={isDarkMode} />
      <ThemeContextProvider value={themeValue}>
        <Header count={count} />
        <Body onDecrease={handleDecrease} />
      </ThemeContextProvider>
    </>
  );
}

export default memo(App);
