import React from "react";
import styled from "styled-components";

type Props = {
   header?:React.ReactNode;
   background?:boolean;
}

export const HeaderContainer = ({ ...props }: Props) => {
    return (
        <Container background={props.background}>
           {props.header}
        </Container>
    )
}

const Container = styled.div`
width: 100%;
padding: 10px 0 10px 0;
display:flex;
justify-content: center;

position: fixed;
top: 0;
left: 0;
z-index: 5;

transition: background-color 0.3s ease;

background:${({ background }: Props) => background? 'black': 'rgba(0, 0, 0, 0.567);'};
`