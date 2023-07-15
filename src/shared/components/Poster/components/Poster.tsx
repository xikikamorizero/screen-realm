import React from "react";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import error from "../assets/errorImage.jpg";

type Props = {
  image?: string;
  width?: string;
  height?: string;
  children?:React.ReactNode;
};

export const Poster = ({ ...props }: Props) => {
  return <ImagePoster image={props.image} width={props.width} height={props.height}>
{props.children}
  </ImagePoster>;
};

const ImagePoster = styled.div`
  position: relative;
  width: ${({ width }: Props) => (width ? width : "438px")};
  height: ${({ height }: Props) => (height ? height : "438px")};
  min-width: 150px;
  min-height: 200px;
  background: url(${({ image }: Props) => (image ? image : error)});
  background-color: silver;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;
