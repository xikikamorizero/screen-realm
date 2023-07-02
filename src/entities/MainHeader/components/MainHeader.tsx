import React from "react";
import { HeaderContainer } from "../../../shared/components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../../shared/components";
import logo from "../assets/logo.png";
import search from "../assets/search.png";

type Props = {
  searchBlock?: React.ReactNode;
};

export const MainHeader = ({ ...props }: Props) => {
  let navigate = useNavigate();
  return (
    <HeaderContainer
      header={
        <Header>
          <Icon
            width={"170px"}
            height={"70px"}
            iconSize={"170px"}
            onClick={() => {
              navigate("/");
            }}
            icon={logo}
          />
          <Navbar>
            <Icon
              width={"40px"}
              height={"40px"}
              iconSize={"40px"}
              icon={search}
              onClick={()=>{navigate('/search')}}
            />
          </Navbar>
          <SecondaryBlock>

          </SecondaryBlock>
        </Header>
      }
    />
  );
};

type PropsStyled = {
  icon: string;
  width: string;
  height: string;
  iconSize: string;
};

const Header = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Icon = styled.div`
  width: ${({ width }: PropsStyled) => width};
  height: ${({ height }: PropsStyled) => height};
  background: url(${({ icon }: PropsStyled) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ iconSize }: PropsStyled) => iconSize};
  cursor: pointer;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 70%;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: right;
  text-align: center;
  text-decoration-line: underline;
`;

const SecondaryBlock = styled.div``;
