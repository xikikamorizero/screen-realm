import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CSSProperties } from "react";
import error from "../assets/errorImage.jpg";
import Skeleton from "react-loading-skeleton";

type Props = {
  image?: string;
  creator?: string;
  name?: string;
  style?: CSSProperties;
  id?:number;
};

export const MainPosterSkeleton = ({ ...props }: Props) => {
  return (
    <Block>
      <Container>
        <Image style={props.style} />
        <Creator></Creator>
        <Name></Name>
      </Container>
    </Block>
  );
};

const Anim = styled.div`
  background-color: var(--skeletonF);
  animation-name: skeleton;
  animation-duration: 2s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @keyframes skeleton {
    0% {
      background-color: var(--skeletonF);
    }
    50% {
      background-color: var(--skeletonS);
    }
    100% {
      background-color: var(--skeletonF);
    }
  }
`;

const Image = styled(Anim)`
  width: 100%;
  height: 17vw;
  border-radius: 10px;

  @media (max-width: 700px) {
    height: 25vw;
  }
`;

const Creator = styled(Anim)`
  width: 100%;
height: 20px;
`;

const Name = styled(Anim)`
  width: 100%;
  height: 20px;

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

const Block = styled.div`
  min-width: calc(20% - 10px);

  @media (max-width: 700px) {
    min-width: calc(25% - 10px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;