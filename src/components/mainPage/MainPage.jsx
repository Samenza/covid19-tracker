import React from "react";
import NavBar from "./navBar/NavBar";
import styled from "styled-components";
import SideNavBar from "./sideNavBar/SideNavBar";
import Content from "./content/Content";

const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ContentContainer>
        <SideNavBar />
        <Content />
      </ContentContainer>
    </React.Fragment>
  );
};

export default MainPage;
