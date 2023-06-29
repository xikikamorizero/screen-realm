import React from "react";
import styled from "styled-components";

type Props = {
   header?:React.ReactNode;
}

export const HeaderContainer = ({ ...props }: Props) => {
    return (
        <Container>
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
z-index: 1;

background: rgba(0, 0, 0, 0.92);
opacity: 0.8;
`