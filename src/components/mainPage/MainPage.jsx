import React, { createContext, useState } from "react";
import NavBar from "./navBar/NavBar";
import styled from "styled-components";
import Content from "./content/Content";
import Footer from "./footer/Footer";

export const MainPageContext = createContext();
const lightTheme = {
  background: "#95a4a7",
};
const darkTheme = {
  background: "#0f4c5c",
};
const themes = {
  light: lightTheme,
  dark: darkTheme,
};
const MainPage = () => {
  //dark mood coming soon :)
  const [theme, setTheme] = useState("light");
  return (
    <MainPageContext.Provider value={{ themes, theme, setTheme }}>
      <NavBar />
      <Content />
      <Footer />
    </MainPageContext.Provider>
  );
};

export default MainPage;
