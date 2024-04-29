import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, MainPosterSkeleton } from "../../../shared/components";
import { MainPoster } from "../../../shared/components";
import { SlaiderContainer } from "../../../shared/components";
import * as types from "../../../shared/api/types";

type Props = {
  text?: string;
  navigate?: string;
  array?: types.Film[];
  loader?: boolean;
};

export const Slaider = ({ ...props }: Props) => {
  let navigate = useNavigate();
  const SkeletonArray = [1, 2, 3, 4, 5];
  //
  // const containerRef = useRef<HTMLDivElement>(null);
  // const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  // const [scrollLeft, setScrollLeft] = useState<number>(0);
  // const [startX, setStartX] = useState<number>(0);

  // useEffect(() => {
  //   const container = containerRef.current;

  //   const handleMouseDown = (e:any) => {
  //     setIsMouseDown(true);
  //     setStartX(e.clientX - (container?.offsetLeft || 0));
  //     setScrollLeft(container?.scrollLeft || 0);
  //   };
    
  //   const handleMouseUp = () => {
  //     setIsMouseDown(false);
  //   };
    
  //   const handleMouseLeave = () => {
  //     setIsMouseDown(false);
  //   };
    
  //   const handleMouseMove = (e:any) => {
  //     if (!isMouseDown || !container) return;
  //     e.preventDefault();
  //     const x = e.clientX - (container.offsetLeft || 0);
  //     const walk = (x - startX) * 1;
  //     container.scrollLeft = scrollLeft - walk;
  //   };
    

  //   if (container) {
  //     container.addEventListener('mousedown', handleMouseDown);
  //     container.addEventListener('mouseup', handleMouseUp);
  //     container.addEventListener('mouseleave', handleMouseLeave);
  //     container.addEventListener('mousemove', handleMouseMove);
  //   }

  //   return () => {
  //     if (container) {
  //       container.removeEventListener('mousedown', handleMouseDown);
  //       container.removeEventListener('mouseup', handleMouseUp);
  //       container.removeEventListener('mouseleave', handleMouseLeave);
  //       container.removeEventListener('mousemove', handleMouseMove);
  //     }
  //   };
  // }, [containerRef, isMouseDown, startX, scrollLeft]);
  //
  return (
    <Container>
      <ContainerTitleButton>
        <Title>{props.text}</Title>
        <Button
          onClick={() => {
            if (props.navigate) {
              navigate(props.navigate);
            }
          }}
          background={"var(--secondary)"}
          width={"131px"}
          color={"black"}
        >
          Смотреть все
        </Button>
      </ContainerTitleButton>
      <SlaiderContainer>
        {props.loader
          ? SkeletonArray.map((i) => <MainPosterSkeleton key={i} />)
          : props.array?.map((a: types.Film, i) => (
              <MainPoster
                id={a.filmId}
                name={a.nameRu? a.nameRu:a.nameEn}
                image={a.posterUrl}
                creator={a.rating}
                key={i}
              />
            ))}
      </SlaiderContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContainerTitleButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;

  color: var(--white);

  @media (max-width: 700px) {
    font-size: 28px;
  }
  
`;
