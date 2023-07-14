import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import search from "../assets/search.png";
import exit from "../assets/exit.svg";

type PropsType = {
  click: (a: boolean) => void;
  burger: boolean;
};

export const Burger = ({ ...props }: PropsType) => {
  let navigate = useNavigate();
  return (
    <Container
      open={props.burger}
      onClick={(e) => {
        props.click(false);
      }}
    >
      <BurgerContainer
        open={props.burger}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <HeaderBurger>
          <Icon
            width={"40px"}
            height={"40px"}
            iconSize={"40px"}
            icon={search}
            onClick={() => {
              navigate("/search");
            }}
          />
               <Icon
            width={"40px"}
            height={"40px"}
            iconSize={"40px"}
            icon={exit}
            onClick={() => {
            props.click(false)
            }}
          />
        </HeaderBurger>

        <TitleNavbar
          onClick={() => {
            navigate("/catalog");
          }}
        >
          Каталог
        </TitleNavbar>
        <TitleNavbar
          onClick={() => {
            navigate("/bookmarks");
          }}
        >
          Закладки
        </TitleNavbar>
        <TitleNavbar
          onClick={() => {
            navigate("/aboutUs");
          }}
        >
          О нас
        </TitleNavbar>
      </BurgerContainer>
    </Container>
  );
};

type StyleType = {
  open: boolean;
};

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.85);
  justify-content: end;
  overflow-x: hidden;
  pointer-events: ${({ open }: StyleType) => (open ? "all" : "none")};
  transition: all 0.3s;
  opacity: ${({ open }: StyleType) => (open ? 1 : 0)};
`;
const BurgerContainer = styled.div`
  position: relative;
  width: ${({ open }: StyleType) => (open ? "500px" : "0")};
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main);
  overflow-x: hidden;
  overflow-y: scroll;
  transition: all 0.3s;
  padding-bottom: 90px;
`;
const TitleNavbar = styled.div`
  padding: 16px;
  text-align: center;
  width: 100%;
  color: var(--white);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom: 1px solid silver;

  cursor: pointer;

  :hover {
    color: var(--secondary);
    border-bottom: 1px solid var(--secondary);
  }
`;
type PropsStyled = {
  icon: string;
  width: string;
  height: string;
  iconSize: string;
};
const Icon = styled.div`
  min-width: ${({ width }: PropsStyled) => width};
  min-height: ${({ height }: PropsStyled) => height};
  background: url(${({ icon }: PropsStyled) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ iconSize }: PropsStyled) => iconSize};
  cursor: pointer;
`;
const HeaderBurger = styled.div`
  padding: 30px;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;