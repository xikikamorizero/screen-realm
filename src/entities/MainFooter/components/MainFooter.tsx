import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../shared/components";
import icon from '../assets/footer.png'

export const MainFooter = () => {
  let navigate = useNavigate()
  return (
    <FooterContainer>
      <Footer>
        <FooterIcons icon={icon} onClick={()=>{navigate('/')}} />
        <a>© 2023, «Screen-realm». Все интересное у нас.</a>
      </Footer>
    </FooterContainer>
  );
};

type PropsStyled = {
  icon?: string;
};

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--borderSecondaty);
  position: relative;
  z-index: 6;
`;

const Footer = styled(Container)`
  color: var(--footerTextColor);
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;

  text-decoration-line: underline;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const FooterIcons = styled.div`
  min-width: 50px;
  min-height: 50px;
  background: url(${({ icon }: PropsStyled) => (icon ? icon : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40px;
  cursor: pointer;

  @media (max-width: 700px) {
    min-height: 30px;
    min-width: 30px;
    background-size: 25px;
  }
`;
