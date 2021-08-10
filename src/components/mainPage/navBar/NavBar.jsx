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

const ToggleWrapper = styled.div`
  position: relative;
`;

const ToggleLable = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 45px;
  height: 22px;
  border-radius: 15px;
  background-color: blue;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    margin: 1px 2px;
    transition: 0.2s;
  }
`;
const Toggle = styled.input`
  opacity: 0;
  width: 40px;
  height: 20px;
  border-radius: 15px;
  &:checked + ${ToggleLable} {
    background-color: green;
    &::after {
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: red;
      margin-left: 24px;
      transition: 0.2s;
    }
  }
`;
const NavBar = () => {
  return (
    <React.Fragment>
      <Nav>
        <Logo src="/logo/logo.png" />
        <Title>Covid-19 Tracker | global</Title>
        <ToggleWrapper>
          <Toggle id="ToggleButton" type="checkbox" />
          <ToggleLable htmlFor="ToggleButton" />
        </ToggleWrapper>
      </Nav>
    </React.Fragment>
  );
};

export default NavBar;
