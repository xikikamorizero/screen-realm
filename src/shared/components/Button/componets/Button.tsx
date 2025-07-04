import React from "react";
import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
  color?: string;
  size?: string;
  background?: string;
  borderSize?: string;
  borderColor?: string;
};

export const Button = styled.div`
  color: ${({ color }: Props) => (color ? color : "white")};
  cursor: pointer;
  background: ${({ background }: Props) => (background ? background : "")};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }: Props) => (size ? size : "12px")};
  border: ${({ borderSize }: Props) => (borderSize ? borderSize : "opx")} solid
    ${({ borderColor }: Props) => (borderColor ? borderColor : "")};

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  :active {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 700px) {
    padding: 10px;
    font-size: 11px;
  }
`;
