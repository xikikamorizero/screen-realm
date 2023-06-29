import React from "react";
import styled from "styled-components";
import error from '../assets/errorImage.jpg';

type Props = {
    image?:string;
    width?:string;
}

export const Poster = ({...props}:Props) => {
  return <ImagePoster image={props.image} />;
};

const ImagePoster = styled.div`
  width: ${({ width }: Props) => (width ? width : '438px')};
  height: ${({ width }: Props) => (width ? width : '438px')};
  background: url(${({ image }: Props) => image ? image : error});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;
