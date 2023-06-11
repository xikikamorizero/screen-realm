import React from "react";
import styled from "styled-components";

type Props = {
    image?: React.ReactNode;
    name?: React.ReactNode;
    creator?: React.ReactNode;
}

export const ImagePoster = ({ ...props }: Props) => {
    return (
        <Container>
            {props.image}
            {props.creator}
            {props.name}
        </Container>
    )
}
const Container = styled.div`
display:flex;
flex-direction:colum;
gap:8px;
`