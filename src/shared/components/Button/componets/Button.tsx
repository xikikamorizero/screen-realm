import React from "react";
import styled from "styled-components";
import error from "../assets/errorImage.jpg"

type Props = {
    width?: string;
    height?: string;
    color?: string
    size?: string;
    background?: string;
    borderSize?: string;
    borderColor?: string;
}

export const Button = styled.div`
width: ${({ width }: Props) => width ? width : '100%'};
height: ${({ height }: Props) => height ? height : '36px'};
color: ${({ color }: Props) => color ? color : 'white'};
background:${({ background }: Props) => background ? background : ''};
border-radius: 50px;
display:flex;
justify-content: center;
align-items: center;
font-style: normal;
font-weight: 700;
font-size: ${({ size }: Props) => size ? size : '12px'};
border: ${({ borderSize }: Props) => borderSize ? borderSize : 'opx'} solid ${({ borderColor }: Props) => borderColor ? borderColor : ''};
`