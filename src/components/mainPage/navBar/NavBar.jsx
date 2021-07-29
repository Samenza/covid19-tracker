import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  height: 10vh;
  background-color: #f5f6f8;
  box-shadow: 4px -5px 11px 1px #c0c0c0;
`;

const NavBar = () => {
  return (
    <React.Fragment>
      <Nav></Nav>
    </React.Fragment>
  );
};

export default NavBar;
