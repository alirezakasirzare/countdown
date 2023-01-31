import { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../contexts/ThemeContext";
import type IIsDark from "../models/isDark";

// props model
interface IProps {
  count: number;
}

interface INav extends IIsDark {
  isOpen: boolean;
}

// styled
const HeaderInner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2563eb;
  color: #fff;
  padding: 0 15px;
  font-size: 14px;
  height: 70px;
`;

const Title = styled.h1`
  color: #fff;
`;

const Button = styled.button<IIsDark>`
  background: ${({ isDark }) => (isDark ? "#334155" : "#f1f5f9")};
  color: ${({ isDark }) => (isDark ? "#fff" : "#334155")};
  border: none;
  padding: 10px 20px;
  border-radius: 2px;
  cursor: pointer;

  &.menu {
    @media (min-width: 549px) {
      display: none;
    }
  }

  &.header-theme-toggle {
    @media (max-width: 548px) {
      display: none;
    }
  }

  &:hover {
    background: ${({ isDark }) => (isDark ? "#475569" : "#f8fafc")};
  }
`;

const Nav = styled.nav<INav>`
  position: fixed;
  left: ${({ isOpen }) => (isOpen ? "0" : "-90%")};
  top: 0;
  background-color: ${({ isDark }) => (isDark ? "#64748b" : "#cbd5e1")};
  color: ${({ isDark }) => (isDark ? "#cbd5e1" : "#64748b")};
  width: 90%;
  height: 100%;
  transition: 0.3s ease color, 0.3s ease background, 0.3s ease left;
`;

const NavHead = styled.div<IIsDark>`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ isDark }) => (isDark ? "#94a3b8" : "#e2e8f0")};
  align-items: center;
  padding: 20px;
`;

const NavBody = styled.div<IIsDark>`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

function Header({ count }: IProps): JSX.Element {
  // theme
  const theme = useContext(ThemeContext);
  const toggleThemeElement = (isHeader: boolean): JSX.Element => (
    <Button
      onClick={theme.toggleTheme}
      isDark={theme.isDark}
      className={isHeader ? "header-theme-toggle" : ""}
    >
      {theme.theme}
    </Button>
  );

  // nav
  const [isOpenNav, setIsOpenNav] = useState(false);
  const openNav = (): void => {
    setIsOpenNav(true);
  };
  const closeNav = (): void => {
    setIsOpenNav(false);
  };

  return (
    <HeaderInner>
      {/* header */}
      <Title>count: {count}s</Title>
      {toggleThemeElement(true)}

      <Button onClick={openNav} isDark={theme.isDark} className="menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </Button>

      {/* nav */}
      <Nav isDark={theme.isDark} isOpen={isOpenNav}>
        <NavHead isDark={theme.isDark}>
          <strong>menu</strong>
          <Button onClick={closeNav} isDark={theme.isDark}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </Button>
        </NavHead>
        <NavBody isDark={theme.isDark}>{toggleThemeElement(false)}</NavBody>
      </Nav>
    </HeaderInner>
  );
}

export default Header;
