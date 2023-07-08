import React from "react";
import styled from "styled-components";

type Props = {
    icon?: React.ReactNode;
    text?: React.ReactNode;
}

export const Banner = ({ icon, text }: Props) => {
    return (
        <Container>
            {icon}
            {text}
   
        </Container>
    )
}

const Container = styled.div`
max-width: 400px;
padding: 10px 40px 10px 40px;
border-radius: 25px;
border: 2.5px solid rgba(255, 255, 255, 0.3);
opacity: 0.6;

display: flex;
justify-content: center;
align-items: center;
gap: 59px;
min-height: 173px;

@media (max-width: 700px) {
    min-height: 100px;
  }
`