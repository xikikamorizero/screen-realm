import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const HeaderBanner = () => {
  const [map, setMap] = useState(0);
  const [isAnim, setIsAnim] = useState<boolean>(false);

  useEffect(() => {
    if (map < 5) {
      const timer = setTimeout(() => {
        setMap(map + 1);
      }, 10000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setMap(0);
    }
  }, [map]);

  useEffect(() => {
    if (isAnim) {
      const timer = setTimeout(() => {
        setIsAnim(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isAnim]);

  useEffect(() => {
    setIsAnim(true);
  }, [map]);

  var h =
    "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg";

  switch (map) {
    case 1:
      h =
        "https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg";
      break;
    case 2:
      h =
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg";
      break;
    case 3:
      h =
        "https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg";
      break;
    case 4:
      h =
        "https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg";
      break;
    default:
      h =
        "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg";
      break;
  }

  return (
    <Container>
      <Background background={h} anim={isAnim} />
      <Controls setMap={setMap} map={map} />
    </Container>
  );
};

type ControlProps = {
  setMap: (id: number) => void;
  map: number;
};
export const Controls = ({ setMap, map }: ControlProps) => {
  return (
    <ControlMenu>
      <ButtonControls
        background={map === 0}
        onClick={() => {
          setMap(0);
        }}
      ></ButtonControls>
      <ButtonControls
        background={map === 1}
        onClick={() => {
          setMap(1);
        }}
      ></ButtonControls>
      <ButtonControls
        background={map === 2}
        onClick={() => {
          setMap(2);
        }}
      ></ButtonControls>
      <ButtonControls
        background={map === 3}
        onClick={() => {
          setMap(3);
        }}
      ></ButtonControls>
      <ButtonControls
        background={map === 4}
        onClick={() => {
          setMap(4);
        }}
      ></ButtonControls>
    </ControlMenu>
  );
};

const ControlMenu = styled.div`
  position: absolute;
  right: 4vw;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

type ControlsPorps = {
  background?: boolean;
};

const ButtonControls = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: flex;
  border: 3px solid silver;
  background-color: ${({ background }: ControlsPorps) =>
    background ? "orange" : "black"};
  cursor: pointer;
`;

type HeadersProps = {
  background: string;
  anim: boolean;
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Background = styled.div`
  width: 100%;
  min-height: 70vh;

  background-image: url(${({ background }: HeadersProps) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.8;
  transition: opacity 0.1s;

  animation-name: ${({ anim }: HeadersProps) => (anim ? "animOpacity" : "")};
  animation-duration: 1s;
  animation-iteration-count: 1;

  @keyframes animOpacity {
    to {
      opacity: 0;
    }
    from {
      opacity: 0.8;
    }
  }
`;
