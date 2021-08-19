import React, { useState } from "react";
import NavBar from "./navBar/NavBar";
import Content from "./content/Content";
import Footer from "./footer/Footer";

const lightTheme = {
  background: "#73b0e3",
  text: "#4f5d75",
  secondText: "#ffffff",
  secondBackground: "#fbfbfb",
  chartColorGrid: "#4f5d753d",
};
const darkTheme = {
  background: "#9fd4f8",
  text: "#ffffff",
  secondText: "#000000",
  secondBackground: "#3a3a3a",
  chartColorGrid: "#ffffff54",
};
const themes = {
  light: lightTheme,
  dark: darkTheme,
};
const MainPage = () => {
  //dark mood coming soon :)
  const [theme, setTheme] = useState("light");
  return (
    <React.Fragment>
      <NavBar themes={themes} theme={theme} setTheme={setTheme} />
      <Content theme={themes[theme]} />
      <Footer theme={themes[theme]} />
    </React.Fragment>
  );
};

export default MainPage;
