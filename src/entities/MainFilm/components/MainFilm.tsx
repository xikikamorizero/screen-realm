import React from "react";
import styled from "styled-components";
import {
  FilmDescription,
  Poster,
  Rating,
  TitleFilm,
  SlaiderContainer,
  MainPoster,
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
  startYear?: number;
  endYear?: number;
  screenshot?: types.MovieImage[];
  similars?: types.Film[];
};

export const MainFilm = ({ ...props }: Props) => {
  return (
    <Container>
      <ContainerHead>
        <Poster image={props.image} height={'33vw'} width={'30vw'} />
        <InfoBlock>
          <TitleFilm name={props.name} ageRating={props.ageRating} />
          <SecondaryInfoBlock>
            {props.startYear && props.endYear ? (
              <Info>
                <Title>год начала производства: {props.startYear}</Title>
                <Title>год окончания производства: {props.endYear}</Title>
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
          <Image image={a.imageUrl} key={i} />
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
