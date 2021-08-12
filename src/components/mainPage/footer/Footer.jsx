import React from "react";
import styled from "styled-components";
const FooterContainer = styled.footer`
  position: inherit;
  bottom: 0;
  width: 100%;
  height: 5vh;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.secondBackground};
  text-align: center;
`;
const Motto = styled.h5`
  margin: 0;
  letter-spacing: 2px;
  padding: 8px;
  @media (max-width: 429px) {
    font-size: 4vw;
  }
`;
const MottoPlus = styled.span`
  margin: 0;
  color: #0d4dba;
`;
const Footer = ({ theme }) => {
  return (
    <FooterContainer theme={theme}>
      <Motto>
        Stay Home , Be <MottoPlus>Safe </MottoPlus> from
        <MottoPlus theme={theme}> Corona</MottoPlus>
      </Motto>
    </FooterContainer>
  );
};

export default Footer;
