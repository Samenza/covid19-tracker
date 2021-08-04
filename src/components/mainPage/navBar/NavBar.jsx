import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
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

const NavBar = () => {
  return (
    <React.Fragment>
      <Nav>
        <Logo src="/logo/logo.png" />
        <Title>Covid-19 Tracker | global</Title>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
