type TTheme = "dark" | "light" | "system";

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

export type { TTheme, IThemeContext };
