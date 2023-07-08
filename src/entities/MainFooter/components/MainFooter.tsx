import React from "react";
import styled from "styled-components";
import { Container } from "../../../shared/components";
import icon from '../assets/footer.png'

export const MainFooter = () => {
  return (
    <FooterContainer>
      <Footer>
        <FooterIcons icon={icon} />
        <a>Политика конфиденциальности~Лицензионное соглашение</a>
        <a>© 2022, «Screen-realm». Все права защищены.</a>
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
  z-index: 5;
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
`;
