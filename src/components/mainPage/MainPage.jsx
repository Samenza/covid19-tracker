import React, { useState } from "react";
import NavBar from "./navBar/NavBar";
import styled from "styled-components";
import Content from "./content/Content";
import Footer from "./footer/Footer";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0f4c5c;
`;

const MainPage = () => {
  //dark mood coming soon :)
  const [theme, setTheme] = useState("light");
  return (
    <React.Fragment>
      <NavBar setTheme={setTheme} />
      <ContentContainer>
        <Content />
      </ContentContainer>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
