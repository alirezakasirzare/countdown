import { createGlobalStyle } from "styled-components";
import type IIsDark from "./models/isDark";

const GlobalStyle = createGlobalStyle<IIsDark>`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    transition: 0.3s ease color, 0.3s ease background, 0.3s ease border,;
  }

  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: ${({ isDark }) => (isDark ? "#334155" : "#f1f5f9")};
  }
`;

export default GlobalStyle;
