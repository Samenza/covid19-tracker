import React from "react";
import styled from "styled-components";
import ToggleButton from "./toggleButton/ToggleButton";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  background-color: #f5f6f8;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Title = styled.h3`
  color: #4f5d75;
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
`;

const NavBar = () => {
  return (
    <React.Fragment>
      <Nav>
        <LogoWrapper>
          <Logo src="/logo/logo.png" />
          <Title>Covid-19 Tracker | global</Title>
        </LogoWrapper>
        <ToggleButton />
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
