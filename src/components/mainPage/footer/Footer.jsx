import React from "react";
import styled from "styled-components";
const FooterContainer = styled.footer`
  position: inherit;
  bottom: 0;
  width: 100%;
  height: 5vh;
  color: #747474;
  background-color: #f5f6f8;
  box-shadow: -7px 1px 4px 2px #a7a7a7;
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
const Footer = () => {
  return (
    <FooterContainer>
      <Motto>
        Stay Home , Be <MottoPlus>Safe </MottoPlus> from
        <MottoPlus> Corona</MottoPlus>
      </Motto>
    </FooterContainer>
  );
};

export default Footer;
