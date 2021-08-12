import React from "react";
import styled from "styled-components";
import ToggleButton from "./toggleButton/ToggleButton";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  background-color: ${(props) => props.theme.secondBackground};
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.text};
  margin: 0;
  @media (max-width: 429px) {
    font-size: 5vw;
  }
`;
const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.5rem 0 1rem;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavBar = ({ themes, theme, setTheme }) => {
  return (
    <React.Fragment>
      <Nav theme={themes[theme]}>
        <LogoWrapper>
          {theme === "light" ? (
            <Logo src="/logo/logo.png" />
          ) : (
            <Logo src="/logo/logoForDark.png" />
          )}
          <Title theme={themes[theme]}>Covid-19 Tracker | global</Title>
        </LogoWrapper>
        <ToggleButton setTheme={setTheme} theme={theme} />
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
