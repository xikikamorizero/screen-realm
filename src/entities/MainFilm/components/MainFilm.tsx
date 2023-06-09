import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  FilmDescription,
  Poster,
  Rating,
  TitleFilm,
  SlaiderContainer,
  MainPoster
} from "../../../shared/components";
import error from "../assets/errorImage.jpg";
import * as types from "../../../shared/api/types";

type Props = {
  image?: string;
  name?: string;
  description?: string;
  rating?: number;
  countRating?: number;
  ageRating?: string;
  budget?: string;
  worldwideBoxOffice?: string;
  screenshot?: types.MovieImage[];
  similars?: types.Film[];
};

export const MainFilm = ({ ...props }: Props) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseDown = (e:any) => {
      setIsMouseDown(true);
      setStartX(e.clientX - (container?.offsetLeft || 0));
      setScrollLeft(container?.scrollLeft || 0);
    };
    
    const handleMouseUp = () => {
      setIsMouseDown(false);
    };
    
    const handleMouseLeave = () => {
      setIsMouseDown(false);
    };
    
    const handleMouseMove = (e:any) => {
      if (!isMouseDown || !container) return;
      e.preventDefault();
      const x = e.clientX - (container.offsetLeft || 0);
      const walk = (x - startX) * 1;
      container.scrollLeft = scrollLeft - walk;
    };
    

    if (container) {
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [containerRef, isMouseDown, startX, scrollLeft]);

  return (
    <Container>
      <ContainerHead>
        <Poster image={props.image} height={'33vw'} width={'30vw'} />
        <InfoBlock>
          <TitleFilm name={props.name} ageRating={props.ageRating} />
          <SecondaryInfoBlock>
            {props.budget && props.worldwideBoxOffice ? (
              <Info>
                <Title>бюджет: {props.budget}</Title>
                <Title>мировые сборы: {props.worldwideBoxOffice}</Title>
              </Info>
            ) : (
              <div></div>
            )}
            <Rating rating={props.rating} count={props.countRating} />
          </SecondaryInfoBlock>
          <FilmDescription text={props.description} />
        </InfoBlock>
      </ContainerHead>

      <SlaiderContainer>
        {props.screenshot?.map((a, i) => (
          <Image image={a.imageUrl} key={i}/>
        ))}
      </SlaiderContainer>

      {props.similars?.length !== 0 && props.similars ? (
        <Container>
          <Title style={{ fontSize: "25px" }}>Похожие фильмы</Title>
          <SlaiderContainer>
            {props.similars.map((a, i) => (
              <MainPoster
                id={a.filmId}
                image={a.posterUrl}
                name={a.nameRu}
                key={i}
              />
            ))}
          </SlaiderContainer>
        </Container>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const ContainerHead = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 700px) {
    gap: 10 px;
  }
`;
const InfoBlock = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap:25px;

  @media (max-width: 700px) {
    gap: 5px;
  }
`;
const SecondaryInfoBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  color: var(--creator);
  font-size: 16px;
  font-style: normal;
  font-weight: 200;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

const Image = styled.div`
  min-width: calc(33.3333% - 10px);
  height: 17vw;
  background: url(${({ image }: Props) => (image ? image : error)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
