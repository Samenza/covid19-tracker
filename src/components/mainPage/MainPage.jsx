import React from "react";
import NavBar from "./navBar/NavBar";
import styled from "styled-components";
import Content from "./content/Content";
import Footer from "./footer/Footer";

const MainContainer = styled.div`
  background-color: #f2f2f2;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f4c5c;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <NavBar />
      <ContentContainer>
        <Content />
      </ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default MainPage;
