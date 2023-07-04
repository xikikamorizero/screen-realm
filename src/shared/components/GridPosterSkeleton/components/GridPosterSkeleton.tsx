import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CSSProperties } from "react";
import error from "../assets/errorImage.jpg";

export const GridPosterSkeleton = () => {
  return (
    <Container>
      <Image />
      <Creator></Creator>
      <Name></Name>
    </Container>
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
  border-radius: 15px;

  @media (max-width: 900px) {
    height: 20vw;
  }
  @media (max-width: 750px) {
    height: 30vw;
  }
`;

const Creator = styled(Anim)`
  width: 100%;
  height: 20px;
`;

const Name = styled(Anim)`
  width: 100%;
  height: 20px;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
