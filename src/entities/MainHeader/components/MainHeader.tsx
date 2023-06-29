import React from "react";
import { HeaderContainer } from "../../../shared/components";
import styled from "styled-components";
import { Container } from "../../../shared/components";
import logo from '../assets/logo.png'

type Props = {
    searchBlock?: React.ReactNode;
}

export const MainHeader = ({ ...props }: Props) => {
    return (
        <HeaderContainer header={<Header>
            <Icon icon={logo} />
            <Navbar>
           
            </Navbar>
            <SecondaryBlock>

            </SecondaryBlock >
        </Header>} />
    )
}

type PropsStyled = {
    icon: string;
}

const Header = styled(Container)`
display:flex;
align-items: center;
`

const Icon = styled.div`
width:170px;
height:70px;
background: url(${({ icon }: PropsStyled) => icon});
background-position: center;
background-repeat: no-repeat;
background-size: 170px;
cursor: pointer;
`

const Navbar = styled.div`
display: flex;
align-items: center;
gap:50px;

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;
text-decoration-line: underline;
`

const SecondaryBlock = styled.div`

`